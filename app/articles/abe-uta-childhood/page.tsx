import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '阿部詩の子供時代|兄・一二三と共に歩んだ柔道一家の軌跡',
  description:
    '柔道女子52kg級で東京五輪金メダルを獲得した阿部詩選手の子供時代。兄・一二三と共に幼少期から柔道を始め、世界一になるまでの道のりを紹介。',
  openGraph: {
    title: '阿部詩の子供時代|兄・一二三と共に歩んだ柔道一家の軌跡',
    description:
      '柔道女子52kg級で東京五輪金メダルを獲得した阿部詩選手の子供時代。兄・一二三と共に幼少期から柔道を始め、世界一になるまでの道のりを紹介。',
    images: [{ url: '/images/articles/abe-uta-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/abe-uta-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/abe-uta-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '阿部詩の子供時代|兄・一二三と共に歩んだ柔道一家の軌跡',
    images: ['/images/articles/abe-uta-childhood.jpg'],
  },
};

export default function AbeUtaChildhoodPage() {
  return (
    <ArticleLayout
      title="阿部詩の子供時代|兄・一二三と共に歩んだ柔道一家の軌跡"
      heroImage="/images/articles/abe-uta-childhood.jpg"
      heroAlt="柔道を練習する女の子"
      publishDate="2025年4月"
      slug="abe-uta-childhood"
      description="柔道女子52kg級で東京五輪金メダルを獲得した阿部詩選手の子供時代。兄・一二三と共に幼少期から柔道を始め、世界一になるまでの道のりを紹介。"
      tags={['阿部詩', '柔道', '幼少期']}
      shareText="阿部詩選手が兄・一二三と一緒に幼少期から柔道を始めた話、知っていますか？ #阿部詩 #柔道"
      citations={['https://ja.wikipedia.org/wiki/%E9%98%BF%E9%83%A8%E8%A9%A9']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-fuchsia-500 rounded-full inline-block"></span>
          阿部詩の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          阿部詩選手は2000年7月14日、兵庫県神戸市で生まれました。東京五輪女子52kg級で金メダルを獲得し、兄・一二三選手と同日に金メダルという歴史的な快挙を成し遂げた選手です。その原点は、兄と同じように幼い頃から取り組んだ柔道にありました。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-fuchsia-50 rounded-2xl p-4 text-center border border-fuchsia-100">
            <p className="text-2xl font-black text-fuchsia-600">2000年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-fuchsia-50 rounded-2xl p-4 text-center border border-fuchsia-100">
            <p className="text-2xl font-black text-fuchsia-600">兵庫県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-fuchsia-50 rounded-2xl p-4 text-center border border-fuchsia-100">
            <p className="text-2xl font-black text-fuchsia-600">幼少期</p>
            <p className="text-xs text-gray-600 mt-1">柔道開始</p>
          </div>
        </div>

        <div className="bg-fuchsia-50 rounded-2xl p-5 border border-fuchsia-100 mb-6">
          <p className="font-bold text-fuchsia-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-fuchsia-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>2000年7月14日</span>
            </li>
            <li className="text-sm text-fuchsia-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>兵庫県神戸市</span>
            </li>
            <li className="text-sm text-fuchsia-800 flex gap-2">
              <span className="font-bold">兄:</span>
              <span>阿部一二三（同じく柔道選手）</span>
            </li>
            <li className="text-sm text-fuchsia-800 flex gap-2">
              <span className="font-bold">五輪金メダル:</span>
              <span>東京2020（女子52kg級）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-fuchsia-500 rounded-full inline-block"></span>
          兄の背中を追った幼少期
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          阿部詩選手が柔道を始めた大きな理由のひとつは、同年生まれの兄・一二三選手が柔道をしていたことです。「兄に負けたくない」「一緒にやりたい」という気持ちが、幼い詩選手を柔道の道へと導きました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-fuchsia-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">兄と同じ道を選ぶ</h3>
              <p className="text-sm text-gray-600">
                一二三選手が柔道をしているのを見て、詩選手も自然に柔道の世界に入りました。「お兄ちゃんと同じことをしたい」という純粋な動機は、最も強い内発的動機のひとつです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-fuchsia-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">明るく積極的な練習姿勢</h3>
              <p className="text-sm text-gray-600">
                詩選手の幼少期の練習スタイルは、明るく積極的なものでした。柔道の厳しさの中でも笑顔を忘れない姿勢は、後の試合でも一貫した強みになりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-fuchsia-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">早期から頭角を現す</h3>
              <p className="text-sm text-gray-600">
                小学生の頃から全国大会で優秀な成績を収め、女子柔道の新星として注目を集めました。高校・大学でも世界レベルの選手として急成長しました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-fuchsia-500 rounded-full inline-block"></span>
          逆境でも感情をさらけ出す強さ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          阿部詩選手の大きな特徴は、勝っても負けても感情を素直に表現することです。東京五輪での歓喜の涙、パリ五輪での悔し涙——どちらも、長年のスポーツへの真剣な向き合いから生まれるものです。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-fuchsia-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">幼少期</td>
                <td className="px-3 py-2 text-gray-600">兄・一二三と共に柔道を始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学生</td>
                <td className="px-3 py-2 text-gray-600">全国大会で入賞、将来有望な選手として注目される</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">高校・大学</td>
                <td className="px-3 py-2 text-gray-600">世界大会でメダルを重ねる</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2021年</td>
                <td className="px-3 py-2 text-gray-600">東京五輪金メダル（兄と同日）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-fuchsia-50 rounded-2xl p-5 border border-fuchsia-100">
          <p className="font-bold text-fuchsia-900 mb-2">感情表現できる選手が強い</p>
          <p className="text-sm text-fuchsia-800">
            詩選手が感情をさらけ出せるのは、幼少期から柔道への真剣な思いを積み重ねてきたからです。「スポーツへの本気の向き合い方」は、幼い頃から作られます。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-fuchsia-500 rounded-full inline-block"></span>
          まとめ：兄妹で同じ夢を追う力
        </h2>
        <p className="text-gray-700 leading-relaxed">
          阿部詩選手の幼少期が教えてくれることは、「兄弟姉妹が同じスポーツをすることの力」です。兄・一二三選手という先輩が身近にいることで、詩選手は「自分もできる」という確信を持ちながら練習できました。親が子どもにスポーツをさせるとき、兄弟姉妹を同じ競技に誘うことは、孤独な練習を防ぎ、家族全体でスポーツを楽しむ文化を作る最善の方法のひとつです。阿部兄妹の同日金メダルは、そのような環境が生み出した奇跡でした。
        </p>
      </div>
    </ArticleLayout>
  );
}
