import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '思春期前後の女の子とスポーツ：親が知っておくべきこと',
  description:
    '10～13歳ごろの思春期を迎えた女の子のスポーツ参加。体の変化とスポーツの関係、親が注意すべきことを解説します。',
  openGraph: {
    title: '思春期前後の女の子とスポーツ：親が知っておくべきこと',
    description:
      '10～13歳ごろの思春期を迎えた女の子のスポーツ参加。体の変化とスポーツの関係、親が注意すべきことを解説します。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/girls-sports-puberty',
  },
  twitter: {
    card: 'summary_large_image',
    title: '思春期前後の女の子とスポーツ：親が知っておくべきこと',
    images: ['/og-image.png'],
  },
};

export default function GirlsSportsPubertyPage() {
  return (
    <ArticleLayout
      title="思春期前後の女の子とスポーツ：親が知っておくべきこと"
      heroImage="/images/articles/girls-sports-puberty.jpg"
      heroAlt="スポーツを楽しむ女の子たち"
      publishDate="2025年4月"
      tags={['思春期', '女の子', 'スポーツ']}
      shareText="思春期前後の女の子とスポーツの関係。親が知っておくべき体の変化と注意点。 #子育て #女の子スポーツ"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          思春期の体の変化とスポーツへの影響
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          女の子の思春期（平均10～12歳開始）では、スポーツ活動に直結する様々な身体的変化が起こります。親がこれらの変化を理解することが、子どもをサポートするための第一歩です。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-pink-50 rounded-2xl p-4 text-center border border-pink-100">
            <p className="text-2xl font-black text-pink-600">2-6倍</p>
            <p className="text-xs text-gray-600 mt-1">ACL損傷リスク（男子比）</p>
          </div>
          <div className="bg-pink-50 rounded-2xl p-4 text-center border border-pink-100">
            <p className="text-2xl font-black text-pink-600">10-13歳</p>
            <p className="text-xs text-gray-600 mt-1">思春期の開始時期</p>
          </div>
          <div className="bg-pink-50 rounded-2xl p-4 text-center border border-pink-100">
            <p className="text-2xl font-black text-pink-600">3要素</p>
            <p className="text-xs text-gray-600 mt-1">女性アスリート三主徴</p>
          </div>
        </div>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100 mb-6">
          <p className="font-bold text-pink-900 mb-2">思春期の主な体の変化</p>
          <ul className="space-y-2">
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">骨盤の拡大：</span>
              <span>腰幅が広がり、女性らしい体つきに。Q角（大腿骨と脛骨がなす角）が拡大</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">体脂肪率の増加：</span>
              <span>思春期前の15～18%から思春期後は20～25%程度に増加（健全な変化）</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">関節の弛緩性増加：</span>
              <span>靭帯が緩くなり、関節の不安定性が増す</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">月経開始：</span>
              <span>身体的・心理的な変化。月経周期がスポーツパフォーマンスに影響する可能性</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          ACL損傷リスクが女子に高い理由
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          思春期後、女子は男子の2～6倍ACL（前十字靭帯）損傷リスクが高くなります。これは解剖学的な理由による重要な知見です。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Q角の拡大</h3>
              <p className="text-sm text-gray-600">
                骨盤の拡大に伴い、Q角（大腿骨と脛骨がなす角度）が拡大。これにより膝関節への負荷が増加し、ACL損傷リスクが高まる。男子のQ角は平均14度、女子は平均17度。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">靭帯の弛緩性</h3>
              <p className="text-sm text-gray-600">
                女性ホルモン（エストロゲン）の影響で靭帯が柔らかくなり、関節の安定性が低下。ジャンプ着地時の膝の内側への倒れこみ（外反膝）が起きやすい。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">筋力の発達遅延</h3>
              <p className="text-sm text-gray-600">
                思春期初期、骨の成長スピードに筋力の発達が追いつかない。特に膝周辺の大腿四頭筋やハムストリングスの筋力が不足しやすい。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">予防方法</h3>
              <p className="text-sm text-gray-600">
                ジャンプ着地の正しいフォーム習得が最重要。膝が内側に倒れこまないようなトレーニング。月経周期に応じたトレーニング調整も効果的。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100 mb-6">
          <p className="font-bold text-pink-900 mb-2">正しいジャンプ着地フォーム</p>
          <p className="text-sm text-pink-800">着地時に膝が足の先端と同じ方向を向く（膝が内側に倒れこまない）、膝が少し曲がる、股関節が使われている、という3点が重要です。定期的にフォームをチェックされることをお勧めします。</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          「女性アスリートの三主徴」に注意
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          特に体重制限のあるスポーツ（体操、新体操、フィギュアスケート、バレエなど）をしている女の子は、「女性アスリートの三主徴」に注意が必要です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pink-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">構成要素</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">症状・特徴</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">リスク</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">①利用可能エネルギー不足</td>
                <td className="px-3 py-2 text-gray-600">食事量が消費カロリーより少ない状態</td>
                <td className="px-3 py-2 text-gray-600">免疫低下、疲労骨折リスク増加</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">②月経不順・月経停止</td>
                <td className="px-3 py-2 text-gray-600">月経が来ない、来ても不規則</td>
                <td className="px-3 py-2 text-gray-600">女性ホルモン低下、骨密度低下</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">③骨粗鬆症</td>
                <td className="px-3 py-2 text-gray-600">骨の密度が低下する状態</td>
                <td className="px-3 py-2 text-gray-600">疲労骨折、寝たきりリスク</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100 mb-6">
          <p className="font-bold text-pink-900 mb-2">親が注意すべき兆候</p>
          <ul className="space-y-2">
            <li className="text-sm text-pink-800 flex gap-2">
              <span>・月経が来ない、来ても不規則である</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span>・極端に体重を気にしている、食べることへの恐怖を示す</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span>・疲労骨折が何度も繰り返される</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span>・疲れやすく、免疫が低下している（風邪が長い、怪我が多い）</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span>・親や指導者の言葉に極端に反応する、精神的に不安定</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          月経とスポーツの関係
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          月経開始は、女の子のスポーツライフにおいて重要なマイルストーン。親が正しい知識を持つことが大切です。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">月経中の運動は基本的にOK</h3>
              <p className="text-sm text-gray-600">
                月経が来たからといって、スポーツを禁止する必要はありません。実は、適度な運動は月経痛を軽減する傾向があります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">強い痛みがある場合の対応</h3>
              <p className="text-sm text-gray-600">
                月経痛が強い場合、無理してスポーツをする必要はありません。本人に任せる、医師に相談するなど、個別対応が大切。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">月経周期とパフォーマンス</h3>
              <p className="text-sm text-gray-600">
                卵胞期（月経後～排卵前）はパフォーマンスが高く、黄体期（排卵後～月経前）はパフォーマンスが低下傾向。この周期を理解してトレーニングを調整すると、より効果的です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">心理的サポートが重要</h3>
              <p className="text-sm text-gray-600">
                月経開始はストレス要因になることも。親や指導者が「これは正常な変化、スポーツは続けられる」とサポートすることが、心理的な不安定さを軽減します。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100 mb-6">
          <p className="font-bold text-pink-900 mb-2">月経は「スポーツを止める理由」ではなく「スポーツを続ける動機」</p>
          <p className="text-sm text-pink-800">正しい知識と親のサポートがあれば、月経開始後もスポーツのパフォーマンスは継続します。むしろ、月経と向き合いながら結果を出すことは、女の子の自信や自己肯定感につながります。</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          思春期の女の子に向いているスポーツ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          思春期の女の子が新たにスポーツを始めるなら、心と体の変化を考慮した選択が理想的です。
        </p>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100 mb-6">
          <p className="font-bold text-pink-900 mb-2">思春期の女の子におすすめなスポーツの特性</p>
          <ul className="space-y-2">
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">柔軟性が活かせる競技：</span>
              <span>体操、新体操、バレエ、ダンス（ただし体重管理の圧力がないことが前提）</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">女性同士の環境：</span>
              <span>体や月経に関する悩みを共有できるチームスポーツが心理的に支援的</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">長期的に継続できる競技：</span>
              <span>短期的な成績より「人生を通じてできるスポーツ」を選ぶと、生涯の健康につながる</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">メンタルサポートが充実した環境：</span>
              <span>思春期の心理的変化に対応できる指導者がいるか、チーム内で相談しやすいか</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          思春期の体の変化を正しく理解してサポートを
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          思春期の女の子の親が気を付けるべき言葉遣いと心構え。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体重増加を「太った」と言わない</h3>
              <p className="text-sm text-gray-600">
                思春期の体重増加は正常で必要な変化です。「体が大きくなった」ではなく「成長している」とポジティブに捉える言葉遣いが大切。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">月経について開放的に話す</h3>
              <p className="text-sm text-gray-600">
                月経は「恥ずべき」ものではなく、女性として成熟する証。「月経中だから…」という話題を気兼ねなく話せる家庭環境が、心の安定につながります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">スポーツ以外での自己肯定感</h3>
              <p className="text-sm text-gray-600">
                思春期は成績や見た目を気にするようになる時期。スポーツの成績だけでなく、スポーツを通じた「友情」「努力」「自分らしさ」を褒め、多角的な自己肯定感を育みます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">婦人科受診を普通のものに</h3>
              <p className="text-sm text-gray-600">
                思春期の女の子は定期的な婦人科受診が大切。親として受診を勧め、医師に月経やスポーツについて相談できる環境づくりが重要です。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          まとめ：体の変化を正しく理解してサポートを
        </h2>
        <p className="text-gray-700 leading-relaxed">
          思春期の女の子のスポーツライフは、身体的・心理的な大きな変化の時期です。ACL損傷リスクの高さ、月経開始、ホルモン変化などの知識を親が持つことで、適切なサポートが可能になります。最も大切なのは、「女性としての体の変化は素晴らしい」というメッセージを子どもに伝えることです。そうすることで、女の子は体の変化を受け入れながら、自信を持ってスポーツを続けることができるようになります。
        </p>
      </div>
    </ArticleLayout>
  );
}
