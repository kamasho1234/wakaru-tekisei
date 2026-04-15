'use client';

import { useEffect, useState, useRef } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { useLanguage } from '@/contexts/LanguageContext';

type RecentResult = {
  type: string;
  age: number;
  result: string;
  gender: string;
  createdAt: string;
};

type StatsData = {
  totalCount: number;
  sportsRanking: { name: string; count: number }[];
  yojiTypes: { id: string; label: string; count: number; color: string }[];
  recentResults: RecentResult[];
};

// 表示用のラベル取得（日本語のハードコードのままで、翻訳されるのは UI の部分）
const yojiResultLabel: Record<string, string> = {
  active:  '走る・跳ぶタイプ',
  rhythm:  'リズム・表現タイプ',
  focus:   '集中・器用タイプ',
  social:  'チーム・社交タイプ',
};
const checkResultLabel: Record<string, string> = {
  excellent:    '非常に順調',
  good:         '概ね順調',
  average:      '発達途中',
  needsSupport: 'サポート推奨',
};
const genderLabel: Record<string, string> = {
  male: '男の子', female: '女の子', unknown: '',
};

function toResultLabel(type: string, result: string) {
  if (type === 'yoji')  return yojiResultLabel[result] ?? result;
  if (type === 'check') return checkResultLabel[result] ?? result;
  return result;
}

const barColors = [
  '#1D4ED8', '#2563EB', '#3B82F6', '#4B92F7', '#60A5FA', '#74B3FB', '#93C5FD',
  '#A8D1FE', '#BFDBFE', '#CBE3FE', '#DBEAFE', '#E3EFFE', '#EFF6FF',
  '#F0F6FF', '#F5F9FF',
];

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (target === 0) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration]);

  return count;
}

export default function CommunityStats() {
  const { t } = useLanguage();
  const [stats, setStats] = useState<StatsData | null>(null);
  const [feedPage, setFeedPage] = useState(0);
  const [feedVisible, setFeedVisible] = useState(true);
  const displayCount = useCountUp(stats?.totalCount ?? 0);

  useEffect(() => {
    fetch('/api/stats')
      .then((r) => r.json())
      .then((d: StatsData) => setStats(d))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!stats || stats.recentResults.length <= 5) return;
    const total = stats.recentResults.length;
    const timer = setInterval(() => {
      setFeedVisible(false);
      setTimeout(() => {
        setFeedPage((p) => (p + 1) % Math.ceil(total / 5));
        setFeedVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, [stats]);

  if (!stats) return null;

  const feedItems = stats.recentResults.slice(feedPage * 5, feedPage * 5 + 5);
  const yojiTotal = stats.yojiTypes.reduce((s, t) => s + t.count, 0);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter mb-3">みんなの診断データ</h2>
          <p className="text-gray-400 text-sm">このサイトで診断した方のリアルタイム集計</p>
        </div>

        {/* カウンターバナー */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white/30 text-xs font-semibold tracking-[0.15em] uppercase mb-3">Total Diagnoses</p>
            <div className="flex items-end gap-2">
              <span className="text-6xl sm:text-7xl font-black tabular-nums text-white tracking-tighter">
                {displayCount.toLocaleString()}
              </span>
              <span className="text-white/40 text-xl font-bold mb-1.5">{t('community.totalLabel')}</span>
            </div>
          </div>
          <div className="flex gap-3">
            {[
              { label: 'スポーツ適性', value: stats.sportsRanking.reduce((s, r) => s + r.count, 0) },
              { label: '幼児適性',     value: yojiTotal },
              { label: '大丈夫診断',  value: Math.max(0, stats.totalCount - stats.sportsRanking.reduce((s, r) => s + r.count, 0) - yojiTotal) },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl px-5 py-4 text-center min-w-[90px]">
                <p className="text-2xl font-black text-white tabular-nums">{item.value.toLocaleString()}</p>
                <p className="text-white/40 text-xs mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* 人気スポーツランキング */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-gray-900 mb-6">
              {t('community.rankTitle', { n: stats.sportsRanking.length })}
            </h3>
            <ResponsiveContainer width="100%" height={Math.max(260, stats.sportsRanking.length * 32)}>
              <BarChart
                data={stats.sportsRanking}
                layout="vertical"
                margin={{ top: 0, right: 40, left: 4, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={110}
                  tick={{ fontSize: 12, fill: '#374151', fontWeight: 600 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(v) => [`${Number(v).toLocaleString()}人`, '診断数']}
                  contentStyle={{ borderRadius: '10px', border: '1px solid #e5e7eb', fontSize: 12 }}
                />
                <Bar dataKey="count" radius={[0, 4, 4, 0]} label={{ position: 'right', fontSize: 11, fill: '#9ca3af', formatter: (v: unknown) => `${v}` }}>
                  {stats.sportsRanking.map((_, i) => (
                    <Cell key={i} fill={barColors[i] ?? barColors[barColors.length - 1]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* 右カラム */}
          <div className="space-y-4">

            {/* 幼児タイプ分布 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-5">幼児タイプ分布</h3>
              <div className="space-y-4">
                {stats.yojiTypes.map((t) => {
                  const pct = yojiTotal > 0 ? Math.round((t.count / yojiTotal) * 100) : 0;
                  return (
                    <div key={t.id}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs font-semibold text-gray-700">{t.label}</span>
                        <span className="text-xs font-bold text-gray-400">{t.count}人 ({pct}%)</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full bg-blue-600"
                          style={{ width: `${pct}%`, transition: 'width 1s ease-out' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 最近の診断フィード */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-4">{t('community.recentTitle')}</h3>
              <div
                className="space-y-1"
                style={{ opacity: feedVisible ? 1 : 0, transition: 'opacity 0.4s ease' }}
              >
                {feedItems.map((r, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                    <div className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black ${
                      r.type === 'sports' ? 'bg-blue-50 text-blue-600' : r.type === 'yoji' ? 'bg-orange-50 text-orange-500' : 'bg-emerald-50 text-emerald-600'
                    }`}>
                      {r.type === 'sports' ? '球' : r.type === 'yoji' ? '幼' : '確'}
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {r.age}歳{genderLabel[r.gender] ? `・${genderLabel[r.gender]}` : ''} → {toResultLabel(r.type, r.result)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
