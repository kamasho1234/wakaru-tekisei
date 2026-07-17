import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '令和7年度 全国体力テストの結果｜小5の全国平均とコロナ前との比較',
  description:
    'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」の結果を、原典の数値そのままで解説。小学5年生の8種目の全国平均、体力合計点53.03点（男子）の意味、コロナ前の水準に戻ったのかを検証します。',
  openGraph: {
    title: '令和7年度 全国体力テストの結果｜小5の全国平均とコロナ前との比較',
    description:
      'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」の結果を原典の数値で解説。小5の8種目全国平均、体力合計点、コロナ前との比較。',
    images: [{ url: '/images/articles/tairyoku-chosa-r7.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/tairyoku-chosa-r7',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/tairyoku-chosa-r7',
  },
  twitter: {
    card: 'summary_large_image',
    title: '令和7年度 全国体力テストの結果｜小5の全国平均とコロナ前との比較',
    images: ['/images/articles/tairyoku-chosa-r7.jpg'],
  },
};

export default function TairyokuChosaR7Page() {
  return (
    <ArticleLayout
      title="令和7年度 全国体力テストの結果｜小5の全国平均とコロナ前との比較"
      heroImage="/images/articles/tairyoku-chosa-r7.jpg"
      heroAlt="体力テストに取り組む小学生"
      publishDate="2026年7月"
      slug="tairyoku-chosa-r7"
      description="スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」の結果を、原典の数値そのままで解説。小学5年生の8種目の全国平均、体力合計点53.03点（男子）の意味、コロナ前の水準に戻ったのかを検証します。"
      tags={['体力テスト', '全国平均', '公的データ', '令和7年度']}
      shareText="令和7年度の全国体力テスト結果を、スポーツ庁の原典データそのままで解説。小5の全国平均と、コロナ前に戻ったのかを検証しました。 #子育て #体力テスト"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 調査結果の概要（令和7年12月） https://www.mext.go.jp/sports/content/20251217-spt_sseisaku02-000046317_000101.pdf',
        '同 報告書 第3章 基礎集計（小学校） https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_000801.pdf',
        '同 都道府県別集計 https://www.mext.go.jp/sports/content/20260113-spt_sseisaku02-000046317_0000001.pdf',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ庁は令和7年12月に「令和7年度 全国体力・運動能力、運動習慣等調査」の結果を公表しました。全国の小学5年生と中学2年生を対象にした悉皆調査で、令和7年度は小学5年生だけで男子470,224人、女子454,752人が参加しています。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、報告書とExcelの原典データから数値をそのまま引用して解説します。ネット上には実際の値と異なる数字が出回っていることがあるため、すべて出典を明記しています。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mt-6">
          <p className="font-bold text-blue-900 mb-2">この調査の基本</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">対象:</span>
              <span>国公私立の小学校5年生・中学校2年生（悉皆調査）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">実施:</span>
              <span>令和7年4月〜7月</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">種目:</span>
              <span>握力・上体起こし・長座体前屈・反復横とび・20mシャトルラン・50m走・立ち幅とび・ソフトボール投げの8種目</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">体力合計点:</span>
              <span>各種目を10点満点で換算し、合計80点満点</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          小学5年生の全国平均（令和7年度）
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          お子さんの記録と比べる際の基準になる、8種目の全国平均です。
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
                <td className="px-3 py-2 text-right text-gray-600">15.97 kg</td>
                <td className="px-3 py-2 text-right text-gray-600">15.61 kg</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">上体起こし</td>
                <td className="px-3 py-2 text-right text-gray-600">19.45 回</td>
                <td className="px-3 py-2 text-right text-gray-600">18.36 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">長座体前屈</td>
                <td className="px-3 py-2 text-right text-gray-600">33.88 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">38.17 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">反復横とび</td>
                <td className="px-3 py-2 text-right text-gray-600">40.90 点</td>
                <td className="px-3 py-2 text-right text-gray-600">38.71 点</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">20mシャトルラン</td>
                <td className="px-3 py-2 text-right text-gray-600">47.95 回</td>
                <td className="px-3 py-2 text-right text-gray-600">36.87 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">50m走</td>
                <td className="px-3 py-2 text-right text-gray-600">9.46 秒</td>
                <td className="px-3 py-2 text-right text-gray-600">9.77 秒</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">立ち幅とび</td>
                <td className="px-3 py-2 text-right text-gray-600">150.96 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">142.39 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">ソフトボール投げ</td>
                <td className="px-3 py-2 text-right text-gray-600">21.06 m</td>
                <td className="px-3 py-2 text-right text-gray-600">13.10 m</td>
              </tr>
              <tr className="border-b bg-blue-50 font-bold">
                <td className="px-3 py-2 text-gray-800">体力合計点</td>
                <td className="px-3 py-2 text-right text-blue-700">53.03 点</td>
                <td className="px-3 py-2 text-right text-blue-700">53.98 点</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">男女の合計点を比べても意味がありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            女子53.98点、男子53.03点と女子の方が高く見えますが、体力合計点の換算基準は男女で別に設定されています。「女子の方が体力が高い」という意味ではないため、男女の合計点を直接比べないでください。比較するなら同性の全国平均とです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          A〜E評価の基準
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          体力合計点は80点満点で、点数に応じてA〜Eの5段階で評価されます。小学5年生と中学2年生で基準が違います。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">評価</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">小学校5年生</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">中学校2年生</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-700">A</td>
                <td className="px-3 py-2 text-center text-gray-600">65点以上</td>
                <td className="px-3 py-2 text-center text-gray-600">57点以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-700">B</td>
                <td className="px-3 py-2 text-center text-gray-600">58〜64点</td>
                <td className="px-3 py-2 text-center text-gray-600">47〜56点</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-700">C</td>
                <td className="px-3 py-2 text-center text-gray-600">50〜57点</td>
                <td className="px-3 py-2 text-center text-gray-600">37〜46点</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-700">D</td>
                <td className="px-3 py-2 text-center text-gray-600">42〜49点</td>
                <td className="px-3 py-2 text-center text-gray-600">27〜36点</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-700">E</td>
                <td className="px-3 py-2 text-center text-gray-600">41点以下</td>
                <td className="px-3 py-2 text-center text-gray-600">26点以下</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          令和7年度の小学5年生の評価分布は次のとおりです。全国平均の53.03点（男子）・53.98点（女子）は、いずれもC評価の範囲に入ります。
        </p>

        <div className="grid grid-cols-5 gap-2 mb-4">
          {[
            { label: 'A', male: '11.6%', female: '12.8%' },
            { label: 'B', male: '22.6%', female: '23.5%' },
            { label: 'C', male: '31.6%', female: '33.2%' },
            { label: 'D', male: '22.2%', female: '21.7%' },
            { label: 'E', male: '12.0%', female: '8.8%' },
          ].map((row) => (
            <div key={row.label} className="bg-blue-50 rounded-xl p-3 text-center border border-blue-100">
              <p className="text-lg font-black text-blue-600">{row.label}</p>
              <p className="text-xs text-gray-600 mt-1">男 {row.male}</p>
              <p className="text-xs text-gray-600">女 {row.female}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500">※小学5年生の総合評価の割合（令和7年度）</p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          体力はコロナ前に戻ったのか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ庁は今回の結果について、次のように述べています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            「体力合計点は、小中学校男女ともに前年度から向上しているが、中学校男子を除いてコロナ前の水準に至っていない。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査の結果について（概要）」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          小学5年生の体力合計点の推移を原典の数値で見ると、実際にこうなっています。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年度</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">男子</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">女子</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">平成30年度</td>
                <td className="px-3 py-2 text-right text-gray-600 font-bold">54.21</td>
                <td className="px-3 py-2 text-right text-gray-600 font-bold">55.90</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和元年度</td>
                <td className="px-3 py-2 text-right text-gray-600">53.61</td>
                <td className="px-3 py-2 text-right text-gray-600">55.59</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和3年度</td>
                <td className="px-3 py-2 text-right text-gray-600">52.53</td>
                <td className="px-3 py-2 text-right text-gray-600">54.66</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和4年度</td>
                <td className="px-3 py-2 text-right text-gray-600">52.29</td>
                <td className="px-3 py-2 text-right text-gray-600">54.32</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和5年度</td>
                <td className="px-3 py-2 text-right text-gray-600">52.60</td>
                <td className="px-3 py-2 text-right text-gray-600">54.29</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和6年度</td>
                <td className="px-3 py-2 text-right text-gray-600">52.54</td>
                <td className="px-3 py-2 text-right text-gray-600">53.93</td>
              </tr>
              <tr className="border-b bg-blue-50">
                <td className="px-3 py-2 text-gray-800 font-bold">令和7年度</td>
                <td className="px-3 py-2 text-right text-blue-700 font-bold">53.03</td>
                <td className="px-3 py-2 text-right text-blue-700 font-bold">53.98</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-6">
          ※令和2年度は新型コロナウイルスの影響で調査が中止されたため、データがありません。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">数値から読み取れること</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">男子:</span>
              <span>平成30年度の54.21がピーク。令和4年度の52.29まで下がり、令和7年度は53.03まで回復。ただしピークには戻っていない</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">女子:</span>
              <span>平成30年度の55.90がピーク。令和6年度の53.93が最低で、令和7年度は53.98とほぼ横ばい</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          男子は令和4年度を底に回復傾向が見えますが、女子の回復は前年度比0.05点とごくわずかです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          長期で見ると「落ちた種目」と「伸びた種目」がある
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「子どもの体力が落ちている」とよく言われますが、全種目が落ちているわけではありません。平成20年度と令和7年度を比べると、種目によってはっきり方向が分かれます。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">種目（小5男子）</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">平成20年度</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">令和7年度</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">ソフトボール投げ</td>
                <td className="px-3 py-2 text-right text-gray-600">25.39 m</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">21.06 m</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">握力</td>
                <td className="px-3 py-2 text-right text-gray-600">17.01 kg</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">15.97 kg</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">立ち幅とび</td>
                <td className="px-3 py-2 text-right text-gray-600">153.96 cm</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">150.96 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">長座体前屈</td>
                <td className="px-3 py-2 text-right text-gray-600">32.68 cm</td>
                <td className="px-3 py-2 text-right text-green-600 font-bold">33.88 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">上体起こし</td>
                <td className="px-3 py-2 text-right text-gray-600">19.12 回</td>
                <td className="px-3 py-2 text-right text-green-600 font-bold">19.45 回</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          もっとも大きく落ちたのはソフトボール投げで、平成20年度から4.33m下がりました。一方、長座体前屈（柔軟性）と上体起こし（筋持久力）はむしろ伸びています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            スポーツ庁による種目別の傾向（令和7年度）:
          </p>
          <ul className="space-y-1.5">
            <li className="text-sm text-gray-700">・「握力」は、小中学校男女ともに低下傾向。</li>
            <li className="text-sm text-gray-700">・「長座体前屈」は、小中学校男女ともに向上傾向。</li>
            <li className="text-sm text-gray-700">・「持久走」は、男女ともに低下傾向。</li>
            <li className="text-sm text-gray-700">・「50m走」は、小学校男女及び中学校女子で低下傾向、中学校男子で向上傾向。</li>
            <li className="text-sm text-gray-700">・「ボール投げ」は、小中学校男子で直近向上傾向、小中学校女子で横ばい。</li>
          </ul>
          <p className="text-xs text-gray-500 mt-2">出典: 同「結果について（概要）」参考資料</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          都道府県による差
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          体力合計点は都道府県によって差があります。小学5年生（公立）の上位と下位は次のとおりです。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="font-bold text-green-900 mb-3">上位（男子）</p>
            <ul className="space-y-1.5">
              <li className="text-sm text-green-800 flex justify-between"><span>大分県</span><span className="font-bold">56.14</span></li>
              <li className="text-sm text-green-800 flex justify-between"><span>石川県</span><span className="font-bold">56.03</span></li>
              <li className="text-sm text-green-800 flex justify-between"><span>福井県</span><span className="font-bold">55.78</span></li>
              <li className="text-sm text-green-800 flex justify-between"><span>秋田県</span><span className="font-bold">55.31</span></li>
              <li className="text-sm text-green-800 flex justify-between"><span>茨城県</span><span className="font-bold">54.99</span></li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="font-bold text-green-900 mb-3">上位（女子）</p>
            <ul className="space-y-1.5">
              <li className="text-sm text-green-800 flex justify-between"><span>福井県</span><span className="font-bold">57.62</span></li>
              <li className="text-sm text-green-800 flex justify-between"><span>石川県</span><span className="font-bold">57.25</span></li>
              <li className="text-sm text-green-800 flex justify-between"><span>秋田県</span><span className="font-bold">57.00</span></li>
              <li className="text-sm text-green-800 flex justify-between"><span>大分県</span><span className="font-bold">56.84</span></li>
              <li className="text-sm text-green-800 flex justify-between"><span>茨城県</span><span className="font-bold">56.78</span></li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          全国平均は男子53.03、女子53.98です。上位県は福井・石川・秋田・大分・茨城が男女とも顔をそろえています。一方、下位は男子が愛知51.70・山梨51.92・神奈川51.98、女子が神奈川52.04・愛知52.56・滋賀52.58でした。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">「なぜ差があるのか」は調査からは分かりません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            この調査は各県の点数を示していますが、その理由までは調べていません。「雪国だから」「都市部だから」といった説明はよく見かけますが、いずれもこの調査で裏付けられたものではありません。当サイトでは根拠のない理由付けは行いません。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          運動時間・生活習慣との関係
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          調査では、体力合計点と運動時間・生活習慣の関係についても報告されています。スポーツ庁は次のように述べています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・「『運動時間が長い』児童生徒ほど、体力合計点が高くなる傾向にある。」</li>
            <li className="text-sm text-gray-700">・「『運動は好き』と回答した児童生徒は、それ以外の児童生徒と比べ体力合計点が高い。」</li>
            <li className="text-sm text-gray-700">・「1週間の総運動時間が60分未満の割合は、小中学校男女ともに増加傾向である。」</li>
            <li className="text-sm text-gray-700">・「平日の学習以外のスクリーンタイムが『3時間以上』の割合は、小中学校男女ともに増加傾向である。」</li>
          </ul>
          <p className="text-xs text-gray-500 mt-2">出典: 同「結果について（概要）」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          実際の生活習慣のデータ（小学5年生・令和7年度）は次のとおりです。
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">1週間の総運動時間（体育の授業を除く）</p>
            <p className="text-sm text-blue-800">男子 522.93分 ／ 女子 315.17分</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">朝食を「毎日食べる」割合</p>
            <p className="text-sm text-blue-800">男子 82.5% ／ 女子 80.4%</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">平日の学習以外のスクリーンタイムが3時間以上</p>
            <p className="text-sm text-blue-800">男子 42.5% ／ 女子 37.2%（原典の区分を合算）</p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">相関であって、原因ではありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            この調査が示すのは「関連がある」ということまでです。「スクリーンタイムが長いから体力が低い」という因果関係を証明したものではありません（体力が高い子ほど外遊びを選ぶ、という逆方向の可能性も否定できません）。断定的な説明には注意してください。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          お子さんの記録と比べるには
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          全国平均はあくまで目安です。同じ小5でも4月生まれと3月生まれではほぼ1年の発達差があり、成長のペースにも個人差があります。平均を下回っていても、それ自体が問題を示すわけではありません。
        </p>
        <p className="text-gray-700 leading-relaxed">
          当サイトでは、新体力テストの記録を入力すると全国平均と比較して、お子さんの体力の特徴と向いているスポーツの傾向を確認できます。学年・性別ごとの平均値も掲載しています。
        </p>
      </div>
    </ArticleLayout>
  );
}
