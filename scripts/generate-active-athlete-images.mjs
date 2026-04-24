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
    filename: 'abe-hifumi-childhood.jpg',
    prompt: 'Two young Japanese siblings, a boy and a girl around 3-5 years old, practicing judo together on tatami mats in a traditional dojo, wearing white judogi uniforms, determined expressions, warm indoor lighting, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'abe-uta-childhood.jpg',
    prompt: 'A young Japanese girl around 3-5 years old practicing judo on tatami mats, wearing a white judogi, cheerful and energetic expression, traditional dojo setting, warm lighting, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'hashimoto-daiki-childhood.jpg',
    prompt: 'A young Japanese boy around 5-7 years old practicing gymnastics on colorful floor mats, doing a handstand or cartwheel, bright indoor gym, coach encouraging nearby, joyful expression, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'harimoto-tomokazu-childhood.jpg',
    prompt: 'A young Japanese-Chinese boy around 2-4 years old holding a table tennis paddle almost as big as himself, parents coaching him from either side of a small table, determined face, bright training room, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'hayata-hina-childhood.jpg',
    prompt: 'A young Japanese girl around 3-5 years old playing table tennis with her mother, both smiling and enjoying the game, bright indoor sports room in Fukuoka, warm afternoon light, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'sakamoto-kaori-childhood.jpg',
    prompt: 'A young Japanese girl around 5-7 years old learning figure skating on an indoor ice rink in Kobe, graceful posture, skating dress, bright arena lighting with soft reflections on ice, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'hachimura-rui-childhood.jpg',
    prompt: 'A tall Japanese-African mixed-race boy around 12-13 years old playing basketball in a school gymnasium in Toyama, dribbling with determination, slightly taller than peers, indoor gym lighting, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'takahashi-ran-childhood.jpg',
    prompt: 'A young Japanese boy around 8-10 years old watching his older brother play volleyball in a bright gymnasium in Kyoto, eyes full of admiration, wanting to join, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'nakayama-funa-childhood.jpg',
    prompt: 'A young Japanese girl around 6-8 years old skateboarding at an outdoor skate park, older brother nearby encouraging her, sunny Aichi day, colorful helmet and knee pads, joyful expression, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'seto-daiya-childhood.jpg',
    prompt: 'A young Japanese boy around 4-6 years old swimming in a bright indoor pool in Saitama, wearing goggles and a swim cap, splashing happily, coach watching from poolside, blue water reflections, photorealistic, high quality, 16:9 aspect ratio',
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
