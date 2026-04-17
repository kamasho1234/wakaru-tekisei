import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'スポーツチームでのいじめ・人間関係トラブル。親の対処法',
  description:
    'チームメイトとの関係が心配、上下関係が気になる。スポーツチーム特有のいじめ・人間関係問題を親はどう解決すればいいか。',
  openGraph: {
    title: 'スポーツチームでのいじめ・人間関係トラブル。親の対処法',
    description:
      'チームメイトとの関係が心配、上下関係が気になる。スポーツチーム特有のいじめ・人間関係問題を親はどう解決すればいいか。',
    images: [{ url: '/images/articles/team-bullying-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/team-bullying-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'スポーツチームでのいじめ・人間関係トラブル。親の対処法',
    images: ['/images/articles/team-bullying-sports.jpg'],
  },
};

export default function TeamBullyingSportsPage() {
  return (
    <ArticleLayout
      title="スポーツチームでのいじめ・人間関係トラブル。親の対処法"
      heroImage="/images/articles/team-bullying-sports.jpg"
      heroAlt="仲良く練習する子どもたちのチーム"
      publishDate="2025年4月"
      slug="team-bullying-sports"
      description="チームメイトとの関係が心配、上下関係が気になる。スポーツチーム特有のいじめ・人間関係問題を親はどう解決すればいいか。"
      tags={['いじめ', 'スポーツチーム', '人間関係']}
      shareText="スポーツチームでのいじめや人間関係トラブル。親としての正しい対処法を解説。 #子育て #いじめ"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          スポーツチーム特有のいじめの構造
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツチームでのいじめや人間関係のトラブルは、通常の学校でのいじめとは異なる構造があります。競争、上下関係、成績評価が存在するため、いじめが起きやすい環境になっています。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-2xl font-black text-purple-600">3～6ヶ月</p>
            <p className="text-xs text-gray-600 mt-1">問題が顕在化するまでの平均期間</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-lg font-black text-purple-600">レギュラー争い</p>
            <p className="text-xs text-gray-600 mt-1">いじめの最大要因</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-lg font-black text-purple-600">上下関係</p>
            <p className="text-xs text-gray-600 mt-1">スポーツチーム特有の構造</p>
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100 mb-6">
          <p className="font-bold text-purple-900 mb-2">スポーツチーム特有のいじめパターン</p>
          <ul className="space-y-2">
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">レギュラー争い：</span>
              <span>出場機会を巡る嫉妬から、試合落選者への排除</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">上下関係による圧迫：</span>
              <span>先輩後輩の階級構造で、後輩への不当な扱い</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">試合での失敗批判：</span>
              <span>試合で失敗した子どもを集団で責める</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">グループ排除：</span>
              <span>特定の子どもを練習中や食事時に仲間外しにする</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">持ち物隠しやいたずら：</span>
              <span>靴やユニフォームを隠す、ロッカーを物色するなど</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          早期発見が重要な理由
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          いじめが顕在化するまで、平均3～6ヶ月かかるとされています。その間、子どもは心理的負荷を受け続けています。早期発見が問題解決の鍵です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">発見の遅れによる影響</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">具体的な状況</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">初期段階（1～2ヶ月）</td>
                <td className="px-3 py-2 text-gray-600">軽い仲間外し程度。本人も「ちょっと変だ」くらいの認識</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">悪化段階（3～4ヶ月）</td>
                <td className="px-3 py-2 text-gray-600">明確な排除が始まる。子どもが「行きたくない」と言い始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">深刻段階（5～6ヶ月以上）</td>
                <td className="px-3 py-2 text-gray-600">心身への影響が顕著。登校・練習拒否、不登校、抑うつ症状</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">対処困難段階（6ヶ月以上）</td>
                <td className="px-3 py-2 text-gray-600">集団心理が固定化。問題解決に多くのリソースが必要</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          発見が遅れるほど、復帰や問題解決が困難になります。「最近、チーム行きたくないって言い始めた」という変化を見逃さないことが大切です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          子どもがいじめられているサイン
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          子どもが直接「いじめられている」と言わない場合も多いです。以下のサインを見逃さず、早期に気づくことが大切です。
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">急に「チーム（練習）に行きたくない」と言う</h3>
              <p className="text-sm text-gray-600">
                それまで楽しんでいたのに、急に行きたくないと言い始めるのは危険信号。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体調不良（おなかの痛み、頭痛）</h3>
              <p className="text-sm text-gray-600">
                練習の日だけ体が痛いと訴える。心理的ストレスが身体症状として現れている可能性。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">持ち物がなくなる、服が破れて帰る</h3>
              <p className="text-sm text-gray-600">
                靴やユニフォームがなくなったり、服が破れている。物理的ないじめの可能性。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">チームメイトの話をしなくなる</h3>
              <p className="text-sm text-gray-600">
                友人との関係の話題を避けるようになった。人間関係に悩んでいる可能性。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">スマートフォンでのメッセージを隠す</h3>
              <p className="text-sm text-gray-600">
                LINEグループのやり取りを見られたくない。ネットでのいじめもある可能性。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              6
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">寝つきが悪い、表情が暗くなる</h3>
              <p className="text-sm text-gray-600">
                睡眠障害や気分の落ち込み。心理的な負荷が大きい状態。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          親がすべき対処の手順
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          いじめが疑われるとき、段階的に対処することが重要です。焦らず、丁寧に進めることが解決の鍵です。
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">子どもに話を聞く（責めない）</h3>
              <p className="text-sm text-gray-600">
                「何が起きてるの？」と開かれた質問をする。親の思い込みで判断せず、子どもの気持ちを丁寧に聞く。責めてはいけない。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">担当コーチに相談</h3>
              <p className="text-sm text-gray-600">
                客観的な事実を伝える。「息子がチームに行きたくないと言っている。何か気になることがあるか」と丁寧に相談する。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">改善されなければ上部機関へ</h3>
              <p className="text-sm text-gray-600">
                コーチの対応が不十分な場合は、チーム責任者、地域のスポーツ協会に報告。組織的な対応を求める。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">学校の相談窓口も活用</h3>
              <p className="text-sm text-gray-600">
                学校のスクールカウンセラーに相談することで、心理的サポートや専門的助言が得られる場合がある。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          「チームを変える」という選択肢
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          問題が深刻で、組織的な改善が見込めない場合、チームを変えることは逃げではなく、新しい挑戦です。子どもの心身の健康を最優先に考えましょう。
        </p>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100 mb-6">
          <p className="font-bold text-purple-900 mb-3">チーム変更のメリット</p>
          <ul className="space-y-2">
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">心理的リセット：</span>
              <span>新しい環境で、心理的な負担がリセットされる</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">新しい人間関係：</span>
              <span>新しい友人関係を構築でき、スポーツへの楽しさを取り戻せる</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">スポーツ継続：</span>
              <span>スポーツそのものを嫌いになる前に、新しい環境で続けられる</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">親子関係改善：</span>
              <span>チームでのストレスがなくなり、親子関係も改善しやすい</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          スポーツを続けることよりも、子どもの心身の健康を守ることが最優先です。「あのチームにいじめられたから」という理由で退団することは、決して子どもの成長にマイナスではありません。むしろ、困った状況から自分で行動する力を育てるチャンスになります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          まとめ：子どもを守るために行動を
        </h2>
        <p className="text-gray-700 leading-relaxed">
          スポーツチームでのいじめや人間関係のトラブルは、学校でのいじめと同様に深刻です。親が早期に気づき、丁寧に対応することが解決の鍵です。子どもの「行きたくない」という声に耳を傾け、必要に応じて組織や専門家に相談しましょう。最終的に大切なのは、子どもが「スポーツを楽しい」と感じられる環境にいることです。親としての役割は、子どもの心身を守り、その成長を支援することなのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
