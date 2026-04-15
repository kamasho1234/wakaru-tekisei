// スポーツ別体力要素重み付けデータ

export interface SportProfile {
  name: string;
  category: string;
  weights: {
    持久力: number;
    瞬発力: number;
    敏捷性: number;
    筋力: number;
    柔軟性: number;
    巧緻性: number;
  };
  description: string;
  affiliateKeyword: string;
}

export const sportsData: SportProfile[] = [
  // ---- 持久力系 ----
  {
    name: '水泳',
    category: '持久力系',
    weights: { 持久力: 0.35, 瞬発力: 0.15, 敏捷性: 0.10, 筋力: 0.20, 柔軟性: 0.15, 巧緻性: 0.05 },
    description: '全身運動で持久力と筋力が必須。肩や腰の柔軟性も重要です。',
    affiliateKeyword: '水泳教室',
  },
  {
    name: 'サッカー',
    category: '持久力系',
    weights: { 持久力: 0.30, 瞬発力: 0.20, 敏捷性: 0.25, 筋力: 0.10, 柔軟性: 0.05, 巧緻性: 0.10 },
    description: '走り続けることが求められるスポーツ。敏捷性と持久力が重要です。',
    affiliateKeyword: 'サッカー教室',
  },
  {
    name: '自転車競技',
    category: '持久力系',
    weights: { 持久力: 0.40, 瞬発力: 0.20, 敏捷性: 0.10, 筋力: 0.20, 柔軟性: 0.05, 巧緻性: 0.05 },
    description: '脚の筋力と持久力が核心。ペダリング技術（巧緻性）も重要です。',
    affiliateKeyword: '自転車競技 ジュニア',
  },

  // ---- 瞬発力系 ----
  {
    name: '陸上競技',
    category: '瞬発力系',
    weights: { 持久力: 0.20, 瞬発力: 0.35, 敏捷性: 0.15, 筋力: 0.20, 柔軟性: 0.05, 巧緻性: 0.05 },
    description: '短距離・長距離・跳躍・投擲と幅広い種目があります。50m走・立ち幅跳び・ボール投げの数値が高いと特に適性があります。',
    affiliateKeyword: '陸上教室',
  },
  {
    name: '野球・ソフトボール',
    category: '瞬発力系',
    weights: { 持久力: 0.10, 瞬発力: 0.25, 敏捷性: 0.20, 筋力: 0.20, 柔軟性: 0.10, 巧緻性: 0.15 },
    description: '瞬発力と巧緻性が重要。瞬間的な判断と精密な動きが求められます。',
    affiliateKeyword: '野球教室',
  },
  {
    name: 'ラグビー',
    category: '瞬発力系',
    weights: { 持久力: 0.20, 瞬発力: 0.25, 敏捷性: 0.15, 筋力: 0.30, 柔軟性: 0.05, 巧緻性: 0.05 },
    description: '筋力と瞬発力が最重要。コンタクトに耐えられる強さが必要です。',
    affiliateKeyword: 'ラグビー ジュニア',
  },

  // ---- 敏捷性系 ----
  {
    name: 'バスケットボール',
    category: '敏捷性系',
    weights: { 持久力: 0.25, 瞬発力: 0.20, 敏捷性: 0.25, 筋力: 0.10, 柔軟性: 0.05, 巧緻性: 0.15 },
    description: '敏捷性と持久力が必須。ボール操作の巧緻性も重要です。',
    affiliateKeyword: 'バスケットボール教室',
  },
  {
    name: 'テニス',
    category: '敏捷性系',
    weights: { 持久力: 0.20, 瞬発力: 0.20, 敏捷性: 0.25, 筋力: 0.10, 柔軟性: 0.10, 巧緻性: 0.15 },
    description: '敏捷性と瞬発力が不可欠。素早い動きとラケット操作が重要です。',
    affiliateKeyword: 'テニス教室',
  },
  {
    name: '卓球',
    category: '敏捷性系',
    weights: { 持久力: 0.10, 瞬発力: 0.20, 敏捷性: 0.35, 筋力: 0.05, 柔軟性: 0.05, 巧緻性: 0.25 },
    description: '反射神経（敏捷性）とラケット操作の巧緻性が最重要です。',
    affiliateKeyword: '卓球教室',
  },
  {
    name: 'バドミントン',
    category: '敏捷性系',
    weights: { 持久力: 0.15, 瞬発力: 0.20, 敏捷性: 0.30, 筋力: 0.05, 柔軟性: 0.05, 巧緻性: 0.25 },
    description: '素早いフットワーク（敏捷性）とシャトルコントロールが鍵です。',
    affiliateKeyword: 'バドミントン教室',
  },
  {
    name: 'バレーボール',
    category: '敏捷性系',
    weights: { 持久力: 0.20, 瞬発力: 0.25, 敏捷性: 0.25, 筋力: 0.10, 柔軟性: 0.05, 巧緻性: 0.15 },
    description: '瞬発力・敏捷性・巧緻性のバランスが求められるチームスポーツです。',
    affiliateKeyword: 'バレーボール教室',
  },

  // ---- 筋力系 ----
  {
    name: '柔道・武道',
    category: '筋力系',
    weights: { 持久力: 0.15, 瞬発力: 0.20, 敏捷性: 0.20, 筋力: 0.30, 柔軟性: 0.10, 巧緻性: 0.05 },
    description: '筋力が最重要。相手の力を受けとめ、自分の力を出せる体が必要です。',
    affiliateKeyword: '柔道教室',
  },
  {
    name: '空手',
    category: '筋力系',
    weights: { 持久力: 0.10, 瞬発力: 0.30, 敏捷性: 0.25, 筋力: 0.20, 柔軟性: 0.10, 巧緻性: 0.05 },
    description: '瞬発力と敏捷性が核心。型や組手で全身を使います。',
    affiliateKeyword: '空手教室',
  },

  // ---- 柔軟性系 ----
  {
    name: '体操',
    category: '柔軟性系',
    weights: { 持久力: 0.10, 瞬発力: 0.15, 敏捷性: 0.20, 筋力: 0.20, 柔軟性: 0.30, 巧緻性: 0.05 },
    description: '柔軟性と敏捷性が最重要。美しいフォームを作る技術が求められます。',
    affiliateKeyword: '体操教室',
  },
  {
    name: 'ダンス・バレエ',
    category: '柔軟性系',
    weights: { 持久力: 0.15, 瞬発力: 0.10, 敏捷性: 0.15, 筋力: 0.10, 柔軟性: 0.35, 巧緻性: 0.15 },
    description: '柔軟性と巧緻性が最重要。優雅な動きと表現力が求められます。',
    affiliateKeyword: 'ダンス・バレエ教室',
  },

  // ---- 巧緻性系 ----
  {
    name: 'ゴルフ',
    category: '巧緻性系',
    weights: { 持久力: 0.05, 瞬発力: 0.15, 敏捷性: 0.05, 筋力: 0.25, 柔軟性: 0.20, 巧緻性: 0.30 },
    description: '巧緻性と柔軟性が鍵。精密なスイングには体の連動性が必要です。',
    affiliateKeyword: 'ゴルフ ジュニア教室',
  },
];
