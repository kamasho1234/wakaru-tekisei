import { yojiQuestions, yojiTypes, YojiType } from '@/lib/data/yojiData';

export type YojiAnswer = 'yes' | 'sometimes' | 'no';

export interface YojiScores {
  active: number;
  rhythm: number;
  focus: number;
  social: number;
}

const answerScore: Record<YojiAnswer, number> = {
  yes: 2,
  sometimes: 1,
  no: 0,
};

export function calcYojiType(answers: Record<string, YojiAnswer>): {
  primary: YojiType;
  scores: YojiScores;
} {
  const scores: YojiScores = { active: 0, rhythm: 0, focus: 0, social: 0 };

  yojiQuestions.forEach((q) => {
    const answer = answers[q.id];
    if (answer) {
      scores[q.category] += answerScore[answer];
    }
  });

  // 最高スコアのタイプを主タイプに
  const topId = (Object.keys(scores) as (keyof YojiScores)[]).reduce((a, b) =>
    scores[a] >= scores[b] ? a : b
  );

  const primary = yojiTypes.find((t) => t.id === topId) ?? yojiTypes[0];

  return { primary, scores };
}

// スコアをパーセンテージに変換（最大6点）
export function scoreToPercent(score: number): number {
  return Math.round((score / 6) * 100);
}
