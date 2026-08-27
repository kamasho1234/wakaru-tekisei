import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'ハンドボールに向いている子の特徴｜学校体育で学べるゴール型ゲーム',
  description:
    'ハンドボールに向いている子の特徴を学習指導要領と日本ハンドボール協会の公式情報から解説。走る・投げる・跳ぶが一度に出る競技、2021年のボール規程変更、学校の体育で触れる機会を紹介。',
  openGraph: {
    title: 'ハンドボールに向いている子の特徴｜学校体育で学べるゴール型ゲーム',
    description:
      'ハンドボールに向いている子の特徴を学習指導要領と日本ハンドボール協会の公式情報から解説。走る・投げる・跳ぶが一度に出る競技、2021年のボール規程変更、学校の体育で触れる機会を紹介。',
    images: [{ url: '/images/articles/handball-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/handball-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/handball-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ハンドボールに向いている子の特徴｜学校体育で学べるゴール型ゲーム',
    images: ['/images/articles/handball-aptitude.jpg'],
  },
};

export default function HandballAptitudePage() {
  return (
    <ArticleLayout
      title="ハンドボールに向いている子の特徴｜学校体育で学べるゴール型ゲーム"
      heroImage="/images/articles/handball-aptitude.jpg"
      heroAlt="ハンドボールをしている子どもたち"
      publishDate="2026年8月"
      slug="handball-aptitude"
      description="ハンドボールに向いている子の特徴を学習指導要領と日本ハンドボール協会の公式情報から解説。走る・投げる・跳ぶが一度に出る競技、2021年のボール規程変更、学校の体育で触れる機会を紹介。"
      tags={['ハンドボール', 'ボール運動', '適性診断']}
      shareText="ハンドボールは走る・投げる・跳ぶが同時に出る。学校体育で学べるゴール型ゲーム。 #子育て #ハンドボール"
      citations={[
        '公益財団法人日本ハンドボール協会「指導・競技・審判本部より『ボール規程変更』に関するお知らせ（小・中学生）」 https://handball.or.jp/system/prog/content.php?sd=r&c=21&sc=2&article_idno=292',
        '公益財団法人日本ハンドボール協会「2021年度ハンドボール競技規則改訂における「ボール規程」変更に関して（第七報）」 https://www.handball.or.jp/system/prog/content.php?sd=r&c=21&sc=2&article_idno=503',
        '文部科学省「小学校学習指導要領解説 体育編」 https://www.mext.go.jp/content/20240918-mxt_kyoiku01-100002607.pdf',
      ]}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          ハンドボールとは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ハンドボールは、ボールを手で投げて得点を取り合うゴール型ゲームです。サッカーやバスケットボールと同じく学校体育で学ぶ機会があり、小学校中学年から高学年にかけて段階的に習います。
        </p>
        <p className="text-gray-700 leading-relaxed">
          ハンドボールの特徴は、走る・投げる・跳ぶという基本的な動作が一度に出る競技だということです。素早い判断と身体操作が求められ、チームスポーツとしての連携も大切です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          学校体育での扱い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学校の体育では、中学年と高学年の両方で「ハンドボール」が例示されています。文部科学省の学習指導要領から、その扱いを確認してみましょう。
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-2 text-sm">小学校中学年（第3・4学年）- ゲーム / ゴール型ゲーム</p>
            <p className="text-sm text-blue-800 leading-relaxed">
              「ハンドボール、ポートボール、ラインサッカー、ミニサッカーなどを基にした易しいゲーム（味方チームと相手チームが入り交じって得点を取り合うゲーム）」が例示されています。
            </p>
            <p className="text-xs text-blue-600 mt-2">出典: 文部科学省「小学校学習指導要領解説 体育編」</p>
          </div>

          <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100">
            <p className="font-bold text-indigo-900 mb-2 text-sm">小学校高学年（第5・6学年）- ボール運動 / ゴール型</p>
            <p className="text-sm text-indigo-800 leading-relaxed">
              「バスケットボール、サッカー、ハンドボールなどを基にした簡易化されたゲーム（攻守が入り交じって行うゴール型）」として扱われています。中学年よりも複雑なルールや戦術が加わります。
            </p>
            <p className="text-xs text-indigo-600 mt-2">出典: 同上</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2 text-sm">ゴール型ゲームとしての位置づけ</p>
          <p className="text-sm text-gray-600 mb-3">
            ハンドボールは「攻守が入り交じって行うゴール型」として分類されます。これはサッカーやバスケットボールと同じカテゴリーで、素早い攻防転換と空間認識が鍛えられる競技です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          ボール規程の変更 — 2021年から安全性向上へ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          日本ハンドボール協会は2021年4月より、小学生用のボール規程を大きく変更しました。この変更は、子どもたちの安全性をより高めるために実施されました。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">対象</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">ボール号数</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学生女子</td>
                <td className="px-3 py-2 text-gray-600">0号球</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学生男子</td>
                <td className="px-3 py-2 text-gray-600">1号球</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 日本ハンドボール協会「2021年度ハンドボール競技規則改訂における『ボール規程』変更に関して」</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">ボール規程変更の背景</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            新規程では「松ヤニを使用しないボール」が採用されました。これまで松脂（松ヤニ）を使ってボールの摩擦を高めていましたが、新型ボールではその必要がなくなり、衛生面と安全性が向上しています。また、性別に応じたボール号数の統一により、子どもの手の大きさに合わせたボール設計が実現しました。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          ハンドボールに向いている子の特徴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">投げる動作が得意な子</h3>
              <p className="text-sm text-gray-600">
                ハンドボールはボールを手で投げてシュートします。投げる距離の感覚、正確さ、そして力加減を調節する能力が活かされます。ドッジボールや野球で投げる経験がある子は、その基礎が応用できます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">素早く動ける子</h3>
              <p className="text-sm text-gray-600">
                ハンドボールは「走る・投げる・跳ぶ」が組み合わさった競技です。素早い方向転換、ジャンプシュート、ディフェンスの動きなど、高い運動量が求められます。体を素早く動かすことを楽しむ子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">チーム連携を楽しむ子</h3>
              <p className="text-sm text-gray-600">
                ハンドボールは個人技も大切ですが、何より味方とのパス交換と連携が競技の核です。自分の得点よりもチーム全体のプレーを重視し、パスをもらい、つなぐ喜びを感じられる子が向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">空間認識能力が優れた子</h3>
              <p className="text-sm text-gray-600">
                ハンドボールは味方と相手の位置、ゴールまでの距離、防御の隙間を瞬時に判断する競技です。複数の情報を同時に処理し、最適な判断ができる子は、このスポーツで活躍できます。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">これらの特徴は公式な適性基準ではありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            上記は、日本ハンドボール協会の公式情報と学習指導要領から見える競技の特性を整理したものです。実際には、小学校の授業や体験教室で一度やってみて、お子さんの適性や興味を見守ることが大切です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          他のボール運動との比較
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学校の体育では複数のボール運動から学べます。ハンドボールと他の競技の特徴を比較してみてください。
        </p>

        <div className="grid grid-cols-1 gap-3 mb-6">
          <Link href="/articles/soccer-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">サッカー</p>
            <p className="text-xs text-green-800">足でボールを操作し、走る時間が長い競技</p>
          </Link>
          <Link href="/articles/basketball-aptitude" className="bg-orange-50 rounded-2xl p-4 border border-orange-100 hover:bg-orange-100 transition-colors block">
            <p className="font-bold text-orange-900 text-sm mb-1">バスケットボール</p>
            <p className="text-xs text-orange-800">加速と減速を繰り返し、瞬発力が活きる</p>
          </Link>
          <Link href="/articles/ball-throwing-kids" className="bg-purple-50 rounded-2xl p-4 border border-purple-100 hover:bg-purple-100 transition-colors block">
            <p className="font-bold text-purple-900 text-sm mb-1">投げる運動</p>
            <p className="text-xs text-purple-800">投げる基本動作を正確にマスターする</p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          ハンドボールに向いている子は、投げる動作に自信があり、素早く動きながらチーム全体を見渡せる子です。学校の体育で学べるゴール型ゲームの一種として、中学年から高学年へかけて段階的に複雑さを増していきます。2021年の新しいボール規程により、より安全で快適な環境で学べるようになりました。走る・投げる・跳ぶをバランスよく活かせるスポーツとして、興味のあるお子さんにはぜひ体験してみることをお勧めします。
        </p>
      </div>

      <div>
        <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
          <p className="text-sm font-bold mb-1">お子さんの適性を診断してみませんか?</p>
          <p className="text-blue-100 text-xs mb-4">新体力テストの記録を入力するだけ・無料</p>
          <Link href="/shindan/sports" className="inline-block bg-white text-blue-600 font-black text-sm px-6 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
            無料でスポーツ適性診断
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
