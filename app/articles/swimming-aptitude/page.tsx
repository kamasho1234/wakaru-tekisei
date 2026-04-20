import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '水泳に向いている子の特徴|持久力と柔軟性で見る習い事適性',
  description:
    '子どもが水泳に向いているかどうかの判断ポイントを解説。持久力・柔軟性・筋力の関係と、水泳教室選びのコツも紹介します。',
  openGraph: {
    title: '水泳に向いている子の特徴|持久力と柔軟性で見る習い事適性',
    description:
      '子どもが水泳に向いているかどうかの判断ポイントを解説。持久力・柔軟性・筋力の関係と、水泳教室選びのコツも紹介します。',
    images: [{ url: '/images/articles/swimming-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/swimming-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/swimming-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: '水泳に向いている子の特徴|持久力と柔軟性で見る習い事適性',
    images: ['/images/articles/swimming-aptitude.jpg'],
  },
};

export default function SwimmingAptitudePage() {
  return (
    <ArticleLayout
      title="水泳に向いている子の特徴|持久力と柔軟性で見る習い事適性"
      heroImage="/images/articles/swimming-aptitude.jpg"
      heroAlt="プールで泳ぐ子どもたち"
      publishDate="2025年4月"
      slug="swimming-aptitude"
      description="子どもが水泳に向いているかどうかの判断ポイントを解説。持久力・柔軟性・筋力の関係と、水泳教室選びのコツも紹介します。"
      tags={['水泳', '適性診断', '習い事']}
      shareText="水泳に向いている子の特徴を持久力・柔軟性のデータで解説。習わせる前に確認! #子育て #水泳"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          水泳に必要な5つの体力要素
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          水泳は、全身の筋肉をバランスよく使うスポーツです。向いている子の特徴を理解するために、水泳で必要な体力要素を整理しましょう。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">持久力</h3>
              <p className="text-sm text-gray-600">
                長い距離を泳ぎ続けるために必要。シャトルランの成績が高い子は持久力が優れています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">筋力</h3>
              <p className="text-sm text-gray-600">
                水の抵抗に打ち勝ち、前に進むために必要。握力が高い子は筋力が優れています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">柔軟性</h3>
              <p className="text-sm text-gray-600">
                正確なフォームで泳ぐために重要。長座体前屈が高い子は柔軟性が優れています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">巧緻性</h3>
              <p className="text-sm text-gray-600">
                複雑な動作(ストロークなど)を習得するために必要。ボール投げなどの動作が上手な子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">瞬発力</h3>
              <p className="text-sm text-gray-600">
                スタートダッシュや息継ぎのタイミングに必要。50m走が速い子は瞬発力が優れています。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          向いている子の体力データ目安
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体力テストのデータから、水泳に向いている子の特徴が見えてきます。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">テスト項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">水泳との関連</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">目安</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">長座体前屈</td>
                <td className="px-3 py-2 text-gray-600">柔軟性が最も重要</td>
                <td className="px-3 py-2 text-gray-600">高い方が向いている</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">シャトルラン</td>
                <td className="px-3 py-2 text-gray-600">持久力が必要</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">握力</td>
                <td className="px-3 py-2 text-gray-600">全身の筋力指標</td>
                <td className="px-3 py-2 text-gray-600">平均レベル以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">50m走</td>
                <td className="px-3 py-2 text-gray-600">瞬発力</td>
                <td className="px-3 py-2 text-gray-600">全国平均レベル</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ボール投げ</td>
                <td className="px-3 py-2 text-gray-600">巧緻性</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">水泳に最も適した指標</p>
          <p className="text-sm text-blue-800">
            長座体前屈が高い子は、柔軟性に優れているため、正しいフォームで泳ぎやすく、上達が早い傾向にあります。水泳を習わせたいなら、まず長座体前屈の数値をチェックしてみてください。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          水泳を習わせる5つのメリット
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">全身運動で基礎体力が向上</h3>
              <p className="text-sm text-gray-600">
                水泳は両腕・両脚・体幹をバランスよく使うため、全身の筋力と持久力が同時に鍛えられます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">怪我をしにくい</h3>
              <p className="text-sm text-gray-600">
                水の浮力により、関節に負担をかけずに運動できます。他のスポーツより怪我のリスクが低いです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">心肺機能が強くなる</h3>
              <p className="text-sm text-gray-600">
                水中での運動は、呼吸がコントロールされるため、心肺機能の向上に非常に効果的です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">将来の生活スキル</h3>
              <p className="text-sm text-gray-600">
                水に慣れることで、溺水事故のリスクが減少します。基本的な水の安全知識が身につきます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">年齢問わず続けられる</h3>
              <p className="text-sm text-gray-600">
                水泳は年齢による制限が少なく、生涯にわたって楽しめるスポーツです。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          向いていない子へのアドバイス
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体力テストの数値が平均以下だったとしても、水泳が向いていないわけではありません。誰でも努力で上達できます。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">重要なポイント</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            水泳は「個人競争」です。自分のペースで上達していくので、運動が苦手な子でも「自分は今月より速くなった！」という成功体験が得やすいスポーツです。むしろ、運動が苦手な子こそ、水泳で基礎体力を高めるのに適しているとも言えます。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          水泳を始める年齢のタイミング
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          水泳は比較的早い年齢から始められるスポーツです。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">内容</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">3～4歳</td>
                <td className="px-3 py-2 text-gray-600">親子水遊び、水への慣れ程度</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">5～6歳</td>
                <td className="px-3 py-2 text-gray-600">スクール入会の最適時期。泳ぐ基本を習得</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">7～10歳</td>
                <td className="px-3 py-2 text-gray-600">ゴールデンエイジ。技術の習得が最速</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">11歳以上</td>
                <td className="px-3 py-2 text-gray-600">競技会出場も視野に。上達は努力次第</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          水泳に向いている子の特徴は、持久力と柔軟性に優れていることです。新体力テストのデータを参考にしながら、お子さんに水泳を勧めるか判断できます。しかし、最も大切なのは「水に親しむ楽しさ」です。怪我が少なく、年齢問わず続けられる水泳は、すべての子どもにとって価値のあるスポーツです。
        </p>
      </div>
    </ArticleLayout>
  );
}
