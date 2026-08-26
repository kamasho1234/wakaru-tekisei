import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'スポーツクライミングに向いている子の特徴｜オリンピック競技の適性診断',
  description:
    'オリンピック競技のスポーツクライミングに向いている子の特徴を、公式カテゴリと新体力テストのデータから解説。握力・空間認識・ルート読みの能力が重要です。',
  openGraph: {
    title: 'スポーツクライミングに向いている子の特徴｜オリンピック競技の適性診断',
    description:
      'スポーツクライミングに向いている子の特徴。握力・筋力・空間認識などの体力要素から、10歳から公式カテゴリがあることまで解説。',
    images: [{ url: '/images/articles/climbing-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/climbing-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/climbing-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'スポーツクライミングに向いている子の特徴｜オリンピック競技の適性診断',
    images: ['/images/articles/climbing-aptitude.jpg'],
  },
};

export default function ClimbingAptitudePage() {
  return (
    <ArticleLayout
      title="スポーツクライミングに向いている子の特徴｜オリンピック競技の適性診断"
      heroImage="/images/articles/climbing-aptitude.jpg"
      heroAlt="スポーツクライミングに取り組む子ども"
      publishDate="2026年8月"
      slug="climbing-aptitude"
      description="オリンピック競技のスポーツクライミングに向いている子の特徴を、公式カテゴリと新体力テストのデータから解説。握力・空間認識・ルート読みの能力が重要です。"
      tags={['クライミング', 'オリンピック', '適性診断', '握力']}
      shareText="スポーツクライミングに向いている子は握力が高い傾向。小学校高学年から公式カテゴリがあります。 #スポーツ #子育て"
      citations={[
        '日本山岳・スポーツクライミング協会「スポーツクライミング競技規則」 https://www.jma-sangaku.or.jp/sports/sc_info/rule/',
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツクライミングは、2020年の東京オリンピックから正式競技となった種目です。壁に取り付けたホールド（持ち手）を使って高さを競う「ルート」と、制限時間内に高さを競う「ボルダー」、そして最速を競う「スピード」という3つの種目があります。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、スポーツクライミングに向いている子の特徴を、公式競技規則と全国体力テストのデータから解説します。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          小学校高学年から公式カテゴリがある競技
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツクライミングの特徴は、小学校高学年（10歳・11歳）から公式の年齢別カテゴリが存在することです。日本山岳・スポーツクライミング協会の競技規則では、以下のように定義されています。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢グループ</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ユースD（U12）</td>
                <td className="px-3 py-2 text-gray-600">10歳・11歳</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ユースC（U14）</td>
                <td className="px-3 py-2 text-gray-600">12歳・13歳</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ユースB（U16）</td>
                <td className="px-3 py-2 text-gray-600">14歳・15歳</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ユースA（U18）</td>
                <td className="px-3 py-2 text-gray-600">16歳・17歳</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ジュニア（U20）</td>
                <td className="px-3 py-2 text-gray-600">18歳・19歳</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 日本山岳・スポーツクライミング協会「競技規則」</p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
          <p className="font-bold text-purple-900 mb-2">小学校体育とは異なる領域</p>
          <p className="text-sm text-purple-800 leading-relaxed">
            スポーツクライミングは学習指導要領の学校体育には含まれていません。興味を持つ子どもは、民間のクライミングジムなどで習い始めることができます。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          必要な体力要素と新体力テストの関連
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツクライミングに向いている子の体力要素を、新体力テストのデータから分析できます。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">握力（筋力）</h3>
              <p className="text-sm text-gray-600 mb-2">
                ホールド（壁の持ち手）をつかんで自分の体を支える力。握力が高い子は、ルートで長時間握り続ける力に優れています。新体力テストの握力が目安になります。
              </p>
              <p className="text-xs text-gray-500">
                小5男子平均 15.97 kg ／ 女子平均 15.61 kg
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">敏捷性とバランス感覚</h3>
              <p className="text-sm text-gray-600 mb-2">
                壁上での身体操作と重心移動。反復横とびは、素早い方向転換と姿勢保持のテストで、クライミングでのホール間の移動に関連しています。
              </p>
              <p className="text-xs text-gray-500">
                小5男子平均 40.90 点 ／ 女子平均 38.71 点
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">下半身の力（跳躍力）</h3>
              <p className="text-sm text-gray-600 mb-2">
                立ち幅とびで測定される跳躍力は、クライミングで高いホールに到達する際の脚の力に関連しています。脚をしっかり使って登ることが、長く続ける秘訣です。
              </p>
              <p className="text-xs text-gray-500">
                小5男子平均 150.96 cm ／ 女子平均 142.39 cm
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          向いている子の特徴（公式に定められた基準ではなく、競技の特徴から整理したものです）
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツクライミングは、単純な力比べではなく、戦略と経験が重要な競技です。向いている子の特徴は次のとおりです。
        </p>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-xs shrink-0">
              ●
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">握力がある子</h3>
              <p className="text-sm text-gray-600">
                ホールをつかんで支え続ける力が必要です。握力の高さが直結します。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-xs shrink-0">
              ●
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ルート読みが得意な子</h3>
              <p className="text-sm text-gray-600">
                競技規則では「オブザベーション」という言葉が使われます。これはルートの観察時間のこと。複数のホール間の関係を読んで、最適な手順を組み立てる能力が重要です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-xs shrink-0">
              ●
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">空間認識能力がある子</h3>
              <p className="text-sm text-gray-600">
                壁上での自分の体がどこにあるか、次にどこへ移動するかを瞬時に判断する能力。ゴールデンエイジ（9～12歳）で急速に発達します。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-xs shrink-0">
              ●
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">チャレンジ精神のある子</h3>
              <p className="text-sm text-gray-600">
                難しいホールに何度も挑戦する過程で、技術と自信が身につきます。失敗を前向きに受け止められる子に向いています。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          スピード種目の特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツクライミングのスピード種目では、反応時間を1/100秒単位で計測します。競技規則は反応時間を「選手がスターティング・パッドから離れた時と、スタート信号の再生開始時との間の時間差のこと」と定義しており、スタートの反応まで記録の対象になる種目です。
        </p>
        <p className="text-gray-700 leading-relaxed">
          スピード種目が得意な子は、反応の速さとリズム感に優れた特徴を持っています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          握力を高める
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          握力はスポーツクライミングの基本になる能力です。握力の全国平均と測定方法は、以下の記事で詳しく解説しています。
        </p>

        <Link href="/articles/grip-strength-kids" className="inline-block bg-purple-50 rounded-2xl p-4 border border-purple-100 hover:bg-purple-100 transition-colors mb-6">
          <p className="font-bold text-purple-900 text-sm mb-1">小学生の握力平均と測定方法</p>
          <p className="text-xs text-purple-800">全国平均のデータと、家庭での測定方法を解説</p>
        </Link>

        <p className="text-gray-700 leading-relaxed">
          クライミングは、握力を含む全身の筋力と、問題解決能力が組み合わさった競技です。子どもが興味を示したら、まずはクライミングジムの体験教室に参加してみることをおすすめします。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツクライミングに向いている子は、握力が高く、ルートを読む力と空間認識能力に優れた特徴を持っています。学校体育には含まれない競技ですが、10歳から公式カテゴリがあり、子どもの年代から本格的に取り組むことができます。
        </p>
        <p className="text-gray-700 leading-relaxed">
          新体力テストのデータを参考にしながら、お子さんにスポーツクライミングが向いているか判断してみてください。
        </p>

        <div className="mt-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center">
          <p className="text-sm font-bold mb-1">お子さんの適性を診断してみませんか?</p>
          <p className="text-purple-100 text-xs mb-4">新体力テストの記録を入力するだけ・無料</p>
          <Link href="/shindan/sports" className="inline-block bg-white text-purple-600 font-black text-sm px-6 py-2.5 rounded-xl hover:bg-purple-50 transition-colors">
            無料でスポーツ適性診断
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
