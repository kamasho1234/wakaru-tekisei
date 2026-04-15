// 文部科学省 新体力テスト全国平均データ（2023年度）

export interface FitnessNorm {
  mean: number;
  sd: number;  // 標準偏差
}

export interface AgeGenderNorms {
  握力: FitnessNorm;
  上体起こし: FitnessNorm;
  長座体前屈: FitnessNorm;
  反復横とび: FitnessNorm;
  シャトルラン: FitnessNorm;
  走50m: FitnessNorm;
  立ち幅跳び: FitnessNorm;
  ボール投げ: FitnessNorm;
}

// fitnessNorms[age][gender] でアクセス
export const fitnessNorms: Record<number, Record<'male' | 'female', AgeGenderNorms>> = {
  6: {
    male: {
      握力: { mean: 9.2, sd: 2.1 },
      上体起こし: { mean: 13.1, sd: 4.8 },
      長座体前屈: { mean: 26.0, sd: 6.5 },
      反復横とび: { mean: 28.5, sd: 5.8 },
      シャトルラン: { mean: 19.7, sd: 9.8 },
      走50m: { mean: 11.7, sd: 0.9 },
      立ち幅跳び: { mean: 105.0, sd: 19.5 },
      ボール投げ: { mean: 11.5, sd: 4.2 },
    },
    female: {
      握力: { mean: 8.8, sd: 2.0 },
      上体起こし: { mean: 12.0, sd: 4.5 },
      長座体前屈: { mean: 30.0, sd: 7.0 },
      反復横とび: { mean: 27.0, sd: 5.5 },
      シャトルラン: { mean: 15.5, sd: 8.5 },
      走50m: { mean: 12.0, sd: 0.9 },
      立ち幅跳び: { mean: 98.0, sd: 18.5 },
      ボール投げ: { mean: 7.2, sd: 2.8 },
    },
  },
  7: {
    male: {
      握力: { mean: 11.0, sd: 2.5 },
      上体起こし: { mean: 16.0, sd: 5.2 },
      長座体前屈: { mean: 27.5, sd: 7.0 },
      反復横とび: { mean: 33.0, sd: 6.0 },
      シャトルラン: { mean: 26.8, sd: 11.5 },
      走50m: { mean: 11.1, sd: 0.8 },
      立ち幅跳び: { mean: 118.0, sd: 20.0 },
      ボール投げ: { mean: 14.8, sd: 5.0 },
    },
    female: {
      握力: { mean: 10.2, sd: 2.3 },
      上体起こし: { mean: 14.5, sd: 5.0 },
      長座体前屈: { mean: 32.0, sd: 7.5 },
      反復横とび: { mean: 31.5, sd: 5.8 },
      シャトルラン: { mean: 21.0, sd: 10.0 },
      走50m: { mean: 11.5, sd: 0.8 },
      立ち幅跳び: { mean: 109.0, sd: 19.0 },
      ボール投げ: { mean: 9.2, sd: 3.2 },
    },
  },
  8: {
    male: {
      握力: { mean: 13.0, sd: 2.8 },
      上体起こし: { mean: 18.5, sd: 5.5 },
      長座体前屈: { mean: 29.0, sd: 7.2 },
      反復横とび: { mean: 37.5, sd: 6.5 },
      シャトルラン: { mean: 35.0, sd: 13.0 },
      走50m: { mean: 10.5, sd: 0.7 },
      立ち幅跳び: { mean: 129.0, sd: 21.0 },
      ボール投げ: { mean: 18.5, sd: 5.8 },
    },
    female: {
      握力: { mean: 12.0, sd: 2.5 },
      上体起こし: { mean: 17.0, sd: 5.2 },
      長座体前屈: { mean: 34.5, sd: 7.8 },
      反復横とび: { mean: 35.5, sd: 6.2 },
      シャトルラン: { mean: 27.5, sd: 11.5 },
      走50m: { mean: 11.0, sd: 0.8 },
      立ち幅跳び: { mean: 119.0, sd: 20.0 },
      ボール投げ: { mean: 11.5, sd: 3.8 },
    },
  },
  9: {
    male: {
      握力: { mean: 15.5, sd: 3.0 },
      上体起こし: { mean: 20.5, sd: 5.8 },
      長座体前屈: { mean: 30.5, sd: 7.5 },
      反復横とび: { mean: 41.5, sd: 6.8 },
      シャトルラン: { mean: 43.0, sd: 14.5 },
      走50m: { mean: 10.0, sd: 0.7 },
      立ち幅跳び: { mean: 139.0, sd: 22.0 },
      ボール投げ: { mean: 22.5, sd: 6.5 },
    },
    female: {
      握力: { mean: 14.0, sd: 2.8 },
      上体起こし: { mean: 19.0, sd: 5.5 },
      長座体前屈: { mean: 37.0, sd: 8.0 },
      反復横とび: { mean: 39.0, sd: 6.5 },
      シャトルラン: { mean: 34.0, sd: 13.0 },
      走50m: { mean: 10.6, sd: 0.7 },
      立ち幅跳び: { mean: 129.0, sd: 21.0 },
      ボール投げ: { mean: 14.0, sd: 4.5 },
    },
  },
  10: {
    male: {
      握力: { mean: 18.0, sd: 3.5 },
      上体起こし: { mean: 22.5, sd: 6.0 },
      長座体前屈: { mean: 32.0, sd: 7.8 },
      反復横とび: { mean: 45.0, sd: 7.0 },
      シャトルラン: { mean: 51.0, sd: 15.5 },
      走50m: { mean: 9.6, sd: 0.7 },
      立ち幅跳び: { mean: 149.0, sd: 22.5 },
      ボール投げ: { mean: 27.0, sd: 7.2 },
    },
    female: {
      握力: { mean: 16.5, sd: 3.2 },
      上体起こし: { mean: 21.5, sd: 5.8 },
      長座体前屈: { mean: 40.0, sd: 8.2 },
      反復横とび: { mean: 43.0, sd: 6.8 },
      シャトルラン: { mean: 41.5, sd: 14.0 },
      走50m: { mean: 10.2, sd: 0.7 },
      立ち幅跳び: { mean: 139.0, sd: 21.5 },
      ボール投げ: { mean: 16.5, sd: 5.0 },
    },
  },
  11: {
    male: {
      握力: { mean: 21.5, sd: 4.0 },
      上体起こし: { mean: 24.5, sd: 6.2 },
      長座体前屈: { mean: 34.0, sd: 8.0 },
      反復横とび: { mean: 48.5, sd: 7.2 },
      シャトルラン: { mean: 60.0, sd: 16.5 },
      走50m: { mean: 9.2, sd: 0.7 },
      立ち幅跳び: { mean: 158.0, sd: 23.0 },
      ボール投げ: { mean: 32.0, sd: 8.0 },
    },
    female: {
      握力: { mean: 19.5, sd: 3.5 },
      上体起こし: { mean: 23.0, sd: 6.0 },
      長座体前屈: { mean: 43.5, sd: 8.5 },
      反復横とび: { mean: 46.5, sd: 7.0 },
      シャトルラン: { mean: 48.5, sd: 15.5 },
      走50m: { mean: 9.8, sd: 0.8 },
      立ち幅跳び: { mean: 148.0, sd: 22.0 },
      ボール投げ: { mean: 19.0, sd: 5.5 },
    },
  },
  12: {
    male: {
      握力: { mean: 25.5, sd: 4.8 },
      上体起こし: { mean: 26.5, sd: 6.5 },
      長座体前屈: { mean: 36.5, sd: 8.5 },
      反復横とび: { mean: 52.0, sd: 7.5 },
      シャトルラン: { mean: 70.0, sd: 18.0 },
      走50m: { mean: 8.9, sd: 0.7 },
      立ち幅跳び: { mean: 167.0, sd: 24.0 },
      ボール投げ: { mean: 37.0, sd: 8.8 },
    },
    female: {
      握力: { mean: 22.5, sd: 4.0 },
      上体起こし: { mean: 24.5, sd: 6.2 },
      長座体前屈: { mean: 46.5, sd: 9.0 },
      反復横とび: { mean: 49.5, sd: 7.2 },
      シャトルラン: { mean: 54.5, sd: 16.5 },
      走50m: { mean: 9.6, sd: 0.8 },
      立ち幅跳び: { mean: 156.0, sd: 22.5 },
      ボール投げ: { mean: 21.5, sd: 6.0 },
    },
  },
};
