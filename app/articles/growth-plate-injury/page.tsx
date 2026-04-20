import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '成長板（骨端線）損傷とは？子どものスポーツで注意すべきこと',
  description:
    '子どもの骨には大人にはない「成長板」があります。スポーツ中の成長板損傷のリスクと、親が注意すべきことを解説します。',
  openGraph: {
    title: '成長板（骨端線）損傷とは？子どものスポーツで注意すべきこと',
    description:
      '子どもの骨には大人にはない「成長板」があります。スポーツ中の成長板損傷のリスクと、親が注意すべきことを解説します。',
    images: [{ url: '/images/articles/growth-plate-injury.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/growth-plate-injury',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/growth-plate-injury',
  },
  twitter: {
    card: 'summary_large_image',
    title: '成長板（骨端線）損傷とは？子どものスポーツで注意すべきこと',
    images: ['/images/articles/growth-plate-injury.jpg'],
  },
};

export default function GrowthPlateInjuryPage() {
  return (
    <ArticleLayout
      title="成長板（骨端線）損傷とは？子どものスポーツで注意すべきこと"
      heroImage="/images/articles/growth-plate-injury.jpg"
      heroAlt="膝を押さえている子どもと心配する親"
      publishDate="2025年4月"
      slug="growth-plate-injury"
      description="子どもの骨には大人にはない「成長板」があります。スポーツ中の成長板損傷のリスクと、親が注意すべきことを解説します。"
      tags={['成長板', '骨端線', 'スポーツ障害']}
      shareText="子どもの骨の「成長板」損傷リスクとスポーツの関係。親が知っておくべき知識。 #子育て #スポーツ障害"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          成長板（骨端線）とは何か？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          子どもの骨には、大人にはない特別な部分があります。それが「成長板（骨端線）」です。この部分は身長の伸びや骨の発育に直結しているため、その特性を親が理解することが重要です。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">14-16歳</p>
            <p className="text-xs text-gray-600 mt-1">女子の骨端線閉鎖時期</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">16-18歳</p>
            <p className="text-xs text-gray-600 mt-1">男子の骨端線閉鎖時期</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">3倍</p>
            <p className="text-xs text-gray-600 mt-1">子どもの骨が折れやすい理由</p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-6">
          <p className="font-bold text-orange-900 mb-2">成長板（骨端線）の特徴</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">場所：</span>
              <span>骨の両端にある軟骨組織。完全に骨化するまでの間、ここで骨が伸びます</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">強度：</span>
              <span>大人の骨よりも柔らかく、脆い。衝撃に弱く、損傷しやすい</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">閉鎖時期：</span>
              <span>女子は平均14～16歳、男子は16～18歳で完全に骨化（個人差あり）</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">成長への影響：</span>
              <span>骨端線が傷つくと、その部位の骨の伸びが阻害される可能性がある</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          子どもに多い骨端線損傷の種類
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          骨端線損傷は、スポーツの種類によって発症部位が異なります。各スポーツの特性に応じた予防が重要です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">損傷名</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">発症年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">原因スポーツ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">オスグッド病</td>
                <td className="px-3 py-2 text-gray-600">10～14歳</td>
                <td className="px-3 py-2 text-gray-600">サッカー、バスケ、バレー</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">セーバー病</td>
                <td className="px-3 py-2 text-gray-600">8～12歳</td>
                <td className="px-3 py-2 text-gray-600">ランニング、ジャンプスポーツ</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">リトルリーグ肘</td>
                <td className="px-3 py-2 text-gray-600">9～12歳</td>
                <td className="px-3 py-2 text-gray-600">野球（特に投手）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">手首の骨端線損傷</td>
                <td className="px-3 py-2 text-gray-600">10～15歳</td>
                <td className="px-3 py-2 text-gray-600">体操、スケートボード</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">足首の骨端線損傷</td>
                <td className="px-3 py-2 text-gray-600">11～15歳</td>
                <td className="px-3 py-2 text-gray-600">バスケ、バレー、サッカー</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          オスグッド病：膝の痛みに注意
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          最も一般的な成長期スポーツ障害。子どもが訴える膝の痛みの多くは、このオスグッド病です。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">どこが痛い？</h3>
              <p className="text-sm text-gray-600">
                膝の皿の下の出っ張った部分（脛骨粗面）が痛む。ジャンプやランニング時に痛みが増す。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">発症年齢</h3>
              <p className="text-sm text-gray-600">
                10～14歳、特に急速な成長期の男子に多い。女子でも発症する。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">原因</h3>
              <p className="text-sm text-gray-600">
                脛骨粗面の骨端線にジャンプやダッシュの力が繰り返し加わり、牽引力による炎症が生じる。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">予防</h3>
              <p className="text-sm text-gray-600">
                太ももの筋肉（大腿四頭筋）とふくらはぎのストレッチが重要。ウォームアップ・クールダウンの徹底。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">治療</h3>
              <p className="text-sm text-gray-600">
                安静が基本。完全に治る（骨端線が閉鎖すれば自然消失）。無理してプレーすると慢性化。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-6">
          <p className="font-bold text-orange-900 mb-2">オスグッド病の特徴</p>
          <p className="text-sm text-orange-800">大人の膝の骨は完全に骨化しているため、オスグッド病は子どもにしか起きません。逆に、骨端線が閉鎖すれば（成長が止まれば）、自然と治ります。つまり、このスポーツ障害は「成長の証」でもあります。</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          セーバー病：踵の痛みに注意
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          踵（かかと）の痛みは、セーバー病の典型的な症状。ランニングやジャンプが多いスポーツをしている低学年の子どもに多く見られます。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">症状</h3>
              <p className="text-sm text-gray-600">
                踵が痛む、特に朝起きた時や運動後に痛みが強い。踵の両側が腫れることもある。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">発症年齢</h3>
              <p className="text-sm text-gray-600">
                8～12歳、特に男子に多い。急速な成長期に多く発症。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">原因</h3>
              <p className="text-sm text-gray-600">
                踵の骨端線にふくらはぎの筋肉（アキレス腱）が引っ張られることで炎症が生じる。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">予防と対策</h3>
              <p className="text-sm text-gray-600">
                ふくらはぎのストレッチが重要。適切なインソール（足のアーチを支える）の使用も効果的。踵の高さのあるインソールで牽引力を軽減。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">治療</h3>
              <p className="text-sm text-gray-600">
                安静とストレッチが基本。オスグッド病と同じく、骨端線が閉鎖すれば自然に治ります。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          親がすべき対応と予防策
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          成長板損傷を完全に予防することは難しいですが、リスクを大幅に減らすことは可能です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">対策</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">実行内容</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">効果</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">毎日のストレッチ</td>
                <td className="px-3 py-2 text-gray-600">10～15分、朝夜の2回</td>
                <td className="px-3 py-2 text-gray-600">骨端線への牽引力軽減</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">適切なインソール</td>
                <td className="px-3 py-2 text-gray-600">スポーツシューズに足のアーチ対応インソール</td>
                <td className="px-3 py-2 text-gray-600">足の負荷軽減</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">練習量の管理</td>
                <td className="px-3 py-2 text-gray-600">週1～2日の完全休息、1日の練習時間制限</td>
                <td className="px-3 py-2 text-gray-600">過度な負荷の回避</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">栄養補給</td>
                <td className="px-3 py-2 text-gray-600">カルシウム・たんぱく質・ビタミンD</td>
                <td className="px-3 py-2 text-gray-600">骨の発育促進</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">正しいフォーム習得</td>
                <td className="px-3 py-2 text-gray-600">指導者による定期的なフォームチェック</td>
                <td className="px-3 py-2 text-gray-600">不必要な負荷軽減</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-6">
          <p className="font-bold text-orange-900 mb-2">定期的な医学的チェック</p>
          <p className="text-sm text-orange-800">スポーツをしている子どもは、年に1～2回、整形外科医による成長板の状態確認を受けることをお勧めします。症状がなくても、早期発見ができれば対応が容易です。</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          まとめ：痛みを放置しないことが大切
        </h2>
        <p className="text-gray-700 leading-relaxed">
          成長板損傷は、子どもにしか起きないスポーツ障害です。言い換えれば、「成長が著しい時期にしか起きない」ということ。痛みが出た時点で、親が「大丈夫」と判断するのではなく、医師に相談することが重要です。早期対応すれば、ほとんどの骨端線損傷は完全に治ります。子どもが痛みを訴えたら、それは身体からの重要なシグナル。対応を先延ばしせず、速やかに医師の診察を受けてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
