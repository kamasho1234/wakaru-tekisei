import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '張本智和の子供時代|卓球一家に生まれた神童が世界を驚かせるまで',
  description:
    '卓球日本代表の張本智和選手の子供時代。両親が元中国代表の卓球選手という環境で2歳から卓球を始め、10代で世界記録を次々と塗り替えた神童の軌跡を紹介。',
  openGraph: {
    title: '張本智和の子供時代|卓球一家に生まれた神童が世界を驚かせるまで',
    description:
      '卓球日本代表の張本智和選手の子供時代。両親が元中国代表の卓球選手という環境で2歳から卓球を始め、10代で世界記録を次々と塗り替えた神童の軌跡を紹介。',
    images: [{ url: '/images/articles/harimoto-tomokazu-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/harimoto-tomokazu-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/harimoto-tomokazu-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '張本智和の子供時代|卓球一家に生まれた神童が世界を驚かせるまで',
    images: ['/images/articles/harimoto-tomokazu-childhood.jpg'],
  },
};

export default function HarimotoTomokazuChildhoodPage() {
  return (
    <ArticleLayout
      title="張本智和の子供時代|卓球一家に生まれた神童が世界を驚かせるまで"
      heroImage="/images/articles/harimoto-tomokazu-childhood.jpg"
      heroAlt="卓球を練習する子ども"
      publishDate="2025年4月"
      slug="harimoto-tomokazu-childhood"
      description="卓球日本代表の張本智和選手の子供時代。両親が元中国代表の卓球選手という環境で2歳から卓球を始め、10代で世界記録を次々と塗り替えた神童の軌跡を紹介。"
      tags={['張本智和', '卓球', '幼少期']}
      shareText="張本智和選手が2歳から卓球を始め、10代で世界記録を塗り替えた話を知っていますか？ #張本智和 #卓球"
      citations={['https://ja.wikipedia.org/wiki/%E5%BC%B5%E6%9C%AC%E6%99%BA%E5%92%8C']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          張本智和の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          張本智和選手は2003年6月27日、宮城県仙台市で生まれました。父・張本宇氏（中国出身の元卓球選手）、母・張凌氏（中国出身の元卓球選手）という「世界最強クラスの卓球一家」に生まれた環境が、世界を驚かせる神童を生み出しました。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">2003年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">宮城県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">2歳</p>
            <p className="text-xs text-gray-600 mt-1">卓球開始</p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>2003年6月27日</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>宮城県仙台市</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">父:</span>
              <span>張本宇（元卓球選手・中国出身）</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">母:</span>
              <span>張凌（元卓球選手・中国出身）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          2歳でラケットを持った卓球の申し子
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          張本智和選手が卓球を始めたのは2歳です。これはほぼ「言葉を覚えると同時に卓球を覚えた」という年齢です。父と母の両方が世界レベルの卓球選手だったため、生まれた瞬間から卓球が「空気のような存在」でした。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">両親から受け継いだ遺伝と環境</h3>
              <p className="text-sm text-gray-600">
                父・張本宇さんは中国の強豪選手として活躍後、日本に帰化。母・張凌さんも元選手という環境で生まれた張本選手は、遺伝的な才能と最高の指導環境を同時に受け取りました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">世界最高水準の家庭内指導</h3>
              <p className="text-sm text-gray-600">
                一般的な子どもがスポーツ教室で習う内容を、張本選手は世界レベルの指導者（両親）から日常的に学びました。この「学習密度の差」が、圧倒的な早期成長を生み出しました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">強烈な勝負根性</h3>
              <p className="text-sm text-gray-600">
                幼い頃から「勝ちたい」という強烈な勝負根性を持っていた張本選手。試合で負けると悔し涙を流すほどの負けず嫌いの性格が、急速な成長の原動力になりました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          10代で塗り替えた世界記録の数々
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          張本智和選手は10代のうちから世界の卓球界に衝撃を与え続けました。その記録の多くが「歴代最年少」というものです。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2歳</td>
                <td className="px-3 py-2 text-gray-600">卓球を始める（両親の指導）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学生</td>
                <td className="px-3 py-2 text-gray-600">全国大会で圧倒的な強さを見せる</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">13歳（2016年）</td>
                <td className="px-3 py-2 text-gray-600">T2ダイヤモンド大会で歴代最年少優勝</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">14歳（2017年）</td>
                <td className="px-3 py-2 text-gray-600">世界卓球でメダル（歴代最年少クラス）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">パリ2024</td>
                <td className="px-3 py-2 text-gray-600">パリ五輪出場（混合ダブルス・男子団体）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">「神童」が生まれた理由</p>
          <p className="text-sm text-amber-800">
            張本選手が「神童」と呼ばれたのは、遺伝的才能×世界最高レベルの環境×2歳からの早期開始という、3つの条件が完璧に重なったからです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          まとめ：才能・環境・開始時期の三位一体
        </h2>
        <p className="text-gray-700 leading-relaxed">
          張本智和選手の幼少期は、スポーツ科学的な観点から見ても非常に興味深いケースです。遺伝的素質（両親の才能）、環境（世界トップ水準の指導）、開始時期（2歳という超早期）という3つの要素がすべて最高のタイミングで重なりました。もちろん、すべての親が元世界レベルの選手というわけにはいきません。しかし「できるだけ質の高い指導者のもとで、できるだけ早く始める」という方向性は、どの家庭でも参考にできる原則です。張本選手の成功は「遺伝だけ」でも「環境だけ」でもなく、両方が重なった結果なのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
