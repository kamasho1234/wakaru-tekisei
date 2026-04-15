'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useEffect, useRef } from 'react';
import ShareButtons from '@/components/ShareButtons';
import { FitnessInput, Age } from '@/types';
import {
  calcFitnessProfile,
  calcMainSport,
  calcSubSports,
  calcDeviation,
} from '@/lib/calculations/sportsAptitude';
import { fitnessNorms } from '@/lib/data/fitnessData';
import { RadarChartComponent } from '@/components/RadarChart';

const fitnessItems = [
  { key: '握力', label: '握力', unit: 'kg' },
  { key: '上体起こし', label: '上体起こし', unit: '回' },
  { key: '長座体前屈', label: '長座体前屈', unit: 'cm' },
  { key: '反復横とび', label: '反復横とび', unit: '点' },
  { key: 'シャトルラン', label: 'シャトルラン', unit: '回' },
  { key: '走50m', label: '50m走', unit: '秒' },
  { key: '立ち幅跳び', label: '立ち幅跳び', unit: 'cm' },
  { key: 'ボール投げ', label: 'ボール投げ', unit: 'm' },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  '持久力系': { bg: 'bg-blue-50',   text: 'text-blue-700',   border: 'border-blue-200' },
  '瞬発力系': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  '敏捷性系': { bg: 'bg-green-50',  text: 'text-green-700',  border: 'border-green-200' },
  '筋力系':   { bg: 'bg-red-50',    text: 'text-red-700',    border: 'border-red-200' },
  '柔軟性系': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  '巧緻性系': { bg: 'bg-amber-50',  text: 'text-amber-700',  border: 'border-amber-200' },
};

const rankConfig: Record<string, { label: string; bg: string; text: string }> = {
  S: { label: 'S ランク', bg: 'bg-yellow-400', text: 'text-yellow-900' },
  A: { label: 'A ランク', bg: 'bg-gray-300',   text: 'text-gray-800' },
  B: { label: 'B ランク', bg: 'bg-blue-200',   text: 'text-blue-800' },
  C: { label: 'C ランク', bg: 'bg-gray-100',   text: 'text-gray-600' },
};

// スポーツ名に対応する写真
const sportImages: Record<string, string> = {
  'サッカー':           '/images/sport-soccer.jpg',
  '水泳':               '/images/sport-swimming.jpg',
  'テニス':             '/images/sport-tennis.jpg',
  'バスケットボール':   '/images/sport-basketball.jpg',
  '野球・ソフトボール': '/images/sport-baseball.jpg',
  '体操':               '/images/sport-gymnastics.jpg',
  'ゴルフ':             '/images/sport-golf.jpg',
  'ダンス・バレエ':     '/images/sport-dance.jpg',
  '空手':               '/images/sport-karate.jpg',
  '柔道・武道':         '/images/sport-judo.jpg',
  'バレーボール':       '/images/sport-volleyball.jpg',
  'バドミントン':       '/images/sport-badminton.jpg',
  '卓球':               '/images/sport-tabletennis.jpg',
  'ラグビー':           '/images/sport-rugby.jpg',
  '自転車競技':         '/images/sport-cycling.jpg',
};

export function ResultContent() {
  const router = useRouter();
  const sentRef = useRef(false);

  const fitnessInput = useMemo((): FitnessInput => {
    if (typeof window === 'undefined') return { age: 10, gender: 'male' } as FitnessInput;
    const params = new URLSearchParams(window.location.search);
    const age = parseInt(params.get('age') || '10') as Age;
    const gender = (params.get('gender') || 'male') as 'male' | 'female';
    const input: FitnessInput = { age, gender };
    fitnessItems.forEach((item) => {
      const value = params.get(item.key);
      if (value) (input as unknown as Record<string, unknown>)[item.key] = parseFloat(value);
    });
    return input;
  }, []);

  const profile  = useMemo(() => calcFitnessProfile(fitnessInput), [fitnessInput]);
  const main     = useMemo(() => calcMainSport(profile), [profile]);
  const subs     = useMemo(() => calcSubSports(profile, main.sport), [profile, main.sport]);

  const comparisonData = useMemo(() => {
    const norms = fitnessNorms[fitnessInput.age][fitnessInput.gender];
    return fitnessItems.map((item) => {
      const key = item.key as keyof FitnessInput;
      const inputValue = fitnessInput[key];
      const norm = (norms as unknown as Record<string, { mean: number; sd: number }>)[key];
      const invert = item.key === '走50m';
      const deviation =
        inputValue !== undefined && typeof inputValue === 'number'
          ? calcDeviation(inputValue, norm.mean, norm.sd, invert)
          : null;
      return {
        label: item.label,
        input: inputValue,
        average: norm.mean.toFixed(1),
        deviation: deviation ? Math.round(deviation) : null,
        unit: item.unit,
      };
    });
  }, [fitnessInput]);

  const genderLabel = fitnessInput.gender === 'male' ? '男の子' : '女の子';
  const mainColor = categoryColors[main.category] ?? { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' };
  const mainRank = rankConfig[main.rank];
  const mainImage = sportImages[main.sport];

  // 診断結果を自動送信
  useEffect(() => {
    if (sentRef.current) return;
    sentRef.current = true;

    const sendResult = async () => {
      try {
        await fetch('/api/stats/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'sports',
            age: fitnessInput.age,
            gender: fitnessInput.gender,
            result: main.sport,
            score: main.score,
          }),
        });
      } catch (error) {
        console.error('Failed to save sports diagnosis:', error);
      }
    };

    sendResult();
  }, [fitnessInput.age, fitnessInput.gender, main.sport, main.score]);

  return (
    <div className="min-h-screen bg-[#F7F9FF] py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* タイトルバー */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white">
          <p className="text-blue-200 text-sm font-medium mb-1">診断結果</p>
          <h1 className="text-2xl font-black">{fitnessInput.age}歳（{genderLabel}）のスポーツ適性</h1>
        </div>

        {/* レーダーチャート */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-base font-bold text-gray-900 mb-4">体力プロフィール</h2>
          <RadarChartComponent profile={profile} />
        </div>

        {/* ── メイン推薦 ── */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
            <h2 className="text-lg font-black text-gray-900">最もおすすめのスポーツ</h2>
          </div>

          <div className={`rounded-3xl overflow-hidden shadow-sm border ${mainColor.border}`}>
            {/* 画像エリア（画像がある種目のみ） */}
            {mainImage && (
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${mainImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-black ${mainRank.bg} ${mainRank.text}`}>
                    {mainRank.label}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${mainColor.bg} ${mainColor.text}`}>
                    {main.category}
                  </span>
                </div>
              </div>
            )}

            <div className={`p-6 ${mainColor.bg}`}>
              {/* 画像なし種目はここでバッジ表示 */}
              {!mainImage && (
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-black ${mainRank.bg} ${mainRank.text}`}>
                    {mainRank.label}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white ${mainColor.text}`}>
                    {main.category}
                  </span>
                </div>
              )}

              <h3 className={`text-3xl font-black mb-2 ${mainColor.text}`}>{main.sport}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{main.reason}</p>

              {/* スコアバー */}
              <div className="bg-white/60 rounded-2xl p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-gray-600">適性スコア</span>
                  <span className="text-2xl font-black text-gray-900">{main.score}</span>
                </div>
                <div className="w-full bg-white rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-blue-500 transition-all"
                    style={{ width: `${main.score}%` }}
                  />
                </div>
              </div>

              <a
                href={main.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white font-bold text-sm shadow-sm hover:shadow-md transition-all ${mainColor.text}`}
              >
                {main.sport}の教室を探す
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* SNS共有 */}
        <ShareButtons
          text={`うちの子（${fitnessInput.age}歳）のスポーツ適性1位は「${main.sport}」でした！ #スポーツ適性診断 #子供のスポーツ`}
        />

        {/* ── サブ推薦（カテゴリ別） ── */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-6 bg-gray-400 rounded-full" />
            <h2 className="text-lg font-black text-gray-900">こんな選択肢もあります</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subs.map((sub) => {
              const color = categoryColors[sub.category] ?? { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' };
              const rank = rankConfig[sub.rank];
              const img = sportImages[sub.sport];
              return (
                <div key={sub.sport} className={`bg-white rounded-2xl overflow-hidden border ${color.border} shadow-sm hover:shadow-md transition-shadow`}>
                  {/* ミニ画像 */}
                  {img && (
                    <div
                      className="h-24 bg-cover bg-center"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  )}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${color.bg} ${color.text}`}>
                          {sub.category}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${rank.bg} ${rank.text}`}>
                          {rank.label}
                        </span>
                      </div>
                      <span className="text-lg font-black text-gray-900">{sub.score}</span>
                    </div>
                    <h3 className="text-base font-black text-gray-900 mb-1">{sub.sport}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">{sub.reason}</p>
                    <a
                      href={sub.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-xs font-bold ${color.text} hover:underline`}
                    >
                      教室を探す
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 全国平均との比較 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-base font-bold text-gray-900 mb-4">全国平均との比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="pb-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">種目</th>
                  <th className="pb-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">測定値</th>
                  <th className="pb-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">全国平均</th>
                  <th className="pb-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">偏差値</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {comparisonData.map((row, index) => {
                  const d = row.deviation;
                  let devStyle = 'bg-gray-100 text-gray-600';
                  if (d !== null) {
                    if (d >= 60) devStyle = 'bg-green-100 text-green-700';
                    else if (d >= 50) devStyle = 'bg-blue-100 text-blue-700';
                    else if (d < 40) devStyle = 'bg-orange-100 text-orange-700';
                  }
                  return (
                    <tr key={index}>
                      <td className="py-3 font-semibold text-gray-800">{row.label}</td>
                      <td className="py-3 text-center text-gray-700">
                        {row.input != null ? `${row.input} ${row.unit}` : <span className="text-gray-300">-</span>}
                      </td>
                      <td className="py-3 text-center text-gray-500">{row.average} {row.unit}</td>
                      <td className="py-3 text-center">
                        {d !== null ? (
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${devStyle}`}>{d}</span>
                        ) : (
                          <span className="text-gray-300 text-xs">-</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">偏差値は全国平均を50とした標準化スコア。60以上は得意、40以下は伸びしろがあります。</p>
        </div>

        {/* 再診断 */}
        <div className="text-center pb-4">
          <button
            onClick={() => router.push('/shindan/sports')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 font-bold rounded-2xl transition-all text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            もう一度診断する
          </button>
        </div>

      </div>
    </div>
  );
}
