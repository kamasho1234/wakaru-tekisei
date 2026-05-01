import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どもの体幹トレーニング入門｜何歳から？家でできるメニュー7選',
  description:
    '子どもの体幹トレーニングはいつから始められる？スポーツに必要な体幹の基礎を解説し、自宅でできる年齢別メニューを紹介。プランク・バランスボード・バランスゲームなど楽しく続けられる方法でお子さんの体幹を鍛えましょう。',
  openGraph: {
    title: '子どもの体幹トレーニング入門｜何歳から？家でできるメニュー7選',
    description:
      '子どもの体幹トレーニングはいつから始められる？スポーツに必要な体幹の基礎を解説し、自宅でできる年齢別メニューを紹介します。',
    images: [{ url: '/images/articles/kids-core-training.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/kids-core-training',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/kids-core-training',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どもの体幹トレーニング入門｜何歳から？家でできるメニュー7選',
    images: ['/images/articles/kids-core-training.jpg'],
  },
};

export default function KidsCoreTrainingPage() {
  return (
    <ArticleLayout
      title="子どもの体幹トレーニング入門｜何歳から？家でできるメニュー7選"
      heroImage="/images/articles/kids-core-training.jpg"
      heroAlt="体幹を鍛えるトレーニングをする子ども"
      publishDate="2025年5月"
      slug="kids-core-training"
      description="子どもの体幹トレーニングはいつから始められる？スポーツに必要な体幹の基礎を解説し、自宅でできる年齢別メニューを紹介。プランク・バランスボード・バランスゲームなど楽しく続けられる方法でお子さんの体幹を鍛えましょう。"
      tags={['体幹', 'トレーニング', 'スポーツ', '小学生']}
      shareText="子どもの体幹トレーニング入門！何歳から始められる？自宅でできる楽しいメニュー7選を紹介。 #子育て #スポーツ #体幹トレーニング"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          体幹とは何か？なぜスポーツに重要なのか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「体幹」とは、腕・脚・頭を除いた胴体部分の筋肉全体を指します。腹筋・背筋・骨盤周りの筋肉などが含まれ、これらが連動して身体の軸を安定させます。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="text-sm font-bold text-blue-900 mb-2">バランス・姿勢</p>
            <p className="text-xs text-blue-800">体の軸が安定することで、あらゆる動作の精度が上がる</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
            <p className="text-sm font-bold text-amber-900 mb-2">パワーの伝達</p>
            <p className="text-xs text-amber-800">腕・脚から生み出した力を効率よくボールや道具に伝える</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <p className="text-sm font-bold text-green-900 mb-2">怪我の予防</p>
            <p className="text-xs text-green-800">体幹が弱いと腰痛・関節への負担増・転倒リスクが高まる</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          何歳から体幹トレーニングを始められる？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          厳密なトレーニングとしての体幹強化は、神経系が発達してくる6〜7歳ごろからが適切とされています。ただし、3〜5歳の幼児でもバランス遊びや体幹を使う動作は十分に取り入れられます。
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">アプローチ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">3〜5歳</td>
                <td className="px-3 py-2 text-gray-600">「遊び」感覚で。片足立ち・けんけん・ぐるぐる回り・動物歩きなど</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">6〜8歳</td>
                <td className="px-3 py-2 text-gray-600">バランスボードやボールを使った体幹遊び。短時間のプランクも開始できる</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">9〜12歳</td>
                <td className="px-3 py-2 text-gray-600">スポーツに特化した体幹トレーニング。負荷のかかったプランク・サイドプランク・バードドッグなど</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          自宅でできる体幹トレーニング7選
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">プランク（腕立て伏せの姿勢でキープ）</h3>
              <p className="text-sm text-gray-600">腕立て伏せの姿勢で静止するだけ。最初は10秒から始め、慣れたら30秒・60秒と延ばします。腰が落ちないようにまっすぐを意識します。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バードドッグ</h3>
              <p className="text-sm text-gray-600">四つん這いから右手と左足を同時に伸ばして3秒キープ→逆も行います。左右の連動と体幹の安定を鍛えます。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">片足バランス（フラミンゴ立ち）</h3>
              <p className="text-sm text-gray-600">片足で立つ練習です。慣れたら目を閉じる、腕を広げるなど難易度を上げていきます。固有感覚を刺激する効果があります。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">クマ歩き</h3>
              <p className="text-sm text-gray-600">四つん這いから膝を床につけずに両手・両足で歩きます。全身の協調性と体幹を同時に鍛えられ、幼児にも楽しんでできます。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">5</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ブリッジ（背中を持ち上げる）</h3>
              <p className="text-sm text-gray-600">仰向けで膝を立て、お尻と背中を持ち上げてキープ。臀部・腹筋・背筋を同時に鍛えられます。柔軟性も同時に高まります。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">6</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">サイドプランク</h3>
              <p className="text-sm text-gray-600">横向きに寝て片腕と足だけで体を支えます。体の側面の筋肉（外腹斜筋）を中心に鍛えます。左右各10〜20秒から始めましょう。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">7</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バランスクッション・ボール乗り</h3>
              <p className="text-sm text-gray-600">バランスクッションやバランスボールの上に座る・立つだけで体幹に刺激が入ります。テレビを見ながら・本を読みながらでも続けられる点が魅力です。</p>
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
          体幹はすべてのスポーツの土台です。毎日5〜10分、遊びの延長として取り入れるだけで、子どもの運動パフォーマンスと姿勢は大きく変わります。無理な高負荷・長時間は必要ありません。楽しく継続することが最大のコツです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          よくある質問
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">体幹トレーニングは毎日やっても大丈夫ですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">軽度の体幹トレーニング（プランク・バランス系）であれば毎日行っても問題ありません。ただし筋肉痛が出ている場合は1日休ませ、回復を優先しましょう。強度を上げる場合は週3〜4回が適切です。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">体幹が弱いかどうか確認する方法はありますか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">片足立ちを10秒以上維持できない・プランクを10秒も持たずに腰が崩れる・歩き方がふらつく・姿勢が悪くすぐ猫背になる、などが体幹が弱いサインです。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">スポーツと体幹トレーニングはどちらを優先すべきですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">どちらかを選ぶ必要はなく、スポーツの練習の前後に短時間の体幹トレーニングを組み込むのが理想です。ウォームアップ後に5分・クールダウン前に5分など、習慣化しやすい形で取り入れましょう。</p>
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
                name: '体幹トレーニングは毎日やっても大丈夫ですか？',
                acceptedAnswer: { '@type': 'Answer', text: '軽度の体幹トレーニングであれば毎日行っても問題ありません。筋肉痛が出ている場合は1日休ませましょう。強度を上げる場合は週3〜4回が適切です。' },
              },
              {
                '@type': 'Question',
                name: '体幹が弱いかどうか確認する方法はありますか？',
                acceptedAnswer: { '@type': 'Answer', text: '片足立ちを10秒以上維持できない、プランクで腰がすぐに崩れる、姿勢が悪くすぐ猫背になる、などが体幹が弱いサインです。' },
              },
              {
                '@type': 'Question',
                name: 'スポーツと体幹トレーニングはどちらを優先すべきですか？',
                acceptedAnswer: { '@type': 'Answer', text: 'どちらかを選ぶ必要はなく、スポーツの練習の前後に短時間の体幹トレーニングを組み込むのが理想です。' },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
