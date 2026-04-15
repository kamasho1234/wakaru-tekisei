import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0">
                <Image src="/icon.png" alt="わかる！スポーツ適性" width={28} height={28} className="object-cover" />
              </div>
              <span className="font-black text-white text-sm">わかる！スポーツ適性</span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs">
              お子さんの体力測定データをもとに、向いているスポーツと運動発達を分析するサービスです。
            </p>
          </div>

          <nav className="flex gap-8">
            <div>
              <p className="text-white font-semibold text-sm mb-3">診断メニュー</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/shindan/sports" className="hover:text-white transition-colors">スポーツ適性診断</Link></li>
                <li><Link href="/shindan/check" className="hover:text-white transition-colors">うちの子大丈夫診断</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-3">平均データ</p>
              <ul className="space-y-2 text-sm">
                {[6, 8, 10, 12].map((age) => (
                  <li key={age}>
                    <Link href={`/heikin/${age}sai-male`} className="hover:text-white transition-colors">{age}歳の平均</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs">
          <p>本サイトは文部科学省・スポーツ庁のデータをもとに算出しています。医療的診断ではありません。</p>
          <p className="shrink-0">© 2026 わかる！スポーツ適性</p>
        </div>
      </div>
    </footer>
  );
}
