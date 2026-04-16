import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どもの試合を正しく応援する方法：NGとOKを解説',
  description:
    '子どもの試合、どう応援するのが正解？過干渉になりやすい保護者の応援について、スポーツ心理学から正しい方法を解説します。',
  openGraph: {
    title: '子どもの試合を正しく応援する方法：NGとOKを解説',
    description:
      '子どもの試合、どう応援するのが正解？過干渉になりやすい保護者の応援について、スポーツ心理学から正しい方法を解説します。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/how-to-cheer-kids',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どもの試合を正しく応援する方法：NGとOKを解説',
    images: ['/og-image.png'],
  },
};

export default function HowToCheerKidsPage() {
  return (
    <ArticleLayout
      title="子どもの試合を正しく応援する方法：NGとOKを解説"
      heroImage="/images/articles/how-to-cheer-kids.jpg"
      heroAlt="子どもの試合を温かく見守る保護者たち"
      publishDate="2025年4月"
      tags={['応援', '保護者', 'スポーツ']}
      shareText="子どもの試合での正しい応援とNGな応援。スポーツ心理学から解説。 #子育て #保護者の応援"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          保護者の応援が子どもに与える影響
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          保護者の応援は、単なる声援ではなく、子どもの心理に大きな影響を与えます。試合中の保護者の言葉が、子どもの集中力やパフォーマンスを左右することが、スポーツ心理学の研究で証明されています。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">45%</p>
            <p className="text-xs text-gray-600 mt-1">「試合中の保護者の声が気になる」と答える中学生</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">集中</p>
            <p className="text-xs text-gray-600 mt-1">静かな応援で高まるパフォーマンス</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">応援が子どもに与える影響</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">ポジティブ:</span>
              <span>適切な応援は子どもの集中力を高め、パフォーマンスを向上させる</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">ネガティブ:</span>
              <span>過度な期待や批判の応援は、子どもの判断力を奪い、ミスを増やす</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">心理的効果:</span>
              <span>親の声が子どもの自信と不安感に直結する</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">スポーツ継続率:</span>
              <span>応援の質が良い親の子どもほど、スポーツを継続する傾向</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          試合中にやりがちなNG応援
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          善意から出ている親の応援も、子どもにはプレッシャーやストレスになる場合があります。試合中に言ってはいけない言葉を理解しましょう。
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              NG
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">戦術や戦略を指示する</h3>
              <p className="text-sm text-gray-600">
                「そこじゃない！」「走ってよ！」といった指示は、子どもの判断を混乱させ、コーチの指示も聞こえなくなります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              NG
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ミスを指摘する</h3>
              <p className="text-sm text-gray-600">
                「えっ？」「あ、失敗した」など、子どもが既に気づいているミスを指摘すると、次のプレーへの集中が削がれます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              NG
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">審判への不信感を示す</h3>
              <p className="text-sm text-gray-600">
                「審判おかしい」「そんなの反則だ」という言葉は、子どもに「ルールが不公正」というメッセージを与え、不安感が増します。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              NG
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">他の子どもと比較する</h3>
              <p className="text-sm text-gray-600">
                「〇〇くんはできてるのに」という言葉は、子どもに最もダメージを与え、スポーツ嫌いの原因になります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              NG
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">相手チームへの非難</h3>
              <p className="text-sm text-gray-600">
                「あの子たちはラフプレーだ」などの言葉は、子どもにスポーツマンシップを教えずに、敵意や不信感を育みます。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          子どもが喜ぶOK応援の方法
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ心理学の研究から、子どものパフォーマンスを高める応援方法が明らかになっています。子どもが喜び、集中力を高める応援を心がけましょう。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">OK応援</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">効果</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">「○○、頑張れ！」と名前を呼ぶ</td>
                <td className="px-3 py-2 text-gray-600">子どもの集中力を高める。個別応援で子どもが見守られていることを認識</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">拍手（音声なし）</td>
                <td className="px-3 py-2 text-gray-600">プレーの邪魔にならず、心理的な支援になる</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">「いいよ！」「ナイス！」</td>
                <td className="px-3 py-2 text-gray-600">短く肯定的な言葉は、子どもの自信を高める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">沈黙で見守る</td>
                <td className="px-3 py-2 text-gray-600">子どもの判断を尊重し、自分のプレーに集中させる</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">試合後に「楽しかった？」と聞く</td>
                <td className="px-3 py-2 text-gray-600">結果よりも体験を大切にする親の姿勢を示す</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          「コーチングの二重指示」問題
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          親がグランドから戦術指示を出すと、子どもは複数の指示を同時に受け取り、判断が混乱します。この状態を「コーチングの二重指示」と呼びます。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">二重指示のメカニズム</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">状況:</span>
              <span>親が「そこに走れ」と言い、同時にコーチが異なる戦術を指示している</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">子どもの心理:</span>
              <span>「親の言葉を聞くべきか、コーチの指示を聞くべきか」と判断が停止</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">結果:</span>
              <span>判断遅延 → プレーの遅れ → ミスが増加。さらに混乱が深まる</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">解決策:</span>
              <span>親はコーチの指示に一任する。子どもはコーチの声だけに注力できる</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          スポーツチームでは、コーチが唯一の指導者です。親の応援は、戦術指示ではなく「心理的サポート」に専念することで、子どもは集中力を保つことができます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          試合後の正しい関わり方
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          試合後の親の対応も重要です。「沈黙の応援」というアプローチが、子どもの内発的動機付けを高めることが研究でわかっています。
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">試合後1～2時間はスポーツの話をしない</h3>
              <p className="text-sm text-gray-600">
                子どもが自発的に試合の話をするまで待つ。これを「Silent Saturday」と呼びます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">子どもからの話を聞く（話さない）</h3>
              <p className="text-sm text-gray-600">
                「どう思った？」と開かれた質問をして、子どもの感想を引き出す。親の感想は伝えない。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">結果ではなく、努力とプロセスを褒める</h3>
              <p className="text-sm text-gray-600">
                「頑張ってたね」「いい動きしてたね」など、結果に関わらず努力を認める。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ：応援は「声援」だけじゃない
        </h2>
        <p className="text-gray-700 leading-relaxed">
          子どもの試合での応援は、大きな声を出すことではなく、「子どもを信じて、判断を尊重し、無条件に支援する」姿勢です。親が戦術指示を出さず、試合後に結果を責めず、努力を認める親の子どもは、プレッシャーに強く、スポーツを長く続ける傾向があります。応援の質を変えることで、子どもの成長とスポーツ継続への道が開けるのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
