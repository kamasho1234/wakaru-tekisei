import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '大谷翔平の子供時代|野球を始めた年齢・家族・幼少期エピソード',
  description:
    '二刀流で世界を席巻する大谷翔平選手の子供時代を紹介。いつ野球を始め、どんな少年だったのか。親御さんへのヒントも。',
  openGraph: {
    title: '大谷翔平の子供時代|野球を始めた年齢・家族・幼少期エピソード',
    description:
      '二刀流で世界を席巻する大谷翔平選手の子供時代を紹介。いつ野球を始め、どんな少年だったのか。親御さんへのヒントも。',
    images: [{ url: '/images/articles/ohtani-shohei-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/ohtani-shohei-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/ohtani-shohei-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '大谷翔平の子供時代|野球を始めた年齢・家族・幼少期エピソード',
    images: ['/images/articles/ohtani-shohei-childhood.jpg'],
  },
};

export default function OhtaniShoheChildhoodPage() {
  return (
    <ArticleLayout
      title="大谷翔平の子供時代|野球を始めた年齢・家族・幼少期エピソード"
      heroImage="/images/articles/ohtani-shohei-childhood.jpg"
      heroAlt="少年が野球の練習をしている様子"
      publishDate="2025年4月"
      slug="ohtani-shohei-childhood"
      description="二刀流で世界を席巻する大谷翔平選手の子供時代を紹介。いつ野球を始め、どんな少年だったのか。親御さんへのヒントも。"
      tags={['大谷翔平', '野球', '幼少期']}
      shareText="大谷翔平選手の子供時代を知っていますか？野球を始めた年齢や家族背景を解説。 #大谷翔平 #野球少年"
      citations={['https://ja.wikipedia.org/wiki/%E5%A4%A7%E8%B0%B7%E7%BF%94%E5%B9%B3']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          大谷翔平の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          大谷翔平選手は1994年7月5日、岩手県奥州市（旧水沢市）で生まれました。メジャーリーグで「二刀流」として活躍し、世界中の野球ファンを魅了する彼ですが、実は普通の小学生時代から始まっています。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">1994年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">岩手県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">小学3年</p>
            <p className="text-xs text-gray-600 mt-1">野球開始</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1994年7月5日</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>岩手県奥州市（旧水沢市）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">出身小学校:</span>
              <span>奥州市立姉体小学校</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">出身中学校:</span>
              <span>奥州市立水沢南中学校</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          野球を始めたのは小学3年生・父の影響
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          大谷翔平選手が野球を始めたのは小学3年生（8～9歳）のとき。単に「野球好きだったから」ではなく、父親・大谷徹の存在が大きく関係していました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">スポーツ家族の背景</h3>
              <p className="text-sm text-gray-600">
                父・徹は社会人野球（三菱重工横浜）の元選手。母・加代子はバドミントン選手という、スポーツで活躍した両親の下で育ちました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">基礎体力の養成</h3>
              <p className="text-sm text-gray-600">
                野球を始める前に、バドミントンと水泳を習い、全身の基礎体力を養成していました。これが後の活躍を支えています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">父がコーチ</h3>
              <p className="text-sm text-gray-600">
                父・徹が水沢リトルリーグのコーチを務めており、その誘いで入団しました。単なる「野球好き」というより、家族の環境が背景にありました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          小学生時代に示した驚きの才能
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          大谷翔平選手は野球を始めてから、驚くほど急速に頭角を現しました。それは「生まれつきの才能」というより「親の環境作り」と「本人の努力」の結果です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">学年</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">成績・記録</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学5年</td>
                <td className="px-3 py-2 text-gray-600">10～11歳</td>
                <td className="px-3 py-2 text-gray-600">球速110km/hを記録</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学6年</td>
                <td className="px-3 py-2 text-gray-600">11～12歳</td>
                <td className="px-3 py-2 text-gray-600">リトルリーグ本塁打競争で15球中11本をホームラン</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">小学6年の活躍</p>
          <p className="text-sm text-blue-800">
            リトルリーグの本塁打競争では、わずか数年で15球中11本をホームランにすることで、同年代の子どもたちから圧倒的な差を見せていました。しかし、これは「最初から天才だった」わけではなく、基礎体力を養い、継続的に努力した結果です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スポーツ家族が育んだ基礎体力
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          大谷翔平選手の土台には「スポーツ家族」という環境がありました。両親の経験と理解が、子どもの発育を最適化していました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">複数のスポーツ経験</h3>
              <p className="text-sm text-gray-600">
                バドミントン、水泳、野球を幼少期に経験することで、単一のスポーツに偏らず、全身の運動神経を発達させていました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">親の細やかなサポート</h3>
              <p className="text-sm text-gray-600">
                父がコーチで親身に指導し、親の野球経験をもとに適切な成長段階を理解していました。これが「焦らない育成」につながりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">性格形成</h3>
              <p className="text-sm text-gray-600">
                大谷翔平選手は幼少期にほぼ叱られたことがなく、素直で大人しい性格だったとされています。親の愛情の中で、自信を持って成長できました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          中学・高校での飛躍と「目標達成シート」
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          大谷翔平選手の人生を大きく変えたのが「目標達成シート（マンダラチャート）」という高校1年生で作成した計画表です。この時期から「メジャー挑戦」という明確な目標が設定されました。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">目標達成シートの特徴</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">作成時期:</span>
              <span>高校1年時</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">内容:</span>
              <span>9×9のマスに具体的な目標を記入し、毎日見て進捗を確認する手法</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">意義:</span>
              <span>単なる「野球が上手になりたい」ではなく「メジャーリーグに挑戦する」という長期的なビジョンを設定</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">影響:</span>
              <span>その後の「二刀流」挑戦へつながる、計画的な人生設計の現れ</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          この時期に、大谷翔平選手は「プロ志望」から「直接メジャー挑戦」へと方針を転換しました。これは高校の花巻東での経験から生まれた、主体的な選択でした。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ：大谷翔平も最初は「普通の小学生」だった
        </h2>
        <p className="text-gray-700 leading-relaxed">
          大谷翔平選手の子供時代を見ると、決して「生まれつきの天才」ではなく、「親の環境作り」「複数スポーツの経験」「継続的な努力」「明確な目標設定」という要素が組み合わさった結果だということが分かります。小学3年生で野球を始め、小学5年で球速110km/h、小学6年で本塁打競争15本というのは、確かに同年代の中では優れていましたが、最初の一歩は親の「野球をやってみないか」という誘いでした。お子さんが「才能がない」と心配しても、大谷翔平選手のように「親のサポート」と「本人の継続的な努力」があれば、世界レベルの選手へ成長する可能性は十分にあります。
        </p>
      </div>
    </ArticleLayout>
  );
}
