/**
 * 画像スキャンPDF（テキストレイヤーが無い官公庁PDF）を Gemini でOCRしてテキスト化する。
 * extract-pdf.mjs でテキストが取れなかった場合の代替。
 *
 * 使い方: node scripts/ocr-pdf.mjs <PDFのURL|ローカルパス> <出力.txt>
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const apiKey = fs
  .readFileSync(path.join(__dirname, '..', '.env.local'), 'utf-8')
  .match(/GEMINI_API_KEY=(.+)/)?.[1]
  ?.trim();
if (!apiKey) {
  console.error('GEMINI_API_KEY が .env.local に見つかりません');
  process.exit(1);
}

const [source, output] = process.argv.slice(2);
if (!source || !output) {
  console.error('使い方: node scripts/ocr-pdf.mjs <PDFのURL|パス> <出力.txt>');
  process.exit(1);
}

const buffer = source.startsWith('http')
  ? Buffer.from(await (await fetch(source)).arrayBuffer())
  : fs.readFileSync(source);
console.log(`PDF取得: ${(buffer.length / 1024).toFixed(0)}KB`);

const ai = new GoogleGenAI({ apiKey });
const result = await ai.models.generateContent({
  model: 'gemini-3.1-pro-preview',
  contents: [
    {
      role: 'user',
      parts: [
        { inlineData: { mimeType: 'application/pdf', data: buffer.toString('base64') } },
        {
          text: [
            'このPDFに書かれている文字を、原文のまま、省略せずにすべて書き起こしてください。',
            '- 要約・言い換え・補足は一切しないこと。書かれていない文字を足さないこと。',
            '- 図中の文字、表の中の数値も含めてすべて書き起こすこと。',
            '- 表は Markdown の表として再現すること。',
            '- ページの区切りは「=============== Page N ===============」と書くこと。',
            '- 判読できない箇所は［判読不能］と書くこと。推測で埋めないこと。',
          ].join('\n'),
        },
      ],
    },
  ],
});

const text = result.text ?? '';
fs.writeFileSync(
  output,
  `出典: ${source}\n抽出方法: Gemini (gemini-3.1-pro-preview) によるOCR書き起こし\n抽出日時: ${new Date().toISOString()}\n\n${text}`,
  'utf-8'
);
console.log(`保存: ${output}（${text.length}文字）`);
