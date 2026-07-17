import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    filename: 'kitajima-kosuke-childhood.jpg',
    prompt: 'A young Japanese chubby boy around 6 years old learning breaststroke in a bright indoor swimming pool, swimming instructor guiding him, colorful goggles, excited expression, blue water reflections, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'fukuhara-ai-childhood.jpg',
    prompt: 'A young Japanese girl around 3-5 years old playing table tennis with a small paddle, mother coaching from across the table with a smile, bright indoor training room, focused and adorable expression, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'miyazato-ai-childhood.jpg',
    prompt: 'A young Japanese girl around 4-6 years old swinging a small golf club on a sunny golf course in Okinawa, father and two older brothers watching encouragingly, tropical greenery in background, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'nakamura-shunsuke-childhood.jpg',
    prompt: 'A small Japanese elementary school boy practicing soccer free kicks alone against a wall in an urban park, determined expression, worn soccer ball, afternoon sunlight, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'ishikawa-kasumi-childhood.jpg',
    prompt: 'A young Japanese girl around 5-7 years old practicing table tennis with her father in a home training room, father is a coach demonstrating technique, warm indoor lighting, focused expressions, photorealistic, high quality, 16:9 aspect ratio',
  },
];

async function generateImage(article, retries = 3) {
  console.log(`生成中: ${article.filename}`);

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
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
      return;
    } catch (err) {
      const errorMsg = err.message || JSON.stringify(err);
      if (errorMsg.includes('429') || errorMsg.includes('quota') || errorMsg.includes('RESOURCE_EXHAUSTED')) {
        if (attempt < retries) {
          const waitTime = 25000 * attempt;
          console.log(`レート制限エラー [${article.filename}] - ${waitTime}ms待機してリトライ (${attempt}/${retries})`);
          await new Promise((r) => setTimeout(r, waitTime));
          continue;
        }
      }
      throw err;
    }
  }
}

async function main() {
  console.log(`出力先: ${OUTPUT_DIR}`);
  console.log(`生成枚数: ${ARTICLES.length}枚\n`);

  for (const article of ARTICLES) {
    try {
      await generateImage(article);
      await new Promise((r) => setTimeout(r, 6500));
    } catch (err) {
      console.error(`エラー [${article.filename}]:`, err.message);
    }
  }

  console.log('\n全画像生成完了');
}

main();
