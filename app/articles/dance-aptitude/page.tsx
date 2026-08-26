import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'ダンスに向いている子の特徴|中学では全生徒が体験する現代的なダンス',
  description:
    '中学1・2年生は全員がダンスを履修します。創作ダンス、フォークダンス、ロック・ヒップホップなどの現代的なリズムのダンスから選択。学習指導要領と発達段階から、ダンスに向いている子の特徴と、小学校からの接続を解説します。',
  openGraph: {
    title: 'ダンスに向いている子の特徴|中学では全生徒が体験する現代的なダンス',
    description:
      '中学1・2年生は全員がダンスを履修します。ダンスの3種類、現代的なリズムのダンス、学校での学習段階から見る適性と特徴をまとめました。',
    images: [{ url: '/images/articles/dance-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/dance-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/dance-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ダンスに向いている子の特徴|中学では全生徒が体験する現代的なダンス',
    images: ['/images/articles/dance-aptitude.jpg'],
  },
};

export default function DanceAptitudePage() {
  return (
    <ArticleLayout
      title="ダンスに向いている子の特徴|中学では全生徒が体験する現代的なダンス"
      heroImage="/images/articles/dance-aptitude.jpg"
      heroAlt="リズムに乗ってダンスする子どもたち"
      publishDate="2026年8月"
      slug="dance-aptitude"
      description="中学1・2年生は全員がダンスを履修します。創作ダンス、フォークダンス、ロック・ヒップホップなどの現代的なリズムのダンスから選択。学習指導要領と発達段階から、ダンスに向いている子の特徴と、小学校からの接続を解説します。"
      tags={['ダンス', '適性診断', '学校体育', '表現活動']}
      shareText="中学1・2年生の全員が体験するダンス。ロック・ヒップホップなどのリズムに乗って、特別な運動能力がなくても始められる競技です。 #子育て #ダンス #学校体育"
      citations={[
        '文部科学省「中学校学習指導要領（平成29年告示）解説 保健体育編」 https://www.mext.go.jp/content/20250213-mxt_kyoiku01-100002608_2.pdf',
        '文部科学省「小学校学習指導要領（平成29年告示）解説 体育編」 https://www.mext.go.jp/content/20240918-mxt_kyoiku01-100002607.pdf',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          中学校に入学すると、全ての生徒が「ダンス」の授業を受けることになります。この点が、他の運動種目と大きく異なります。習い事として選ぶかどうかは自由でも、学校体育では全員が経験する「必修教科」なのです。この記事では、ダンスの特徴と、どのような子どもに向いているかを、学習指導要領の内容から解説します。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          中学1・2年生は全員がダンスを履修する
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          これがダンスの最大の特徴です。サッカーや野球のように「選ぶか選ばないか」という選択の余地がなく、すべての生徒が体験する必修領域となっています。
        </p>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100 mb-6">
          <p className="font-bold text-purple-900 mb-2">中学1・2年生での学習内容</p>
          <p className="text-sm text-purple-800 leading-relaxed">
            学習指導要領では「第1学年及び第2学年では、『Ａ体つくり運動』から『Ｈ体育理論』までの全ての領域を、全ての生徒に履修させる」と定められています。つまり、中学1・2年生の間に、すべての運動領域を一度は経験することになります。その中でダンスは必ず履修する領域の1つです。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          一方、中学3年生になると、「体つくり運動」と「体育理論」は全員必修ですが、その他の領域については選択できるようになります。しかし、1・2年生の時点で全員がダンスを経験することで、3年生以降、ダンスを選択する判断ができるようになります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          ダンスは3つの種類で構成されている
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「ダンス」といっても、学習指導要領では3つの種類に分けられており、学校はその中から選択して授業を行います。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
            <p className="font-bold text-purple-900 text-sm mb-1">創作ダンス</p>
            <p className="text-xs text-purple-800">自分の気持ちやイメージを動きで表現するダンス</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
            <p className="font-bold text-purple-900 text-sm mb-1">フォークダンス</p>
            <p className="text-xs text-purple-800">民族的な伝統のあるダンス。友達と楽しく踊る</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
            <p className="font-bold text-purple-900 text-sm mb-1">現代的なリズムのダンス</p>
            <p className="text-xs text-purple-800">ロックやヒップホップなどの現代的な音楽で踊る</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          学校は、この3つの中から「どれを授業で扱うか」を選択して履修させます。ただし、どの種類を習った場合でも、ダンスの基本的な考え方（リズムに乗る、表現する、仲間と交流する）は共通しています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          現代的なリズムのダンス：特別な運動能力は不要
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          現在、多くの学校が採用している「現代的なリズムのダンス」について、学習指導要領はどのように定義しているか見てみましょう。
        </p>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100 mb-6">
          <p className="font-bold text-purple-900 mb-3">現代的なリズムのダンスとは</p>
          <p className="text-sm text-purple-800 leading-relaxed mb-3">
            「ロックやヒップホップなどの現代的なリズムの曲で踊るダンスを示しており、リズムの特徴を捉え、変化のある動きを組み合わせて、リズムに乗って体幹部（重心部）を中心に全身で自由に弾んで踊ることをねらいとしている」と定義されています。
          </p>
          <p className="text-xs text-purple-500">出典: 文部科学省「中学校学習指導要領 解説」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          大切なポイントは「特別な技術や高い運動能力が必要ない」という点です。「自由に弾んで踊る」ということは、正解のやり方を完璧にマスターするのではなく、自分のペースで音楽に乗って体を動かすことを意味しています。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">具体的な動き（学習指導要領より）</p>
          <p className="text-sm text-amber-800 leading-relaxed mb-3">
            授業では、以下のような「変化のある動き」を習いながら、リズムに乗ってダンスを構成していきます：
          </p>
          <div className="text-sm text-amber-800 grid grid-cols-2 gap-1">
            <div>・手拍子</div>
            <div>・足拍子</div>
            <div>・スキップ</div>
            <div>・片足とび</div>
            <div>・両足とび</div>
            <div>・蹴る</div>
            <div>・歩く</div>
            <div>・走る</div>
            <div>・ねじる</div>
            <div>・回る</div>
            <div>・転がる</div>
            <div>・振る及び曲げる</div>
          </div>
          <p className="text-xs text-amber-600 mt-2">出典: 文部科学省「中学校学習指導要領 解説」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mt-4">
          これらは全て、日常の中で自然に行っている動きばかりです。つまり、ダンスは「新しい動きを習得する」というより「知っている動きをリズムに乗せて表現する」という側面が強いのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          小学校からの接続：段階的な学習
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ダンスは、小学校からの段階的な学習が用意されています。中学校でいきなり始まるわけではなく、小学校の低学年から「表現」に関する学習が組み込まれています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="font-bold text-gray-900 mb-2 text-sm">小学校から中学校への段階構成</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700 flex gap-2">
              <span className="font-bold">小学低学年:</span>
              <span>「表現リズム遊び」で、音楽に乗って踊ったり、動きで気持ちを表現することを楽しむ</span>
            </li>
            <li className="text-sm text-gray-700 flex gap-2">
              <span className="font-bold">小学中・高学年:</span>
              <span>「表現運動」で、テーマに沿った表現やリズムダンス・フォークダンスを学ぶ</span>
            </li>
            <li className="text-sm text-gray-700 flex gap-2">
              <span className="font-bold">中学1・2年:</span>
              <span>「ダンス」として、創作ダンス、フォークダンス、現代的なリズムのダンスを経験</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mt-4">
          つまり、小学校のうちにすでに「音楽に乗って体を動かす」という経験をしているはずです。中学校のダンスは、その延長線上にあるものなのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          ダンスに向いている子の特徴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">音やリズムに敏感に反応する</h3>
              <p className="text-sm text-gray-600">
                音楽をかけると自然と体が動く、リズムに合わせることが得意、という子はダンスの適性が高い傾向があります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">人前で自分を表現することが好き</h3>
              <p className="text-sm text-gray-600">
                友達の前で気持ちを動きで表現することに抵抗がなく、むしろ楽しいと感じる子が活躍しやすい特徴があります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">仲間との協調を大切にする</h3>
              <p className="text-sm text-gray-600">
                ダンスは「みんなで踊る」という交流の側面を重視しています。友達と一緒に何かを作り上げることが好きな子に向いています。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">重要な但し書き</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            上記の特徴は、ダンスの学習指導要領における目的や運動の特性から整理したものであり、公式に定められた基準ではありません。シャイな子でも、授業を通じてダンスの楽しさを発見することは十分にあります。また、運動神経や音感に自信がない子でも、「自由に弾んで踊る」というダンスの特性上、参加しやすい環境が整えられています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          習い事としてダンスを始めるなら
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ダンスは学校体育が必修ですが、習い事として教室に通う選択肢もあります。学校での経験をきっかけに、より深くダンスを学びたいというお子さんもいるでしょう。
        </p>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
          <p className="font-bold text-purple-900 mb-2">習い事としてのダンスの利点</p>
          <ul className="space-y-1 text-sm text-purple-800">
            <li>・学校では習わない様々なダンススタイルを学べる</li>
            <li>・プロの指導者からより高度な技を習得できる</li>
            <li>・発表会やコンクールの経験を通じて、舞台での表現力を磨ける</li>
            <li>・同じ興味を持つ友達とのつながりが広がる</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mt-4">
          学校のダンス授業で「楽しい」「もっと学びたい」と感じたら、それは習い事としてダンスを始める最高のシグナルです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          ダンスと他の体力テストの結びつき
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ダンスに必要とされる動きは、新体力テストにも関連しています。特に「リズムに乗って体を動かす」という側面から、いくつかの項目が結びついています。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">ダンスの要素</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">関連する体力要素</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">参考テスト項目</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">リズム感</td>
                <td className="px-3 py-2 text-gray-600">敏捷性・反復的な動き</td>
                <td className="px-3 py-2 text-gray-600">反復横とび・20mシャトルラン</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">全身のバランス</td>
                <td className="px-3 py-2 text-gray-600">巧緻性・体幹の安定性</td>
                <td className="px-3 py-2 text-gray-600">立ち幅とび・長座体前屈</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">継続的な動き</td>
                <td className="px-3 py-2 text-gray-600">持久力・体を動かし続ける力</td>
                <td className="px-3 py-2 text-gray-600">20mシャトルラン</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          ダンスが好きな子は、これらの体力テストの記録も良い傾向があります。逆に、これらの項目で得意な分野がある子は、ダンスの授業で活躍できる可能性が高いということです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          ダンスは、中学1・2年生の全員が体験する必修領域です。特別な運動能力や技術がなくても、「リズムに乗って自由に体を動かす」という本質から、すべての子に開かれた運動です。音楽が好き、自分を表現することが好き、友達と一緒に何かをするのが好き——そのような子には、ダンスは最高の舞台になるでしょう。中学校の授業でダンスの楽しさを発見したなら、それはお子さんが新たな世界へ踏み出すチャンスかもしれません。
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
