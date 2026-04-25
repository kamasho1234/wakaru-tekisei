import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '三笘薫の子供時代|川崎生まれのドリブラーがプレミアリーグへ至るまで',
  description:
    'プレミアリーグ・ブライトンで活躍する三笘薫選手の子供時代。川崎フロンターレのアカデミーで磨いたドリブル技術と、世界を驚かせた幼少期のエピソードを紹介。',
  openGraph: {
    title: '三笘薫の子供時代|川崎生まれのドリブラーがプレミアリーグへ至るまで',
    description:
      'プレミアリーグ・ブライトンで活躍する三笘薫選手の子供時代。川崎フロンターレのアカデミーで磨いたドリブル技術と、世界を驚かせた幼少期のエピソードを紹介。',
    images: [{ url: '/images/articles/mitoma-kaoru-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/mitoma-kaoru-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/mitoma-kaoru-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '三笘薫の子供時代|川崎生まれのドリブラーがプレミアリーグへ至るまで',
    images: ['/images/articles/mitoma-kaoru-childhood.jpg'],
  },
};

export default function MitomaKaoruChildhoodPage() {
  return (
    <ArticleLayout
      title="三笘薫の子供時代|川崎生まれのドリブラーがプレミアリーグへ至るまで"
      heroImage="/images/articles/mitoma-kaoru-childhood.jpg"
      heroAlt="ドリブル練習をする子ども"
      publishDate="2025年4月"
      slug="mitoma-kaoru-childhood"
      description="プレミアリーグ・ブライトンで活躍する三笘薫選手の子供時代。川崎フロンターレのアカデミーで磨いたドリブル技術と、世界を驚かせた幼少期のエピソードを紹介。"
      tags={['三笘薫', 'サッカー', '幼少期']}
      shareText="三笘薫選手が川崎のアカデミーでドリブルを磨き、プレミアリーグで世界を驚かせた話を紹介 #三笘薫 #サッカー"
      citations={['https://ja.wikipedia.org/wiki/%E4%B8%89%E7%AC%98%E8%96%AB']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          三笘薫の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          三笘薫選手は1997年5月20日、神奈川県川崎市で生まれました。川崎フロンターレのアカデミー出身で、筑波大学を経てプロ入り。2022年にブライトン（プレミアリーグ）へ移籍し、ワールドカップ2022でのスペイン戦ゴールアシストで世界的な注目を集めました。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">1997年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">川崎市</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">Brighton</p>
            <p className="text-xs text-gray-600 mt-1">所属クラブ</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1997年5月20日</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>神奈川県川崎市</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">育成:</span>
              <span>川崎フロンターレアカデミー</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">現所属:</span>
              <span>ブライトン（プレミアリーグ）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          川崎フロンターレアカデミーで育ったドリブル技術
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          三笘選手は幼少期から地元・川崎フロンターレのアカデミーでサッカーを学びました。技術志向の強いフロンターレのアカデミーで、ドリブルの基礎と判断力を徹底的に磨きました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">フロンターレアカデミーの技術教育</h3>
              <p className="text-sm text-gray-600">
                川崎フロンターレは日本屈指の技術重視クラブです。幼少期からボールタッチの質と1対1の判断を徹底的に鍛えられた環境が、後の「1mmのドリブル」を生み出しました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">筑波大学でのさらなる成長</h3>
              <p className="text-sm text-gray-600">
                プロ直行ではなく筑波大学へ進学した三笘選手。大学サッカーで戦術眼と体の使い方をさらに深化させ、大学卒業時には日本最高クラスの選手へと成長していました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">世界を驚かせた「ゴールライン際のボール」</h3>
              <p className="text-sm text-gray-600">
                2022年W杯スペイン戦で、ゴールラインを割ったかに見えたボールからのアシストは世界中で話題に。ボールのわずか1mmがラインに残っていたこの場面は、幼少期から磨いたボール感覚の究極の表れです。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          プレミアリーグで証明した日本人ドリブラーの実力
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">幼少期</td>
                <td className="px-3 py-2 text-gray-600">川崎フロンターレアカデミー入団</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">大学</td>
                <td className="px-3 py-2 text-gray-600">筑波大学でさらに成長</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2021年</td>
                <td className="px-3 py-2 text-gray-600">川崎フロンターレでJリーグ優勝</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2022年</td>
                <td className="px-3 py-2 text-gray-600">W杯スペイン戦アシスト・ブライトン移籍</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">「1mmのドリブル」が示すもの</p>
          <p className="text-sm text-blue-800">
            三笘選手のドリブルは、ボール1個分の差で相手をかわす精密さが特徴です。これは幼少期から「どこにボールを置くか」を意識し続けた積み重ねによるものです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ：良質な環境と継続が世界レベルのドリブラーを生む
        </h2>
        <p className="text-gray-700 leading-relaxed">
          三笘薫選手の幼少期が教えてくれることは、「良質な技術指導を受けた環境での積み重ねが、世界レベルのドリブラーを生む」ということです。川崎フロンターレという技術志向のアカデミーで基礎を磨き、大学で戦術眼を深め、そしてプロで開花する——この段階的な成長が、プレミアリーグでの活躍を支えています。お子さんにサッカーをさせるなら、早い段階で技術志向のクラブや指導者に出会わせることが、長期的な成長の鍵になります。
        </p>
      </div>
    </ArticleLayout>
  );
}
