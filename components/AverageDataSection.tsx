'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { fitnessNorms, AgeGenderNorms } from '@/lib/data/fitnessData';
import { useLanguage } from '@/contexts/LanguageContext';

type MetricKey = keyof AgeGenderNorms;

const ages = [6, 7, 8, 9, 10, 11, 12] as const;

const metrics: {
  key: MetricKey;
  unit: string;
  description: string;
  lowerIsBetter?: boolean;
}[] = [
  { key: '立ち幅跳び',   unit: 'cm',  description: '瞬発力・下半身パワー' },
  { key: 'シャトルラン', unit: '回',  description: '持久力・有酸素能力' },
  { key: 'ボール投げ',   unit: 'm',   description: '投擲力・上半身パワー' },
  { key: '走50m',        unit: '秒',  description: '走力・スピード', lowerIsBetter: true },
];

const highlights = [
  { label: '調査対象年度', value: '2023年度',  sub: '令和5年度体力・運動能力調査' },
  { label: '全国の対象児童数', value: '約200万人', sub: '小学1〜6年生' },
  { label: '測定種目数',   value: '8種目',     sub: '握力・シャトルランほか' },
  { label: 'データ出典',   value: '文部科学省', sub: 'スポーツ庁 体力・運動能力調査' },
];

type CustomTooltipProps = {
  active?: boolean;
  payload?: { color: string; name: string; value: number }[];
  label?: string;
  unit: string;
};

function CustomTooltip({ active, payload, label, unit }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg px-4 py-3 text-sm">
      <p className="font-black text-gray-800 mb-2">{label}</p>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
          <span className="text-gray-600">{p.name}</span>
          <span className="font-bold text-gray-900 ml-auto pl-4">
            {p.value} {unit}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function AverageDataSection() {
  const { t } = useLanguage();
  const [selectedMetric, setSelectedMetric] = useState<MetricKey>('立ち幅跳び');

  const metric = metrics.find((m) => m.key === selectedMetric)!;

  const chartData = ages.map((age) => ({
    age: `${age}歳`,
    [t('avgSection.maleLabel')]: fitnessNorms[age].male[selectedMetric].mean,
    [t('avgSection.femaleLabel')]: fitnessNorms[age].female[selectedMetric].mean,
  }));

  const maleGrowth = Math.abs(
    fitnessNorms[12].male[selectedMetric].mean - fitnessNorms[6].male[selectedMetric].mean
  ).toFixed(1);
  const femaleGrowth = Math.abs(
    fitnessNorms[12].female[selectedMetric].mean - fitnessNorms[6].female[selectedMetric].mean
  ).toFixed(1);

  const yDomain = (() => {
    const maleLabel = t('avgSection.maleLabel');
    const femaleLabel = t('avgSection.femaleLabel');
    const allVals = chartData.flatMap((d) => [d[maleLabel], d[femaleLabel]]).filter((v) => typeof v === 'number') as number[];
    const min = Math.min(...allVals);
    const max = Math.max(...allVals);
    const pad = (max - min) * 0.15;
    return [Math.floor(min - pad), Math.ceil(max + pad)] as [number, number];
  })();

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* ヘッダー */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {t('avgSection.sectionLabel')}
            </span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-2">{t('avgSection.sectionTitle')}</h2>
          <p className="text-gray-500 text-sm max-w-xl">
            {t('avgSection.sectionSub')}
          </p>
        </div>

        {/* 権威性カード 4枚 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {highlights.map((h) => (
            <div key={h.label} className="bg-slate-800 rounded-2xl p-4 text-white">
              <p className="text-slate-400 text-xs mb-1">{h.label}</p>
              <p className="text-xl font-black leading-tight mb-0.5">{h.value}</p>
              <p className="text-slate-400 text-xs leading-snug">{h.sub}</p>
            </div>
          ))}
        </div>

        {/* グラフエリア */}
        <div className="bg-[#F7F9FF] rounded-3xl p-6 sm:p-8 border border-gray-100 mb-8">

          {/* メトリクスタブ */}
          <div className="flex flex-wrap gap-2 mb-6">
            {metrics.map((m) => (
              <button
                key={m.key}
                onClick={() => setSelectedMetric(m.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedMetric === m.key
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {t(`fitness.${m.key as any}`)}
                <span className="ml-1 opacity-70">({m.unit})</span>
              </button>
            ))}
          </div>

          {/* グラフタイトル */}
          <div className="flex items-end justify-between mb-4 flex-wrap gap-2">
            <div>
              <h3 className="text-base font-black text-gray-900">{t(`fitness.${metric.key as any}`)}の全国平均推移</h3>
              <p className="text-xs text-gray-500 mt-0.5">{metric.description}</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-6 h-0.5 bg-blue-500 rounded inline-block" />
                {t('avgSection.maleLabel')}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-6 h-0.5 bg-pink-400 rounded inline-block" />
                {t('avgSection.femaleLabel')}
              </span>
            </div>
          </div>

          {/* LineChart */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="age"
                  tick={{ fontSize: 12, fill: '#6b7280', fontWeight: 600 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={yDomain}
                  tick={{ fontSize: 11, fill: '#9ca3af' }}
                  axisLine={false}
                  tickLine={false}
                  width={38}
                  tickFormatter={(v) => `${v}${metric.unit}`}
                />
                <Tooltip content={<CustomTooltip unit={metric.unit} />} />
                <Line
                  type="monotone"
                  dataKey={t('avgSection.maleLabel')}
                  stroke="#3b82f6"
                  strokeWidth={2.5}
                  dot={{ fill: '#3b82f6', r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey={t('avgSection.femaleLabel')}
                  stroke="#f472b6"
                  strokeWidth={2.5}
                  dot={{ fill: '#f472b6', r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* 伸び幅サマリー */}
          <div className="grid grid-cols-2 gap-3 mt-5">
            <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 border border-gray-100">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
              <div>
                <p className="text-xs text-gray-500">男子 6〜12歳の伸び</p>
                <p className="text-base font-black text-gray-900">
                  {metric.lowerIsBetter ? '-' : '+'}{maleGrowth} {metric.unit}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 border border-gray-100">
              <div className="w-2.5 h-2.5 rounded-full bg-pink-400 shrink-0" />
              <div>
                <p className="text-xs text-gray-500">女子 6〜12歳の伸び</p>
                <p className="text-base font-black text-gray-900">
                  {metric.lowerIsBetter ? '-' : '+'}{femaleGrowth} {metric.unit}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 年齢×性別リンクグリッド */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">{t('avgSection.viewDetail')}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ages.map((age) => (
              <div key={age} className="bg-[#F7F9FF] rounded-2xl p-3 border border-gray-100">
                <p className="text-center text-sm font-black text-gray-700 mb-2">{age}歳</p>
                <div className="flex gap-1.5">
                  <Link
                    href={`/heikin/${age}sai-male`}
                    className="flex-1 py-2 rounded-xl bg-blue-100 text-blue-700 text-xs font-bold hover:bg-blue-200 transition-colors text-center"
                  >
                    {t('heikin.male')}
                  </Link>
                  <Link
                    href={`/heikin/${age}sai-female`}
                    className="flex-1 py-2 rounded-xl bg-pink-100 text-pink-700 text-xs font-bold hover:bg-pink-200 transition-colors text-center"
                  >
                    {t('heikin.female')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-right">
            出典: 文部科学省 スポーツ庁「令和5年度体力・運動能力調査」
          </p>
        </div>

      </div>
    </section>
  );
}
