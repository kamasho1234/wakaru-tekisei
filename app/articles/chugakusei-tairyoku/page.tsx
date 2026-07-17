import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '中学2年生の体力テスト全国平均｜8種目の目安と評価基準',
  description:
    'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」から、中学2年生の8種目の全国平均値と評価基準を掲載。お子さんの記録と比較する際の参考に。',
  openGraph: {
    title: '中学2年生の体力テスト全国平均｜8種目の目安と評価基準',
    description:
      '中2男子の握力28.91kg、50m走8.00秒が全国平均。女子との比較、身長体重、評価基準A〜Eの基準点も掲載。スポーツ庁の公式データです。',
    images: [{ url: '/images/articles/chugakusei-tairyoku.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/chugakusei-tairyoku',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/chugakusei-tairyoku',
  },
  twitter: {
    card: 'summary_large_image',
    title: '中学2年生の体力テスト全国平均｜8種目の目安と評価基準',
    images: ['/images/articles/chugakusei-tairyoku.jpg'],
  },
};

export default function ChugakuseiTairyokuPage() {
  return (
    <ArticleLayout
      title="中学2年生の体力テスト全国平均｜8種目の目安と評価基準"
      heroImage="/images/articles/chugakusei-tairyoku.jpg"
      heroAlt="中学生の体力テスト"
      publishDate="2026年7月"
      slug="chugakusei-tairyoku"
      description="スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」から、中学2年生の8種目の全国平均値と評価基準を掲載。お子さんの記録と比較する際の参考に。"
      tags={['体力テスト', '中学生', '全国平均', '令和7年度']}
      shareText="中学2年生の体力テスト全国平均。男子42.06点、女子47.46点。握力から持久走まで8種目の目安と、A〜E評価の基準点をまとめました。スポーツ庁データ。 #子育て #中学生"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 調査結果の概要（令和7年12月） https://www.mext.go.jp/sports/content/20251217-spt_sseisaku02-000046317_000101.pdf',
        '同 報告書 第3章 基礎集計（中学校） https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_0000801.pdf',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          中学2年生の体力テストは、小学5年生とは異なる評価基準が使われます。同じ「80点満点」ですが、ベンチマークが異なるため、小中で直接比較することはできません。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、令和7年度（2025年度）の中学2年生の全国平均を8種目すべて掲載し、お子さんの記録と比較する際の参考にしていただけるようにまとめました。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mt-6">
          <p className="font-bold text-blue-900 mb-2">中学2年生の体力テストについて</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">対象:</span>
              <span>国公私立の中学校2年生（悉皆調査）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">実施:</span>
              <span>令和7年4月〜7月</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">実技8種目:</span>
              <span>握力・上体起こし・長座体前屈・反復横とび・持久走（男子1500m、女子1000m）・20mシャトルラン・50m走・立ち幅とび・ハンドボール投げ</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">サンプル数:</span>
              <span>男子442,851人、女子425,075人</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          中学2年生の全国平均値（令和7年度）
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          以下は、中学2年生の8種目の全国平均値です。お子さんの記録がこれより高いか低いかで、全国での位置付けがおおよそ分かります。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">種目</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">男子</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">女子</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">握力</td>
                <td className="px-3 py-2 text-right text-gray-600">28.91 kg</td>
                <td className="px-3 py-2 text-right text-gray-600">23.12 kg</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">上体起こし</td>
                <td className="px-3 py-2 text-right text-gray-600">25.99 回</td>
                <td className="px-3 py-2 text-right text-gray-600">21.62 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">長座体前屈</td>
                <td className="px-3 py-2 text-right text-gray-600">44.98 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">46.97 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">反復横とび</td>
                <td className="px-3 py-2 text-right text-gray-600">51.63 点</td>
                <td className="px-3 py-2 text-right text-gray-600">45.77 点</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">持久走</td>
                <td className="px-3 py-2 text-right text-gray-600">410.24 秒</td>
                <td className="px-3 py-2 text-right text-gray-600">310.35 秒</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">20mシャトルラン</td>
                <td className="px-3 py-2 text-right text-gray-600">78.59 回</td>
                <td className="px-3 py-2 text-right text-gray-600">50.44 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">50m走</td>
                <td className="px-3 py-2 text-right text-gray-600">8.00 秒</td>
                <td className="px-3 py-2 text-right text-gray-600">8.97 秒</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">立ち幅とび</td>
                <td className="px-3 py-2 text-right text-gray-600">197.50 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">166.39 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">ハンドボール投げ</td>
                <td className="px-3 py-2 text-right text-gray-600">20.66 m</td>
                <td className="px-3 py-2 text-right text-gray-600">12.36 m</td>
              </tr>
              <tr className="border-b bg-blue-50 font-bold">
                <td className="px-3 py-2 text-gray-800">体力合計点</td>
                <td className="px-3 py-2 text-right text-blue-700">42.06 点</td>
                <td className="px-3 py-2 text-right text-blue-700">47.46 点</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">女子の合計点が高く見える理由</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            女子47.46点が男子42.06点より高いのは、評価基準が男女別に設定されているためです。男子の方が握力や投げ力で上回っていますが、同じ「42点」でも男子と女子では達成難度が異なります。「女子の方が体力が高い」という意味ではないため、男女を直接比較しないでください。
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">中学生は体格が大きく異なる</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            中学2年生は成長段階の途中です。早生まれと遅生まれでは体格差が大きく、その分体力測定結果にも差が出ます。また、部活動の本格化により、スポーツ経験による個人差も拡大します。全国平均はあくまで目安です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          中学2年生の体格（参考値）
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          体力測定の結果は、体格に大きく左右されます。参考として、中学2年生の全国平均身長・体重を掲載します。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-3">男子</p>
            <ul className="space-y-2">
              <li className="text-sm text-blue-800 flex justify-between">
                <span>身長</span>
                <span className="font-bold">161.35 cm</span>
              </li>
              <li className="text-sm text-blue-800 flex justify-between">
                <span>体重</span>
                <span className="font-bold">50.14 kg</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-3">女子</p>
            <ul className="space-y-2">
              <li className="text-sm text-blue-800 flex justify-between">
                <span>身長</span>
                <span className="font-bold">155.09 cm</span>
              </li>
              <li className="text-sm text-blue-800 flex justify-between">
                <span>体重</span>
                <span className="font-bold">46.86 kg</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          男女で約6cm、体重で約3kgの差があります。この体格差が、握力やジャンプ力などの種目に反映されます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          中学2年生のA〜E評価基準
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          体力合計点は80点満点で、次の5段階で評価されます。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-center font-bold text-gray-700">評価</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">基準点</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">意味</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-center font-bold text-green-700">A</td>
                <td className="px-3 py-2 text-center text-gray-600">57点以上</td>
                <td className="px-3 py-2 text-center text-sm text-gray-600">優秀</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-center font-bold text-blue-700">B</td>
                <td className="px-3 py-2 text-center text-gray-600">47〜56点</td>
                <td className="px-3 py-2 text-center text-sm text-gray-600">良好</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-center font-bold text-gray-600">C</td>
                <td className="px-3 py-2 text-center text-gray-600">37〜46点</td>
                <td className="px-3 py-2 text-center text-sm text-gray-600">平均的</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-center font-bold text-orange-600">D</td>
                <td className="px-3 py-2 text-center text-gray-600">27〜36点</td>
                <td className="px-3 py-2 text-center text-sm text-gray-600">要改善</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-center font-bold text-red-600">E</td>
                <td className="px-3 py-2 text-center text-gray-600">26点以下</td>
                <td className="px-3 py-2 text-center text-sm text-gray-600">低い</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          令和7年度の中学2年生の平均は、男子42.06点、女子47.46点です。いずれも「C評価（平均的）」の範囲に入ります。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="font-bold text-gray-900 mb-2">小学5年生との基準の違い</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs mt-2">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-2 py-1 text-left">評価</th>
                  <th className="px-2 py-1 text text-center">小5</th>
                  <th className="px-2 py-1 text-center">中2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 py-1">A</td>
                  <td className="px-2 py-1 text-center">65点以上</td>
                  <td className="px-2 py-1 text-center">57点以上</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="px-2 py-1">C</td>
                  <td className="px-2 py-1 text-center">50〜57点</td>
                  <td className="px-2 py-1 text-center">37〜46点</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-2">中2は小5より基準が低く設定されており、小学時代より中学で成長することが前提です。</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          中学男子だけが「コロナ前に戻った」
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ庁の公式コメントで特筆される点があります。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            「体力合計点は、小中学校男女ともに前年度から向上しているが、中学校男子を除いてコロナ前の水準に至っていない。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査の結果について（概要）」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          つまり、小学5年生の男女、そして中学2年生の女子は「まだコロナ前の水準に戻っていない」のに対し、中学2年生の男子だけが「コロナ前と同等またはそれ以上」という意味です。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">この理由は何か</p>
          <p className="text-sm text-blue-800 leading-relaxed mb-2">
            調査からは分かりません。可能性として考えられるのは：
          </p>
          <ul className="space-y-1.5">
            <li className="text-sm text-blue-800">・中学男子は部活動が活発化し、運動量が増える段階</li>
            <li className="text-sm text-blue-800">・思春期の男子ホルモン分泌による身体の急速な発達</li>
            <li className="text-sm text-blue-800">・スポーツへの関心が高く、自発的な運動実践</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          種目別に見る中学男子の特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中学2年生男子の記録の中で、特に目立つものを紹介します。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="font-bold text-green-900 mb-3">得意な種目（全国平均が高い）</p>
            <ul className="space-y-2">
              <li className="text-sm text-green-800">
                <span className="font-bold">握力</span>
                <span className="ml-2">28.91 kg</span>
              </li>
              <li className="text-sm text-green-800">
                <span className="font-bold">立ち幅とび</span>
                <span className="ml-2">197.50 cm</span>
              </li>
              <li className="text-sm text-green-800">
                <span className="font-bold">シャトルラン</span>
                <span className="ml-2">78.59 回</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <p className="font-bold text-amber-900 mb-3">相対的に弱い種目</p>
            <ul className="space-y-2">
              <li className="text-sm text-amber-800">
                <span className="font-bold">長座体前屈</span>
                <span className="ml-2">44.98 cm</span>
              </li>
              <li className="text-sm text-amber-800">
                <span className="font-bold">上体起こし</span>
                <span className="ml-2">25.99 回</span>
              </li>
              <li className="text-sm text-amber-800">
                <span>（女子より少ない回数）</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          中学男子は握力や爆発力（立ち幅とび）など、「力」を使う種目で優位です。一方、柔軟性を必要とする長座体前屈では、女子（46.97cm）に及びません。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          記録の見方と注意点
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          全国平均は目安です。以下の点に注意してください。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2">成長段階による差</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            中学2年生でも、4月生まれと3月生まれでは1年近い発達差があります。体格に大きな個人差があり、それが体力測定結果に反映されます。
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2">スポーツ経験による差</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            中学では部活動が本格化します。野球やバレーなど特定のスポーツに従事している場合、その種目に関連した体力測定種目で有利になります。
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">最も大切なのは年単位での伸び</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            全国平均より低いことより、「昨年と比べてどう伸びたか」の方が重要です。全国平均以下でも、毎年着実に伸びていれば問題ありません。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          記事のまとめ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          令和7年度の中学2年生の体力テストから分かることは：
        </p>

        <div className="space-y-3">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="text-sm text-blue-800">男子は平均42.06点（C評価）。握力・立幅跳びなど爆発力系が得意。中学男子だけがコロナ前に戻った。</p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="text-sm text-blue-800">女子は平均47.46点（C評価）。柔軟性で男子を上回る。ただしコロナ前にはまだ戻っていない。</p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="text-sm text-blue-800">中学は成長段階の幅が大きく、平均値だけでなく個人差が非常に大きい段階です。</p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="text-sm text-blue-800">当サイトの診断では、平均値との比較だけでなく、お子さんの8種目の個別成績から、その子の強みと向いているスポーツを特定できます。</p>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
