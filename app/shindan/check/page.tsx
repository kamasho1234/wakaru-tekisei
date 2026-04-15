'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getQuestionsByAge } from '@/lib/calculations/childCheck';
import { useLanguage } from '@/contexts/LanguageContext';

type StepType = 'info' | 'questions' | 'confirm';

const yojiAges = [3, 4, 5];
const shoAges  = [6, 7, 8, 9, 10, 11, 12];

const categories = ['走る・跳ぶ', 'ボール運動', 'バランス', '体力・持久力', '生活動作'] as const;

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  '走る・跳ぶ':   { bg: 'bg-blue-50',   text: 'text-blue-700',   border: 'border-blue-200' },
  'ボール運動':   { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  'バランス':     { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  '体力・持久力': { bg: 'bg-green-50',  text: 'text-green-700',  border: 'border-green-200' },
  '生活動作':     { bg: 'bg-amber-50',  text: 'text-amber-700',  border: 'border-amber-200' },
};

export default function ChildCheckPage() {
  const router = useRouter();
  const { t }  = useLanguage();
  const [step, setStep]       = useState<StepType>('info');
  const [age, setAge]         = useState<number>(6);
  const [gender, setGender]   = useState<'male' | 'female' | ''>('');
  const [answers, setAnswers] = useState<Record<string, 'yes' | 'no' | 'skip'>>({});

  const isYoji             = yojiAges.includes(age);
  const relevantQuestions  = getQuestionsByAge(age);
  // skip含め何らかの選択をした数（「わからない」も回答済みとして扱う）
  const answeredCount      = Object.keys(answers).length;
  const minRequired        = Math.ceil(relevantQuestions.length * 0.5);
  const progressPercentage =
    relevantQuestions.length > 0
      ? Math.round((answeredCount / relevantQuestions.length) * 100)
      : 0;

  const handleAgeChange = (newAge: number) => {
    setAge(newAge);
    setAnswers({});
  };

  const handleAnswer = (questionId: string, answer: 'yes' | 'no' | 'skip') => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleDiagnose = () => {
    const encodedData = encodeURIComponent(JSON.stringify(answers));
    router.push(`/shindan/check/result?age=${age}&gender=${gender || 'unknown'}&answers=${encodedData}`);
  };

  const categoryDisplay: Record<string, string> = {
    '走る・跳ぶ':   t('checkForm.catRun'),
    'ボール運動':   t('checkForm.catBall'),
    'バランス':     t('checkForm.catBalance'),
    '体力・持久力': t('checkForm.catStamina'),
    '生活動作':     t('checkForm.catLife'),
  };

  if (step === 'info') {
    return (
      <div className="min-h-screen bg-[#F7F9FF] py-8 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
              {isYoji ? t('checkForm.yojiBadge') : t('checkForm.shoBadge')}
            </div>
            <h1 className="text-2xl font-black text-gray-900 mb-1">{t('checkForm.title')}</h1>
            <p className="text-sm text-gray-500">{t('checkForm.hint')}</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-7">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">{t('checkForm.ageLabel')}</label>

              {/* 幼児（3〜5歳） */}
              <div className="mb-3">
                <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">{t('checkForm.yojiBadge')}</p>
                <div className="flex gap-2">
                  {yojiAges.map((a) => (
                    <button
                      key={a}
                      onClick={() => handleAgeChange(a)}
                      className={`flex-1 py-3 rounded-2xl font-bold text-sm transition-all ${
                        age === a
                          ? 'bg-orange-500 text-white shadow-md shadow-orange-200'
                          : 'bg-orange-50 text-orange-600 hover:bg-orange-100'
                      }`}
                    >
                      {a}歳
                    </button>
                  ))}
                </div>
              </div>

              {/* 小学生（6〜12歳） */}
              <div>
                <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">{t('checkForm.shoBadge')}</p>
                <div className="grid grid-cols-4 gap-2">
                  {shoAges.map((a) => (
                    <button
                      key={a}
                      onClick={() => handleAgeChange(a)}
                      className={`py-3 rounded-2xl font-bold text-sm transition-all ${
                        age === a
                          ? 'bg-green-600 text-white shadow-md shadow-green-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {a}歳
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">{t('checkForm.genderLabel')}</label>
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

            <button
              onClick={() => setStep('questions')}
              className={`w-full text-white py-4 rounded-2xl font-bold text-base transition-all shadow-md ${
                isYoji
                  ? 'bg-orange-500 hover:bg-orange-600 shadow-orange-200'
                  : 'bg-green-600 hover:bg-green-700 shadow-green-200'
              }`}
            >
              {t('checkForm.start')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'questions') {
    return (
      <div className="min-h-screen bg-[#F7F9FF] py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-5">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-base font-black text-gray-900">{age}{isYoji ? t('checkForm.yojiBadge') : t('checkForm.shoBadge')}</h1>
              <span className="text-sm text-gray-500 font-medium">
                {t('checkForm.progressCount', { answered: answeredCount, total: relevantQuestions.length })}
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${isYoji ? 'bg-orange-500' : 'bg-green-500'}`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <div className="space-y-5 mb-5">
            {categories.map((category) => {
              const categoryQuestions = relevantQuestions.filter((q) => q.category === category);
              if (categoryQuestions.length === 0) return null;
              const color = categoryColors[category];
              return (
                <div key={category} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className={`px-6 py-3 ${color.bg} border-b ${color.border}`}>
                    <h2 className={`text-sm font-black ${color.text}`}>{categoryDisplay[category] ?? category}</h2>
                  </div>
                  <div className="p-4 space-y-3">
                    {categoryQuestions.map((question) => (
                      <div key={question.id} className="bg-gray-50 rounded-2xl p-4">
                        <p className="text-sm font-semibold text-gray-800 mb-3">{question.question}</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAnswer(question.id, 'yes')}
                            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                              answers[question.id] === 'yes'
                                ? 'bg-green-500 text-white'
                                : 'bg-white border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-600'
                            }`}
                          >
                            {t('checkForm.answerYes')}
                          </button>
                          <button
                            onClick={() => handleAnswer(question.id, 'no')}
                            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                              answers[question.id] === 'no'
                                ? 'bg-red-400 text-white'
                                : 'bg-white border border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-500'
                            }`}
                          >
                            {t('checkForm.answerNo')}
                          </button>
                          <button
                            onClick={() => handleAnswer(question.id, 'skip')}
                            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                              answers[question.id] === 'skip'
                                ? 'bg-gray-400 text-white'
                                : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-400'
                            }`}
                          >
                            {t('checkForm.answerSkip')}
                          </button>
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
              onClick={() => setStep('confirm')}
              disabled={answeredCount < minRequired}
              className={`flex-1 disabled:bg-gray-200 disabled:text-gray-400 text-white py-3 rounded-2xl font-bold text-sm transition-all shadow-md disabled:shadow-none ${
                isYoji
                  ? 'bg-orange-500 hover:bg-orange-600 shadow-orange-200'
                  : 'bg-green-600 hover:bg-green-700 shadow-green-200'
              }`}
            >
              {answeredCount < minRequired
                ? t('checkForm.moreAnswers', { n: minRequired - answeredCount })
                : t('checkForm.viewResult')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'confirm') {
    return (
      <div className="min-h-screen bg-[#F7F9FF] py-8 px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h1 className="text-xl font-black text-gray-900 mb-6">{t('checkForm.confirmTitle')}</h1>

            <div className="bg-gray-50 rounded-2xl p-5 mb-6 space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-16">{t('sportsForm.ageDisplay')}</span>
                <span className="font-bold text-gray-900">{age}歳</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-16">{t('checkResult.totalScoreLabel')}</span>
                <span className="font-bold text-gray-900">{answeredCount}</span>
              </div>
              <p className="text-xs text-gray-400 pt-1">{t('checkResult.parentBody')}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep('questions')}
                className="px-6 py-3 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold rounded-2xl transition-all text-sm"
              >
                {t('common.back')}
              </button>
              <button
                onClick={handleDiagnose}
                className={`flex-1 text-white py-3 rounded-2xl font-bold text-sm transition-all shadow-md ${
                  isYoji
                    ? 'bg-orange-500 hover:bg-orange-600 shadow-orange-200'
                    : 'bg-green-600 hover:bg-green-700 shadow-green-200'
                }`}
              >
                {t('common.diagnose')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
