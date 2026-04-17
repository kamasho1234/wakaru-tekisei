import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '西矢椛の子供時代｜6歳でスケボーを始め13歳で五輪金メダルを獲った少女',
  description:
    '史上最年少の五輪金メダリスト・西矢椛選手の子供時代。6歳でスケートボードを始め、13歳330日で金メダルを獲るまでの物語。',
  openGraph: {
    title: '西矢椛の子供時代｜6歳でスケボーを始め13歳で五輪金メダルを獲った少女',
    description:
      '史上最年少の五輪金メダリスト・西矢椛選手の子供時代。6歳でスケートボードを始め、13歳330日で金メダルを獲るまでの物語。',
    images: [{ url: '/images/articles/nishiya-momiji-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/nishiya-momiji-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '西矢椛の子供時代｜6歳でスケボーを始め13歳で五輪金メダルを獲った少女',
    images: ['/images/articles/nishiya-momiji-childhood.jpg'],
  },
};

export default function NishiyaMomijiChildhoodPage() {
  return (
    <ArticleLayout
      title="西矢椛の子供時代｜6歳でスケボーを始め13歳で五輪金メダルを獲った少女"
      heroImage="/images/articles/nishiya-momiji-childhood.jpg"
      heroAlt="スケートボードを練習する子ども"
      publishDate="2025年4月"
      slug="nishiya-momiji-childhood"
      description="史上最年少の五輪金メダリスト・西矢椛選手の子供時代。6歳でスケートボードを始め、13歳330日で金メダルを獲るまでの物語。"
      tags={['西矢椛', 'スケートボード', '幼少期']}
      shareText="西矢椛選手が6歳でスケボーを始め13歳で五輪金メダルを獲った話。 #西矢椛 #スケートボード"
      citations={['https://ja.wikipedia.org/wiki/%E8%A5%BF%E7%9F%A2%E6%A4%9B']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          西矢椛の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          西矢椛選手は2007年8月30日に大阪府松原市で生まれました。わずか13歳330日で東京オリンピックのスケートボード女子ストリート部門で金メダルを獲得し、日本人・アジア人史上最年少の五輪金メダリストとなりました。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">6歳</p>
            <p className="text-xs text-gray-600 mt-1">スケボー開始年齢</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">13歳</p>
            <p className="text-xs text-gray-600 mt-1">五輪金メダル</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">330日</p>
            <p className="text-xs text-gray-600 mt-1">金メダル時の年齢</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">史上最年少</p>
            <p className="text-xs text-gray-600 mt-1">五輪メダリスト</p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">基本情報</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>大阪府松原市</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">出身小学校:</span>
              <span>松原市立松原西小学校</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">家族構成:</span>
              <span>2歳上の兄あり</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">父親:</span>
              <span>翔さん（スケボー愛好家、指導者）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          「お兄ちゃんがかっこいい」6歳でスケボーを始めた理由
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          西矢椛選手のスケートボード人生は、極めてシンプルな理由で始まりました。「お兄ちゃんのプレーがかっこいい」という感情が、すべての出発点だったのです。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">兄がスケボーで遊ぶ姿を見守る</h3>
              <p className="text-sm text-gray-600">
                2歳上の兄がスケートボードで自由に動き回る姿は、少女の目には最もかっこいい存在に映りました。子どもにとって、兄弟姉妹の存在は、最初の憧れの的なのです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">自然発生的な「やりたい気持ち」</h3>
              <p className="text-sm text-gray-600">
                親の強制や教育方針ではなく、椛自身が「自分もやりたい」と言い出したのです。この内発的動機づけが、後の驚異的な成長を支える原動力になりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">父親の後押し</h3>
              <p className="text-sm text-gray-600">
                父親の翔さんは、娘の「やりたい」という気持ちを大切にし、サポートしました。本人の意思が尊重される環境こそが、才能を開花させるのです。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">「憧れ」が子どもを動かす</p>
          <p className="text-sm text-amber-800">
            教育心理学では、子どもの行動動機は「外発的動機」（報酬や強制）と「内発的動機」（興味や愛好心）に分かれます。西矢椛選手の場合、兄への憧れという「内発的動機」が最強のエンジンとなりました。これは、無理強いされた練習では決して生まれない原動力なのです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          父とインスタグラムで技を研究した練習方法
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          西矢椛選手の練習方法は、従来のスポーツ育成と大きく異なっていました。指導者による厳格なカリキュラムではなく、父と一緒に動画を見て、試行錯誤しながら技を習得するという、デジタル時代ならではのアプローチでした。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">練習方法</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">特徴</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">学べる点</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">インスタグラム動画</td>
                <td className="px-3 py-2 text-gray-600">世界のトップ選手の技を視聴</td>
                <td className="px-3 py-2 text-gray-600">最新のテクニック・トレンド</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">父との対話</td>
                <td className="px-3 py-2 text-gray-600">「どう見えた？」と議論</td>
                <td className="px-3 py-2 text-gray-600">分析力・観察眼の養成</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">実地での試行</td>
                <td className="px-3 py-2 text-gray-600">パーク内で繰り返し挑戦</td>
                <td className="px-3 py-2 text-gray-600">実行力・挑戦心</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">自由な工夫</td>
                <td className="px-3 py-2 text-gray-600">自分なりのやり方を模索</td>
                <td className="px-3 py-2 text-gray-600">創意工夫・個性化</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-3">父親の指導哲学</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800">
              <span className="font-bold">「普段はどこにでもいる活発な女の子」:</span>
              <span>父親がメディアで語った言葉。椛を特別扱いせず、まず一人の子どもとして見ていた</span>
            </li>
            <li className="text-sm text-amber-800">
              <span className="font-bold">親子での共同作業:</span>
              <span>練習は強制ではなく、父娘で一緒に新しい技に挑戦する楽しい時間</span>
            </li>
            <li className="text-sm text-amber-800">
              <span className="font-bold">デジタル活用:</span>
              <span>アナログな技術指導ではなく、映像という客観的な証拠から学ぶ</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          どこにでもいる活発な女の子が世界へ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          西矢椛選手の素晴らしいところは、「スポーツ少女」というテンプレートに当てはまらなかったこと。あくまで「普通の活発な子ども」として育てられたからこそ、独自のスタイルが生まれたのです。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">学校生活との両立</h3>
              <p className="text-sm text-gray-600">
                小学生時代を含む幼少期には、学校での勉強や友人関係も大切にしていました。スケボーだけが人生ではなく、バランスの取れた子ども時代を送っていたのです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">純粋な楽しさの追求</h3>
              <p className="text-sm text-gray-600">
                全国的な知名度や報酬を目指すのではなく、スケボーが「楽しいから続ける」という原点を貫きました。これが、圧力なく高いレベルに到達できた秘密です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">年代を超えたスケボー文化</h3>
              <p className="text-sm text-gray-600">
                スケートボードは、フォーマルなスポーツ組織ではなく、パークという自由な場所で発展します。その「文化」に属することで、椛は自然と上達の道を歩みました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          13歳330日：史上最年少の五輪金メダル
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          2021年7月26日、東京オリンピックのスケートボード女子ストリート部門で、西矢椛選手は金メダルを獲得しました。その時、彼女はまだ13歳330日。日本人・アジア人初の史上最年少五輪金メダリストとなったのです。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
            <p className="font-bold text-amber-900 mb-2">習得した高難度トリック</p>
            <ul className="text-sm text-amber-800 space-y-1">
              <li>- キャブフリップ</li>
              <li>- バックサイド180ノーズグラインド</li>
              <li>- フロントサイドノーズグラインド</li>
              <li>- バリアルハイプ</li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
            <p className="font-bold text-amber-900 mb-2">五輪金メダルの意義</p>
            <ul className="text-sm text-amber-800 space-y-1">
              <li>- 日本人初の若年メダリスト</li>
              <li>- アジア人の金メダルとしても最年少</li>
              <li>- スケボー文化への世界的認知</li>
              <li>- 次世代への希望の象徴</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-3">13歳330日での金メダル獲得の背景</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800">
              <span className="font-bold">スケボーの特性:</span>
              <span>体の小ささが有利に働く可能性。低い重心、軽い体重は、技の習得に優位性あり</span>
            </li>
            <li className="text-sm text-amber-800">
              <span className="font-bold">6歳からの継続:</span>
              <span>わずか7年で、世界トップレベルに到達。早期開始が神経系発達に有利に作用</span>
            </li>
            <li className="text-sm text-amber-800">
              <span className="font-bold">純粋な動機:</span>
              <span>報酬や期待ではなく「楽しい」という原点を貫いたことで、プレッシャーに負けなかった</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          まとめ：「憧れ」が子どもを動かす最大の原動力
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          西矢椛選手の成功物語は、親として最も大切な教訓を教えてくれます。それは、「完璧な指導計画」よりも「本人の内発的動機」が、子どもの成長を左右するということです。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-3">親が学ぶべき5つの原則</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">1. 兄姉の存在は最高の教材</span>
              <span>「親が教える」より「憧れの人の姿を見る」が、行動を駆動する</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">2. 子ども本人の「やりたい」を尊重する</span>
              <span>親の夢ではなく、子どもの意思が出発点であること</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">3. 親子で一緒に学ぶ</span>
              <span>親が指導者になるのではなく、パートナーとなる関係が大切</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">4. デジタル活用も含めた柔軟性</span>
              <span>従来の方法に固執せず、時代に合わせた手段を活用する</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">5. 「活発な子ども」として育てる</span>
              <span>特別扱いではなく、普通に楽しむことが最強の道を切り拓く</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mt-4">
          お子さんがスポーツに興味を持ったとき、親が陥りやすい落とし穴は「早期から本格的な指導を」という発想です。しかし、西矢椛選手の例は、それが必ずしも最適ではないことを示しています。子どもが「楽しい」と思える環境を作り、本人の「やりたい気持ち」に寄り添う。その先に、想像もしなかった可能性が待っているのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
