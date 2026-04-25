import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '本田圭佑の子供時代|大阪の少年がACミランのエースへ—強さの原点',
  description:
  'CSKAモスクワ・ACミランで活躍した本田圭佑選手の子供時代。大阪府摂津市出身で小学校から始めたサッカーと、「必ずACミランに行く」という強固な意志が世界への扉を開いた軌跡を紹介。',
  openGraph: {
    title: '本田圭佑の子供時代|大阪の少年がACミランのエースへ—強さの原点',
    description:
    'CSKAモスクワ・ACミランで活躍した本田圭佑選手の子供時代。大阪府摂津市出身で小学校から始めたサッカーと、「必ずACミランに行く」という強固な意志が世界への扉を開いた軌跡を紹介。',
    images: [{ url: '/images/articles/honda-keisuke-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/honda-keisuke-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/honda-keisuke-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '本田圭佑の子供時代|大阪の少年がACミランのエースへ—強さの原点',
    images: ['/images/articles/honda-keisuke-childhood.jpg'],
  },
};

export default function HondaKeisukeChildhoodPage() {
  return (
    <ArticleLayout
      title="本田圭佑の子供時代|大阪の少年がACミランのエースへ—強さの原点"
      heroImage="/images/articles/honda-keisuke-childhood.jpg"
      heroAlt="サッカーを練習する子ども"
      publishDate="2025年4月"
      slug="honda-keisuke-childhood"
      description="CSKAモスクワ・ACミランで活躍した本田圭佑選手の子供時代。大阪府摂津市出身で小学校から始めたサッカーと、「必ずACミランに行く」という強固な意志が世界への扉を開いた軌跡を紹介。"
      tags={['本田圭佑', 'サッカー', '幼少期']}
      shareText="本田圭佑選手が小学校の作文に書いた「ACミランへ行く」夢を現実にした話を紹介 #本田圭佑 #サッカー"
      citations={['https://ja.wikipedia.org/wiki/%E6%9C%AC%E7%94%B0%E5%9C%AD%E4%BD%91']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-rose-500 rounded-full inline-block"></span>
          本田圭佑の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          本田圭佑選手は1986年6月13日、大阪府摂津市で生まれました。CSKAモスクワ（ロシア）でUEFAチャンピオンズリーグのベスト8に貢献し、ACミランへ移籍。日本代表としてW杯3大会に出場し、キャプテンを務めた日本サッカーの象徴的存在です。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-rose-50 rounded-2xl p-4 text-center border border-rose-100">
            <p className="text-2xl font-black text-rose-600">1986年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-rose-50 rounded-2xl p-4 text-center border border-rose-100">
            <p className="text-2xl font-black text-rose-600">大阪府</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-rose-50 rounded-2xl p-4 text-center border border-rose-100">
            <p className="text-2xl font-black text-rose-600">AC Milan</p>
            <p className="text-xs text-gray-600 mt-1">夢のクラブ</p>
          </div>
        </div>

        <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100 mb-6">
          <p className="font-bold text-rose-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-rose-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1986年6月13日</span>
            </li>
            <li className="text-sm text-rose-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>大阪府摂津市</span>
            </li>
            <li className="text-sm text-rose-800 flex gap-2">
              <span className="font-bold">欧州:</span>
              <span>CSKAモスクワ、ACミラン等</span>
            </li>
            <li className="text-sm text-rose-800 flex gap-2">
              <span className="font-bold">代表:</span>
              <span>W杯3大会出場・キャプテン</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-rose-500 rounded-full inline-block"></span>
          小学校の作文に書いた「ACミランへ行く」
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          本田圭佑選手が世界に名を知られているエピソードの一つが、小学校の卒業文集に「ACミランに入団する」と書いたことです。当時の日本人選手には荒唐無稽に見えた夢を、本田選手は本気で信じ、実現させました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">祖父の影響でサッカーを始める</h3>
              <p className="text-sm text-gray-600">
                本田選手がサッカーを始めたきっかけは祖父の影響です。大阪で少年野球が盛んな中、祖父のすすめでサッカーの世界に入りました。この出会いが後の歴史を作りました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">強固な意志と「言葉にする」力</h3>
              <p className="text-sm text-gray-600">
                「ACミランに行く」と卒業文集に書いた本田選手は、その後も常に高い目標を公言し続けました。夢を「言葉にして宣言すること」が、自分を追い込み、実現への原動力を生む——本田選手はこれを実践し続けました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">左足と強さを武器にした独自スタイル</h3>
              <p className="text-sm text-gray-600">
                本田選手は右利きでありながら、左足のフリーキックとパンチ力のあるシュートを武器にしました。「誰も真似できない自分だけの武器を持つ」という意識は、幼少期からのサッカーへの向き合い方に現れています。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-rose-500 rounded-full inline-block"></span>
          W杯3大会出場と宣言した夢の実現
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-rose-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学生</td>
                <td className="px-3 py-2 text-gray-600">祖父の影響でサッカーを始め「ACミランへ」と宣言</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">高校</td>
                <td className="px-3 py-2 text-gray-600">星稜高校でサッカーを磨く</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2010年</td>
                <td className="px-3 py-2 text-gray-600">CSKAモスクワでCL活躍・W杯で日本代表MVP</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2014年</td>
                <td className="px-3 py-2 text-gray-600">ACミランへ移籍（宣言から約30年後）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100">
          <p className="font-bold text-rose-900 mb-2">「言葉にした夢」は実現する</p>
          <p className="text-sm text-rose-800">
            小学校の卒業文集に書いた「ACミランに入る」という夢を、本田選手は約30年後に実現させました。夢を公言することの力を、彼は世界に示しました。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-rose-500 rounded-full inline-block"></span>
          まとめ：夢を言葉にして宣言することが実現への第一歩
        </h2>
        <p className="text-gray-700 leading-relaxed">
          本田圭佑選手の幼少期が教えてくれることは、「荒唐無稽に見える夢でも、本気で信じて言葉にし続ければ実現できる」ということです。小学生の頃に「ACミランに行く」と書いた文集が、30年後に現実になりました。お子さんが大きな夢を口にしたとき、「無理だよ」と言わないでください。その夢を「言葉にした」瞬間から、実現への道が始まります。本田選手はその生きた証明です。
        </p>
      </div>
    </ArticleLayout>
  );
}
