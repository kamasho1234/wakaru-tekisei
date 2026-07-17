/**
 * app/articles/<slug>/page.tsx から記事一覧を抽出して lib/articles.ts を生成する
 *
 * 記事データが page.tsx / sitemap.ts / articles/page.tsx に散らばると
 * 追加漏れ（＝孤立記事やサイトマップ抜け）が起きるため、生成物に一本化する。
 *
 * 記事を追加・改題したら実行する:
 *   node scripts/build-articles-index.mjs
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const articlesDir = path.join(root, 'app', 'articles');
const outFile = path.join(root, 'lib', 'articles.ts');

/** slug から記事カテゴリを判定する */
function categoryOf(slug) {
  if (slug.endsWith('-childhood')) return 'athlete';
  if (slug.endsWith('-aptitude')) return 'aptitude';
  if (/^age-\d+-sports$/.test(slug)) return 'age';
  return 'guide';
}

function extract(src) {
  const meta = src.match(/export const metadata[\s\S]*?\n\};/)?.[0] ?? '';
  const title = meta.match(/title:\s*'([^']+)'/)?.[1] ?? meta.match(/title:\s*"([^"]+)"/)?.[1];
  const description =
    meta.match(/description:\s*\n?\s*'([^']+)'/)?.[1] ?? meta.match(/description:\s*\n?\s*"([^"]+)"/)?.[1];
  const tagsRaw = src.match(/tags=\{\[([^\]]+)\]\}/)?.[1];
  const tags = tagsRaw
    ? tagsRaw
        .split(',')
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean)
    : [];
  return { title, description, tags };
}

const entries = [];
const problems = [];

for (const slug of (await readdir(articlesDir, { withFileTypes: true }))
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort()) {
  const file = path.join(articlesDir, slug, 'page.tsx');
  if (!existsSync(file)) continue;

  const { title, description, tags } = extract(await readFile(file, 'utf8'));
  if (!title) problems.push(`${slug}: metadata.title を抽出できない`);
  if (!tags.length) problems.push(`${slug}: tags を抽出できない`);
  if (!existsSync(path.join(root, 'public', 'images', 'articles', `${slug}.jpg`))) {
    problems.push(`${slug}: ヒーロー画像 public/images/articles/${slug}.jpg が無い`);
  }

  entries.push({ slug, title: title ?? slug, description: description ?? '', tags, category: categoryOf(slug) });
}

const body = `// このファイルは scripts/build-articles-index.mjs が生成します。直接編集しないでください。
// 記事を追加・改題したら: node scripts/build-articles-index.mjs

export type ArticleCategory = 'athlete' | 'aptitude' | 'age' | 'guide';

export interface Article {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: ArticleCategory;
}

export const categoryLabels: Record<ArticleCategory, string> = {
  athlete: 'あの選手の子供時代',
  aptitude: 'スポーツ種目別の適性',
  age: '年齢別に向いているスポーツ',
  guide: '子育て・体力データのお役立ち記事',
};

export const categoryOrder: ArticleCategory[] = ['guide', 'aptitude', 'age', 'athlete'];

export const articles: Article[] = ${JSON.stringify(entries, null, 2)};

export const articleImage = (slug: string) => \`/images/articles/\${slug}.jpg\`;

export const articlesByCategory = (category: ArticleCategory) => articles.filter((a) => a.category === category);
`;

await writeFile(outFile, body, 'utf8');

console.log(`記事 ${entries.length} 件を lib/articles.ts に書き出しました`);
for (const [cat, label] of Object.entries({
  guide: 'お役立ち',
  aptitude: '種目別適性',
  age: '年齢別',
  athlete: '選手の子供時代',
})) {
  console.log(`  ${label}: ${entries.filter((e) => e.category === cat).length}件`);
}
if (problems.length) {
  console.log(`\n要確認 ${problems.length}件:`);
  for (const p of problems) console.log(`  - ${p}`);
}
