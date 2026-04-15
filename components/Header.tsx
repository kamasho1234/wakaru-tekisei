import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl overflow-hidden shrink-0">
              <Image src="/icon.png" alt="わかる！スポーツ適性" width={32} height={32} className="object-cover" />
            </div>
            <span className="font-black text-gray-900 text-base">わかる！スポーツ適性</span>
          </Link>

          <nav className="flex items-center gap-1">
            <Link
              href="/shindan/sports"
              className="px-3 py-1.5 rounded-xl text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              スポーツ診断
            </Link>
            <Link
              href="/shindan/check"
              className="px-3 py-1.5 rounded-xl text-sm font-semibold text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
            >
              うちの子診断
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
