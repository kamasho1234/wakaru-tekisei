'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  getQuestionsByAge,
} from '@/lib/calculations/childCheck';

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

  if (step === 'info') {
    return (
      <div className="min-h-screen bg-[#F7F9FF] py-8 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
              3〜12歳対応
            </div>
            <h1 className="text-2xl font-black text-gray-900 mb-1">うちの子大丈夫診断</h1>
            <p className="text-sm text-gray-500">お子さんの運動発達状況をチェックリストで確認します</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-7">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">お子さんの年齢</label>

              {/* 幼児（3〜5歳） */}
              <div className="mb-3">
                <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">幼児（3〜5歳）</p>
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
                <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">小学生（6〜12歳）</p>
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

            {/* 年齢に応じた案内 */}
            {isYoji && (
              <div className="bg-orange-50 rounded-2xl p-4 text-sm text-orange-700 border border-orange-100">
                <p className="font-bold mb-1">3〜5歳向けのチェックリスト</p>
                <p className="text-xs">お子さんの普段の様子を思い浮かべながら答えてください。幼児期の発達には個人差があるので、参考程度にご活用ください。</p>
              </div>
            )}
            {!isYoji && (
              <div className="bg-green-50 rounded-2xl p-4 text-sm text-green-700 border border-green-100">
                <p className="font-bold mb-1">小学生向けのチェックリスト</p>
                <p className="text-xs">日常の運動・遊びの様子をもとに答えてください。測定不要で、観察だけで回答できます。</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">性別（任意）</label>
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
                    {g === 'male' ? '男の子' : '女の子'}
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
              チェックを始める
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
              <h1 className="text-base font-black text-gray-900">{age}歳のチェックリスト</h1>
              <span className="text-sm text-gray-500 font-medium">{answeredCount} / {relevantQuestions.length}</span>
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
                    <h2 className={`text-sm font-black ${color.text}`}>{category}</h2>
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
                            できる
                          </button>
                          <button
                            onClick={() => handleAnswer(question.id, 'no')}
                            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                              answers[question.id] === 'no'
                                ? 'bg-red-400 text-white'
                                : 'bg-white border border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-500'
                            }`}
                          >
                            まだできない
                          </button>
                          <button
                            onClick={() => handleAnswer(question.id, 'skip')}
                            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                              answers[question.id] === 'skip'
                                ? 'bg-gray-400 text-white'
                                : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-400'
                            }`}
                          >
                            わからない
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
              戻る
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
                ? `あと${minRequired - answeredCount}問回答してください`
                : '結果を見る'}
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
            <h1 className="text-xl font-black text-gray-900 mb-6">診断内容の確認</h1>

            <div className="bg-gray-50 rounded-2xl p-5 mb-6 space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-12">年齢</span>
                <span className="font-bold text-gray-900">{age}歳</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-12">回答数</span>
                <span className="font-bold text-gray-900">{answeredCount}項目</span>
              </div>
              <p className="text-xs text-gray-400 pt-1">この診断は参考値です。医療診断ではありません。</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep('questions')}
                className="px-6 py-3 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold rounded-2xl transition-all text-sm"
              >
                修正する
              </button>
              <button
                onClick={handleDiagnose}
                className={`flex-1 text-white py-3 rounded-2xl font-bold text-sm transition-all shadow-md ${
                  isYoji
                    ? 'bg-orange-500 hover:bg-orange-600 shadow-orange-200'
                    : 'bg-green-600 hover:bg-green-700 shadow-green-200'
                }`}
              >
                診断する
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
