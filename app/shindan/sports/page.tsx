'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Age, FitnessInput } from '@/types';

// 3〜5歳は幼児診断へ、6〜12歳は体力測定診断へ
const yojiAges = [3, 4, 5];
const shoAges: Age[] = [6, 7, 8, 9, 10, 11, 12];

// 6〜8歳はシンプル4種目、9〜12歳はフル8種目
const simpleItems = [
  { key: '走50m',    label: '50m走',    unit: '秒', hint: '例: 10.5', note: '走るタイムを測定' },
  { key: '立ち幅跳び', label: '立ち幅跳び', unit: 'cm', hint: '例: 100',  note: '両足で跳んだ距離' },
  { key: 'ボール投げ', label: 'ボール投げ', unit: 'm',  hint: '例: 8',    note: 'ボールの飛んだ距離' },
  { key: '長座体前屈', label: '長座体前屈', unit: 'cm', hint: '例: 28',   note: '足先までの距離' },
];

const fullItems = [
  { key: '握力',      label: '握力',      unit: 'kg', hint: '例: 12.5' },
  { key: '上体起こし', label: '上体起こし', unit: '回', hint: '例: 15' },
  { key: '長座体前屈', label: '長座体前屈', unit: 'cm', hint: '例: 32' },
  { key: '反復横とび', label: '反復横とび', unit: '点', hint: '例: 35' },
  { key: 'シャトルラン', label: 'シャトルラン', unit: '回', hint: '例: 40' },
  { key: '走50m',    label: '50m走',    unit: '秒', hint: '例: 9.8' },
  { key: '立ち幅跳び', label: '立ち幅跳び', unit: 'cm', hint: '例: 120' },
  { key: 'ボール投げ', label: 'ボール投げ', unit: 'm',  hint: '例: 12' },
];

type FormData = Partial<FitnessInput>;
const steps = ['年齢・性別', 'データ入力', '確認'];

export default function SportsAptitudeForm() {
  const router  = useRouter();
  const [step, setStep]       = useState(1);
  const [formData, setFormData] = useState<FormData>({ age: 10, gender: 'male' });

  const currentAge    = formData.age ?? 10;
  const isYoji        = yojiAges.includes(currentAge);
  const isSimpleMode  = currentAge >= 6 && currentAge <= 8;
  const fitnessItems  = isSimpleMode ? simpleItems : fullItems;

  const handleAgeSelect = (age: number) => {
    setFormData({ age: age as Age, gender: formData.gender });
  };

  const handleFitnessChange = (key: string, value: string) => {
    const numValue = value === '' ? undefined : parseFloat(value);
    setFormData({ ...formData, [key]: numValue });
  };

  const handleNext = () => {
    if (step === 1 && isYoji) {
      // 幼児は別フローへ
      router.push(`/shindan/yoji?age=${currentAge}&gender=${formData.gender ?? ''}`);
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = () => {
    const params = new URLSearchParams();
    params.append('age', String(formData.age));
    params.append('gender', String(formData.gender));
    fitnessItems.forEach((item) => {
      const key = item.key as keyof FitnessInput;
      if (formData[key] !== undefined) params.append(key, String(formData[key]));
    });
    router.push(`/shindan/sports/result?${params.toString()}`);
  };

  const genderLabel = formData.gender === 'male' ? '男の子' : '女の子';

  return (
    <div className="min-h-screen bg-[#F7F9FF] py-8 px-4">
      <div className="max-w-2xl mx-auto">

        {/* ヘッダー */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-gray-900 mb-1">スポーツ適性診断</h1>
          <p className="text-sm text-gray-500">3〜12歳のお子さんに対応しています</p>
        </div>

        {/* ステップバー */}
        <div className="flex items-center mb-8">
          {steps.map((label, i) => {
            const num = i + 1;
            const active = step === num;
            const done   = step > num;
            return (
              <div key={label} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                    done ? 'bg-blue-600 text-white' : active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {done ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : num}
                  </div>
                  <span className={`text-xs mt-1 font-medium ${active ? 'text-blue-600' : 'text-gray-400'}`}>{label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 mb-4 ${done ? 'bg-blue-600' : 'bg-gray-200'}`} />
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">

          {/* Step 1: 年齢・性別 */}
          {step === 1 && (
            <div className="space-y-7">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">お子さんの年齢</label>

                {/* 幼児（3〜5歳） */}
                <div className="mb-3">
                  <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">幼児（3〜5歳）</p>
                  <div className="flex gap-2">
                    {yojiAges.map((a) => (
                      <button
                        key={a}
                        onClick={() => handleAgeSelect(a)}
                        className={`flex-1 py-3 rounded-2xl font-bold text-sm transition-all ${
                          currentAge === a
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
                  <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">小学生（6〜12歳）</p>
                  <div className="grid grid-cols-4 gap-2">
                    {shoAges.map((a) => (
                      <button
                        key={a}
                        onClick={() => handleAgeSelect(a)}
                        className={`py-3 rounded-2xl font-bold text-sm transition-all ${
                          currentAge === a
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {a}歳
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 選択中の年齢に応じた案内 */}
              {isYoji && (
                <div className="bg-orange-50 rounded-2xl p-4 text-sm text-orange-700 border border-orange-100">
                  <p className="font-bold mb-1">3〜5歳向けの診断に切り替わります</p>
                  <p className="text-xs">体力測定ではなく、お子さんの普段の様子を観察して答えるチェックリスト形式です。</p>
                </div>
              )}
              {isSimpleMode && (
                <div className="bg-blue-50 rounded-2xl p-4 text-sm text-blue-700 border border-blue-100">
                  <p className="font-bold mb-1">6〜8歳：かんたん4種目モード</p>
                  <p className="text-xs">50m走・立ち幅跳び・ボール投げ・長座体前屈の4種目で診断します。全部測定できていなくても大丈夫です。</p>
                </div>
              )}
              {!isYoji && !isSimpleMode && (
                <div className="bg-blue-50 rounded-2xl p-4 text-sm text-blue-700 border border-blue-100">
                  <p className="font-bold mb-1">9〜12歳：新体力テスト8種目</p>
                  <p className="text-xs">学校の新体力テストの結果を使います。測定していない種目はスキップできます。</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">性別</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['male', 'female'] as const).map((g) => (
                    <button
                      key={g}
                      onClick={() => setFormData({ ...formData, gender: g })}
                      className={`py-3 rounded-2xl font-bold text-sm transition-all ${
                        formData.gender === g
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
            </div>
          )}

          {/* Step 2: 体力データ入力（6歳以上のみ） */}
          {step === 2 && (
            <div>
              <div className="bg-blue-50 rounded-2xl px-4 py-3 mb-5 text-sm text-blue-700 font-medium">
                {currentAge}歳 {genderLabel}のデータを入力してください。
                測定できていない種目はスキップできます。
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fitnessItems.map((item) => (
                  <div key={item.key}>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">
                      {item.label}
                      <span className="text-gray-400 font-normal ml-1">({item.unit})</span>
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData[item.key as keyof FitnessInput] || ''}
                      onChange={(e) => handleFitnessChange(item.key, e.target.value)}
                      placeholder={item.hint}
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-gray-800 bg-gray-50 text-sm transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: 確認 */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">入力内容の確認</p>
                <div className="flex gap-6 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">年齢</p>
                    <p className="text-lg font-black text-gray-900">{currentAge}歳</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">性別</p>
                    <p className="text-lg font-black text-gray-900">{genderLabel}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">モード</p>
                    <p className="text-sm font-bold text-gray-700">{isSimpleMode ? '4種目モード' : '8種目モード'}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {fitnessItems.map((item) => {
                    const value = formData[item.key as keyof FitnessInput];
                    return value !== undefined ? (
                      <div key={item.key} className="flex justify-between items-center bg-white rounded-xl px-3 py-2">
                        <span className="text-xs text-gray-600">{item.label}</span>
                        <span className="text-sm font-bold text-gray-900">{value}{item.unit}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
              <div className="bg-amber-50 rounded-2xl px-4 py-3 text-xs text-amber-700">
                この内容で診断を開始します。よろしければ「診断する」を押してください。
              </div>
            </div>
          )}

          {/* ボタン */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                step === 1
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              戻る
            </button>

            {step < 3 ? (
              <button
                onClick={handleNext}
                className={`flex-1 py-3 rounded-2xl font-bold text-sm transition-all shadow-md ${
                  isYoji
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-200'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200'
                }`}
              >
                {isYoji ? '幼児診断へ進む' : '次へ'}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold text-sm transition-all shadow-md shadow-green-200"
              >
                診断する
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
