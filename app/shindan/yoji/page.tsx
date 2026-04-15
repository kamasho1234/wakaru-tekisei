'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { yojiQuestions } from '@/lib/data/yojiData';
import { YojiAnswer } from '@/lib/calculations/yojiCheck';
import { useLanguage } from '@/contexts/LanguageContext';

const categoryKeys = ['active', 'rhythm', 'focus', 'social'] as const;
const categoryColors = {
  active:  { color: 'bg-orange-50',  text: 'text-orange-600' },
  rhythm:  { color: 'bg-purple-50',  text: 'text-purple-600' },
  focus:   { color: 'bg-blue-50',    text: 'text-blue-600' },
  social:  { color: 'bg-green-50',   text: 'text-green-600' },
};

export default function YojiDiagnosisPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [age, setAge]           = useState<number>(4);
  const [gender, setGender]     = useState<'male' | 'female' | ''>('');
  const [answers, setAnswers]   = useState<Record<string, YojiAnswer>>({});
  const [step, setStep]         = useState<'info' | 'questions'>('info');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const rawAge = parseInt(params.get('age') || '');
    if ([3, 4, 5].includes(rawAge)) setAge(rawAge);
    const rawGender = params.get('gender');
    if (rawGender === 'male' || rawGender === 'female') setGender(rawGender);
  }, []);

  const answeredCount  = Object.keys(answers).length;
  const totalQuestions = yojiQuestions.length;
  const progress       = Math.round((answeredCount / totalQuestions) * 100);
  const minRequired    = Math.ceil(totalQuestions * 0.7);
  const canSubmit      = answeredCount >= minRequired;

  const categoryDisplayKeys: Record<string, string> = {
    active: t('yojiResult.categoryActive'),
    rhythm: t('yojiResult.categoryRhythm'),
    focus:  t('yojiResult.categoryFocus'),
    social: t('yojiResult.categorySocial'),
  };

  const handleSubmit = () => {
    const params = new URLSearchParams();
    params.append('age', String(age));
    params.append('gender', gender || 'unknown');
    params.append('answers', encodeURIComponent(JSON.stringify(answers)));
    router.push(`/shindan/yoji/result?${params.toString()}`);
  };

  if (step === 'info') {
    return (
      <div className="min-h-screen bg-[#F7F9FF] py-8 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
              {t('yojiForm.badge')}
            </div>
            <h1 className="text-2xl font-black text-gray-900 mb-1">{t('yojiForm.title')}</h1>
            <p className="text-sm text-gray-500 leading-relaxed">{t('yojiForm.subtitle')}</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-7">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">{t('yojiForm.ageLabel')}</label>
              <div className="flex gap-2">
                {[3, 4, 5].map((a) => (
                  <button
                    key={a}
                    onClick={() => setAge(a)}
                    className={`flex-1 py-3 rounded-2xl font-black text-base transition-all ${
                      age === a
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {a}歳
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">{t('yojiForm.genderLabel')}</label>
              <div className="flex gap-3">
                {(['male', 'female'] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`flex-1 py-3 rounded-2xl font-bold text-sm transition-all ${
                      gender === g
                        ? g === 'male'
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                          : 'bg-pink-500 text-white shadow-md shadow-pink-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {g === 'male' ? t('common.male') : t('common.female')}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-4 text-xs text-amber-700 leading-relaxed">
              {t('yojiForm.hint')}
            </div>

            <button
              onClick={() => setStep('questions')}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-black text-base transition-all shadow-md shadow-orange-200"
            >
              {t('yojiForm.start')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F9FF] py-8 px-4">
      <div className="max-w-2xl mx-auto">

        {/* プログレス */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-black text-gray-900">
              {t('yojiForm.progressLabel', { age })}
            </span>
            <span className="text-sm text-gray-500">
              {t('yojiForm.progressCount', { answered: answeredCount, total: totalQuestions })}
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-5 mb-5">
          {categoryKeys.map((cat) => {
            const catInfo = categoryColors[cat];
            const catQuestions = yojiQuestions.filter((q) => q.category === cat);
            return (
              <div key={cat} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className={`px-5 py-3 ${catInfo.color}`}>
                  <span className={`text-xs font-black uppercase tracking-wider ${catInfo.text}`}>
                    {categoryDisplayKeys[cat]}
                  </span>
                </div>
                <div className="p-4 space-y-4">
                  {catQuestions.map((q) => (
                    <div key={q.id} className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-sm font-semibold text-gray-800 mb-3">{q.text}</p>
                      <div className="flex gap-2">
                        {(
                          [
                            { value: 'yes'       as YojiAnswer, label: t('yojiForm.answerYes'),       color: 'bg-green-500 text-white' },
                            { value: 'sometimes' as YojiAnswer, label: t('yojiForm.answerSometimes'), color: 'bg-amber-400 text-white' },
                            { value: 'no'        as YojiAnswer, label: t('yojiForm.answerNo'),        color: 'bg-gray-400 text-white' },
                          ]
                        ).map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.value }))}
                            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                              answers[q.id] === opt.value
                                ? opt.color
                                : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setStep('info')}
            className="px-6 py-3 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold rounded-2xl transition-all text-sm"
          >
            {t('common.back')}
          </button>
          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-200 disabled:text-gray-400 text-white py-3 rounded-2xl font-bold text-sm transition-all shadow-md shadow-orange-200 disabled:shadow-none"
          >
            {canSubmit
              ? t('yojiForm.viewResult')
              : t('yojiForm.moreAnswers', { n: minRequired - answeredCount })}
          </button>
        </div>
      </div>
    </div>
  );
}
