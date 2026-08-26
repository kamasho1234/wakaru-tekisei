/**
 * 記事に書かれた統計値が、リサーチ資料（docs/research/*.md）に実在するか機械照合する
 *
 * 執筆エージェントの「原典から取った」という自己申告は信用しない。
 * 記事中の小数付き数値・パーセントを総ざらいし、research に無い数値を捏造候補として報告する。
 *
 *   node scripts/verify-article-numbers.mjs                  # 新規記事をまとめて検証
 *   node scripts/verify-article-numbers.mjs <slug> [<slug>]  # 指定記事のみ
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const researchDir = path.join(root, 'docs', 'research');
const articlesDir = path.join(root, 'app', 'articles');

// 今回追加した記事（照合対象）※2026-08-26の20本
const NEW_SLUGS = [
  'shuttle-run-kids',
  'standing-long-jump-kids',
  'side-step-kids',
  'sit-up-kids',
  'grip-strength-kids',
  'sit-and-reach-kids',
  'jikyuso-kids',
  'track-and-field-aptitude',
  'dance-aptitude',
  'kendo-aptitude',
  'skateboard-aptitude',
  'figure-skating-aptitude',
  'rugby-aptitude',
  'climbing-aptitude',
  'rhythmic-gymnastics-aptitude',
  'sports-insurance-kids',
  'youji-undo-shishin',
  'school-swimming-lesson',
  'sports-shonendan',
  'undoki-kenshin',
];

// 統計値ではなく記事の体裁上出てくる数値（照合から除外）
const IGNORE = new Set([
  '1200', '630', // OGP画像サイズ
  '16', '9', // アスペクト比
  '2026', '2025', // 年
  '4', '5', '6', '2', '3', '1', '0', '7', '8', // 学年・箇条書き番号など
  '80', '10', // 満点・換算
  '20', // 20mシャトルラン
  '50', // 50m走
  '100',
]);

/** research 資料の全文（ここに無い数値は根拠なしとみなす） */
const researchText = readdirSync(researchDir)
  .filter((f) => f.endsWith('.md'))
  .map((f) => readFileSync(path.join(researchDir, f), 'utf8'))
  .join('\n');

/** 記事本文から統計値らしき数値を抽出する */
function extractNumbers(src) {
  // Tailwind のクラス名・画像パス・URLに含まれる数字は統計値ではないので先に落とす
  const text = src
    .replace(/className=(?:"[^"]*"|\{`[^`]*`\})/g, '')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/\/images\/\S+/g, '')
    .replace(/width:\s*\d+|height:\s*\d+/g, '');

  const decimals = text.match(/\d+\.\d+/g) ?? []; // 53.03, 522.93 など
  const percents = text.match(/\d+(?:\.\d+)?%/g) ?? []; // 42.5%, 11.6% など
  const units = text.match(/\d+(?:\.\d+)?\s?(?:m|kg|cm|回|秒|点|分)\b/g) ?? [];
  return [...new Set([...decimals, ...percents, ...units])];
}

const targets = process.argv.slice(2).length ? process.argv.slice(2) : NEW_SLUGS;

let totalSuspect = 0;
let checked = 0;

for (const slug of targets) {
  const file = path.join(articlesDir, slug, 'page.tsx');
  if (!existsSync(file)) {
    console.log(`[未作成] ${slug}`);
    continue;
  }
  checked++;
  const src = readFileSync(file, 'utf8');
  const numbers = extractNumbers(src);

  const suspect = numbers.filter((n) => {
    const bare = n.replace(/[%\s]|m$|kg$|cm$|回$|秒$|点$|分$/g, '');
    if (IGNORE.has(bare)) return false;
    // research に数値そのものが載っていれば根拠あり
    return !researchText.includes(bare);
  });

  if (suspect.length) {
    totalSuspect += suspect.length;
    console.log(`\n■ ${slug} — research に見当たらない数値 ${suspect.length}件`);
    for (const s of suspect) console.log(`    ? ${s}`);
  } else {
    console.log(`OK ${slug}（数値 ${numbers.length}件すべて research に存在）`);
  }
}

console.log(`\n────────────────────────`);
console.log(`検証: ${checked}本 / 要確認の数値: ${totalSuspect}件`);
if (totalSuspect > 0) {
  console.log('要確認の数値は、research に根拠が無いか、表記ゆれです。1件ずつ原典と突き合わせてください。');
  process.exitCode = 1;
}
