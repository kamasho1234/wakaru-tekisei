import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'スキー・スノーボードに向いている子の特徴｜6つの競技で見る適性と地域性',
  description:
    'スキー・スノーボードに向いている子の特徴を、SAJが統括する6つの競技とJSBAのU-12FS認定制度から解説。滑降系・持久系・技系で必要な資質が異なり、冬季・地域性が関わる点を紹介。',
  openGraph: {
    title: 'スキー・スノーボードに向いている子の特徴｜6つの競技で見る適性と地域性',
    description:
      'スキー・スノーボードに向いている子の特徴を、SAJが統括する6つの競技とJSBAのU-12FS認定制度から解説。滑降系・持久系・技系で必要な資質が異なり、冬季・地域性が関わる点を紹介。',
    images: [{ url: '/images/articles/ski-snowboard-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/ski-snowboard-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/ski-snowboard-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'スキー・スノーボードに向いている子の特徴｜6つの競技で見る適性と地域性',
    images: ['/images/articles/ski-snowboard-aptitude.jpg'],
  },
};

export default function SkiSnowboardAptitudePage() {
  return (
    <ArticleLayout
      title="スキー・スノーボードに向いている子の特徴｜6つの競技で見る適性と地域性"
      heroImage="/images/articles/ski-snowboard-aptitude.jpg"
      heroAlt="スキーをしている子どもたち"
      publishDate="2026年8月"
      slug="ski-snowboard-aptitude"
      description="スキー・スノーボードに向いている子の特徴を、SAJが統括する6つの競技とJSBAのU-12FS認定制度から解説。滑降系・持久系・技系で必要な資質が異なり、冬季・地域性が関わる点を紹介。"
      tags={['スキー', 'スノーボード', 'ウィンタースポーツ', '適性診断']}
      shareText="スキーとスノーボードは別の競技。さらにスキーは6つの競技に分かれ、必要な資質が異なる。 #子育て #スキー"
      citations={[
        '公益財団法人 全日本スキー・スノーボード連盟「競技本部」 https://www.ski-japan.or.jp/games/',
        '日本スノーボード協会「U-12FS認定のご案内」 https://www.jsba.or.jp/yukibouzu/games/u-12.html',
        '文部科学省「小学校学習指導要領（平成29年告示）解説 体育編」 https://www.mext.go.jp/content/20240918-mxt_kyoiku01-100002607.pdf',
      ]}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スキー・スノーボードとは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「スキー」と一口に言っても、実際にはひとつの競技ではありません。全日本スキー・スノーボード連盟（SAJ）が統括するだけで、6つの競技に分かれているのです。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          スキーとスノーボードは別の競技です。さらにスキーの中でも、雪面をスピードで滑る「アルペン」、長距離を歩くように進む「クロスカントリー」、飛距離を競う「ジャンプ」、複数の種目で総合得点を競う「コンバインド」、雪上で技を競う「フリースタイル」と、それぞれ性質が大きく異なります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          SAJが統括する6つのスキー・スノーボード競技
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          各競技で求められる身体能力や性格も異なります。子どもがどの競技に向くかは、親御さんの観察と本人の興味が重要です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">競技</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">特徴</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">タイプ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">アルペン</td>
                <td className="px-3 py-2 text-gray-600">雪面をスピードで滑り、タイムを競う</td>
                <td className="px-3 py-2 text-gray-600">滑降系</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">クロスカントリー</td>
                <td className="px-3 py-2 text-gray-600">長距離を歩くように進み、体力を競う</td>
                <td className="px-3 py-2 text-gray-600">持久系</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ジャンプ</td>
                <td className="px-3 py-2 text-gray-600">助走後に飛距離と着地姿勢を競う</td>
                <td className="px-3 py-2 text-gray-600">技系</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">コンバインド</td>
                <td className="px-3 py-2 text-gray-600">ジャンプとクロスカントリーの複合</td>
                <td className="px-3 py-2 text-gray-600">滑降系・持久系</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">フリースタイル</td>
                <td className="px-3 py-2 text-gray-600">雪上でジャンプやスピンなど技を競う</td>
                <td className="px-3 py-2 text-gray-600">技系</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">スノーボード</td>
                <td className="px-3 py-2 text-gray-600">横乗りで滑走・技を競う独立した競技</td>
                <td className="px-3 py-2 text-gray-600">技系・滑降系</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 公益財団法人 全日本スキー・スノーボード連盟「競技本部」</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">性質の違いが大切</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            滑降系（アルペン）では瞬発力とバランス感覚、持久系（クロスカントリー）では長時間の有酸素運動、技系（ジャンプ・フリースタイル・スノーボード）では空間認識と勇敢さが求められます。同じ「スキー」でも、まったく異なる適性が必要です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          JSBA U-12FS認定制度 — 小学生からの段階的な技術認定
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スノーボードに興味のある小学生以下を対象に、日本スノーボード協会（JSBA）が公式な認定制度を設けています。ジャンプ系とジブ（障害物）系の2つのトラックに分かれており、子どもが得意な方から進められる設計になっています。
        </p>

        <div className="space-y-6 mb-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-3 text-sm">受験情報</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 font-bold text-gray-900 w-1/3">対象</td>
                    <td className="px-3 py-2 text-gray-600">小学生以下（U-12）のスノーボーダー（非会員含む）※1級はJSBA会員限定</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 font-bold text-gray-900">受験料</td>
                    <td className="px-3 py-2 text-gray-600">各級とも1,100円（税込）</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 font-bold text-gray-900">公認料</td>
                    <td className="px-3 py-2 text-gray-600">550円（税込）※合格後にかかります</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">出典: 日本スノーボード協会「U-12FS認定のご案内」</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3 text-sm">ジャンプ認定（スピンジャンプの技術向上）</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-700">級</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-700">課題</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 font-bold text-gray-900">5級</td>
                    <td className="px-3 py-2 text-gray-600">ストレートジャンプ（ノーグラブ）</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 font-bold text-gray-900">4級</td>
                    <td className="px-3 py-2 text-gray-600">ストレートジャンプ＋グラブ</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 font-bold text-gray-900">3級</td>
                    <td className="px-3 py-2 text-gray-600">180°スピンジャンプ（ノーグラブ）</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 font-bold text-gray-900">2級</td>
                    <td className="px-3 py-2 text-gray-600">360°スピンジャンプ（ノーグラブ）</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 font-bold text-gray-900">1級</td>
                    <td className="px-3 py-2 text-gray-600">360°以下のスピンジャンプ＋グラブ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3 text-sm">ジブ認定（障害物での技術向上）</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-700">級</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-700">課題</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 font-bold text-gray-900">5級</td>
                    <td className="px-3 py-2 text-gray-600">ボックスで50-50</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 font-bold text-gray-900">4級</td>
                    <td className="px-3 py-2 text-gray-600">ボックスでボードスライド</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 font-bold text-gray-900">3級</td>
                    <td className="px-3 py-2 text-gray-600">ボックスで50-50からボードスライドに乗せ替え</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 font-bold text-gray-900">2級</td>
                    <td className="px-3 py-2 text-gray-600">ボックスでオンかオフに180度以上のスピンを入れた50-50かボードスライド</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 font-bold text-gray-900">1級</td>
                    <td className="px-3 py-2 text-gray-600">レールでボードスライドか50-50</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">出典: 同上</p>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
          <p className="font-bold text-green-900 mb-2 text-sm">認定会の体制</p>
          <p className="text-sm text-green-800 leading-relaxed">
            認定会の開催には、JSBA公認C級以上のインストラクターまたはジャッジ資格が有効な者が2名以上必要と定められています。これにより、スキー場などで実施される認定会が、安全かつ公式基準に基づいて運営されていることが保証されます。
          </p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mt-6">
          <p className="font-bold text-amber-900 mb-2">初歩から段階的に学べる設計</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            5級はストレートジャンプ（助走なしで垂直に飛ぶ）やボックスで50-50（ボード全体の側面を接地する）という、初歩的な技術から始まります。子どもが得意な方の技術を選んで進められ、達成感を得られながら長期的に成長する仕組みになっています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          学校体育での扱い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スキーは小学校の学習指導要領では、どのように位置づけられているでしょうか。文部科学省の公式資料から見てみます。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2 text-sm">学習指導要領での位置づけ</p>
          <p className="text-sm text-gray-600 mb-3 italic">
            「雪遊び，氷上遊び，スキー，スケート，水辺活動などの取扱い」「諸条件の整っている学校に対して，自然との関わりの深い運動の指導を奨励」
          </p>
          <p className="text-xs text-gray-500">出典: 文部科学省「小学校学習指導要領（平成29年告示）解説 体育編」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          スキーは「雪遊び、氷上遊び、スキー、スケート、水辺活動」という「自然との関わりの深い活動」に位置づけられ、諸条件の整った学校に対して指導が奨励されています。しかし、全国一律の必修ではありません。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">学校ごとの判断</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            スキーを学校体育で行うかは、学校がある地域の冬季条件、スキー場へのアクセス、予算、指導者の配置など、諸条件に基づいて判断されます。スキーができる地域とそうでない地域で、子どもたちが経験する機会に差があるのは、このためです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スキー・スノーボードに向いている子の特徴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バランス感覚が優れている子</h3>
              <p className="text-sm text-gray-600">
                スキーはボード上で重心移動によって方向や速度をコントロールします。自転車やスケートボードで遊ぶのが得意な子は、スキーの習得も早い傾向があります。スノーボードでは特に、横乗りの姿勢を保つバランス能力が重要です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">空間認識が好きな子</h3>
              <p className="text-sm text-gray-600">
                フリースタイルやスノーボードのジャンプ・ジブ系では、宙を飛んでいる間に自分の体がどの向きにあるかを認識し、着地に向けて回転させるスキルが必要です。空間的な想像力を楽しめる子が向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">長時間の活動を楽しめる子</h3>
              <p className="text-sm text-gray-600">
                スキーやスノーボード、特にクロスカントリーは、継続的な身体活動が必要です。連続して何度も滑ったり、長い距離を進んだりすることを楽しめる子が向いています。個別の技術よりも、楽しむ心が大切です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">自然の中で活動するのが好きな子</h3>
              <p className="text-sm text-gray-600">
                スキー・スノーボードは季節と地域に大きく左右される競技です。冬季限定、スキー場という特定の環境を活かしたアウトドア体験を喜べる子が向いています。競技というより「自然と一体になるスポーツ」として楽しむ子が長く続ける傾向があります。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">これらの特徴は公式な適性基準ではありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            上記は、SAJの競技体系とJSBAの認定制度から見える競技の特性を整理したものです。実際には、地域の冬季条件や家庭の事情に大きく左右されます。興味のある子は、小規模なグループレッスンから始めるなど、本人の様子を見守りながら進めることが大切です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          冬季・地域性の重要性
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スキー・スノーボードの大きな特徴は、他のスポーツと異なり、冬季と地域性に強く左右されることです。
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
            <p className="font-bold text-purple-900 mb-2 text-sm">冬季限定という課題</p>
            <p className="text-sm text-purple-800 leading-relaxed">
              スキーとスノーボードは、十分な積雪がある時期にしかできません。本格的な練習機会は冬季に限定されるため、年間を通じた継続的なトレーニングが難しい競技です。
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="font-bold text-green-900 mb-2 text-sm">地域による環境差</p>
            <p className="text-sm text-green-800 leading-relaxed">
              スキー場への距離、冬季の降雪量、家庭の移動手段や時間的・経済的余裕など、地域や家庭の事情により、経験の機会に大きな差が生じます。都市部の子どもと雪国の子どもでは、スポーツに接する環境がまったく異なる可能性があります。
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          子どもの「向き不向き」を判断する前に、まず「その子が経験する機会があるか」という点が重要です。興味のある子であれば、初心者向けのレッスンから小規模に始めることで、適性を見守ることができます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          他のウィンタースポーツとの比較
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          冬季に楽しめるスポーツは、スキー・スノーボード以外にもあります。他の競技との特徴を比較してみてください。
        </p>

        <div className="grid grid-cols-1 gap-3 mb-6">
          <Link href="/articles/figure-skating-aptitude" className="bg-pink-50 rounded-2xl p-4 border border-pink-100 hover:bg-pink-100 transition-colors block">
            <p className="font-bold text-pink-900 text-sm mb-1">フィギュアスケート</p>
            <p className="text-xs text-pink-800">氷上での表現と技術を競う。リズム感と柔軟性が活きる</p>
          </Link>
          <Link href="/articles/skateboard-aptitude" className="bg-orange-50 rounded-2xl p-4 border border-orange-100 hover:bg-orange-100 transition-colors block">
            <p className="font-bold text-orange-900 text-sm mb-1">スケートボード</p>
            <p className="text-xs text-orange-800">季節や場所に左右されず、技を磨ける</p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          スキー・スノーボードに向いている子は、バランス感覚と空間認識に優れ、自然の中での活動を楽しめる子です。「スキー」という一つのカテゴリーの中でも、6つの競技が存在し、子どもの適性や興味は大きく異なります。小学生以下向けのJSBA U-12FS認定制度は、段階的な達成感が得られる設計になっており、興味のある子の第一歩になります。ただし、冬季・地域性という制約が大きいため、本人の興味と家庭の環境を総合的に判断することが重要です。
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
