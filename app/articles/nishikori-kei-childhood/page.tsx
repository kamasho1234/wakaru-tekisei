import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '錦織圭の子供時代｜5歳でテニスを始め13歳でアメリカへ渡った少年',
  description:
    '世界トップのテニスプレーヤー・錦織圭選手の子供時代。5歳でラケットを握り、13歳で単身アメリカ留学するまでの軌跡を紹介。',
  openGraph: {
    title: '錦織圭の子供時代｜5歳でテニスを始め13歳でアメリカへ渡った少年',
    description:
      '世界トップのテニスプレーヤー・錦織圭選手の子供時代。5歳でラケットを握り、13歳で単身アメリカ留学するまでの軌跡を紹介。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/nishikori-kei-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '錦織圭の子供時代｜5歳でテニスを始め13歳でアメリカへ渡った少年',
    images: ['/og-image.png'],
  },
};

export default function NishikoriKeiChildhoodPage() {
  return (
    <ArticleLayout
      title="錦織圭の子供時代｜5歳でテニスを始め13歳でアメリカへ渡った少年"
      heroImage="/images/sport-tennis.jpg"
      heroAlt="テニスを練習している子ども"
      publishDate="2025年4月"
      tags={['錦織圭', 'テニス', '幼少期']}
      shareText="錦織圭選手が5歳でテニスを始め13歳で渡米した話。子供のスポーツ留学を考える親御さんへ。 #錦織圭 #テニス"
      citations={['https://ja.wikipedia.org/wiki/%E9%8C%A6%E7%B9%94%E5%9C%AD']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          錦織圭の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          錦織圭（にしこり けい）は1989年12月29日に島根県松江市で生まれた日本を代表するテニスプレーヤーです。2014年の全米オープンでアジア人男子として初めてグランドスラムの決勝に進出し、世界テニス界で日本の存在をはっきりと示しました。その成功の基礎は、5歳で握ったたった一本のテニスラケットから始まったのです。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">5歳</p>
            <p className="text-xs text-gray-600 mt-1">テニス開始</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">13歳</p>
            <p className="text-xs text-gray-600 mt-1">米国留学</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">2014年</p>
            <p className="text-xs text-gray-600 mt-1">全米OP決勝</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">4位</p>
            <p className="text-xs text-gray-600 mt-1">ATPランク最高</p>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">幼少期の経歴</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">1989年:</span>
              <span>島根県松江市生まれ</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">1994年:</span>
              <span>5歳でテニスを開始</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">2001年:</span>
              <span>全国小学生テニス選手権優勝</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">2002年:</span>
              <span>13歳でIMGアカデミア留学</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          きっかけはハワイのお土産ラケット
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          錦織圭がテニスに出会ったきっかけは、とても素朴なものです。父親がハワイ旅行のお土産として持ち帰った子ども用のテニスラケット。これが人生を変える一本のラケットとなりました。多くの子どもがそうであるように、最初は遊びの延長。しかし、このラケットとの出会いが、やがて世界的なテニスプレーヤーを生み出すことになるのです。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">お土産がきっかけ</h3>
              <p className="text-sm text-gray-600">
                父親がハワイ旅行で持ち帰った子ども用ラケットが、錦織圭の人生を変えた最初のアイテムでした。多くの親は、子どもの可能性は予測できないもの。自分が好きなスポーツではなく、「子どもが興味を示したこと」を大切にすることが重要です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">複数スポーツの経験</h3>
              <p className="text-sm text-gray-600">
                実は、テニス開始前に生後1年でスイミング、3歳でピアノ、4歳でサッカーも経験していました。親が複数のスポーツに子どもを触れさせることで、子どもが本当に好きなものが見えてくるのです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">父親の「可能性を引き出す」方針</h3>
              <p className="text-sm text-gray-600">
                錦織圭の父親は、多くのスポーツに子どもを触れさせることで「子どもの中に眠っている才能を見つける」という方針を持っていました。これが、最終的に世界的なテニスプレーヤーを育てたのです。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          複数スポーツを経験した幼少期
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          錦織圭の幼少期の特徴は「一つのスポーツに絞らない」という戦略にありました。子どもの時期に複数のスポーツを経験することで、異なる動きの感覚が研ぎ澄まされます。これはテニスという複雑な競技に必要な「敏捷性」「瞬発力」「バランス感覚」を育てるうえで有利に働いたのです。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">スポーツ</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">期間</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">生後1年</td>
                <td className="px-3 py-2 text-gray-600">スイミング</td>
                <td className="px-3 py-2 text-gray-600">開始</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">3歳</td>
                <td className="px-3 py-2 text-gray-600">ピアノ</td>
                <td className="px-3 py-2 text-gray-600">開始</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">4歳</td>
                <td className="px-3 py-2 text-gray-600">サッカー</td>
                <td className="px-3 py-2 text-gray-600">開始</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">5歳</td>
                <td className="px-3 py-2 text-gray-600">テニス</td>
                <td className="px-3 py-2 text-gray-600">開始（ハワイのお土産ラケット）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
          <p className="font-bold text-green-900 mb-2">複数スポーツのメリット</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">動きの多様性:</span>
              <span>異なる運動パターンが神経系の発達を促進</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">本当の適性が見える:</span>
              <span>複数の選択肢から子ども自身が好きなものを選べる</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">基礎体力の向上:</span>
              <span>全身を使う運動経験がバランスの良い発達につながる</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          小学生で全国制覇、13歳でアメリカへ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          5歳で始めたテニスは、錦織圭にとって明らかに「天職」でした。小学1年生からグリーンテニススクールで週3〜4日の本格的なトレーニングを開始。そして2001年、小学生時代に全国小学生テニス選手権で優勝という快挙を成し遂げるのです。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">小学1年生から本格トレーニング開始</h3>
              <p className="text-sm text-gray-600">
                グリーンテニススクールで週3〜4日のトレーニングを開始。この時期からの集中的な練習が、後の全国制覇につながりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">2001年全国小学生テニス選手権優勝</h3>
              <p className="text-sm text-gray-600">
                小学生時代にこの大会での優勝は、才能の高さを明確に示しました。この成功が、親の決断を後押しすることになります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">13歳でIMGアカデミーへ留学</h3>
              <p className="text-sm text-gray-600">
                中学2年生の時点で、単身アメリカのフロリダ州ブラデントンにあるIMGアカデミーに留学。この決断が、世界的なテニスプレーヤーへの道を開きました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          IMGアカデミーで世界基準の訓練
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          IMGアカデミーはテニス界で最高峰の育成施設。ここでは、世界で活躍するためのテニス技術だけでなく、メンタルトレーニング、食事管理、体力強化など、すべてが「世界基準」で教えられます。錦織圭はここで、後年マイケル・チャンなどの著名コーチからの指導も受けることになります。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-lg font-black text-green-600">技術</p>
            <p className="text-xs text-gray-600 mt-1">世界トップコーチによる指導</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-lg font-black text-green-600">メンタル</p>
            <p className="text-xs text-gray-600 mt-1">心理トレーニング</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-lg font-black text-green-600">体力</p>
            <p className="text-xs text-gray-600 mt-1">フィジカルトレーニング</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-lg font-black text-green-600">栄養</p>
            <p className="text-xs text-gray-600 mt-1">食事管理</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-lg font-black text-green-600">戦術</p>
            <p className="text-xs text-gray-600 mt-1">試合分析</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-lg font-black text-green-600">環境</p>
            <p className="text-xs text-gray-600 mt-1">世界の競技者と競争</p>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
          <p className="font-bold text-green-900 mb-2">IMGアカデミーでの経験が後に結実</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">2014年全米オープン:</span>
              <span>準優勝（アジア人男子初のグランドスラム決勝進出）</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">ATPランキング:</span>
              <span>最高4位達成</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">国際舞台での活躍:</span>
              <span>20年以上にわたるプロテニス生涯</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          まとめ：才能は「最初の一本のラケット」から始まった
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          錦織圭の成功の物語は、「世界的な才能」というより、むしろ「親の心がけ」と「子ども本人の努力」の結果です。ハワイのお土産の一本のラケットから始まり、複数のスポーツを経験し、親が「子どもの適性を見極める」時間をかけた。そしてひとたび「これだ」と思ったスポーツには、全力で取り組んだのです。
        </p>
        <p className="text-gray-700 leading-relaxed">
          親の皆さんが心配されるのは「本当に才能があるのか」「国際的に通用するのか」ということかもしれません。しかし錦織圭の例は、こう教えてくれます：子どもの適性は、複数の体験の中からしか見えてこない。そして、その「最初の一歩」は、親が提供する小さなきっかけに過ぎない。その先は、子ども自身の好奇心と努力が道を切り拓くのです。お子さんに様々なスポーツを試す機会を与えることで、予想外の才能が花開くかもしれません。
        </p>
      </div>
    </ArticleLayout>
  );
}
