// 年齢（6〜12歳）
export type Age = 6 | 7 | 8 | 9 | 10 | 11 | 12;
// 性別
export type Gender = 'male' | 'female';

// 新体力テスト8種目
export interface FitnessInput {
  age: Age;
  gender: Gender;
  握力?: number;           // kg
  上体起こし?: number;     // 回
  長座体前屈?: number;     // cm
  反復横とび?: number;     // 点
  シャトルラン?: number;   // 回
  走50m?: number;          // 秒
  立ち幅跳び?: number;     // cm
  ボール投げ?: number;     // m
}

// 体力プロフィール（6要素）
export interface FitnessProfile {
  持久力: number;    // 偏差値
  瞬発力: number;
  敏捷性: number;
  筋力: number;
  柔軟性: number;
  巧緻性: number;
}

// スポーツ適性スコア
export interface SportAptitude {
  sport: string;
  score: number;        // 0〜100
  rank: 'S' | 'A' | 'B' | 'C';
  reason: string;
  category: string;
  affiliateUrl?: string;
}

// うちの子チェック診断結果
export interface ChildCheckResult {
  totalScore: number;
  level: 'excellent' | 'good' | 'average' | 'needsSupport';
  message: string;
  categoryScores: Record<string, number>;
  recommendations: string[];
}

// うちの子チェック質問
export interface CheckQuestion {
  id: string;
  category: '走る・跳ぶ' | 'ボール運動' | 'バランス' | '体力・持久力' | '生活動作';
  question: string;
  ageFrom: number;
  ageTo: number;
  weight: number;
}
