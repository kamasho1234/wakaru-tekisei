import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '池江璃花子の子供時代｜3歳で水泳を始め、5歳で4泳法を泳いだ少女',
  description:
    '競泳のスター・池江璃花子選手の子供時代。3歳から水泳を始め、白血病を乗り越えたその原点を紹介します。',
  openGraph: {
    title: '池江璃花子の子供時代｜3歳で水泳を始め、5歳で4泳法を泳いだ少女',
    description:
      '競泳のスター・池江璃花子選手の子供時代。3歳から水泳を始め、白血病を乗り越えたその原点を紹介します。',
    images: [{ url: '/images/articles/ikee-rikako-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/ikee-rikako-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '池江璃花子の子供時代｜3歳で水泳を始め、5歳で4泳法を泳いだ少女',
    images: ['/images/articles/ikee-rikako-childhood.jpg'],
  },
};

export default function IkeeRikakoChildhoodPage() {
  return (
    <ArticleLayout
      title="池江璃花子の子供時代｜3歳で水泳を始め、5歳で4泳法を泳いだ少女"
      heroImage="/images/articles/ikee-rikako-childhood.jpg"
      heroAlt="プールで泳ぐ子ども"
      publishDate="2025年4月"
      slug="ikee-rikako-childhood"
      description="競泳のスター・池江璃花子選手の子供時代。3歳から水泳を始め、白血病を乗り越えたその原点を紹介します。"
      tags={['池江璃花子', '水泳', '幼少期']}
      shareText="池江璃花子選手が3歳で水泳を始め5歳で4泳法を習得した話。白血病を乗り越えた原点。 #池江璃花子 #水泳"
      citations={['https://ja.wikipedia.org/wiki/%E6%B1%A0%E6%B1%9F%E7%92%83%E8%8A%B1%E5%AD%90']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          池江璃花子の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          池江璃花子選手は2000年7月4日に東京都江戸川区で生まれました。競泳界を代表する選手として数々の記録を樹立する一方、白血病との闘いを通じて、日本中に勇気を与えてきました。その原点は、生後わずか数ヶ月の乳幼児期にあります。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">生後6ヶ月</p>
            <p className="text-xs text-gray-600 mt-1">運動開始年齢</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">5歳</p>
            <p className="text-xs text-gray-600 mt-1">4泳法習得年齢</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">2019年</p>
            <p className="text-xs text-gray-600 mt-1">白血病発症</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">2021年</p>
            <p className="text-xs text-gray-600 mt-1">五輪出場</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">基本情報</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>東京都江戸川区</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">出身小学校:</span>
              <span>江戸川区立西小岩小学校</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">出身中学校:</span>
              <span>江戸川区立小岩第四中学校</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">母親:</span>
              <span>幼児教室の講師（超早期教育の実践者）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          生後6ヶ月から始まった「運動教育」
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          池江璃花子選手の成長の秘密は、超早期教育にあります。母親は単に放任するのではなく、科学的な発達知識に基づいて、娘の成長を計画していました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">生後2ヶ月から幼児教室</h3>
              <p className="text-sm text-gray-600">
                母親は幼児教室の講師として、子どもの脳発達に関する深い知識を持っていました。生後わずか2ヶ月で、璃花子を幼児教室に連れ始めました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">生後6ヶ月で雲梯にぶら下がる</h3>
              <p className="text-sm text-gray-600">
                まだ自分でしっかり体を支えられない時期に、親に支えられながら雲梯にぶら下がる練習を始めました。これは握力と腕の発達を促進するためです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">1歳6ヶ月で鉄棒の逆上がり</h3>
              <p className="text-sm text-gray-600">
                多くの子どもが3歳以降で習得する逆上がりを、1歳6ヶ月で成功させました。この段階での身体発達は、将来の運動能力の基盤となります。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-3">超早期教育が発達させたもの</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">神経システム:</span>
              <span>複雑な動きを習得する脳の神経回路が効率的に形成される</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">筋力と協調性:</span>
              <span>同年代の子どもより、圧倒的に優れた身体コントロール</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">挑戦への恐怖心の軽減:</span>
              <span>小さい時から難しい運動に取り組むことで、新しいことへの挑戦心が養われる</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          3歳で水泳を始めた自然な流れ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          璃花子選手の水泳との出会いは、計画的なものでした。姉と兄がスイミングスクールに先に通い始めたことで、自然と水への親しみが深まっていました。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">発達段階</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">生後2ヶ月</td>
                <td className="px-3 py-2 text-gray-600">幼児教室開始</td>
                <td className="px-3 py-2 text-gray-600">脳発達の黄金期開始</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">生後6ヶ月</td>
                <td className="px-3 py-2 text-gray-600">雲梯練習開始</td>
                <td className="px-3 py-2 text-gray-600">握力・腕力の発達</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">1歳6ヶ月</td>
                <td className="px-3 py-2 text-gray-600">鉄棒の逆上がり習得</td>
                <td className="px-3 py-2 text-gray-600">全身協調性の発達</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">3歳10ヶ月</td>
                <td className="px-3 py-2 text-gray-600">スイミングスクール入会</td>
                <td className="px-3 py-2 text-gray-600">水泳技術習得の準備完成</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-3">母親の教育方針</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800">
              <span className="font-bold">強制なし:</span>
              <span>過去に水泳の厳しい練習を経験した母親だからこそ、子どもの意思を尊重する教育方針を取った</span>
            </li>
            <li className="text-sm text-blue-800">
              <span className="font-bold">本人の選択:</span>
              <span>姉兄が水泳をしている環境で、璃花子自身が「やりたい」と言う環境を整えていた</span>
            </li>
            <li className="text-sm text-blue-800">
              <span className="font-bold">基礎が完成した後:</span>
              <span>水泳を始める前に、すでに優れた身体制御能力が備わっていた</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          5歳で4泳法を完泳した才能
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          池江璃花子選手の最も驚くべき実績は、わずか5歳にして自由形・背泳ぎ・バタフライ・平泳ぎの4泳法すべてで50mを泳ぎ切ったことです。これは、通常5〜6年かけて習得する技術を、2年で完成させたことを意味します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 mb-2">4泳法の習得</p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>- 自由形: 最も自然で習得が早い</li>
              <li>- 平泳ぎ: 足の動きの複雑さ</li>
              <li>- 背泳ぎ: バランス感覚が必要</li>
              <li>- バタフライ: 最も難しい泳法</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 mb-2">習得の速さの理由</p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>- 優れた神経系の発達</li>
              <li>- 高い身体協調性</li>
              <li>- 水への親しみ（姉兄の影響）</li>
              <li>- 本人のやる気と楽しみ</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">競泳史における5歳での4泳法50m完泳</p>
          <p className="text-sm text-blue-800">
            この記録は、当時の競泳界でも驚嘆の的となりました。多くの子どもアスリートは、4泳法のうち1〜2つに特化する傾向がある中で、4泳法すべてに優れた能力を示したことは、璃花子選手が複数の泳法で活躍できる可能性を示していました。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          白血病からの奇跡の復活
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          2019年2月、璃花子選手は白血病という診断を受けました。19歳という最も輝く時期に、人生最大の試練が訪れたのです。しかし、彼女の人生は、この逆境から新たなステージへと進みました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">2019年2月 白血病公表</h3>
              <p className="text-sm text-gray-600">
                SNSで自ら病状を明かした璃花子選手。その勇敢な告白は、日本中に希望と励ましをもたらしました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">2019年〜2020年 約1年半の治療</h3>
              <p className="text-sm text-gray-600">
                化学療法と幹細胞移植を含む、想像を絶する治療を受けました。競泳人生で培った精神力が、この試練を乗り越える支えになったはずです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">2020年末 競技復帰開始</h3>
              <p className="text-sm text-gray-600">
                治療終了後、璃花子選手は徐々に競技活動を再開。完治から競技復帰までの時間は、他の選手に比べ驚くほど短くていました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">2021年 東京オリンピック出場</h3>
              <p className="text-sm text-gray-600">
                白血病から競技復帰わずか2年で、オリンピックという最高舞台に立ちました。これは、医学と本人の努力の奇跡的な結晶です。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">復帰がこれほど早かった理由</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">基礎体力:</span>
              <span>幼少期からの徹底した身体作りが土台となった</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">精神力:</span>
              <span>競泳で培った「克服する力」が、治療への取り組みを支えた</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">家族の支援:</span>
              <span>幼少期から一貫した親の支えが、最大の危機でも揺るがなかった</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ：池江選手が教えてくれること
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          池江璃花子選手の人生は、単なるアスリート物語ではなく、人間としての成長の物語です。幼少期の計画的な教育から、人生最大の試練、そしてオリンピックという舞台での活躍まで、すべてが「継続」と「信念」によって結びついています。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-3">親が学ぶべき3つの視点</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">1. 超早期教育は「詰め込み」ではなく「土台作り」</span>
              <span>生後6ヶ月からの運動は、強制ではなく、脳と身体の最適な発達を導くもの</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">2. 親の経験が子どもの教育方針を左右する</span>
              <span>母親が過去に厳しい水泳経験をしたからこそ、娘には「本人の意思の尊重」を大切にした</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">3. 人生は逆境の先にある</span>
              <span>成功の定義は「オリンピック」だけではなく、試練を乗り越えた本人と親の「心の強さ」にある</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mt-4">
          お子さんのスポーツ選びで不安があるなら、池江璃花子選手の例は大きな励ましになるはずです。完璧を求める必要はありません。親が信じて、子どもが前を向いて、一歩ずつ進む。その先に、予想もしなかった可能性が開かれているかもしれません。
        </p>
      </div>
    </ArticleLayout>
  );
}
