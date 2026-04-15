'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl overflow-hidden shrink-0">
              <Image src="/icon.png" alt={t('header.siteName')} width={32} height={32} className="object-cover" />
            </div>
            <span className="font-black text-gray-900 text-base">{t('header.siteName')}</span>
          </Link>

          <nav className="flex items-center gap-1">
            <Link
              href="/shindan/sports"
              className="px-3 py-1.5 rounded-xl text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {t('header.sportsNav')}
            </Link>
            <Link
              href="/shindan/check"
              className="px-3 py-1.5 rounded-xl text-sm font-semibold text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
            >
              {t('header.checkNav')}
            </Link>
            <button
              onClick={() => setLang(lang === 'ja' ? 'en' : 'ja')}
              className="ml-2 px-3 py-1.5 rounded-xl text-sm font-semibold border border-gray-300 hover:bg-gray-50 text-gray-600 transition-colors"
            >
              {lang === 'ja' ? 'EN' : 'JP'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
