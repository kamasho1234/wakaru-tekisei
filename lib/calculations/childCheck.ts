import { CheckQuestion, ChildCheckResult } from '@/types';

const QUESTIONS: CheckQuestion[] = [
  // ===== 幼児（3歳） =====
  {
    id: 'y01',
    category: '走る・跳ぶ',
    question: '転ばずに走れる',
    ageFrom: 3,
    ageTo: 4,
    weight: 2,
  },
  {
    id: 'y02',
    category: '走る・跳ぶ',
    question: '両足を揃えてジャンプできる',
    ageFrom: 3,
    ageTo: 5,
    weight: 2,
  },
  {
    id: 'y03',
    category: 'ボール運動',
    question: '大きなボールを足で蹴れる',
    ageFrom: 3,
    ageTo: 5,
    weight: 2,
  },
  {
    id: 'y04',
    category: 'バランス',
    question: '床に引いた1本線の上をバランスよく歩ける',
    ageFrom: 3,
    ageTo: 4,
    weight: 2,
  },
  {
    id: 'y05',
    category: '体力・持久力',
    question: '15分以上外で元気に遊べる',
    ageFrom: 3,
    ageTo: 4,
    weight: 2,
  },
  {
    id: 'y06',
    category: '生活動作',
    question: '自分で靴を脱ぐことができる',
    ageFrom: 3,
    ageTo: 4,
    weight: 1,
  },

  // ===== 幼児（4歳） =====
  {
    id: 'y07',
    category: '走る・跳ぶ',
    question: 'ギャロップができる（片足ずつリズムよく跳ぶ動作）',
    ageFrom: 4,
    ageTo: 5,
    weight: 2,
  },
  {
    id: 'y08',
    category: '走る・跳ぶ',
    question: '片足でケンケンを3回以上できる',
    ageFrom: 4,
    ageTo: 5,
    weight: 2,
  },
  {
    id: 'y09',
    category: 'ボール運動',
    question: '上に投げたボールを自分でキャッチできる',
    ageFrom: 4,
    ageTo: 5,
    weight: 2,
  },
  {
    id: 'y10',
    category: 'バランス',
    question: '片足立ちを5秒できる',
    ageFrom: 4,
    ageTo: 5,
    weight: 2,
  },
  {
    id: 'y11',
    category: '体力・持久力',
    question: '30分以上外で元気に遊べる',
    ageFrom: 4,
    ageTo: 5,
    weight: 2,
  },
  {
    id: 'y12',
    category: '生活動作',
    question: '自分でシャツや上着を着られる',
    ageFrom: 4,
    ageTo: 5,
    weight: 1,
  },

  // ===== 幼児（5歳） =====
  {
    id: 'y13',
    category: '走る・跳ぶ',
    question: 'スキップができる',
    ageFrom: 5,
    ageTo: 5,
    weight: 2,
  },
  {
    id: 'y14',
    category: '走る・跳ぶ',
    question: '助走してジャンプできる',
    ageFrom: 5,
    ageTo: 5,
    weight: 2,
  },
  {
    id: 'y15',
    category: 'ボール運動',
    question: 'バウンドしたボールをキャッチできる',
    ageFrom: 5,
    ageTo: 5,
    weight: 2,
  },
  {
    id: 'y16',
    category: 'バランス',
    question: '片足立ちを10秒できる',
    ageFrom: 5,
    ageTo: 5,
    weight: 2,
  },
  {
    id: 'y17',
    category: '体力・持久力',
    question: '鉄棒にぶら下がれる（3秒以上）',
    ageFrom: 5,
    ageTo: 5,
    weight: 2,
  },
  {
    id: 'y18',
    category: '生活動作',
    question: 'ハサミで紙をまっすぐ切れる',
    ageFrom: 5,
    ageTo: 5,
    weight: 1,
  },

  // ===== 小学生（6歳〜） =====
  {
    id: 'q01',
    category: '走る・跳ぶ',
    question: 'その場でスキップができる',
    ageFrom: 7,
    ageTo: 12,
    weight: 2,
  },
  {
    id: 'q02',
    category: '走る・跳ぶ',
    question: '両足を揃えてジャンプできる',
    ageFrom: 6,
    ageTo: 12,
    weight: 2,
  },
  {
    id: 'q03',
    category: '走る・跳ぶ',
    question: '走りながら方向転換ができる',
    ageFrom: 8,
    ageTo: 12,
    weight: 2,
  },
  {
    id: 'q04',
    category: '走る・跳ぶ',
    question: '片足でケンケンを5回以上できる',
    ageFrom: 7,
    ageTo: 12,
    weight: 2,
  },

  // ボール運動
  {
    id: 'q05',
    category: 'ボール運動',
    question: 'ボールをキャッチできる',
    ageFrom: 6,
    ageTo: 12,
    weight: 2,
  },
  {
    id: 'q06',
    category: 'ボール運動',
    question: 'ボールを投げる時に反対の足を踏み出せる',
    ageFrom: 8,
    ageTo: 12,
    weight: 2,
  },
  {
    id: 'q07',
    category: 'ボール運動',
    question: 'ボールをドリブルしながら歩ける',
    ageFrom: 9,
    ageTo: 12,
    weight: 2,
  },

  // バランス
  {
    id: 'q08',
    category: 'バランス',
    question: '片足立ちを5秒以上できる',
    ageFrom: 6,
    ageTo: 12,
    weight: 2,
  },
  {
    id: 'q09',
    category: 'バランス',
    question: '平均台（幅10cm程度）を渡れる',
    ageFrom: 7,
    ageTo: 12,
    weight: 2,
  },
  {
    id: 'q10',
    category: 'バランス',
    question: '目を閉じて片足立ちを3秒以上できる',
    ageFrom: 9,
    ageTo: 12,
    weight: 3,
  },

  // 体力・持久力
  {
    id: 'q11',
    category: '体力・持久力',
    question: '外で遊んでいても疲れにくい',
    ageFrom: 6,
    ageTo: 12,
    weight: 2,
  },
  {
    id: 'q12',
    category: '体力・持久力',
    question: '階段を軽快に駆け上がれる',
    ageFrom: 6,
    ageTo: 12,
    weight: 1,
  },
  {
    id: 'q13',
    category: '体力・持久力',
    question: '1km程度走り続けられる',
    ageFrom: 10,
    ageTo: 12,
    weight: 3,
  },

  // 生活動作
  {
    id: 'q14',
    category: '生活動作',
    question: '自分で靴紐を結べる',
    ageFrom: 8,
    ageTo: 12,
    weight: 1,
  },
  {
    id: 'q15',
    category: '生活動作',
    question: '縄跳びで連続10回以上跳べる',
    ageFrom: 8,
    ageTo: 12,
    weight: 3,
  },
];

export function getQuestionsByAge(age: number): CheckQuestion[] {
  return QUESTIONS.filter((q) => q.ageFrom <= age && age <= q.ageTo);
}

export function calcChildCheck(
  age: number,
  answers: Record<string, 'yes' | 'no' | 'skip'>
): ChildCheckResult {
  const relevantQuestions = getQuestionsByAge(age);
  const isYoji = age <= 5;

  const categories = [
    '走る・跳ぶ',
    'ボール運動',
    'バランス',
    '体力・持久力',
    '生活動作',
  ] as const;

  const categoryScores: Record<string, number> = {};
  let totalScore = 0;
  let totalMaxScore = 0;

  for (const category of categories) {
    const categoryQuestions = relevantQuestions.filter(
      (q) => q.category === category
    );
    if (categoryQuestions.length === 0) {
      categoryScores[category] = 0;
      continue;
    }

    let categoryScore = 0;
    let categoryMaxScore = 0;

    for (const question of categoryQuestions) {
      const answer = answers[question.id];
      const points = question.weight * 10;

      if (answer === 'skip') continue;

      categoryMaxScore += points;
      if (answer === 'yes') {
        categoryScore += points;
      }
    }

    if (categoryMaxScore > 0) {
      categoryScores[category] = Math.round(
        (categoryScore / categoryMaxScore) * 100
      );
      totalScore += categoryScore;
      totalMaxScore += categoryMaxScore;
    } else {
      categoryScores[category] = 0;
    }
  }

  const finalScore =
    totalMaxScore > 0 ? Math.round((totalScore / totalMaxScore) * 100) : 0;

  let level: 'excellent' | 'good' | 'average' | 'needsSupport';
  let message: string;

  if (isYoji) {
    // 幼児向けメッセージ
    if (finalScore >= 80) {
      level = 'excellent';
      message = '運動の発達はとても順調です。好奇心のままにいろいろな動きを楽しみましょう。';
    } else if (finalScore >= 60) {
      level = 'good';
      message = '発達は概ね順調です。公園遊びや体を動かす機会を増やすとさらによいでしょう。';
    } else if (finalScore >= 40) {
      level = 'average';
      message = '一部の動きがまだ発達途中です。焦らず、楽しい外遊びを日課にしてみましょう。';
    } else {
      level = 'needsSupport';
      message = '体を動かす機会をもっと増やしてみましょう。気になる場合は保育士や小児科にご相談を。';
    }
  } else {
    // 小学生向けメッセージ
    if (finalScore >= 80) {
      level = 'excellent';
      message = '運動発達は非常に順調です。積極的にスポーツに取り組みましょう。';
    } else if (finalScore >= 60) {
      level = 'good';
      message = '運動発達は概ね順調です。苦手な動きを少し意識してみましょう。';
    } else if (finalScore >= 40) {
      level = 'average';
      message = 'いくつかの動きが発達途中です。楽しく運動する機会を増やしましょう。';
    } else {
      level = 'needsSupport';
      message = '運動の機会を増やすことをおすすめします。気になる場合は専門家にご相談を。';
    }
  }

  const recommendations: string[] = [];

  if (isYoji) {
    if (finalScore < 60) recommendations.push('体操教室や幼児スポーツ教室の体験入学を試してみましょう');
    recommendations.push('公園や広場でかけっこ・鬼ごっこなど全身を使う遊びを増やしましょう');
    if (finalScore >= 70) recommendations.push('幼児向けスポーツ適性診断もおすすめです');
  } else {
    if (finalScore < 60) recommendations.push('スポーツ教室の体験入学を検討してみてください');
    if (finalScore < 70) recommendations.push('公園での外遊びを増やしましょう');
    recommendations.push('なわとびや鬼ごっこなど多様な動きを取り入れましょう');
    if (finalScore < 40) recommendations.push('気になる場合は小児科や発達専門機関に相談してください');
  }

  return {
    totalScore: finalScore,
    level,
    message,
    categoryScores,
    recommendations,
  };
}
