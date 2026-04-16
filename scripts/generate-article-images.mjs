import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// .env.local からAPIキーを読み込む
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/GEMINI_API_KEY=(.+)/);
if (!apiKeyMatch) {
  console.error('GEMINI_API_KEY が .env.local に見つかりません');
  process.exit(1);
}
const API_KEY = apiKeyMatch[1].trim();

const ai = new GoogleGenAI({ apiKey: API_KEY });

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'articles');
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const ARTICLES = [
  {
    filename: 'soccer-aptitude.jpg',
    prompt: 'A group of happy Japanese elementary school children playing soccer on a sunny green field, action shot, warm natural lighting, photorealistic, high quality, vibrant colors, 16:9 aspect ratio',
  },
  {
    filename: 'basketball-aptitude.jpg',
    prompt: 'Japanese children playing basketball in a bright gymnasium, dribbling and jumping, joyful expressions, photorealistic, high quality, warm lighting, 16:9 aspect ratio',
  },
  {
    filename: 'swimming-aptitude.jpg',
    prompt: 'Japanese children swimming in a clean indoor pool, splashing water, goggles, colorful swim caps, photorealistic, high quality, blue water reflections, 16:9 aspect ratio',
  },
  {
    filename: 'gymnastics-aptitude.jpg',
    prompt: 'Japanese children doing gymnastics on colorful mats in a bright gym, cartwheels and handstands, cheerful atmosphere, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'martial-arts-aptitude.jpg',
    prompt: 'Japanese children practicing martial arts karate or judo in a traditional dojo, white uniforms, focused expressions, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'speed-running.jpg',
    prompt: 'Japanese children running fast on an athletic track, competitive race, determined faces, action blur effect, photorealistic, high quality, outdoor setting, 16:9 aspect ratio',
  },
  {
    filename: 'golden-age.jpg',
    prompt: 'Japanese children aged 8-12 playing various sports outdoors, golden hour lighting, active and energetic, diverse sports activities, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'fitness-test-guide.jpg',
    prompt: 'Japanese elementary school children doing physical fitness tests in a gym, measuring jump distance and grip strength, teacher observing, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'motor-development.jpg',
    prompt: 'Japanese toddlers and young children doing fun physical activities, crawling, climbing, jumping, bright colorful indoor play area, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'sport-selection.jpg',
    prompt: 'Japanese parent and child looking at various sports equipment together, soccer ball basketball swimming goggles, warm family moment, photorealistic, high quality, 16:9 aspect ratio',
  },
];

async function generateImage(article) {
  console.log(`生成中: ${article.filename}`);

  const result = await ai.models.generateImages({
    model: 'imagen-4.0-fast-generate-001',
    prompt: article.prompt,
    number_of_images: 1,
    aspect_ratio: '16:9',
    safety_filter_level: 'block_few',
    person_generation: 'allow_adult',
  });

  if (!result.generatedImages || result.generatedImages.length === 0) {
    throw new Error(`画像生成失敗: ${article.filename}`);
  }

  const imageData = result.generatedImages[0].image.imageBytes;
  const buffer = Buffer.from(imageData, 'base64');
  const outputPath = path.join(OUTPUT_DIR, article.filename);
  fs.writeFileSync(outputPath, buffer);

  console.log(`保存完了: ${outputPath}`);
}

async function main() {
  console.log(`出力先: ${OUTPUT_DIR}`);
  console.log(`生成枚数: ${ARTICLES.length}枚\n`);

  for (const article of ARTICLES) {
    try {
      await generateImage(article);
      // APIレート制限対策で少し待機
      await new Promise((r) => setTimeout(r, 2000));
    } catch (err) {
      console.error(`エラー [${article.filename}]:`, err.message);
    }
  }

  console.log('\n全画像生成完了');
}

main();
