'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, Suspense, useEffect, useRef } from 'react';
import Image from 'next/image';
import { calcYojiType, scoreToPercent, YojiAnswer } from '@/lib/calculations/yojiCheck';
import { yojiTypes } from '@/lib/data/yojiData';
import ShareButtons from '@/components/ShareButtons';

const categoryLabels: Record<string, string> = {
  active: '走る・跳ぶ',
  rhythm: 'リズム・表現',
  focus:  '集中・器用',
  social: 'チーム・社交',
};

const categoryColors: Record<string, string> = {
  active: 'bg-orange-400',
  rhythm: 'bg-purple-400',
  focus:  'bg-blue-400',
  social: 'bg-green-400',
};

function YojiResultContent() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const sentRef = useRef(false);

  const { age, gender, primary, scores } = useMemo(() => {
    const age        = parseInt(searchParams.get('age') || '4');
    const gender     = searchParams.get('gender') || 'unknown';
    const rawAnswers = searchParams.get('answers');
    const answers: Record<string, YojiAnswer> = rawAnswers
      ? JSON.parse(decodeURIComponent(rawAnswers))
      : {};
    const result = calcYojiType(answers);
    return { age, gender, ...result };
  }, [searchParams]);

  const genderLabel = gender === 'male' ? '男の子' : gender === 'female' ? '女の子' : '';

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
            type: 'yoji',
            age,
            gender: gender === 'unknown' ? undefined : gender,
            result: primary.id,
          }),
        });
      } catch (error) {
        console.error('Failed to save yoji diagnosis:', error);
      }
    };

    sendResult();
  }, [age, gender, primary.id]);

  return (
    <div className="min-h-screen bg-[#F7F9FF] py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-5">

        {/* タイトル */}
        <div className={`bg-gradient-to-br ${primary.color} rounded-3xl p-6 text-white`}>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">3〜5歳向け診断</span>
            {genderLabel && (
              <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">{genderLabel}</span>
            )}
          </div>
          <p className="text-white/80 text-sm mb-1">{age}歳のお子さんの運動タイプ</p>
          <h1 className="text-3xl font-black">{primary.name}</h1>
          <p className="text-white/90 text-sm mt-1">{primary.tagline}</p>
        </div>

        {/* タイプ説明 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-base font-black text-gray-900 mb-3">このタイプの特徴</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{primary.description}</p>
          <div className="flex flex-wrap gap-2">
            {primary.traits.map((t) => (
              <span key={t} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>

        {/* スコアバー */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-base font-black text-gray-900 mb-4">運動タイプのバランス</h2>
          <div className="space-y-3">
            {(Object.keys(scores) as (keyof typeof scores)[]).map((key) => {
              const pct = scoreToPercent(scores[key]);
              return (
                <div key={key}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-gray-600">{categoryLabels[key]}</span>
                    <span className="text-xs font-bold text-gray-800">{pct}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full transition-all ${categoryColors[key]}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* おすすめ習い事 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-6 bg-orange-500 rounded-full" />
            <h2 className="text-lg font-black text-gray-900">おすすめの習い事</h2>
          </div>
          <div className="space-y-3">
            {primary.recommendations.map((rec, i) => (
              <div key={rec.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex">
                {rec.image && (
                  <div className="relative w-24 shrink-0">
                    <Image src={rec.image} alt={rec.name} fill className="object-cover" />
                  </div>
                )}
                <div className="p-4 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-black px-2 py-0.5 rounded-full text-white ${
                      i === 0 ? 'bg-orange-500' : i === 1 ? 'bg-gray-400' : 'bg-gray-300'
                    }`}>
                      {i + 1}位
                    </span>
                    <span className="text-sm font-black text-gray-900">{rec.name}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{rec.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* アドバイス */}
        <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100">
          <h2 className="text-sm font-black text-amber-800 mb-2">保護者の方へ</h2>
          <p className="text-sm text-amber-700 leading-relaxed">{primary.advice}</p>
          <div className="mt-4 pt-4 border-t border-amber-200 text-xs text-amber-600 leading-relaxed">
            ※ この診断は参考値です。お子さんの興味・意欲を最優先に習い事を選んでください。幼児期はひとつに絞らず、いろいろな動きを経験することが大切です。
          </div>
        </div>

        {/* SNS共有 */}
        <ShareButtons
          text={`うちの子（${age}歳）は「${primary.name}」タイプでした！ #幼児スポーツ適性診断 #子育て`}
        />

        {/* 6歳になったら案内 */}
        <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">
          <h2 className="text-sm font-black text-blue-800 mb-2">6歳になったら</h2>
          <p className="text-sm text-blue-700 leading-relaxed mb-4">
            小学校入学後は新体力テストの結果から、より具体的なスポーツ適性を診断できます。
          </p>
          <button
            onClick={() => router.push('/shindan/sports')}
            className="inline-flex items-center gap-1 bg-blue-600 text-white font-bold text-xs px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
          >
            6歳以上の診断へ
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 再診断 */}
        <div className="text-center pb-4">
          <button
            onClick={() => router.push('/shindan/yoji')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 hover:border-orange-300 text-gray-700 font-bold rounded-2xl transition-all text-sm"
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

export default function YojiResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F9FF] flex items-center justify-center"><p className="text-gray-500 text-sm">読み込み中...</p></div>}>
      <YojiResultContent />
    </Suspense>
  );
}
