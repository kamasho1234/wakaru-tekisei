/**
 * PDFからテキストを機械的に抽出する（記事執筆時の一次ソース確認用）
 *
 * AIに画像として読ませると誤読がそのまま記事の誤情報になるため、
 * pdfjs-dist でテキストレイヤーを直接取り出す。
 *
 * 使い方:
 *   node scripts/extract-pdf.mjs <PDFのURLまたはローカルパス> <出力先.txt> [開始ページ] [終了ページ]
 */

import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// pdfjs は file:// URL かつ末尾スラッシュ必須（Windowsのバックスラッシュのままでは動かない）
const dirUrl = (p) => pathToFileURL(path.join(__dirname, p)).href.replace(/\/?$/, '/');
const CMAP_URL = dirUrl('../node_modules/pdfjs-dist/cmaps');
const STANDARD_FONT_DATA_URL = dirUrl('../node_modules/pdfjs-dist/standard_fonts');

// 同じ行とみなすY座標の許容差（pt）
const LINE_TOLERANCE = 3;

async function loadData(src) {
  if (/^https?:\/\//.test(src)) {
    const res = await fetch(src);
    if (!res.ok) throw new Error(`ダウンロード失敗 HTTP ${res.status}: ${src}`);
    return new Uint8Array(await res.arrayBuffer());
  }
  return new Uint8Array(await readFile(src));
}

/** テキスト片をY座標でグループ化して行を復元する（表の桁を保つため） */
function itemsToLines(items) {
  const rows = [];
  for (const item of items) {
    if (!item.str || !item.str.trim()) continue;
    const x = item.transform[4];
    const y = item.transform[5];
    const row = rows.find((r) => Math.abs(r.y - y) < LINE_TOLERANCE);
    if (row) {
      row.cells.push({ x, str: item.str });
    } else {
      rows.push({ y, cells: [{ x, str: item.str }] });
    }
  }
  return rows
    .sort((a, b) => b.y - a.y) // PDFのY軸は下が原点なので降順＝上から下
    .map((r) =>
      r.cells
        .sort((a, b) => a.x - b.x)
        .map((c) => c.str)
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim()
    );
}

async function main() {
  const [src, out, fromArg, toArg] = process.argv.slice(2);
  if (!src || !out) {
    console.error('使い方: node scripts/extract-pdf.mjs <PDF URL|パス> <出力先.txt> [開始ページ] [終了ページ]');
    process.exit(1);
  }

  console.log(`読み込み中: ${src}`);
  const data = await loadData(src);
  const doc = await getDocument({
    data,
    cMapUrl: CMAP_URL,
    cMapPacked: true,
    standardFontDataUrl: STANDARD_FONT_DATA_URL,
  }).promise;

  const from = fromArg ? Number(fromArg) : 1;
  const to = toArg ? Math.min(Number(toArg), doc.numPages) : doc.numPages;
  console.log(`全${doc.numPages}ページ中 ${from}〜${to} を抽出`);

  const chunks = [`出典: ${src}`, `抽出日時: ${new Date().toISOString()}`, `全${doc.numPages}ページ`, ''];

  for (let i = from; i <= to; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const lines = itemsToLines(content.items);
    chunks.push(`\n=============== Page ${i} ===============`);
    chunks.push(lines.join('\n'));
    process.stdout.write(`\rページ ${i}/${to} 完了`);
  }
  console.log('');

  await writeFile(out, chunks.join('\n'), 'utf8');
  console.log(`保存: ${out}`);
}

main().catch((err) => {
  console.error('エラー:', err.message);
  process.exit(1);
});
