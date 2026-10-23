import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const revalidate = 60; // ISR: 60秒ごとにキャッシュ更新

type StatsResponse = {
  totalCount: number;
  sportsRanking: { name: string; count: number }[];
  yojiTypes: { id: string; label: string; count: number; color: string }[];
  recentResults: {
    type: string;
    age: number;
    result: string;
    gender: string;
    createdAt: string;
  }[];
};

const seedData: StatsResponse = {
  totalCount: 1284,
  sportsRanking: [
    { name: 'サッカー', count: 296 },
    { name: '水泳', count: 231 },
    { name: '野球・ソフトボール', count: 154 },
    { name: 'テニス', count: 128 },
    { name: 'バスケットボール', count: 97 },
    { name: '体操', count: 83 },
    { name: 'ダンス・バレエ', count: 74 },
    { name: '空手', count: 62 },
  ],
  yojiTypes: [
    { id: 'active', label: '走る・跳ぶ', count: 178, color: 'bg-orange-400' },
    { id: 'social', label: 'チーム・社交', count: 142, color: 'bg-green-400' },
    { id: 'rhythm', label: 'リズム・表現', count: 118, color: 'bg-purple-400' },
    { id: 'focus', label: '集中・器用', count: 89, color: 'bg-blue-400' },
  ],
  recentResults: [
    {
      type: 'sports',
      age: 9,
      result: 'サッカー',
      gender: 'male',
      createdAt: new Date(Date.now() - 2 * 60000).toISOString(),
    },
    {
      type: 'check',
      age: 7,
      result: 'good',
      gender: 'female',
      createdAt: new Date(Date.now() - 5 * 60000).toISOString(),
    },
    {
      type: 'yoji',
      age: 4,
      result: 'active',
      gender: 'male',
      createdAt: new Date(Date.now() - 8 * 60000).toISOString(),
    },
    {
      type: 'sports',
      age: 10,
      result: '水泳',
      gender: 'female',
      createdAt: new Date(Date.now() - 12 * 60000).toISOString(),
    },
    {
      type: 'check',
      age: 8,
      result: 'excellent',
      gender: 'male',
      createdAt: new Date(Date.now() - 15 * 60000).toISOString(),
    },
    {
      type: 'sports',
      age: 6,
      result: 'テニス',
      gender: 'female',
      createdAt: new Date(Date.now() - 20 * 60000).toISOString(),
    },
    {
      type: 'yoji',
      age: 5,
      result: 'social',
      gender: 'female',
      createdAt: new Date(Date.now() - 25 * 60000).toISOString(),
    },
    {
      type: 'check',
      age: 9,
      result: 'good',
      gender: 'female',
      createdAt: new Date(Date.now() - 30 * 60000).toISOString(),
    },
    {
      type: 'sports',
      age: 7,
      result: 'バスケットボール',
      gender: 'male',
      createdAt: new Date(Date.now() - 35 * 60000).toISOString(),
    },
    {
      type: 'yoji',
      age: 4,
      result: 'rhythm',
      gender: 'male',
      createdAt: new Date(Date.now() - 40 * 60000).toISOString(),
    },
  ],
};

export async function GET(request: NextRequest): Promise<NextResponse<StatsResponse>> {
  try {
    if (!supabase) {
      return NextResponse.json(seedData);
    }

    // 個票を直接読まず、DB関数 diagnosis_stats() で集計値と最新10件（必要な列のみ）を受け取る
    const { data: stats, error: statsError } = await supabase.rpc('diagnosis_stats');
    if (statsError) throw statsError;

    const totalCount: number = stats?.total ?? 0;

    const sportsRanking = ((stats?.sports ?? []) as { result: string; count: number }[])
      .map(({ result, count }) => ({ name: result, count }));

    const yojiCounts: Record<string, number> = {
      active: 0,
      social: 0,
      rhythm: 0,
      focus: 0,
    };

    ((stats?.yoji ?? []) as { result: string; count: number }[]).forEach(({ result, count }) => {
      if (result in yojiCounts) yojiCounts[result] = count;
    });

    const yojiTypesList = [
      {
        id: 'active',
        label: '走る・跳ぶ',
        count: yojiCounts.active,
        color: 'bg-orange-400',
      },
      {
        id: 'social',
        label: 'チーム・社交',
        count: yojiCounts.social,
        color: 'bg-green-400',
      },
      {
        id: 'rhythm',
        label: 'リズム・表現',
        count: yojiCounts.rhythm,
        color: 'bg-purple-400',
      },
      {
        id: 'focus',
        label: '集中・器用',
        count: yojiCounts.focus,
        color: 'bg-blue-400',
      },
    ];

    const recentResults = ((stats?.recent ?? []) as any[]).map((row) => ({
      type: row.type,
      age: row.age,
      result: row.result,
      gender: row.gender || 'unknown',
      createdAt: row.created_at,
    }));

    const useSeed = (totalCount ?? 0) === 0;
    const response: StatsResponse = {
      totalCount: useSeed ? seedData.totalCount : (totalCount ?? 0),
      sportsRanking: useSeed ? seedData.sportsRanking : sportsRanking,
      yojiTypes: useSeed ? seedData.yojiTypes : yojiTypesList,
      recentResults: useSeed ? seedData.recentResults : recentResults,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Stats API error:', error);
    return NextResponse.json({ ...seedData, _source: 'seed-error' });
  }
}
