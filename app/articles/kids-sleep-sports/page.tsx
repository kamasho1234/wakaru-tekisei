import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どものスポーツと睡眠の関係｜成長ホルモンと回復力を最大化する方法',
  description:
    'スポーツをする子どもにとって睡眠がなぜ重要なのかを解説。成長ホルモンの分泌・筋肉の修復・記憶の定着・翌日のパフォーマンスへの影響を踏まえ、年齢別の必要睡眠時間と質の良い眠りをつくるポイントを紹介します。',
  openGraph: {
    title: '子どものスポーツと睡眠の関係｜成長ホルモンと回復力を最大化する方法',
    description:
      'スポーツをする子どもにとって睡眠がなぜ重要なのかを解説。成長ホルモンの分泌・筋肉の修復・記憶の定着・翌日のパフォーマンスへの影響を踏まえ、質の良い眠りのポイントを紹介します。',
    images: [{ url: '/images/articles/kids-sleep-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/kids-sleep-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/kids-sleep-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どものスポーツと睡眠の関係｜成長ホルモンと回復力を最大化する方法',
    images: ['/images/articles/kids-sleep-sports.jpg'],
  },
};

export default function KidsSleepSportsPage() {
  return (
    <ArticleLayout
      title="子どものスポーツと睡眠の関係｜成長ホルモンと回復力を最大化する方法"
      heroImage="/images/articles/kids-sleep-sports.jpg"
      heroAlt="ぐっすり眠る子ども"
      publishDate="2025年5月"
      slug="kids-sleep-sports"
      description="スポーツをする子どもにとって睡眠がなぜ重要なのかを解説。成長ホルモンの分泌・筋肉の修復・記憶の定着・翌日のパフォーマンスへの影響を踏まえ、年齢別の必要睡眠時間と質の良い眠りをつくるポイントを紹介します。"
      tags={['睡眠', '成長ホルモン', 'スポーツ', '回復']}
      shareText="スポーツをする子どもの睡眠がいかに重要かを解説。成長ホルモンの分泌・筋肉修復・翌日のパフォーマンスへの影響と、質の良い睡眠をつくるポイントを紹介！ #子育て #スポーツ"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          睡眠はトレーニングの一部
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「よく食べ、よく動き、よく眠る」は子どもの成長の基本とされてきましたが、スポーツをする子どもにとって睡眠はとりわけ重要です。睡眠中、身体は練習で受けたダメージを修復し、翌日の運動に備えてエネルギーを蓄えます。睡眠の質と量が不十分だと、どれほど熱心に練習しても効果が半減してしまいます。
        </p>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">睡眠中に起こること（主なもの）</p>
          <ul className="space-y-1.5">
            <li className="text-sm text-amber-800">成長ホルモンの分泌（入眠後3時間以内にピーク）</li>
            <li className="text-sm text-amber-800">筋肉・骨・組織の修復と再生</li>
            <li className="text-sm text-amber-800">記憶の定着（練習で覚えた動きが脳に刻まれる）</li>
            <li className="text-sm text-amber-800">免疫機能の維持・強化</li>
            <li className="text-sm text-amber-800">疲労物質の除去と神経系の回復</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          年齢別の必要睡眠時間
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          米国国立睡眠財団（National Sleep Foundation）などのガイドラインでは、子どもの年齢に応じた睡眠時間の目安が示されています。スポーツをする子どもは運動量が多い分、これらの下限ではなく上限に近い睡眠時間を確保することが推奨されます。
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">推奨睡眠時間</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">就寝時刻の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">3〜5歳（幼児）</td>
                <td className="px-3 py-2 text-gray-600">10〜13時間</td>
                <td className="px-3 py-2 text-gray-600">19:30〜20:30</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">6〜9歳（低〜中学年）</td>
                <td className="px-3 py-2 text-gray-600">9〜11時間</td>
                <td className="px-3 py-2 text-gray-600">20:00〜21:00</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">10〜12歳（高学年）</td>
                <td className="px-3 py-2 text-gray-600">9〜11時間</td>
                <td className="px-3 py-2 text-gray-600">20:30〜21:30</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">13〜15歳（中学生）</td>
                <td className="px-3 py-2 text-gray-600">8〜10時間</td>
                <td className="px-3 py-2 text-gray-600">21:00〜22:00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">※ 上記は一般的な目安です。個人差があります。</p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          質の良い睡眠をつくる5つのポイント
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">就寝・起床時刻を固定する</h3>
              <p className="text-sm text-gray-600">毎日同じ時刻に寝起きすることで体内時計が整い、入眠しやすくなります。休日も平日との差を1時間以内に抑えるのが理想です。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">就寝1時間前はスクリーンを避ける</h3>
              <p className="text-sm text-gray-600">スマートフォン・タブレット・テレビの画面から出るブルーライトは、眠気を誘うメラトニンの分泌を抑制します。就寝1時間前には画面から離れ、読書や入浴など落ち着いた活動に切り替えましょう。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ぬるめのお風呂で体温を調節する</h3>
              <p className="text-sm text-gray-600">就寝1〜2時間前に38〜40度程度のぬるめのお風呂に入ると、その後の体温低下が入眠を促します。熱いお風呂や激しいシャワーは逆に覚醒を高めてしまいます。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">寝室を暗く・涼しくする</h3>
              <p className="text-sm text-gray-600">睡眠に適した室温は16〜20度程度です。遮光カーテンや豆電球をオフにするなど、できるだけ暗い環境を整えましょう。騒音が気になる場合はホワイトノイズの利用も効果的です。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">5</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">激しい練習は就寝2時間前までに終わらせる</h3>
              <p className="text-sm text-gray-600">夜遅い時間の激しい運動は交感神経を刺激し、入眠を妨げます。練習後は軽いストレッチで体をほぐし、副交感神経優位の状態に切り替えましょう。</p>
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
          スポーツをする子どもにとって、睡眠は「さぼり」ではなく「回復のためのトレーニング」です。成長ホルモンが分泌される睡眠中こそ、身体が最も成長するタイミング。毎日の就寝時刻を意識し、スクリーンタイムを制限し、快適な睡眠環境を整えることが、お子さんの運動能力と健康を底上げする最大の投資です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          よくある質問
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">夜遅い練習後もすぐ寝かせた方が良いですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">練習直後は交感神経が高まっているため、すぐに眠れない場合があります。軽い補食を摂りながら20〜30分リラックスさせ、シャワーを浴びた後に就寝する流れがスムーズです。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">昼寝はスポーツの子どもに有効ですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">20〜30分程度の短い昼寝（パワーナップ）は疲労回復に効果的です。ただし長すぎる昼寝（90分以上）は夜の睡眠の質を下げるため、特に夕方以降は避けましょう。学校のある日は無理に昼寝させなくても構いません。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">試合前日は早く寝かせるべきですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">試合前日に急に早く寝ようとすると、かえって眠れなくなる場合があります。普段の就寝時刻より30分〜1時間だけ早めることを目標にしましょう。日頃から十分な睡眠習慣を身につけておくことが、試合当日のパフォーマンスに最もつながります。</p>
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
                name: '夜遅い練習後もすぐ寝かせた方が良いですか？',
                acceptedAnswer: { '@type': 'Answer', text: '練習直後は交感神経が高まっているため、軽い補食を摂りながら20〜30分リラックスさせ、シャワーを浴びた後に就寝する流れがスムーズです。' },
              },
              {
                '@type': 'Question',
                name: '昼寝はスポーツの子どもに有効ですか？',
                acceptedAnswer: { '@type': 'Answer', text: '20〜30分程度の短い昼寝は疲労回復に効果的です。長すぎる昼寝は夜の睡眠の質を下げるため、特に夕方以降は避けましょう。' },
              },
              {
                '@type': 'Question',
                name: '試合前日は早く寝かせるべきですか？',
                acceptedAnswer: { '@type': 'Answer', text: '急に早く寝ようとすると眠れなくなる場合があります。普段の就寝時刻より30分〜1時間だけ早めることを目標に。日頃からの睡眠習慣が最も重要です。' },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
