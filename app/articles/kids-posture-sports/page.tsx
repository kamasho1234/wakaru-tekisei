import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どもの姿勢改善に効果的なスポーツ｜猫背・反り腰を直す種目と運動',
  description:
    '子どもの猫背・反り腰・姿勢の悪さを改善するのに効果的なスポーツを解説。水泳・体操・バレエ・ヨガなど姿勢改善につながる種目の特徴と、自宅でできる姿勢づくりの運動習慣を紹介します。',
  openGraph: {
    title: '子どもの姿勢改善に効果的なスポーツ｜猫背・反り腰を直す種目と運動',
    description:
      '子どもの猫背・反り腰を改善するのに効果的なスポーツを解説。水泳・体操・バレエ・ヨガなど姿勢改善につながる種目の特徴と自宅でできる運動習慣を紹介します。',
    images: [{ url: '/images/articles/kids-posture-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/kids-posture-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/kids-posture-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どもの姿勢改善に効果的なスポーツ｜猫背・反り腰を直す種目と運動',
    images: ['/images/articles/kids-posture-sports.jpg'],
  },
};

export default function KidsPostureSportsPage() {
  return (
    <ArticleLayout
      title="子どもの姿勢改善に効果的なスポーツ｜猫背・反り腰を直す種目と運動"
      heroImage="/images/articles/kids-posture-sports.jpg"
      heroAlt="正しい姿勢で運動する子ども"
      publishDate="2025年5月"
      slug="kids-posture-sports"
      description="子どもの猫背・反り腰・姿勢の悪さを改善するのに効果的なスポーツを解説。水泳・体操・バレエ・ヨガなど姿勢改善につながる種目の特徴と、自宅でできる姿勢づくりの運動習慣を紹介します。"
      tags={['姿勢', '猫背', '体幹', 'スポーツ']}
      shareText="子どもの猫背・姿勢の悪さを改善するのに効果的なスポーツを解説！水泳・体操・バレエ・ヨガなど姿勢改善につながる種目を紹介。 #子育て #猫背改善 #スポーツ"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          子どもの姿勢が悪くなる原因
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          近年、猫背や反り腰など姿勢の悪い子どもが増えているといわれています。主な原因として、長時間のスマートフォン・タブレット使用、運動不足、体幹の弱さが挙げられます。姿勢の悪さは見た目だけの問題でなく、肩こり・腰痛・集中力低下・疲れやすさにもつながります。
        </p>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">姿勢が悪くなるおもな原因</p>
          <ul className="space-y-1.5">
            <li className="text-sm text-amber-800">体幹（腹筋・背筋）の筋力不足</li>
            <li className="text-sm text-amber-800">長時間の前傾姿勢（スマホ・学習）</li>
            <li className="text-sm text-amber-800">運動不足による筋力・柔軟性の低下</li>
            <li className="text-sm text-amber-800">重いランドセル・荷物の偏った持ち方</li>
            <li className="text-sm text-amber-800">正しい立ち方・座り方を教わっていない</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          姿勢改善に効果的なスポーツ5選
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-2">水泳</p>
            <p className="text-sm text-blue-800 leading-relaxed">
              水中では重力の影響が少なく、自然に背骨を伸ばした状態で泳ぎます。クロール・背泳ぎ・平泳ぎはいずれも背筋・腹筋・体幹を均等に使うため、姿勢を支える筋肉群が全身的に鍛えられます。特に「背泳ぎ」は猫背改善に特効果が高いとされています。
            </p>
          </div>

          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <p className="font-bold text-amber-900 mb-2">体操・新体操</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              正しい姿勢の維持が採点に直結するため、体操は姿勢意識を自然に育てます。前転・逆立ち・ブリッジなどの動作を通じて、体幹・背筋・肩まわりが鍛えられ、美しい姿勢の土台が作られます。
            </p>
          </div>

          <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
            <p className="font-bold text-pink-900 mb-2">バレエ・ダンス</p>
            <p className="text-sm text-pink-800 leading-relaxed">
              バレエは「美しい姿勢」そのものがすべての動作の基本です。背筋を伸ばして立つ・体の軸を意識するトレーニングが毎回の練習で繰り返され、姿勢改善効果が非常に高いです。女の子だけでなく男の子にも対応したコースが増えています。
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="font-bold text-green-900 mb-2">ヨガ（子ども向け）</p>
            <p className="text-sm text-green-800 leading-relaxed">
              子ども向けヨガは柔軟性・体幹・深呼吸をセットで鍛えます。猫のポーズ・コブラのポーズ・木のポーズなど、脊柱の自然なカーブを整えるポーズが多く含まれています。自宅でも取り組みやすいのが魅力です。
            </p>
          </div>

          <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
            <p className="font-bold text-purple-900 mb-2">剣道・弓道</p>
            <p className="text-sm text-purple-800 leading-relaxed">
              日本の武道は「正しい姿勢・正しい礼」を重んじます。剣道・弓道の構え（正眼・弓引き）は体の軸をまっすぐ保つことが求められ、背骨・肩・腰の整列を意識する習慣が自然と身につきます。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          自宅でできる姿勢づくりの習慣
        </h2>
        <div className="space-y-3 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">壁立ち（1日1分）</h3>
              <p className="text-sm text-gray-600">壁に背中・お尻・かかとをつけて立ち、後頭部も壁に触れるようにします。この姿勢を1分キープするだけで、正しい姿勢の感覚が身につきます。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">胸を開くストレッチ</h3>
              <p className="text-sm text-gray-600">両腕を後ろで組み、胸を張りながら肩甲骨を寄せます。猫背で縮んだ胸の筋肉をほぐし、背筋が伸びやすくなります。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">プランク（体幹の基礎）</h3>
              <p className="text-sm text-gray-600">腕立て伏せの姿勢でまっすぐキープします。姿勢を支える腹横筋・多裂筋（深層の背筋）が鍛えられます。</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          子どもの姿勢悪化は、運動習慣とスマホ・タブレット使用のバランスが崩れることで加速します。水泳・体操・バレエ・ヨガ・武道など、姿勢を意識する種目のスポーツを取り入れることで、体幹が強化され自然と美しい姿勢が育ちます。スポーツの習い事選びに「姿勢改善」という視点を加えてみてください。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          よくある質問
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">何歳から姿勢の改善に取り組むべきですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">早ければ早いほど効果的です。幼児期（3〜6歳）は骨・筋肉・神経系が柔軟なため、正しい姿勢の習慣が身につきやすい時期です。小学生以降でも取り組み次第で改善できますが、毎日の継続が大切です。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">スポーツをしても姿勢が改善しない場合は？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">スポーツ以外の生活習慣（スマホの使い方・座り方・枕の高さ）が姿勢悪化の原因になっている場合があります。また、側弯症など医学的な問題が隠れているケースもあるため、著しい姿勢の曲がりや痛みがある場合は整形外科の受診をおすすめします。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">「姿勢コルセット」は子どもに使って良いですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">姿勢補助グッズは一時的なサポートには有効ですが、依存すると筋力が育たない可能性があります。コルセットよりも体幹筋力をつけるスポーツ・運動習慣を優先することをおすすめします。医師や理学療法士に相談の上使用してください。</p>
          </details>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '何歳から姿勢の改善に取り組むべきですか？',
                acceptedAnswer: { '@type': 'Answer', text: '早ければ早いほど効果的です。幼児期（3〜6歳）は骨・筋肉・神経系が柔軟なため、正しい姿勢の習慣が身につきやすい時期です。' },
              },
              {
                '@type': 'Question',
                name: 'スポーツをしても姿勢が改善しない場合は？',
                acceptedAnswer: { '@type': 'Answer', text: 'スマホの使い方・座り方など生活習慣が原因になっている場合があります。著しい曲がりや痛みがある場合は整形外科の受診をおすすめします。' },
              },
              {
                '@type': 'Question',
                name: '「姿勢コルセット」は子どもに使って良いですか？',
                acceptedAnswer: { '@type': 'Answer', text: '依存すると筋力が育たない可能性があります。体幹筋力をつけるスポーツ・運動習慣を優先することをおすすめします。' },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
