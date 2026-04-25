import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '久保建英の子供時代|10歳でバルセロナに渡った天才少年の原点',
  description:
  'ラ・リーガ・レアル・ソシエダで活躍する久保建英選手の子供時代。10歳でFCバルセロナの下部組織に入団した天才少年が、世界最高峰のサッカーに触れた幼少期を紹介。',
  openGraph: {
    title: '久保建英の子供時代|10歳でバルセロナに渡った天才少年の原点',
    description:
    'ラ・リーガ・レアル・ソシエダで活躍する久保建英選手の子供時代。10歳でFCバルセロナの下部組織に入団した天才少年が、世界最高峰のサッカーに触れた幼少期を紹介。',
    images: [{ url: '/images/articles/kubo-takefusa-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/kubo-takefusa-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/kubo-takefusa-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '久保建英の子供時代|10歳でバルセロナに渡った天才少年の原点',
    images: ['/images/articles/kubo-takefusa-childhood.jpg'],
  },
};

export default function KuboTakefusaChildhoodPage() {
  return (
    <ArticleLayout
      title="久保建英の子供時代|10歳でバルセロナに渡った天才少年の原点"
      heroImage="/images/articles/kubo-takefusa-childhood.jpg"
      heroAlt="サッカーを練習する子ども"
      publishDate="2025年4月"
      slug="kubo-takefusa-childhood"
      description="ラ・リーガ・レアル・ソシエダで活躍する久保建英選手の子供時代。10歳でFCバルセロナの下部組織に入団した天才少年が、世界最高峰のサッカーに触れた幼少期を紹介。"
      tags={['久保建英', 'サッカー', '幼少期']}
      shareText="久保建英選手が10歳でバルセロナの下部組織に入り、ラ・リーガで活躍するまでの話を紹介 #久保建英 #サッカー"
      citations={['https://ja.wikipedia.org/wiki/%E4%B9%85%E4%BF%9D%E5%BB%BA%E8%8B%B1']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          久保建英の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          久保建英選手は2001年6月4日、神奈川県川崎市で生まれました。10歳の時にFCバルセロナの下部組織「ラ・マシア」に入団した天才少年で、レアル・マドリードやビジャレアルを経て、現在はレアル・ソシエダ（ラ・リーガ）の主力として活躍しています。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-indigo-50 rounded-2xl p-4 text-center border border-indigo-100">
            <p className="text-2xl font-black text-indigo-600">2001年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-indigo-50 rounded-2xl p-4 text-center border border-indigo-100">
            <p className="text-2xl font-black text-indigo-600">10歳</p>
            <p className="text-xs text-gray-600 mt-1">バルサ入団</p>
          </div>
          <div className="bg-indigo-50 rounded-2xl p-4 text-center border border-indigo-100">
            <p className="text-2xl font-black text-indigo-600">La Liga</p>
            <p className="text-xs text-gray-600 mt-1">活躍リーグ</p>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100 mb-6">
          <p className="font-bold text-indigo-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>2001年6月4日</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>神奈川県川崎市</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">10歳時:</span>
              <span>FCバルセロナ下部組織入団</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">現所属:</span>
              <span>レアル・ソシエダ（ラ・リーガ）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          10歳でバルセロナへ—世界が認めた天才少年
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          久保建英選手は幼少期から際立った才能を見せ、10歳でFCバルセロナの下部組織「ラ・マシア」に入団しました。世界最高峰の育成機関で日本人選手として認められたことは、彼の才能の証明です。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">幼少期から際立った天才的ドリブル</h3>
              <p className="text-sm text-gray-600">
                久保選手は幼い頃からドリブルと技術の高さで他の子どもたちと一線を画していました。バルセロナのスカウトが10歳の彼に目を留めたのは、その圧倒的な技術センスがあったからです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ラ・マシアで磨かれたポジショニング</h3>
              <p className="text-sm text-gray-600">
                バルセロナの育成機関「ラ・マシア」では、個人技だけでなく戦術的なポジショニングと判断スピードを徹底的に叩き込まれます。この経験が久保選手の「考えるサッカー」の基礎を作りました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">帰国後も衰えなかった世界標準</h3>
              <p className="text-sm text-gray-600">
                FIFA規定で一時帰国を余儀なくされた後も、FC東京などで世界水準のプレーを継続。その後レアル・マドリードへの移籍を果たし、ラ・リーガで日本人としてトップレベルの活躍を続けています。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          スペインを舞台にした日本の至宝
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-indigo-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">10歳（2011年）</td>
                <td className="px-3 py-2 text-gray-600">FCバルセロナ下部組織入団</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2015年</td>
                <td className="px-3 py-2 text-gray-600">FIFA規定により帰国、FC東京U-18へ</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2019年</td>
                <td className="px-3 py-2 text-gray-600">レアル・マドリード移籍、ラ・リーガへ</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2023年〜</td>
                <td className="px-3 py-2 text-gray-600">レアル・ソシエダで主力として活躍</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100">
          <p className="font-bold text-indigo-900 mb-2">世界最高峰の育成を経験した唯一無二の選手</p>
          <p className="text-sm text-indigo-800">
            日本人選手でバルセロナの下部組織を経験した選手は久保選手だけです。この経験が彼をラ・リーガで輝く「日本の至宝」にしました。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          まとめ：世界最高峰の環境に早期に飛び込む勇気
        </h2>
        <p className="text-gray-700 leading-relaxed">
          久保建英選手の幼少期が教えてくれることは、「才能があるなら、できるだけ早く世界最高峰の環境に飛び込むことが最大の成長を生む」ということです。10歳でバルセロナという世界最高の育成環境に入ったことが、彼を現在のラ・リーガのトップ選手にしました。お子さんに圧倒的な才能が見え始めたら、より高いレベルの環境に積極的に挑戦させることを恐れないでください。その勇気ある一歩が、世界への扉を開きます。
        </p>
      </div>
    </ArticleLayout>
  );
}
