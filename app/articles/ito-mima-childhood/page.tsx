import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '伊藤美誠の子供時代｜2歳で卓球を始め、母と二人三脚で歩んだ道',
  description:
    '卓球界のスター・伊藤美誠選手の子供時代。元卓球選手の母のもとで2歳から始め、1日8時間練習した幼少期の真実を紹介。',
  openGraph: {
    title: '伊藤美誠の子供時代｜2歳で卓球を始め、母と二人三脚で歩んだ道',
    description:
      '卓球界のスター・伊藤美誠選手の子供時代。元卓球選手の母のもとで2歳から始め、1日8時間練習した幼少期の真実を紹介。',
    images: [{ url: '/images/articles/ito-mima-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/ito-mima-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '伊藤美誠の子供時代｜2歳で卓球を始め、母と二人三脚で歩んだ道',
    images: ['/images/articles/ito-mima-childhood.jpg'],
  },
};

export default function ItoMimaChildhoodPage() {
  return (
    <ArticleLayout
      title="伊藤美誠の子供時代｜2歳で卓球を始め、母と二人三脚で歩んだ道"
      heroImage="/images/articles/ito-mima-childhood.jpg"
      heroAlt="卓球を練習する子ども"
      publishDate="2025年4月"
      slug="ito-mima-childhood"
      description="卓球界のスター・伊藤美誠選手の子供時代。元卓球選手の母のもとで2歳から始め、1日8時間練習した幼少期の真実を紹介。"
      tags={['伊藤美誠', '卓球', '幼少期']}
      shareText="伊藤美誠選手が2歳で卓球を始め、1日8時間練習した幼少期の話。 #伊藤美誠 #卓球"
      citations={['https://ja.wikipedia.org/wiki/%E4%BC%8A%E8%97%A4%E7%BE%8E%E8%AA%A0']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          伊藤美誠の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          伊藤美誠選手は2000年10月21日に静岡県磐田市で生まれました。卓球界を代表するスター選手として、多くの記録を塗り替えてきた彼女の原点は、わずか2歳の時点に遡ります。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">2歳</p>
            <p className="text-xs text-gray-600 mt-1">卓球開始年齢</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">8時間</p>
            <p className="text-xs text-gray-600 mt-1">幼少期の練習時間</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">2021年</p>
            <p className="text-xs text-gray-600 mt-1">東京五輪金メダル</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">多数</p>
            <p className="text-xs text-gray-600 mt-1">史上最年少記録</p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-6">
          <p className="font-bold text-orange-900 mb-2">基本情報</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>静岡県磐田市</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">出身校:</span>
              <span>磐田市立磐田北小学校</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">母親:</span>
              <span>伊藤美乃り（元卓球選手・現日本代表コーチ）</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">家庭:</span>
              <span>両親は伊藤が10歳の時に離婚、母に育てられる</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          2歳で卓球を始めた理由
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          伊藤美誠選手が2歳で卓球を始めたのは、偶然ではなく、むしろ必然でした。その背景には、母親の存在が大きく関係しています。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">母親の影響</h3>
              <p className="text-sm text-gray-600">
                母・伊藤美乃り氏は元卓球選手で、現在は日本代表のコーチを務めています。卓球一筋の人生を歩んできた母親にとって、娘にも卓球を教えることは自然な選択でした。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">親子の共有時間</h3>
              <p className="text-sm text-gray-600">
                卓球を通じて、母親は娘と向き合い、娘は母親の愛情を受け取る。これが伊藤選手の人生の中心となりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">早期教育の効果</h3>
              <p className="text-sm text-gray-600">
                脳の発達が最も急速な2歳という時期に、複雑な動きを繰り返すことで、神経システムが効率的に形成されました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          1日8時間練習の幼少期
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          伊藤美誠選手は4歳から8歳の間、1日8時間もの卓球練習をしていました。これは、小学校の授業時間に匹敵する長さです。母親のコーチングのもと、毎日の高強度練習を積み重ねました。
        </p>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-6">
          <p className="font-bold text-orange-900 mb-3">幼少期の練習スケジュール</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">4〜8歳:</span>
              <span>1日8時間の集中練習。母親による直接指導</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">小学卒業まで:</span>
              <span>1日6時間以上の練習を継続</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">中国遠征:</span>
              <span>自費で中国に出向き、より強い選手たちとの対戦経験</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">休日なし:</span>
              <span>両親の離婚後も、母親が女手一つで支援を継続</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          他の子どもたちが遊びに時間を使っていた年代に、伊藤選手はラケットを握り続けました。この時期の積み重ねが、後の成功の基礎となったのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          母との二人三脚、離婚後も続けた挑戦
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          伊藤美誠選手の人生で最も転機となったのは、10歳の時の親の離婚です。しかし、この出来事が彼女の決意をさらに強くしました。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">環境の変化</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2〜4歳</td>
                <td className="px-3 py-2 text-gray-600">卓球開始、両親の下で育成</td>
                <td className="px-3 py-2 text-gray-600">安定した家庭環境</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">5〜10歳</td>
                <td className="px-3 py-2 text-gray-600">1日8時間練習を継続、中国遠征も開始</td>
                <td className="px-3 py-2 text-gray-600">親の支援が両立</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">10歳</td>
                <td className="px-3 py-2 text-gray-600">両親が離婚</td>
                <td className="px-3 py-2 text-gray-600">母親が女手一つで育成</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">11歳〜</td>
                <td className="px-3 py-2 text-gray-600">母親のみのサポートで国内外で活躍</td>
                <td className="px-3 py-2 text-gray-600">母子二人三脚、さらに強化</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          離婚後、伊藤美乃り氏は単身で娘の育成に当たりました。経済的な制約がある中でも、自費で中国に娘を連れていき、世界レベルの対手との練習を実現させたのです。これは、単なる親の自己犠牲ではなく、娘の可能性を信じた投資でした。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          史上最年少記録を次々と更新
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          伊藤美誠選手は、子どもの時代から数々の「史上最年少」記録を塗り替えてきました。これらは、単なる記録ではなく、彼女の卓球への執着と、親子の信頼関係の結晶です。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
            <p className="font-bold text-orange-900 mb-2">若年期の実績</p>
            <ul className="text-sm text-orange-800 space-y-1">
              <li>- 小学時代から全国大会での上位入賞</li>
              <li>- 中学時代より国際大会に参加</li>
              <li>- 高校時代から世界ランキング入り</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
            <p className="font-bold text-orange-900 mb-2">代名詞「みまパンチ」</p>
            <ul className="text-sm text-orange-800 space-y-1">
              <li>- フォアハンドのカウンター技術</li>
              <li>- 攻撃的で華麗なプレースタイル</li>
              <li>- 幼少期の集中練習で磨き抜かれた技術</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
          <p className="font-bold text-orange-900 mb-3">国際大会での活躍</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800">
              <span className="font-bold">2020年東京オリンピック:</span>
              <span>混合ダブルス金メダル（水谷隼と組む）- オリンピック初出場での金メダルは、彼女の実力の証</span>
            </li>
            <li className="text-sm text-orange-800">
              <span className="font-bold">2021年の成績:</span>
              <span>世界ランキング上位、多くの国際大会で優勝</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          まとめ：才能よりも、環境と継続が作るアスリート
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          伊藤美誠選手の成功は、2歳という早期開始、1日8時間という集中力、そして何より母親の不動の信念が生み出したものです。多くの親は「才能がなければ無駄」と考えがちですが、伊藤選手の事例は異なる真実を教えてくれます。
        </p>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
          <p className="font-bold text-orange-900 mb-3">親が学ぶべき3つのポイント</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">1. 親の「覚悟」が子どもを動かす</span>
              <span>母親が卓球を本気で愛していたからこそ、娘も全力を尽くした</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">2. 早期教育は「強制」ではなく「環境」</span>
              <span>2歳からの開始は、親の一方的な押し付けではなく、家庭の文化だった</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">3. 人生の逆境も成長の機会に</span>
              <span>両親の離婚は、むしろ伊藤選手の決意を強固にした</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mt-4">
          お子さんがスポーツを始めるとき、親が心配するのは「才能があるか」「続けられるか」というプレッシャーです。しかし、伊藤美誠選手の人生は、そうした不安を払拭してくれます。大切なのは、親が信じて、環境を整えて、子どもの挑戦に寄り添うことなのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
