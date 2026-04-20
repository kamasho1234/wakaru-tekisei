import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '浅田真央の子供時代|5歳でスケートを始めた天才少女の原点',
  description:
    '伝説のフィギュアスケーター・浅田真央選手の子供時代を紹介。5歳でスケートを始め、8歳で全国大会に出場するまでの軌跡。',
  openGraph: {
    title: '浅田真央の子供時代|5歳でスケートを始めた天才少女の原点',
    description:
      '伝説のフィギュアスケーター・浅田真央選手の子供時代を紹介。5歳でスケートを始め、8歳で全国大会に出場するまでの軌跡。',
    images: [{ url: '/images/articles/asada-mao-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/asada-mao-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/asada-mao-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '浅田真央の子供時代|5歳でスケートを始めた天才少女の原点',
    images: ['/images/articles/asada-mao-childhood.jpg'],
  },
};

export default function AsadaMaoChildhoodPage() {
  return (
    <ArticleLayout
      title="浅田真央の子供時代|5歳でスケートを始めた天才少女の原点"
      heroImage="/images/articles/asada-mao-childhood.jpg"
      heroAlt="フィギュアスケートを楽しむ女の子"
      publishDate="2025年4月"
      slug="asada-mao-childhood"
      description="伝説のフィギュアスケーター・浅田真央選手の子供時代を紹介。5歳でスケートを始め、8歳で全国大会に出場するまでの軌跡。"
      tags={['浅田真央', 'フィギュアスケート', '幼少期']}
      shareText="浅田真央選手が5歳でスケートを始めた話。天才少女の原点を解説。 #浅田真央 #フィギュアスケート"
      citations={['https://ja.wikipedia.org/wiki/%E6%B5%85%E7%94%B0%E7%9C%9F%E5%A4%AE']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          浅田真央の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          浅田真央選手は1990年9月25日、愛知県名古屋市で生まれました。トリプルアクセル（3回転半ジャンプ）を得意とし、フィギュアスケート史上最高の技術を持つ選手として評価されています。しかし、その原点は「バレエダンサーへの夢」を持つ母親の影響にありました。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-pink-50 rounded-2xl p-4 text-center border border-pink-100">
            <p className="text-2xl font-black text-pink-600">1990年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-pink-50 rounded-2xl p-4 text-center border border-pink-100">
            <p className="text-2xl font-black text-pink-600">愛知県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-pink-50 rounded-2xl p-4 text-center border border-pink-100">
            <p className="text-2xl font-black text-pink-600">5歳</p>
            <p className="text-xs text-gray-600 mt-1">スケート開始</p>
          </div>
        </div>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100 mb-6">
          <p className="font-bold text-pink-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1990年9月25日</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>愛知県名古屋市名東区</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">出身小学校:</span>
              <span>名古屋市立高針小学校</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">スケート開始:</span>
              <span>5歳</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          バレエから始まった「美しさ」への追求
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          浅田真央選手の人生は「スケート」から始まったのではなく、「バレエ」から始まりました。これが後の彼女のスケートスタイルに大きな影響を与えることになります。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">母親の背景</h3>
              <p className="text-sm text-gray-600">
                浅田真央選手の母親がバレエダンサーへの夢を持っており、その夢を子どもたちに託す形で、3歳からバレエを習わせました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バレエの本質</h3>
              <p className="text-sm text-gray-600">
                バレエで習得したのは「美しさ」「しなやかさ」「柔軟性」。これらの要素が、後にスケートで技術と美しさの両立を実現させました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">スケートとの融合</h3>
              <p className="text-sm text-gray-600">
                5歳でスケートを始めても、バレエの基礎があることで、単なる「技術練習」ではなく「表現力のあるスケート」を目指すことができました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          5歳でスケートを始め、8歳で全国大会へ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          浅田真央選手がスケートを始めたのは5歳。バレエで培った「美しさ」を背景に、スケートでも急速に頭角を現しました。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pink-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">5歳</td>
                <td className="px-3 py-2 text-gray-600">フィギュアスケートを開始（門奈裕子コーチの名東フィギュアスケートクラブに入会）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">8歳</td>
                <td className="px-3 py-2 text-gray-600">全日本ノービス選手権Bクラスに初出場し6位入賞</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">9歳</td>
                <td className="px-3 py-2 text-gray-600">同大会で優勝</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
          <p className="font-bold text-pink-900 mb-2">8歳での全国大会出場の意義</p>
          <p className="text-sm text-pink-800">
            8歳で全日本ノービス選手権に初出場という早さは、同年代の選手の中でも非常に稀です。バレエで培った「身体感覚」が、スケートの習得を加速させ、わずか3年で全国大会レベルの実力を身につけたのです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          姉・浅田舞との切磋琢磨
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          浅田真央選手の成長を加速させたのは、もう一つの重要な存在です。それは姉の浅田舞選手です。二人の関係は、単なる「姉妹」ではなく「ライバル」でもありました。
        </p>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100 mb-6">
          <p className="font-bold text-pink-900 mb-2">姉との関係</p>
          <ul className="space-y-2">
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">同じコーチ:</span>
              <span>門奈裕子コーチのもとで、姉妹で一緒に指導を受けました</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">切磋琢磨:</span>
              <span>姉が上達するのを見て、真央も必死に努力し、やがて妹が姉を追い抜く</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">サポート:</span>
              <span>全国大会での経験を通じて、互いに成長できる環境が形成されました</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">競争と協力:</span>
              <span>競い合いながらも、家族として支え合う関係が世界レベルの選手を生み出しました</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          このような環境では、外部のコーチの指導だけでなく、家族との競争が最高のトレーニングになるのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          12歳での全日本選手権出場と年齢規定の壁
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          浅田真央選手は12歳で全日本選手権に初出場し、「天才少女」として大きな注目を集めました。しかし、この時期、彼女は大きな失望も経験します。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">12歳での全日本選手権出場</h3>
              <p className="text-sm text-gray-600">
                12歳で全日本選手権に出場し、「天才少女」として注目を集めました。同年代の選手との圧倒的な差が明らかになり、世界的な活躍の期待が高まりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">2006年トリノ五輪の悔しさ</h3>
              <p className="text-sm text-gray-600">
                2006年のトリノオリンピック時、浅田真央選手は14歳。オリンピック出場には15歳以上という年齢規定があり、わずか3ヶ月足りずに出場できませんでした。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">悔しさが原動力に</h3>
              <p className="text-sm text-gray-600">
                この年齢規定の壁が、後の彼女の人生を大きく変えました。2010年バンクーバー五輪で銀メダル、2014年ソチ五輪で銅メダルを獲得しました。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
          <p className="font-bold text-pink-900 mb-2">トリプルアクセルという挑戦</p>
          <p className="text-sm text-pink-800">
            浅田真央選手は女子フィギュアスケート界で初めてトリプルアクセル（3回転半ジャンプ）を習得した選手です。他の選手がダブルアクセルで満足する中、彼女はより難しい技に挑戦し続けました。この「更に高みへ」という姿勢が、世界レベルの選手を生み出したのです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          まとめ：早熟な才能より大切なこと
        </h2>
        <p className="text-gray-700 leading-relaxed">
          浅田真央選手の子供時代は「天才少女」として語られることが多いですが、その本質は「バレエで培った基礎」「姉との競争」「年齢規定の悔しさ」「より高い技に挑戦する姿勢」の組み合わせです。確かに5歳でスケートを始め、8歳で全国大会に出場した早期の活躍は印象的ですが、最も重要なのは「その後の継続」です。バレエの母の夢を受け継ぎ、姉と競い、年齢規定で悔しい思いをしながら、それでも上を目指し続けた。この「困難の中での継続」が、オリンピアンを生み出しました。親御さんへのメッセージは、「早期才能の発見より、その才能をいかに継続させるか」が重要だということです。浅田真央選手も、最初から「オリンピアンになる」と決まっていたわけではなく、親と姉の支援の中で、一歩一歩成長させていったのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
