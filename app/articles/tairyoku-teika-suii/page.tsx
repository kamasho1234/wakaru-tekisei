import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どもの体力は本当に落ちている？｜平成20年からのデータで検証',
  description:
    '「子どもの体力が低下している」とよく言われます。スポーツ庁の公式データから、平成20年から令和7年までの15年間の推移を検証。意外に向上している種目もあります。',
  openGraph: {
    title: '子どもの体力は本当に落ちている？｜平成20年からのデータで検証',
    description:
      '平成20年から令和7年までの体力テスト経年変化。ソフトボール投げや握力は低下、でも柔軟性は向上。「全部が落ちている」わけではない事実をデータで確認します。',
    images: [{ url: '/images/articles/tairyoku-teika-suii.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/tairyoku-teika-suii',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/tairyoku-teika-suii',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どもの体力は本当に落ちている？｜平成20年からのデータで検証',
    images: ['/images/articles/tairyoku-teika-suii.jpg'],
  },
};

export default function TairyokuTeikasuiiPage() {
  return (
    <ArticleLayout
      title="子どもの体力は本当に落ちている？｜平成20年からのデータで検証"
      heroImage="/images/articles/tairyoku-teika-suii.jpg"
      heroAlt="体力測定を受ける子どもたち"
      publishDate="2026年7月"
      slug="tairyoku-teika-suii"
      description="「子どもの体力が低下している」とよく言われます。スポーツ庁の公式データから、平成20年から令和7年までの15年間の推移を検証。意外に向上している種目もあります。"
      tags={['体力テスト', '経年変化', '長期データ', '令和7年度']}
      shareText="子どもの体力は『全部が落ちている』わけではない。平成20年から令和7年のデータを見ると、柔軟性と腹筋は実は向上している。スポーツ庁データで検証。 #子育て #体力テスト"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 調査結果の概要（令和7年12月） https://www.mext.go.jp/sports/content/20251217-spt_sseisaku02-000046317_000101.pdf',
        '同 報告書 第3章 基礎集計（小学校） https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_000801.pdf',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          「今の子どもは体力がない」という声をよく聞きます。確かに運動不足や外遊びの減少など、子どもを取り巻く環境は変わりました。ですが、スポーツ庁の公式データを見ると、状況はもっと複雑です。平成20年（2008年）から令和7年（2026年）までの18年間、すべての種目が同じように低下したわけではないのです。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、実際のデータから「何が落ちたのか」「何が伸びたのか」を数値で確認します。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mt-6">
          <p className="font-bold text-blue-900 mb-2">データについて</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">対象:</span>
              <span>小学校5年生</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">期間:</span>
              <span>平成20年度から令和7年度（令和2年度は調査中止のため除く）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">体力合計点:</span>
              <span>各種目を10点満点に換算し、合計80点満点</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          体力合計点の推移：男子
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          男子の体力合計点を見ると、平成30年度の54.21点がピークです。その後低下し、令和4年度に52.29点で最低を記録。令和7年度は53.03点まで回復しましたが、ピークには及びません。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年度</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">体力合計点</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">前年比</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">平成20年度</td>
                <td className="px-3 py-2 text-right text-gray-600">54.19</td>
                <td className="px-3 py-2 text-right text-gray-500">-</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">平成30年度</td>
                <td className="px-3 py-2 text-right text-green-700 font-bold">54.21（ピーク）</td>
                <td className="px-3 py-2 text-right text-green-600">+0.02</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和元年度</td>
                <td className="px-3 py-2 text-right text-gray-600">53.61</td>
                <td className="px-3 py-2 text-right text-red-600">-0.60</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和3年度</td>
                <td className="px-3 py-2 text-right text-gray-600">52.53</td>
                <td className="px-3 py-2 text-right text-red-600">-1.08</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和4年度</td>
                <td className="px-3 py-2 text-right text-red-700 font-bold">52.29（最低）</td>
                <td className="px-3 py-2 text-right text-red-600">-0.24</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和5年度</td>
                <td className="px-3 py-2 text-right text-gray-600">52.60</td>
                <td className="px-3 py-2 text-right text-green-600">+0.31</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和6年度</td>
                <td className="px-3 py-2 text-right text-gray-600">52.54</td>
                <td className="px-3 py-2 text-right text-red-600">-0.06</td>
              </tr>
              <tr className="border-b bg-blue-50">
                <td className="px-3 py-2 text-gray-800 font-bold">令和7年度</td>
                <td className="px-3 py-2 text-right text-blue-700 font-bold">53.03</td>
                <td className="px-3 py-2 text-right text-green-600">+0.49</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">男子の傾向（平成20年度と令和7年度の比較）</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">全体:</span>
              <span>54.19 → 53.03（-1.16点、下降）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">ピークからの落差:</span>
              <span>平成30年度54.21が最高。コロナ禍で大きく低下し、回復途上</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">直近:</span>
              <span>令和4年度を底に、回復傾向が続く</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          体力合計点の推移：女子
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          女子の場合、平成30年度の55.90点がピークです。その後減少傾向が続き、令和6年度に53.93点で最低に。令和7年度はわずかに上向きで53.98点です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年度</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">体力合計点</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">前年比</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">平成20年度</td>
                <td className="px-3 py-2 text-right text-gray-600">54.85</td>
                <td className="px-3 py-2 text-right text-gray-500">-</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">平成30年度</td>
                <td className="px-3 py-2 text-right text-green-700 font-bold">55.90（ピーク）</td>
                <td className="px-3 py-2 text-right text-green-600">+1.05</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和元年度</td>
                <td className="px-3 py-2 text-right text-gray-600">55.59</td>
                <td className="px-3 py-2 text-right text-red-600">-0.31</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和3年度</td>
                <td className="px-3 py-2 text-right text-gray-600">54.66</td>
                <td className="px-3 py-2 text-right text-red-600">-0.93</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和4年度</td>
                <td className="px-3 py-2 text-right text-gray-600">54.32</td>
                <td className="px-3 py-2 text-right text-red-600">-0.34</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和5年度</td>
                <td className="px-3 py-2 text-right text-gray-600">54.29</td>
                <td className="px-3 py-2 text-right text-red-600">-0.03</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和6年度</td>
                <td className="px-3 py-2 text-right text-red-700 font-bold">53.93（最低）</td>
                <td className="px-3 py-2 text-right text-red-600">-0.36</td>
              </tr>
              <tr className="border-b bg-blue-50">
                <td className="px-3 py-2 text-gray-800 font-bold">令和7年度</td>
                <td className="px-3 py-2 text-right text-blue-700 font-bold">53.98</td>
                <td className="px-3 py-2 text-right text-green-600">+0.05</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">女子の傾向（平成20年度と令和7年度の比較）</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">全体:</span>
              <span>54.85 → 53.98（-0.87点、下降）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">ピークからの落差:</span>
              <span>平成30年度55.90が最高。令和6年度までほぼ一貫して低下</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">直近:</span>
              <span>令和7年度の0.05点アップは、ほぼ横ばい状態</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          「コロナ前の水準に戻った」って、本当？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ庁の公式コメントは次のようなものです。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            「体力合計点は、小中学校男女ともに前年度から向上しているが、中学校男子を除いてコロナ前の水準に至っていない。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査の結果について（概要）」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          つまり、小学5年生の男女は「コロナ前には戻っていない」状態です。平成30年度（2018年度）がコロナ前の最後の調査で、その時点でのピーク値に対して、令和7年度はまだ1点前後低いのです。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">回復のスピードに注目</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            令和4年度を底に、男子は毎年少しずつ上向いています（+0.31、+0.49）。ただし女子の回復は停滞気味（令和5年-0.03、令和6年-0.36、令和7年+0.05）です。単純に「戻った」ではなく「戻りかけている」が正確な表現です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          落ちた種目と伸びた種目
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「体力が低下している」という話は、すべての種目が同じペースで落ちているわけではないという点が大切です。平成20年度と令和7年度を比べると、種目によってはっきり方向が分かれます。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <p className="font-bold text-red-900 mb-3">大きく落ちた種目（男子）</p>
            <ul className="space-y-2">
              <li className="text-sm text-red-800 flex justify-between">
                <span>ソフトボール投げ</span>
                <span className="font-bold">-4.33m</span>
              </li>
              <li className="text-sm text-red-800">25.39m → 21.06m</li>
              <li className="text-xs text-red-600 mt-2">最も大きな低下。握力の低下も顕著</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="font-bold text-green-900 mb-3">伸びた種目（男子）</p>
            <ul className="space-y-2">
              <li className="text-sm text-green-800 flex justify-between">
                <span>長座体前屈</span>
                <span className="font-bold">+1.20cm</span>
              </li>
              <li className="text-sm text-green-800">32.68cm → 33.88cm</li>
              <li className="text-xs text-green-600 mt-2">柔軟性は向上。上体起こしも+0.33回</li>
            </ul>
          </div>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">種目（小5）</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">平成20</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">令和7</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">変化</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">握力（男子）</td>
                <td className="px-3 py-2 text-right text-gray-600">17.01 kg</td>
                <td className="px-3 py-2 text-right text-gray-600">15.97 kg</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">-1.04 kg</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">長座体前屈（男子）</td>
                <td className="px-3 py-2 text-right text-gray-600">32.68 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">33.88 cm</td>
                <td className="px-3 py-2 text-right text-green-600 font-bold">+1.20 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">上体起こし（男子）</td>
                <td className="px-3 py-2 text-right text-gray-600">19.12 回</td>
                <td className="px-3 py-2 text-right text-gray-600">19.45 回</td>
                <td className="px-3 py-2 text-right text-green-600 font-bold">+0.33 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">ソフトボール投げ（男子）</td>
                <td className="px-3 py-2 text-right text-gray-600">25.39 m</td>
                <td className="px-3 py-2 text-right text-gray-600">21.06 m</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">-4.33 m</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">立ち幅とび（男子）</td>
                <td className="px-3 py-2 text-right text-gray-600">153.96 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">150.96 cm</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">-3.00 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">握力（女子）</td>
                <td className="px-3 py-2 text-right text-gray-600">16.45 kg</td>
                <td className="px-3 py-2 text-right text-gray-600">15.61 kg</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">-0.84 kg</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">長座体前屈（女子）</td>
                <td className="px-3 py-2 text-right text-gray-600">36.64 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">38.17 cm</td>
                <td className="px-3 py-2 text-right text-green-600 font-bold">+1.53 cm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            スポーツ庁の種目別傾向分析（令和7年度概要より）:
          </p>
          <ul className="space-y-1.5">
            <li className="text-sm text-gray-700">・「握力」は、小中学校男女ともに低下傾向。</li>
            <li className="text-sm text-gray-700">・「長座体前屈」は、小中学校男女ともに向上傾向。</li>
            <li className="text-sm text-gray-700">・「持久走」は、男女ともに低下傾向。</li>
            <li className="text-sm text-gray-700">・「ボール投げ」は、小中学校男子で直近向上傾向、小中学校女子で横ばい。</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          何が落ちて、何が伸びたのか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ここが重要です。「体力が低下している」という一般的な言説は正確ではありません。より正確には：
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">パターン1: 落ちている種目</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800">・ボール投げ（筋力と投げる動作の組合せ）</li>
            <li className="text-sm text-blue-800">・握力（握る力そのもの）</li>
            <li className="text-sm text-blue-800">・立ち幅とび、50m走（爆発力とスピード）</li>
            <li className="text-sm text-blue-800">・持久走（持久力）</li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
          <p className="font-bold text-green-900 mb-3">パターン2: 伸びている種目</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800">・長座体前屈（柔軟性）— 両性とも向上</li>
            <li className="text-sm text-green-800">・上体起こし（腹筋の筋持久力）— 男子わずかに向上</li>
            <li className="text-sm text-green-800">・反復横とび（敏捷性）— 小幅な変動</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          興味深いのは、柔軟性が向上している点です。ストレッチやヨガ、あるいはゲーム機を使った運動など、子どもの運動環境が変わっている可能性を示唆しています。一方、ボール投げや握力といった「昔ながらの遊びや運動」が低下しているのは、外遊び文化の変化と関連があるかもしれません。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">「全体的な低下」という単純な説明では不十分</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            体力テストは10の種目の総合評価です。一部が低下し、一部が向上している場合、その合計点の解釈は複雑です。「体力がない」という結論より「どの種目が弱いのか」を分析することが、実際的な対策につながります。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          わが子の体力を考えるときに
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          18年間のデータを見ると、時代とともに子どもの体力の質が変わっていることが分かります。かつてのように「全種目バランス型」から、「柔軟性は高いが爆発力は低い」という特性を持つ子どもが増えている可能性があります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          当サイトの診断では、お子さんの8種目の個別記録を全国平均と比較し、その子の強みと弱みを特定できます。「体力が低い」と一括りにするのではなく、「どの種目が弱いのか」を知ることが、適切なスポーツ選択につながります。
        </p>
        <p className="text-gray-700 leading-relaxed">
          平成20年代の「ボール投げの天才」から令和時代の「柔軟性に優れた子」まで、体力の構成は時代ごとに異なる可能性があります。それが個性なのか、社会的な変化なのか、データだけからは判断できません。ただ、詳しく見れば、見えてくることはあります。
        </p>
      </div>
    </ArticleLayout>
  );
}
