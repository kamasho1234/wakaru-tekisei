'use client';

import Link from 'next/link';
import Image from 'next/image';
import AverageDataSection from '@/components/AverageDataSection';
import AverageDataTopShare from '@/components/AverageDataTopShare';
import HeroSlider from '@/components/HeroSlider';
import CommunityStats from '@/components/CommunityStats';
import { useLanguage } from '@/contexts/LanguageContext';

const sportImages = [
  { name: 'サッカー',     src: '/images/sport-soccer.jpg' },
  { name: '水泳',         src: '/images/sport-swimming.jpg' },
  { name: 'テニス',       src: '/images/sport-tennis.jpg' },
  { name: 'バスケット',   src: '/images/sport-basketball.jpg' },
  { name: '野球',         src: '/images/sport-baseball.jpg' },
  { name: '体操',         src: '/images/sport-gymnastics.jpg' },
  { name: 'ゴルフ',       src: '/images/sport-golf.jpg' },
  { name: 'ダンス',       src: '/images/sport-dance.jpg' },
  { name: '空手',         src: '/images/sport-karate.jpg' },
  { name: '柔道・武道',   src: '/images/sport-judo.jpg' },
  { name: 'バレーボール', src: '/images/sport-volleyball.jpg' },
  { name: 'バドミントン', src: '/images/sport-badminton.jpg' },
  { name: '卓球',         src: '/images/sport-tabletennis.jpg' },
  { name: 'ラグビー',     src: '/images/sport-rugby.jpg' },
  { name: '自転車競技',   src: '/images/sport-cycling.jpg' },
];

export default function Home() {
  const { t } = useLanguage();

  const trustItems = [
    t('home.trust1'),
    t('home.trust2'),
    t('home.trust3'),
    t('home.trust4'),
  ];

  const steps = [
    { step: '1', title: t('home.step1Title'), desc: t('home.step1Desc') },
    { step: '2', title: t('home.step2Title'), desc: t('home.step2Desc') },
    { step: '3', title: t('home.step3Title'), desc: t('home.step3Desc') },
  ];

  return (
    <div className="bg-[#F7F9FF]">

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[520px] sm:min-h-[600px] flex items-center">
        <HeroSlider />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 w-full py-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium text-white mb-6">
              <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {t('home.badge')}
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
              {t('home.heroTitle')}
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              {t('home.heroSubtext')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/shindan/sports"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-blue-700 font-bold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {t('home.heroCta1')}
              </Link>
              <Link
                href="/shindan/check"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white/15 border-2 border-white/40 text-white font-bold text-base hover:bg-white/25 transition-all backdrop-blur-sm"
              >
                {t('home.heroCta2')}
              </Link>
            </div>

            <AverageDataTopShare />
          </div>
        </div>
      </section>

      {/* 安心バー */}
      <section className="bg-white border-b border-gray-100 py-3.5 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-1.5">
          {trustItems.map((text) => (
            <div key={text} className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
              <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* 2つの診断メニュー */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-2">Diagnosis</p>
            <h2 className="text-3xl font-black text-gray-900">{t('home.diagnosisSection')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* スポーツ適性診断 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/kids-running.jpg"
                  alt={t('home.sportsCardTitle')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">{t('home.sportsCardBadge')}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-gray-900 mb-2">{t('home.sportsCardTitle')}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {t('home.sportsCardDesc')}
                </p>
                <Link
                  href="/shindan/sports"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                >
                  {t('home.startDiagnosis')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* うちの子大丈夫診断 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/kids-check.jpg"
                  alt={t('home.checkCardTitle')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">{t('home.checkCardBadge')}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-gray-900 mb-2">{t('home.checkCardTitle')}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {t('home.checkCardDesc')}
                </p>
                <Link
                  href="/shindan/check"
                  className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-green-700 transition-colors text-sm"
                >
                  {t('home.startDiagnosis')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* スポーツ種目グリッド */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-2">Sports</p>
            <h2 className="text-3xl font-black text-gray-900">{t('home.sportsSection')}</h2>
            <p className="text-gray-500 mt-3 text-sm">{t('home.sportsSectionSub')}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {sportImages.map((sport) => (
              <div key={sport.name} className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-default">
                <Image
                  src={sport.src}
                  alt={sport.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-white font-black text-base drop-shadow-md">{sport.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <span className="bg-gray-100 text-gray-500 text-xs font-medium px-4 py-1.5 rounded-full">{t('home.sportsSectionMore')}</span>
          </div>
        </div>
      </section>

      {/* コーチと子供セクション */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto min-h-[280px]">
                <Image
                  src="/images/kids-relay.jpg"
                  alt="子供たちがリレーをしている"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">How it works</p>
                <h2 className="text-2xl font-black text-gray-900 mb-4">{t('home.howSection')}</h2>
                <div className="space-y-4">
                  {steps.map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-black">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href="/shindan/sports"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-2xl hover:bg-blue-700 transition-colors text-sm shadow-md shadow-blue-200"
                  >
                    {t('home.diagnoseNow')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* コミュニティ統計 */}
      <CommunityStats />

      {/* 全国平均データ */}
      <AverageDataSection />

    </div>
  );
}
