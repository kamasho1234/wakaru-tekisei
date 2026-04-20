import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '強いチームと楽しいチーム、どちらに入れるべき？判断基準を解説',
  description:
    '勝利を追求する強豪チームか、楽しさ重視のチームか。子どものスポーツチーム選びで迷う親御さんへ、判断基準を解説します。',
  openGraph: {
    title: '強いチームと楽しいチーム、どちらに入れるべき？判断基準を解説',
    description:
      '勝利を追求する強豪チームか、楽しさ重視のチームか。子どものスポーツチーム選びで迷う親御さんへ、判断基準を解説します。',
    images: [{ url: '/images/articles/elite-vs-enjoy.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/elite-vs-enjoy',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/elite-vs-enjoy',
  },
  twitter: {
    card: 'summary_large_image',
    title: '強いチームと楽しいチーム、どちらに入れるべき？判断基準を解説',
    images: ['/images/articles/elite-vs-enjoy.jpg'],
  },
};

export default function EliteVsEnjoyPage() {
  return (
    <ArticleLayout
      title="強いチームと楽しいチーム、どちらに入れるべき？判断基準を解説"
      heroImage="/images/articles/elite-vs-enjoy.jpg"
      heroAlt="チームメイトと笑顔でスポーツを楽しむ子どもたち"
      publishDate="2025年4月"
      slug="elite-vs-enjoy"
      description="勝利を追求する強豪チームか、楽しさ重視のチームか。子どものスポーツチーム選びで迷う親御さんへ、判断基準を解説します。"
      tags={['チーム選び', '習い事', 'スポーツ']}
      shareText="強いチームvs楽しいチーム、どちらが子どもの成長に良い？正しい選び方を解説。 #子育て #習い事"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          子どもがスポーツに求めているものは何か
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          親は「良い成績を残してほしい」「強いチームで上手くなってほしい」と考えがちです。しかし、子ども本人が求めているものは、実は異なるかもしれません。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">1位</p>
            <p className="text-xs text-gray-600 mt-1">楽しさ</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">2位</p>
            <p className="text-xs text-gray-600 mt-1">友達</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">3位</p>
            <p className="text-xs text-gray-600 mt-1">上達</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">4位</p>
            <p className="text-xs text-gray-600 mt-1">勝つこと</p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
          <p className="font-bold text-orange-900 mb-2">SHAPE America調査より</p>
          <p className="text-sm text-orange-800">
            子どもがスポーツに求める優先順位は「①楽しさ②友達とやること③上手くなること④勝つこと」です。親の期待と子どもの価値観にズレがあれば、成績にかかわらず本人のモチベーションは低下します。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          「強いチーム」に入れるメリット・デメリット
        </h2>

        <div className="mb-6">
          <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-4">
            <p className="font-bold text-orange-900 mb-3">メリット</p>
            <ul className="space-y-2">
              <li className="text-sm text-orange-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>指導技術が高く、上達が早い</span>
              </li>
              <li className="text-sm text-orange-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>レベルの高い練習に刺激を受ける</span>
              </li>
              <li className="text-sm text-orange-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>成績が優秀だと本人が達成感を感じやすい</span>
              </li>
              <li className="text-sm text-orange-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>高い目標を持つ仲間に出会える</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <p className="font-bold text-red-900 mb-3">デメリット</p>
            <ul className="space-y-2">
              <li className="text-sm text-red-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>成績不振で試合に出られないストレス</span>
              </li>
              <li className="text-sm text-red-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>指導が厳しく、楽しさより勝利至上主義に陥りやすい</span>
              </li>
              <li className="text-sm text-red-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>練習量が多くなり、他の経験の機会が減る</span>
              </li>
              <li className="text-sm text-red-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>怪我や燃え尽き症候群のリスク増加</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          「楽しいチーム」に入れるメリット・デメリット
        </h2>

        <div className="mb-6">
          <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-4">
            <p className="font-bold text-orange-900 mb-3">メリット</p>
            <ul className="space-y-2">
              <li className="text-sm text-orange-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>スポーツを心から楽しむ環境</span>
              </li>
              <li className="text-sm text-orange-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>友達との絆が深まり、人間関係が充実</span>
              </li>
              <li className="text-sm text-orange-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>練習量が適度なため、他の習い事や経験が両立</span>
              </li>
              <li className="text-sm text-orange-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>長期的にスポーツ離れが少ない</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <p className="font-bold text-red-900 mb-3">デメリット</p>
            <ul className="space-y-2">
              <li className="text-sm text-red-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>指導の質が強いチームより劣る可能性</span>
              </li>
              <li className="text-sm text-red-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>成績が振るわないと親が不満を感じることも</span>
              </li>
              <li className="text-sm text-red-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>本人が「もっと上手くなりたい」と望んでも対応しきれない</span>
              </li>
              <li className="text-sm text-red-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>甘い環境で努力の習慣が身につきにくい場合も</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          年齢別の正しい選び方
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">小学1～3年（5～8歳）</h3>
              <p className="text-sm text-gray-600">
                「楽しいチーム」推奨。この時期は勝敗より、スポーツの楽しさを知ることが最優先。複数チーム経験も有効です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">小学4～6年（9～12歳）</h3>
              <p className="text-sm text-gray-600">
                ゴールデンエイジ。本人の適性と希望が見えてきた時期です。「上手くなりたい」と本気で望むなら「強いチーム」、「友達と楽しみたい」なら「楽しいチーム」が良いでしょう。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">中学生以上</h3>
              <p className="text-sm text-gray-600">
                本人の意思を最優先。「競技志向」なら強いチーム、「趣味志向」なら楽しいチームへの選択肢も検討できます。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          良いチームを見極める5つのチェックポイント
        </h2>

        <div className="space-y-3 mb-6">
          <div className="flex gap-3 bg-orange-50 rounded-2xl p-4 border border-orange-100">
            <span className="text-xl font-black text-orange-600 shrink-0">1</span>
            <p className="text-sm text-orange-800">
              <span className="font-bold">指導者の姿勢</span><br/>
              勝敗だけでなく、子どもの成長を見守ろうとしているか
            </p>
          </div>
          <div className="flex gap-3 bg-orange-50 rounded-2xl p-4 border border-orange-100">
            <span className="text-xl font-black text-orange-600 shrink-0">2</span>
            <p className="text-sm text-orange-800">
              <span className="font-bold">親の関わり方</span><br/>
              親同士が良好な関係か。親の負担が過度ではないか
            </p>
          </div>
          <div className="flex gap-3 bg-orange-50 rounded-2xl p-4 border border-orange-100">
            <span className="text-xl font-black text-orange-600 shrink-0">3</span>
            <p className="text-sm text-orange-800">
              <span className="font-bold">チームの雰囲気</span><br/>
              子どもたちが笑顔で練習しているか
            </p>
          </div>
          <div className="flex gap-3 bg-orange-50 rounded-2xl p-4 border border-orange-100">
            <span className="text-xl font-black text-orange-600 shrink-0">4</span>
            <p className="text-sm text-orange-800">
              <span className="font-bold">怪我や健康管理</span><br/>
              長期欠場している選手が多くないか
            </p>
          </div>
          <div className="flex gap-3 bg-orange-50 rounded-2xl p-4 border border-orange-100">
            <span className="text-xl font-black text-orange-600 shrink-0">5</span>
            <p className="text-sm text-orange-800">
              <span className="font-bold">成績と満足度</span><br/>
              成績が良くても、親や子が不満そうではないか
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          まとめ：子どもの気持ちを第一に
        </h2>
        <p className="text-gray-700 leading-relaxed">
          親の「成績重視」と子どもの「楽しさ重視」にズレがあると、長期的には子どもはスポーツから離れていきます。実際、日本スポーツ振興センターの調査では、中学生のスポーツ中退理由の1位が「楽しくなくなった」（約35%）です。強いチームも楽しいチームも、どちらが「正解」ではなく、その時点での子ども本人の気持ちに寄り添うことが最も大切。試合観戦や練習見学で、子どもがスポーツを楽しんでいるか、友達と良い関係を築いているかを観察してから、チーム選びを決めることをお勧めします。
        </p>
      </div>
    </ArticleLayout>
  );
}
