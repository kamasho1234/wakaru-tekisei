import { FitnessInput, FitnessProfile, SportAptitude } from '@/types';
import { fitnessNorms } from '@/lib/data/fitnessData';
import { sportsData } from '@/lib/data/sportsData';

// 偏差値計算（走50mは低いほど良いのでinvertフラグ）
export function calcDeviation(value: number, mean: number, sd: number, invert = false): number {
  if (sd === 0) return 50; // 標準偏差が0の場合は平均値を返す

  let z = (value - mean) / sd;
  if (invert) {
    z = -z; // 走50mは低いほど良いため符号を反転
  }

  // 偏差値 = 50 + 10 * z
  const deviation = 50 + 10 * z;

  // 偏差値を0〜100の範囲に制限
  return Math.max(0, Math.min(100, deviation));
}

// 体力プロフィール生成（FitnessInput → FitnessProfile）
export function calcFitnessProfile(input: FitnessInput): FitnessProfile {
  const norms = fitnessNorms[input.age]?.[input.gender];
  if (!norms) {
    // 無効な年齢・性別の場合はすべて平均値（偏差値50）を返す
    return { 持久力: 50, 瞬発力: 50, 敏捷性: 50, 筋力: 50, 柔軟性: 50, 巧緻性: 50 };
  }

  // 各種目の偏差値を計算
  const 握力偏差値 = input.握力 !== undefined ? calcDeviation(input.握力, norms.握力.mean, norms.握力.sd) : 50;
  const 上体起こし偏差値 = input.上体起こし !== undefined ? calcDeviation(input.上体起こし, norms.上体起こし.mean, norms.上体起こし.sd) : 50;
  const 長座体前屈偏差値 = input.長座体前屈 !== undefined ? calcDeviation(input.長座体前屈, norms.長座体前屈.mean, norms.長座体前屈.sd) : 50;
  const 反復横とび偏差値 = input.反復横とび !== undefined ? calcDeviation(input.反復横とび, norms.反復横とび.mean, norms.反復横とび.sd) : 50;
  const シャトルラン偏差値 = input.シャトルラン !== undefined ? calcDeviation(input.シャトルラン, norms.シャトルラン.mean, norms.シャトルラン.sd) : 50;
  const 走50m偏差値 = input.走50m !== undefined ? calcDeviation(input.走50m, norms.走50m.mean, norms.走50m.sd, true) : 50;
  const 立ち幅跳び偏差値 = input.立ち幅跳び !== undefined ? calcDeviation(input.立ち幅跳び, norms.立ち幅跳び.mean, norms.立ち幅跳び.sd) : 50;
  const ボール投げ偏差値 = input.ボール投げ !== undefined ? calcDeviation(input.ボール投げ, norms.ボール投げ.mean, norms.ボール投げ.sd) : 50;

  // 6要素へのマッピング
  const profile: FitnessProfile = {
    持久力: シャトルラン偏差値,
    瞬発力: (立ち幅跳び偏差値 + 走50m偏差値) / 2,
    敏捷性: 反復横とび偏差値,
    筋力: (握力偏差値 + 上体起こし偏差値) / 2,
    柔軟性: 長座体前屈偏差値,
    巧緻性: ボール投げ偏差値,
  };

  return profile;
}

// 全スポーツのスコアを計算してソート済みリストを返す
function calcAllAptitudes(profile: FitnessProfile): SportAptitude[] {
  const aptitudes: SportAptitude[] = sportsData.map((sport) => {
    const score =
      profile.持久力 * sport.weights.持久力 +
      profile.瞬発力 * sport.weights.瞬発力 +
      profile.敏捷性 * sport.weights.敏捷性 +
      profile.筋力 * sport.weights.筋力 +
      profile.柔軟性 * sport.weights.柔軟性 +
      profile.巧緻性 * sport.weights.巧緻性;

    let rank: 'S' | 'A' | 'B' | 'C';
    if (score >= 70) rank = 'S';
    else if (score >= 60) rank = 'A';
    else if (score >= 50) rank = 'B';
    else rank = 'C';

    const reason = generateReason(sport.name, profile, sport.weights);

    return {
      sport: sport.name,
      score: Math.round(score),
      rank,
      reason,
      category: sport.category,
      affiliateUrl: `https://www.google.com/search?q=${encodeURIComponent(sport.affiliateKeyword + ' 子供')}`,
    };
  });

  return aptitudes.sort((a, b) => b.score - a.score);
}

// メイン推薦（1位）を返す
export function calcMainSport(profile: FitnessProfile): SportAptitude {
  return calcAllAptitudes(profile)[0];
}

// サブ推薦（カテゴリ別の最高スコア1件ずつ、メインと被らない）を返す
export function calcSubSports(profile: FitnessProfile, mainSportName: string): SportAptitude[] {
  const all = calcAllAptitudes(profile).filter((a) => a.sport !== mainSportName);

  const seen = new Set<string>();
  const subs: SportAptitude[] = [];

  for (const apt of all) {
    if (!seen.has(apt.category)) {
      seen.add(apt.category);
      subs.push(apt);
    }
  }

  return subs;
}

// 後方互換用（Top5）
export function calcSportAptitudes(profile: FitnessProfile): SportAptitude[] {
  return calcAllAptitudes(profile).slice(0, 5);
}

// 理由テキスト生成関数
function generateReason(
  sportName: string,
  profile: FitnessProfile,
  weights: Record<string, number>
): string {
  // スコアが高い要素トップ3を抽出
  const elements = [
    { name: '持久力', score: profile.持久力, weight: weights.持久力 },
    { name: '瞬発力', score: profile.瞬発力, weight: weights.瞬発力 },
    { name: '敏捷性', score: profile.敏捷性, weight: weights.敏捷性 },
    { name: '筋力', score: profile.筋力, weight: weights.筋力 },
    { name: '柔軟性', score: profile.柔軟性, weight: weights.柔軟性 },
    { name: '巧緻性', score: profile.巧緻性, weight: weights.巧緻性 },
  ];

  // スポーツの重要度が高い順に、かつ子どもの適性が高い要素をピックアップ
  const topElements = elements
    .filter((e) => e.weight > 0.05)
    .sort((a, b) => b.weight * b.score - a.weight * a.score)
    .slice(0, 2);

  const elementTexts = topElements.map((e) => {
    if (e.score >= 70) {
      return `${e.name}が優れている`;
    } else if (e.score >= 60) {
      return `${e.name}が得意`;
    } else if (e.score >= 50) {
      return `${e.name}が平均以上`;
    } else {
      return `${e.name}を伸ばせる`;
    }
  });

  return `${elementTexts.join('・')}ので、${sportName}が適性があります。`;
}
