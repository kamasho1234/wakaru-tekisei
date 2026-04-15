'use client';

import { FitnessProfile } from '@/types';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

interface RadarChartComponentProps {
  profile: FitnessProfile;
}

export function RadarChartComponent({ profile }: RadarChartComponentProps) {
  const data = [
    {
      name: '持久力',
      value: Math.round(profile.持久力),
      fullMark: 100,
    },
    {
      name: '瞬発力',
      value: Math.round(profile.瞬発力),
      fullMark: 100,
    },
    {
      name: '敏捷性',
      value: Math.round(profile.敏捷性),
      fullMark: 100,
    },
    {
      name: '筋力',
      value: Math.round(profile.筋力),
      fullMark: 100,
    },
    {
      name: '柔軟性',
      value: Math.round(profile.柔軟性),
      fullMark: 100,
    },
    {
      name: '巧緻性',
      value: Math.round(profile.巧緻性),
      fullMark: 100,
    },
  ];

  return (
    <div className="w-full h-96 bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">体力プロフィール</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis dataKey="name" tick={{ fill: '#666', fontSize: 12 }} />
          <Radar
            name="偏差値"
            dataKey="value"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-500 mt-4 text-center">
        値は偏差値です（50が全国平均）
      </p>
    </div>
  );
}
