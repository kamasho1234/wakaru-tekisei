/**
 * ヒーロー画像が無い記事の分だけ画像を生成する
 *
 * generate-article-images.mjs は全件を無条件に生成し直すため、
 * 追加分だけ回したいときはこちらを使う。既に画像があるものはスキップするので
 * 途中で失敗しても再実行して差分だけ埋められる。
 *
 *   node scripts/generate-missing-images.mjs          # 欠損分を生成
 *   node scripts/generate-missing-images.mjs --dry    # 生成対象の確認のみ
 */

import { GoogleGenAI } from '@google/genai';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const envPath = path.join(__dirname, '..', '.env.local');
const apiKeyMatch = fs.readFileSync(envPath, 'utf-8').match(/GEMINI_API_KEY=(.+)/);
if (!apiKeyMatch) {
  console.error('GEMINI_API_KEY が .env.local に見つかりません');
  process.exit(1);
}
const ai = new GoogleGenAI({ apiKey: apiKeyMatch[1].trim() });

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'articles');
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const BASE = 'photorealistic, high quality, natural lighting, 16:9 aspect ratio, no text, no letters';

/** slug → 画像プロンプト */
const PROMPTS = {
  // --- 既存記事で画像が欠けていた分（本番で404になっていた） ---
  'tennis-aptitude': `Japanese elementary school children playing tennis on an outdoor court, swinging rackets, sunny day, joyful expressions, ${BASE}`,
  'badminton-aptitude': `Japanese elementary school children playing badminton in a bright gymnasium, jumping to hit a shuttlecock, cheerful, ${BASE}`,
  'baseball-aptitude': `Japanese elementary school children playing baseball on a dirt field, batting and catching, sunny day, ${BASE}`,
  'judo-aptitude': `Japanese elementary school children practicing judo in white judogi on tatami mats in a dojo, bowing respectfully, ${BASE}`,
  'table-tennis-aptitude': `Japanese elementary school children playing table tennis indoors, focused expressions, paddles and ball, ${BASE}`,
  'volleyball-aptitude': `Japanese elementary school children playing volleyball in a gymnasium, receiving and setting the ball, ${BASE}`,
  'kids-nutrition-sports': `A healthy Japanese family meal on a table with rice, fish, vegetables and milk, bright kitchen, warm morning light, ${BASE}`,
  'kids-sleep-sports': `A Japanese child sleeping peacefully in bed at night, calm blue moonlight through the window, cozy bedroom, ${BASE}`,
  'kids-core-training': `A Japanese child doing a plank exercise on a yoga mat in a bright living room, parent encouraging nearby, ${BASE}`,
  'kids-posture-sports': `A Japanese child standing with good upright posture in a bright room, side view, simple background, ${BASE}`,
  'heat-stroke-sports-kids': `Japanese children drinking water from bottles during a break at a sunny sports field, wearing caps, hydration, ${BASE}`,
  'indoor-rainy-day-sports': `Japanese children playing actively indoors in a living room on a rainy day, jumping and stretching, rain on the window, ${BASE}`,
  'introverted-kids-sports': `A quiet Japanese child practicing alone at an individual sport in a calm gym, thoughtful and focused, ${BASE}`,
  'left-handed-sports': `A left-handed Japanese child throwing a ball with the left hand on a sports field, sunny day, ${BASE}`,
  'sports-club-choosing': `Japanese parents and their child watching a youth sports practice from the sideline, considering, warm afternoon light, ${BASE}`,
  'sports-cost-comparison': `A Japanese parent at a desk with a calculator, notebook and sports gear nearby, planning household budget, bright room, ${BASE}`,

  // --- 新規記事20本 ---
  'tairyoku-chosa-r7': `Japanese elementary school children taking a physical fitness test in a schoolyard, measuring a standing long jump, teacher with a clipboard, sunny day, ${BASE}`,
  'onnanoko-undo-banare': `A Japanese elementary school girl running happily on a sports field, ponytail, bright sunny day, energetic, ${BASE}`,
  'undo-jikan-nikyokka': `Japanese children playing energetically outside in a park after school, running and playing tag, late afternoon golden light, ${BASE}`,
  'screen-time-tairyoku': `A Japanese child sitting on a sofa looking at a tablet screen in a living room, evening light, calm domestic scene, ${BASE}`,
  'asagohan-tairyoku': `A Japanese child eating breakfast at a table before school, rice, miso soup and grilled fish, bright morning light, ${BASE}`,
  'tairyoku-todofuken-ranking': `A wide view of a Japanese schoolyard with children exercising, rural mountains in the background, clear sky, ${BASE}`,
  'undo-suki-kirai-data': `Two Japanese children in a school gymnasium, one enjoying exercise and one sitting hesitantly on the side, honest everyday scene, ${BASE}`,
  'tairyoku-teika-suii': `A Japanese schoolyard with children doing a softball throw during a fitness test, wide open field, ${BASE}`,
  'chugakusei-tairyoku': `Japanese junior high school students in gym clothes doing a shuttle run in a gymnasium, focused effort, ${BASE}`,
  'benchwarmer-kids': `A Japanese child in a sports uniform sitting on the bench watching a game from the sideline, thoughtful expression, ${BASE}`,
  'junior-high-club': `Japanese junior high school students practicing club activities after school in a gymnasium, ${BASE}`,
  'parent-duty-sports': `Japanese parents helping at a youth sports event, preparing drinks and equipment on the sideline, sunny day, ${BASE}`,
  'developmental-disorder-sports': `A Japanese child practicing balance on a low beam with a supportive coach nearby, encouraging atmosphere, bright gym, ${BASE}`,
  'asthma-kids-sports': `A Japanese child resting and breathing calmly on a bench beside a sports field, parent nearby, gentle warm light, ${BASE}`,
  'kids-nervous-games': `A Japanese child taking a deep breath before a competition, standing at the edge of a gymnasium, nervous but determined, ${BASE}`,
  'kids-cry-losing': `A Japanese parent gently comforting a disappointed child after a sports match, warm supportive moment, sideline of a field, ${BASE}`,
  'working-parents-sports': `A Japanese parent in work clothes picking up a child with a sports bag in the evening, city street, warm streetlight, ${BASE}`,
  'game-vs-sports': `A Japanese child with a game controller indoors while a soccer ball sits nearby on the floor, everyday living room, ${BASE}`,
  'sakaagari-kids': `A Japanese elementary school child practicing a pull-over on a horizontal bar in a schoolyard, determined effort, sunny day, ${BASE}`,
  'ball-throwing-kids': `A Japanese elementary school child throwing a softball on a schoolyard field, throwing motion, blue sky, ${BASE}`,

  // --- 2026年8月追加 20本 ---
  // A. 新体力テスト 種目別
  'shuttle-run-kids': `Japanese elementary school children running a 20m shuttle run in a gymnasium, turning at the line, focused effort, ${BASE}`,
  'standing-long-jump-kids': `A Japanese elementary school child performing a standing long jump on a mat in a gymnasium, mid-air, teacher measuring, ${BASE}`,
  'side-step-kids': `A Japanese elementary school child doing a side step test between lines on a gymnasium floor, quick footwork, ${BASE}`,
  'sit-up-kids': `A Japanese elementary school child doing sit-ups on a mat while a classmate holds the knees, gymnasium, ${BASE}`,
  'grip-strength-kids': `A Japanese elementary school child squeezing a hand grip dynamometer, teacher recording the result, bright gymnasium, ${BASE}`,
  'sit-and-reach-kids': `A Japanese elementary school child doing a seated forward bend flexibility test with a measuring box, gymnasium, ${BASE}`,
  'jikyuso-kids': `Japanese junior high school students running a distance race on a school track, determined expressions, clear sky, ${BASE}`,

  // B. 種目別適性
  'track-and-field-aptitude': `Japanese elementary school children competing in track and field on an outdoor track, sprinting from the start, sunny day, ${BASE}`,
  'dance-aptitude': `Japanese elementary school children dancing together in a bright studio with a mirrored wall, energetic movement, ${BASE}`,
  'kendo-aptitude': `Japanese elementary school children practicing kendo in a dojo, wearing bogu armor and holding shinai, bowing, ${BASE}`,
  'skateboard-aptitude': `A Japanese child riding a skateboard at a skate park wearing a helmet and pads, sunny afternoon, ${BASE}`,
  'figure-skating-aptitude': `A Japanese child figure skating on an indoor ice rink, gliding gracefully, cool blue light, ${BASE}`,
  'rugby-aptitude': `Japanese elementary school children playing tag rugby on a grass field, passing the ball, sunny day, ${BASE}`,
  'climbing-aptitude': `A Japanese child climbing a colorful indoor bouldering wall with a mat below, focused, bright gym, ${BASE}`,
  'rhythmic-gymnastics-aptitude': `A Japanese child performing rhythmic gymnastics with a ribbon on a floor mat in a gymnasium, graceful movement, ${BASE}`,

  // C. 制度・公的データ
  'sports-insurance-kids': `A Japanese parent filling out a form at a desk with a child's sports bag and helmet nearby, calm bright room, ${BASE}`,
  'youji-undo-shishin': `Japanese preschool children playing actively outdoors in a park, running and climbing, warm morning light, ${BASE}`,
  'school-swimming-lesson': `Japanese elementary school children in swimsuits and caps at a school swimming pool during a lesson, teacher poolside, sunny day, ${BASE}`,
  'sports-shonendan': `Japanese children of different ages playing various sports in a park, soccer, jump rope and running, lively afternoon, ${BASE}`,
  'undoki-kenshin': `A Japanese school nurse checking a child's posture and range of motion in a school health room, calm and reassuring, ${BASE}`,

  // --- 2026-08-27 追加: 未カバー種目7本 ---
  'softball-aptitude': `Japanese elementary school children playing softball on a school ground, one batting and others fielding with gloves, sunny day, ${BASE}`,
  'handball-aptitude': `Japanese elementary school children playing handball in a bright gymnasium, one jumping to throw the ball toward the goal, ${BASE}`,
  'sumo-aptitude': `Japanese elementary school children practicing sumo on a dohyo ring in a training hall, wearing mawashi over gym shorts, bowing respectfully, ${BASE}`,
  'boxing-aptitude': `Japanese elementary school children practicing boxing with gloves and headgear in a bright gym, a coach holding mitts, ${BASE}`,
  'archery-aptitude': `Japanese elementary school children practicing archery at an outdoor range, drawing recurve bows toward round targets, calm concentration, ${BASE}`,
  'cheerleading-aptitude': `Japanese elementary school children doing cheerleading in a gymnasium with pom poms, energetic team formation, bright lighting, ${BASE}`,
  'ski-snowboard-aptitude': `Japanese children skiing and snowboarding on a gentle snowy slope, wearing helmets and goggles, bright winter day, ${BASE}`,
};

async function generateImage(slug, prompt, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      // imagen-4.0-fast-generate-001 は API から廃止されたため gemini の画像モデルを使う（2026-08）
      const result = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image',
        contents: prompt,
        config: {
          responseModalities: ['IMAGE'],
          imageConfig: { aspectRatio: '16:9' },
        },
      });

      const imagePart = (result.candidates?.[0]?.content?.parts ?? []).find((p) => p.inlineData);
      if (!imagePart) throw new Error('画像が返らなかった');

      // 生成直後は1MB近くあるので、OGPサイズ（1200x630）のJPEGに落としてから保存する
      const buffer = await sharp(Buffer.from(imagePart.inlineData.data, 'base64'))
        .resize(1200, 630, { fit: 'cover' })
        .jpeg({ quality: 82 })
        .toBuffer();
      fs.writeFileSync(path.join(OUTPUT_DIR, `${slug}.jpg`), buffer);
      console.log(`  保存: ${slug}.jpg (${Math.round(buffer.length / 1024)}KB)`);
      return true;
    } catch (err) {
      const msg = err.message || JSON.stringify(err);
      const rateLimited = /429|quota|RESOURCE_EXHAUSTED/.test(msg);
      if (rateLimited && attempt < retries) {
        const wait = 25000 * attempt;
        console.log(`  レート制限 [${slug}] ${wait / 1000}秒待機してリトライ (${attempt}/${retries})`);
        await new Promise((r) => setTimeout(r, wait));
        continue;
      }
      console.error(`  失敗 [${slug}]: ${msg}`);
      return false;
    }
  }
  return false;
}

async function main() {
  const dryRun = process.argv.includes('--dry');

  const targets = Object.entries(PROMPTS).filter(
    ([slug]) => !fs.existsSync(path.join(OUTPUT_DIR, `${slug}.jpg`))
  );
  const skipped = Object.keys(PROMPTS).length - targets.length;

  console.log(`出力先: ${OUTPUT_DIR}`);
  console.log(`生成対象: ${targets.length}枚（既に画像があるためスキップ: ${skipped}枚）\n`);

  if (dryRun) {
    for (const [slug] of targets) console.log(`  [対象] ${slug}.jpg`);
    return;
  }

  let ok = 0;
  for (const [i, [slug, prompt]] of targets.entries()) {
    console.log(`[${i + 1}/${targets.length}] ${slug}`);
    if (await generateImage(slug, prompt)) ok++;
    // Imagen 4 Fast は 10画像/分なので6秒以上あける
    if (i < targets.length - 1) await new Promise((r) => setTimeout(r, 6500));
  }

  console.log(`\n完了: ${ok}/${targets.length}枚を生成`);
  if (ok < targets.length) {
    console.log('失敗分は再実行すれば差分だけ生成されます');
  }
}

main();
