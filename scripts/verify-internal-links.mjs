/**
 * 記事の内部リンクが実在するページを指しているか検証する。
 * 過去に、存在しないURLへのリンクを大量に埋めてしまった事故があったため。
 *
 * 使い方:
 *   node scripts/verify-internal-links.mjs            全記事を検証
 *   node scripts/verify-internal-links.mjs slug1 slug2 指定した記事だけ検証
 */
import { readdirSync, readFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const articlesDir = path.join(root, 'app', 'articles');

const slugs = readdirSync(articlesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

const ages = [6, 7, 8, 9, 10, 11, 12];
const genders = ['male', 'female'];
const heikinPaths = new Set(ages.flatMap((a) => genders.map((g) => `/heikin/${a}sai-${g}`)));

/** app/ 直下の静的ルート（app/<name>/page.tsx が存在するもの） */
function routeExists(url) {
  if (url === '/') return true;
  if (url.startsWith('/articles/')) return slugs.includes(url.slice('/articles/'.length));
  if (url.startsWith('/heikin/')) return heikinPaths.has(url);
  const segments = url.split('/').filter(Boolean);
  return existsSync(path.join(root, 'app', ...segments, 'page.tsx'));
}

const targets = process.argv.slice(2).length ? process.argv.slice(2) : slugs;
const problems = [];
let linkCount = 0;

for (const slug of targets) {
  const file = path.join(articlesDir, slug, 'page.tsx');
  if (!existsSync(file)) {
    problems.push(`${slug}: page.tsx が無い`);
    continue;
  }
  const src = readFileSync(file, 'utf8');
  const hrefs = [...src.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]);
  const broken = [...new Set(hrefs)].filter((h) => !routeExists(h));
  linkCount += hrefs.length;
  if (broken.length) problems.push(`${slug}: リンク先が存在しない → ${broken.join(', ')}`);
  if (hrefs.some((h) => h === `/articles/${slug}`)) problems.push(`${slug}: 自分自身へリンクしている`);
}

console.log(`検証: ${targets.length}本 / 内部リンク ${linkCount}件`);
if (problems.length) {
  console.log(`\n■ 要修正 ${problems.length}件`);
  for (const p of problems) console.log(`  - ${p}`);
  process.exit(1);
}
console.log('内部リンクはすべて実在するページを指しています');
