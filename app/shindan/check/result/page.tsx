'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, Suspense, useEffect, useRef } from 'react';
import { calcChildCheck } from '@/lib/calculations/childCheck';
import ShareButtons from '@/components/ShareButtons';
import { useLanguage } from '@/contexts/LanguageContext';

const categoryColors: Record<string, string> = {
  '走る・跳ぶ':   'bg-blue-400',
  'ボール運動':   'bg-orange-400',
  'バランス':     'bg-purple-400',
  '体力・持久力': 'bg-green-400',
  '生活動作':     'bg-amber-400',
};

const levelStyles = {
  excellent:    { color: 'bg-green-500',  text: 'text-green-700',  bg: 'bg-green-50',  border: 'border-green-200' },
  good:         { color: 'bg-blue-500',   text: 'text-blue-700',   bg: 'bg-blue-50',   border: 'border-blue-200' },
  average:      { color: 'bg-amber-500',  text: 'text-amber-700',  bg: 'bg-amber-50',  border: 'border-amber-200' },
  needsSupport: { color: 'bg-orange-500', text: 'text-orange-700', bg: 'bg-orange-50', border: 'border-orange-200' },
};

function ChildCheckResultContent() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const sentRef      = useRef(false);
  const { t }        = useLanguage();

  const { age, isYoji, result } = useMemo(() => {
    const rawAge = parseInt(searchParams.get('age') || '6', 10);
    const age    = Number.isInteger(rawAge) && rawAge >= 3 && rawAge <= 12 ? rawAge : 6;

    let answers: Record<string, 'yes' | 'no' | 'skip'> = {};
    const answersRaw = searchParams.get('answers');
    if (answersRaw) {
      try {
        const parsed: unknown = JSON.parse(decodeURIComponent(answersRaw));
        if (parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed)) {
          const valid: Record<string, 'yes' | 'no' | 'skip'> = {};
          const allowed = new Set(['yes', 'no', 'skip']);
          for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
            if (typeof k === 'string' && typeof v === 'string' && allowed.has(v)) {
              valid[k] = v as 'yes' | 'no' | 'skip';
            }
          }
          answers = valid;
        }
      } catch {
        // 不正なJSONは空の回答として扱う
      }
    }

    const isYoji = age <= 5;
    const result = calcChildCheck(age, answers);
    return { age, isYoji, result };
  }, [searchParams]);

  const levelLabels: Record<string, string> = {
    excellent:    t('checkResult.levelExcellent'),
    good:         t('checkResult.levelGood'),
    average:      t('checkResult.levelAverage'),
    needsSupport: t('checkResult.levelNeedsSupport'),
  };
  const lv = { ...levelStyles[result.level], label: levelLabels[result.level] ?? result.level };

  // 診断結果を自動送信
  useEffect(() => {
    if (sentRef.current) return;
    sentRef.current = true;

    const sendResult = async () => {
      try {
        const gender = searchParams.get('gender');
        await fetch('/api/stats/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'check',
            age,
            gender: gender || undefined,
            result: result.level,
            score: result.totalScore,
          }),
        });
      } catch (error) {
        console.error('Failed to save check diagnosis:', error);
      }
    };

    sendResult();
  }, [age, result.level, result.totalScore, searchParams]);

  return (
    <div className="min-h-screen bg-[#F7F9FF] py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-5">

        {/* タイトル */}
        <div className={`rounded-3xl p-6 text-white ${isYoji ? 'bg-gradient-to-br from-orange-400 to-amber-500' : 'bg-gradient-to-br from-green-500 to-teal-600'}`}>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {isYoji ? '3〜5歳向け' : '6〜12歳向け'}診断
            </span>
          </div>
          <p className="text-white/80 text-sm mb-1">{t('checkResult.ageTitle', { age })}</p>
          <h1 className="text-3xl font-black">{lv.label}</h1>
          <p className="text-white/90 text-sm mt-1">{t('checkResult.totalScoreSub', { score: result.totalScore })}</p>
        </div>

        {/* 総合スコア */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className={`${lv.color} text-white rounded-2xl w-16 h-16 flex items-center justify-center shrink-0`}>
              <span className="text-xl font-black">{result.totalScore}</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">{t('checkResult.totalScoreLabel')}</p>
              <div className="w-full bg-gray-100 rounded-full h-3 w-48">
                <div
                  className={`h-3 rounded-full transition-all ${lv.color}`}
                  style={{ width: `${result.totalScore}%` }}
                />
              </div>
            </div>
          </div>
          <div className={`rounded-2xl p-4 ${lv.bg} border ${lv.border}`}>
            <p className={`text-sm font-semibold ${lv.text}`}>{result.message}</p>
          </div>
        </div>

        {/* カテゴリ別スコア */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-base font-black text-gray-900 mb-4">{t('checkResult.categoryTitle')}</h2>
          <div className="space-y-3">
            {Object.entries(result.categoryScores).map(([category, score]) => (
              <div key={category}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-gray-600">{category}</span>
                  <span className="text-xs font-bold text-gray-800">{score}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full transition-all ${categoryColors[category] ?? 'bg-gray-400'}`}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* アドバイス */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-1.5 h-6 rounded-full ${isYoji ? 'bg-orange-500' : 'bg-green-600'}`} />
            <h2 className="text-lg font-black text-gray-900">{t('checkResult.adviceTitle')}</h2>
          </div>
          <div className="space-y-2">
            {result.recommendations.map((rec, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-start gap-3">
                <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-black ${isYoji ? 'bg-orange-500' : 'bg-green-600'}`}>
                  {i + 1}
                </span>
                <p className="text-sm text-gray-700">{rec}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SNS共有 */}
        <ShareButtons
          text={`うちの子（${age}歳）の運動発達チェック結果：${lv.label}（${result.totalScore}点）でした！ #うちの子大丈夫診断 #子育て`}
        />

        {/* 注意書き */}
        <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100">
          <h2 className="text-sm font-black text-amber-800 mb-2">{t('checkResult.parentTitle')}</h2>
          <p className="text-xs text-amber-700 leading-relaxed">{t('checkResult.parentBody')}</p>
        </div>

        {/* 次のステップ */}
        {isYoji && (
          <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">
            <h2 className="text-sm font-black text-blue-800 mb-2">{t('checkResult.yojiNextTitle')}</h2>
            <p className="text-sm text-blue-700 leading-relaxed mb-4">
              {t('checkResult.yojiNextBody')}
            </p>
            <button
              onClick={() => router.push('/shindan/yoji')}
              className="inline-flex items-center gap-1 bg-blue-600 text-white font-bold text-xs px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
            >
              {t('checkResult.yojiNextBtn')}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
        {!isYoji && (
          <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">
            <h2 className="text-sm font-black text-blue-800 mb-2">{t('checkResult.shoNextTitle')}</h2>
            <p className="text-sm text-blue-700 leading-relaxed mb-4">
              {t('checkResult.shoNextBody')}
            </p>
            <button
              onClick={() => router.push('/shindan/sports')}
              className="inline-flex items-center gap-1 bg-blue-600 text-white font-bold text-xs px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
            >
              {t('checkResult.shoNextBtn')}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* 再診断 */}
        <div className="text-center pb-4">
          <button
            onClick={() => router.push('/shindan/check')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 hover:border-green-300 text-gray-700 font-bold rounded-2xl transition-all text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {t('common.retry')}
          </button>
        </div>

      </div>
    </div>
  );
}

export default function ChildCheckResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F9FF] flex items-center justify-center"><p className="text-gray-500 text-sm">読み込み中...</p></div>}>
      <ChildCheckResultContent />
    </Suspense>
  );
}
