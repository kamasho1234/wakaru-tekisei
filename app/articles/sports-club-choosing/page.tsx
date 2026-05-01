import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どものスポーツクラブ・少年団の選び方｜後悔しない7つのチェックポイント',
  description:
    '子どもに合ったスポーツクラブや少年団の選び方を解説。指導者の質・費用・練習頻度・環境・雰囲気など、入会前に確認すべき7つのチェックポイントと、よくある失敗例・後悔しない選び方のコツを紹介します。',
  openGraph: {
    title: '子どものスポーツクラブ・少年団の選び方｜後悔しない7つのチェックポイント',
    description:
      '子どもに合ったスポーツクラブや少年団の選び方を解説。指導者の質・費用・練習頻度など、入会前に確認すべき7つのチェックポイントを紹介します。',
    images: [{ url: '/images/articles/sports-club-choosing.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/sports-club-choosing',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/sports-club-choosing',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どものスポーツクラブ・少年団の選び方｜後悔しない7つのチェックポイント',
    images: ['/images/articles/sports-club-choosing.jpg'],
  },
};

export default function SportsClubChoosingPage() {
  return (
    <ArticleLayout
      title="子どものスポーツクラブ・少年団の選び方｜後悔しない7つのチェックポイント"
      heroImage="/images/articles/sports-club-choosing.jpg"
      heroAlt="スポーツクラブで練習する子どもたち"
      publishDate="2025年5月"
      slug="sports-club-choosing"
      description="子どもに合ったスポーツクラブや少年団の選び方を解説。指導者の質・費用・練習頻度・環境・雰囲気など、入会前に確認すべき7つのチェックポイントと、よくある失敗例・後悔しない選び方のコツを紹介します。"
      tags={['スポーツクラブ', '少年団', '習い事', 'スポーツ選び']}
      shareText="子どものスポーツクラブ・少年団の選び方を解説！入会前に確認すべき7つのチェックポイントで後悔しない選択を。 #子育て #習い事 #スポーツ"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          スポーツクラブと少年団の違い
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-3">スポーツクラブ（習い事型）</p>
            <ul className="space-y-1.5 text-sm text-blue-800">
              <li>月謝制でプロのコーチが指導</li>
              <li>週1〜2回から選べる練習頻度</li>
              <li>保護者の負担（当番・送迎など）が少ない</li>
              <li>費用は比較的高め</li>
              <li>競技力より楽しさ・技術習得を重視</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <p className="font-bold text-amber-900 mb-3">少年団（地域クラブ型）</p>
            <ul className="space-y-1.5 text-sm text-amber-800">
              <li>地域の学校・町内会が運営</li>
              <li>週3〜5回の練習が多い</li>
              <li>保護者の関与（当番・応援・役員）が大きい</li>
              <li>費用は比較的安め</li>
              <li>競技力向上・仲間意識を重視</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          どちらが良いかは子どもの目標・性格・家庭の状況によって異なります。「楽しく習い事として続けたい」ならクラブ、「本格的に強くなりたい・地域の仲間と切磋琢磨したい」なら少年団が向いている傾向があります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          入会前に確認すべき7つのチェックポイント
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">指導者の指導スタイルと資格</h3>
              <p className="text-sm text-gray-600">
                怒鳴る・否定する指導は子どもの意欲を奪います。体験レッスンで指導者がどんな言葉をかけているか、子どもを褒めているかを観察しましょう。公認コーチ資格の有無も確認できると安心です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">費用の総額（月謝＋諸費用）</h3>
              <p className="text-sm text-gray-600">
                月謝以外に道具代・遠征費・大会参加費・ユニフォーム代が加わります。入会前に年間で必要なおおよその金額を確認しておきましょう。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">練習の頻度・時間帯・場所</h3>
              <p className="text-sm text-gray-600">
                週何回・何時間の練習か、場所（自宅からの距離）を確認します。小学校低学年では週1〜2回が適切な場合が多く、毎日の練習は疲労・燃え尽きのリスクがあります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">クラブの雰囲気・子ども同士の関係</h3>
              <p className="text-sm text-gray-600">
                子どもが楽しそうにしているか、仲間同士が助け合っているかを体験で確認します。いじめ・ハラスメントへの対応方針を持っているかも重要な確認ポイントです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">5</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">保護者の関与の度合い</h3>
              <p className="text-sm text-gray-600">
                当番・役員・遠征の送迎など、親の負担がどれくらいあるかは事前に把握が必要です。共働きや兄弟が多い家庭では、保護者負担が大きいクラブへの入会が後々の悩みになることがあります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">6</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">けが・事故時の対応方針</h3>
              <p className="text-sm text-gray-600">
                スポーツ保険への加入有無、けがが発生した際の連絡・対応フローを確認します。AEDの設置有無・救急対応の研修有無も大切なチェック項目です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">7</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">退会・転団のしやすさ</h3>
              <p className="text-sm text-gray-600">
                万が一合わなかった場合に、スムーズに退会できるか確認しておきます。強引な引き止めや違約金が発生するケースは要注意です。
              </p>
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
          スポーツクラブ・少年団選びは「子どもが楽しめるかどうか」を最優先にすることが原則です。強さへの憧れより、「また来週も行きたい」と思える環境を選ぶことが、長く続けられるスポーツライフの土台になります。必ず体験レッスンに参加し、子どもの感想を丁寧に聞いてから入会を決めましょう。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          よくある質問
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">体験レッスンは何か所回るべきですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">最低2〜3か所は体験することをおすすめします。1か所目では比較基準がなく判断しづらいことが多いです。子どもが「もう一度行きたい」と言ったクラブが候補の筆頭です。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">入会後に「合わない」と感じたら？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">3ヶ月程度は様子を見ましょう。最初の1〜2ヶ月は慣れない環境で不安を感じやすいです。ただし、いじめや指導者からの暴言・体罰など明らかな問題がある場合はすぐに転団・退会を検討してください。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">複数のクラブを掛け持ちしても良いですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">クラブによっては掛け持ちを禁止しているところもあります。事前に確認が必要です。掛け持ちが許可される場合でも、子どもへの過負荷（疲労・燃え尽き）を防ぐため、合計練習時間と休息日のバランスを意識しましょう。</p>
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
                name: '体験レッスンは何か所回るべきですか？',
                acceptedAnswer: { '@type': 'Answer', text: '最低2〜3か所は体験することをおすすめします。子どもが「もう一度行きたい」と言ったクラブが候補の筆頭です。' },
              },
              {
                '@type': 'Question',
                name: '入会後に「合わない」と感じたら？',
                acceptedAnswer: { '@type': 'Answer', text: '3ヶ月程度は様子を見ましょう。ただし、いじめや暴言・体罰など明らかな問題がある場合はすぐに転団・退会を検討してください。' },
              },
              {
                '@type': 'Question',
                name: '複数のクラブを掛け持ちしても良いですか？',
                acceptedAnswer: { '@type': 'Answer', text: 'クラブによっては掛け持ちを禁止しているところもあります。事前に確認し、子どもへの過負荷を防ぐため合計練習時間とのバランスを意識しましょう。' },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
