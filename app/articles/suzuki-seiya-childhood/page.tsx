import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '鈴木誠也の子供時代|東京下町から広島・MLBへ駆け上がった野球人生',
  description:
    '広島カープのフランチャイズプレーヤーとしてMLBシカゴ・カブスへ渡った鈴木誠也選手の子供時代。東京で野球を始めた幼少期からスーパースターへの道のりを紹介。',
  openGraph: {
    title: '鈴木誠也の子供時代|東京下町から広島・MLBへ駆け上がった野球人生',
    description:
      '広島カープのフランチャイズプレーヤーとしてMLBシカゴ・カブスへ渡った鈴木誠也選手の子供時代。東京で野球を始めた幼少期からスーパースターへの道のりを紹介。',
    images: [{ url: '/images/articles/suzuki-seiya-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/suzuki-seiya-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/suzuki-seiya-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '鈴木誠也の子供時代|東京下町から広島・MLBへ駆け上がった野球人生',
    images: ['/images/articles/suzuki-seiya-childhood.jpg'],
  },
};

export default function SuzukiSeiyaChildhoodPage() {
  return (
    <ArticleLayout
      title="鈴木誠也の子供時代|東京下町から広島・MLBへ駆け上がった野球人生"
      heroImage="/images/articles/suzuki-seiya-childhood.jpg"
      heroAlt="バッティング練習をする子ども"
      publishDate="2025年4月"
      slug="suzuki-seiya-childhood"
      description="広島カープのフランチャイズプレーヤーとしてMLBシカゴ・カブスへ渡った鈴木誠也選手の子供時代。東京で野球を始めた幼少期からスーパースターへの道のりを紹介。"
      tags={['鈴木誠也', '野球', '幼少期']}
      shareText="鈴木誠也選手が東京で野球を始め、広島カープを経てMLBカブスへ渡った話を紹介 #鈴木誠也 #野球"
      citations={['https://ja.wikipedia.org/wiki/%E9%88%B4%E6%9C%A8%E8%AA%A0%E4%B9%9F_(%E5%A4%96%E9%87%8E%E6%89%8B)']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-cyan-500 rounded-full inline-block"></span>
          鈴木誠也の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          鈴木誠也選手は1994年8月18日、東京都荒川区で生まれました。広島東洋カープで打撃タイトルを複数回獲得した後、2022年にMLBシカゴ・カブスへ移籍。攻守走すべてに優れた日本を代表する外野手です。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-cyan-50 rounded-2xl p-4 text-center border border-cyan-100">
            <p className="text-2xl font-black text-cyan-600">1994年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-cyan-50 rounded-2xl p-4 text-center border border-cyan-100">
            <p className="text-2xl font-black text-cyan-600">東京都</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-cyan-50 rounded-2xl p-4 text-center border border-cyan-100">
            <p className="text-2xl font-black text-cyan-600">MLB</p>
            <p className="text-xs text-gray-600 mt-1">シカゴ・カブス</p>
          </div>
        </div>

        <div className="bg-cyan-50 rounded-2xl p-5 border border-cyan-100 mb-6">
          <p className="font-bold text-cyan-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-cyan-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1994年8月18日</span>
            </li>
            <li className="text-sm text-cyan-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>東京都荒川区</span>
            </li>
            <li className="text-sm text-cyan-800 flex gap-2">
              <span className="font-bold">NPB:</span>
              <span>広島東洋カープ（2013〜2021年）</span>
            </li>
            <li className="text-sm text-cyan-800 flex gap-2">
              <span className="font-bold">MLB:</span>
              <span>シカゴ・カブス（2022年〜）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-cyan-500 rounded-full inline-block"></span>
          東京・荒川区で磨いた野球の原点
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          鈴木誠也選手は東京都荒川区という下町で育ち、少年野球チームで野球を始めました。地元の仲間たちと切磋琢磨する中で、野球への情熱と基礎技術を培っていきました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">少年野球から磨いた打撃センス</h3>
              <p className="text-sm text-gray-600">
                幼少期から打撃への高いセンスを発揮していた鈴木選手。ボールをよく見て、コンパクトかつ強くはじき返す技術は、少年野球時代から身についた感覚です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">二松学舎大付属高校での成長</h3>
              <p className="text-sm text-gray-600">
                東京の強豪・二松学舎大付属高校に進み、甲子園に出場。高校時代に守備と走塁も磨き、攻守走すべてに優れた選手としての基盤を築きました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">広島でのプロ修行と覚醒</h3>
              <p className="text-sm text-gray-600">
                2013年ドラフトで広島カープに入団後、プロの打撃技術を徹底的に学びました。2016年からレギュラーとして定着し、カープの3連覇（2016〜2018年）を支える中核選手に成長しました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-cyan-500 rounded-full inline-block"></span>
          打撃タイトルからMLBへの挑戦
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          鈴木誠也選手は広島カープで打撃タイトルを複数回獲得し、WBC日本代表としても活躍。2022年にはMLBシカゴ・カブスへ移籍し、世界最高峰の舞台に挑戦しています。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-cyan-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学生</td>
                <td className="px-3 py-2 text-gray-600">東京・荒川区で少年野球を始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">高校</td>
                <td className="px-3 py-2 text-gray-600">二松学舎大付属高校で甲子園出場</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2014年</td>
                <td className="px-3 py-2 text-gray-600">広島カープ入団（ドラフト2位）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2017年</td>
                <td className="px-3 py-2 text-gray-600">WBC日本代表として活躍</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2022年</td>
                <td className="px-3 py-2 text-gray-600">MLBシカゴ・カブスへ移籍</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-cyan-50 rounded-2xl p-5 border border-cyan-100">
          <p className="font-bold text-cyan-900 mb-2">攻守走三拍子揃った日本人外野手</p>
          <p className="text-sm text-cyan-800">
            鈴木選手の強みは打撃だけでなく、外野守備の広さと強肩、そして走塁センスにあります。「野球は総合力」という考えを幼少期から自然に体現してきた姿勢が、MLBでも通用する選手を生みました。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-cyan-500 rounded-full inline-block"></span>
          まとめ：下町育ちの野球少年がMLBへ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          鈴木誠也選手の幼少期が教えてくれることは、「野球は打つだけでなく、守って走れる総合力が大切」ということです。東京の下町で少年野球から始まり、打撃・守備・走塁のすべてを磨き続けた結果が、MLBという世界最高峰の舞台への切符です。お子さんに野球をさせる際は、打撃だけに偏らず、守備や走塁も含めた「野球の楽しさ全体」を体験させることが、長期的な成長につながります。鈴木選手の活躍は、総合的な野球力を幼少期から積み重ねた成果です。
        </p>
      </div>
    </ArticleLayout>
  );
}
