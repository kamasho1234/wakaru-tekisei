'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0">
                <Image src="/icon.png" alt={t('footer.siteName')} width={28} height={28} className="object-cover" />
              </div>
              <span className="font-black text-white text-sm">{t('footer.siteName')}</span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs">
              {t('footer.siteDescription')}
            </p>
          </div>

          <nav className="flex gap-8">
            <div>
              <p className="text-white font-semibold text-sm mb-3">{t('footer.diagnosisMenu')}</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/shindan/sports" className="hover:text-white transition-colors">{t('footer.sportsDiagnosis')}</Link></li>
                <li><Link href="/shindan/check" className="hover:text-white transition-colors">{t('footer.checkDiagnosis')}</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-3">{t('footer.averageData')}</p>
              <ul className="space-y-2 text-sm">
                {[6, 8, 10, 12].map((age) => (
                  <li key={age}>
                    <Link href={`/heikin/${age}sai-male`} className="hover:text-white transition-colors">{t('footer.ageAverage', { age })}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs">
          <p>{t('footer.disclaimer')}</p>
          <p className="shrink-0">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
