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
  {
    filename: 'child-slow-runner.jpg',
    prompt: 'A Japanese elementary school child practicing running on a track while a caring parent watches supportively from the sideline, warm afternoon light, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'child-not-interested.jpg',
    prompt: 'A Japanese child sitting alone reading a book while other children play sports in the background, calm indoor setting, soft natural lighting, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'child-quit-sports.jpg',
    prompt: 'A Japanese parent and child having a warm, serious conversation at a kitchen table, the child looks thoughtful, caring atmosphere, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'child-clumsy.jpg',
    prompt: 'A Japanese child slowly and carefully practicing catching a ball with a patient and encouraging parent nearby, gentle outdoor park setting, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'late-bloomer-sports.jpg',
    prompt: 'Japanese children of various ages and skill levels playing sports together, some beginners some advanced, inclusive and joyful atmosphere, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'sport-start-timing.jpg',
    prompt: 'A Japanese family exploring different sports equipment together at a sports store, parent and young child looking excited, warm lighting, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'multiple-sports-ok.jpg',
    prompt: 'A Japanese child holding a soccer ball and wearing swim goggles on their head, smiling happily, colorful sports equipment around, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'elite-vs-enjoy.jpg',
    prompt: 'Japanese children laughing and playing sports casually in a park, mixed skill levels, joyful and relaxed atmosphere, golden hour lighting, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'sport-vs-study.jpg',
    prompt: 'A Japanese elementary school child doing homework at a desk with sports shoes nearby, suggesting balance between study and sports, bright room, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'overtraining-kids.jpg',
    prompt: 'A tired Japanese child sitting on the sideline during sports practice, looking exhausted, a concerned parent kneeling next to them offering water, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'height-and-sports.jpg',
    prompt: 'A Japanese parent measuring their child\'s height against a wall chart, both smiling, bright cheerful home interior, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'injury-prevention-kids.jpg',
    prompt: 'Japanese children doing warm-up stretching exercises before sports practice in a gym, guided by a coach, focused and energetic, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'growth-plate-injury.jpg',
    prompt: 'A Japanese child holding their knee with a concerned expression, a parent and doctor examining it gently in a bright medical office, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'weight-and-sports.jpg',
    prompt: 'Japanese children of various body sizes playing different sports side by side, one playing basketball one doing gymnastics one swimming, diverse and inclusive, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'girls-sports-puberty.jpg',
    prompt: 'Japanese girls around 11-13 years old enjoying sports together, playing volleyball or basketball, confident and energetic, bright gymnasium, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'parent-pressure-sports.jpg',
    prompt: 'A Japanese parent watching their child\'s soccer game from the sideline, the parent looks calm and supportive rather than anxious, bright outdoor sports field, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'how-to-cheer-kids.jpg',
    prompt: 'Japanese parents cheerfully and calmly watching their children\'s sports match from the stands, clapping and smiling, warm community atmosphere, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'coach-trouble.jpg',
    prompt: 'A Japanese sports coach having a positive, calm discussion with a young athlete and parent, bright gym environment, professional and friendly atmosphere, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'team-bullying-sports.jpg',
    prompt: 'Japanese children sports team encouraging each other, putting hands together in a team huddle, smiling and united, outdoor sports field, photorealistic, high quality, 16:9 aspect ratio',
  },
  {
    filename: 'parent-not-sporty.jpg',
    prompt: 'A Japanese parent who seems unfamiliar with sports playing catch with their young child in a park, both laughing and enjoying the moment, warm afternoon light, photorealistic, high quality, 16:9 aspect ratio',
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
        // Rate limit error - need to wait longer
        if (attempt < retries) {
          const waitTime = 25000 * attempt; // 25s, 50s, 75s
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
      // APIレート制限対策で待機（10画像/分なので6秒以上が必要）
      await new Promise((r) => setTimeout(r, 6500));
    } catch (err) {
      console.error(`エラー [${article.filename}]:`, err.message);
    }
  }

  console.log('\n全画像生成完了');
}

main();
