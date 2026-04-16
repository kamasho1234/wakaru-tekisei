import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '堀米雄斗の子供時代｜父の「こっそりスケボー」から始まった五輪2連覇への道',
  description:
    'スケートボード五輪2連覇の堀米雄斗選手の子供時代。スケボーを引退した父がこっそり息子に教えたのがすべての始まりでした。',
  openGraph: {
    title: '堀米雄斗の子供時代｜父の「こっそりスケボー」から始まった五輪2連覇への道',
    description:
      'スケートボード五輪2連覇の堀米雄斗選手の子供時代。スケボーを引退した父がこっそり息子に教えたのがすべての始まりでした。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/horigome-yuto-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '堀米雄斗の子供時代｜父の「こっそりスケボー」から始まった五輪2連覇への道',
    images: ['/og-image.png'],
  },
};

export default function HorigomeYutoChildhoodPage() {
  return (
    <ArticleLayout
      title="堀米雄斗の子供時代｜父の「こっそりスケボー」から始まった五輪2連覇への道"
      heroImage="/images/kids-running.jpg"
      heroAlt="スケートボードを楽しむ子ども"
      publishDate="2025年4月"
      tags={['堀米雄斗', 'スケートボード', '幼少期']}
      shareText="堀米雄斗選手の父がスケボーをこっそり息子に教えた話。五輪2連覇の原点。 #堀米雄斗 #スケートボード"
      citations={['https://ja.wikipedia.org/wiki/%E5%A0%80%E7%B1%B3%E9%9B%84%E6%96%97']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          堀米雄斗の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          堀米雄斗選手は1999年1月7日に東京都江東区で生まれました。スケートボード界の絶対的なエース、2連続オリンピック金メダリストとして、世界中の賞賛を集める彼の成功の源は、父親との「秘密の練習」にありました。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
            <p className="text-2xl font-black text-yellow-600">5〜6歳</p>
            <p className="text-xs text-gray-600 mt-1">スケボー開始年齢</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
            <p className="text-2xl font-black text-yellow-600">2021年</p>
            <p className="text-xs text-gray-600 mt-1">東京五輪金メダル</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
            <p className="text-2xl font-black text-yellow-600">2024年</p>
            <p className="text-xs text-gray-600 mt-1">パリ五輪金メダル</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
            <p className="text-2xl font-black text-yellow-600">2連覇</p>
            <p className="text-xs text-gray-600 mt-1">スケボー五輪</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100 mb-6">
          <p className="font-bold text-yellow-900 mb-2">基本情報</p>
          <ul className="space-y-2">
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>東京都江東区</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">出身小学校:</span>
              <span>江東区立東砂小学校</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">出身中学校:</span>
              <span>江東区立砂町中学校</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">父親:</span>
              <span>亮太（タクシー運転手・元スケートボード選手）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          父の「こっそりスケボー」から始まった物語
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          堀米雄斗選手のスケートボード人生は、極めて人間らしい、そして映画的なストーリーで始まりました。それが「父の約束破り」でもあり、「愛する息子への最大のプレゼント」でもあったのです。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">「スケボーは辞める」という約束</h3>
              <p className="text-sm text-gray-600">
                堀米雄斗選手の父親・亮太さんは、かつてスケートボード選手として活躍していました。しかし、結婚時に妻に「スケボーは辞める」と約束していました。それは、妻の人生計画に配慮し、家族を優先するという決意でした。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">「子守」という名目の公園通い</h3>
              <p className="text-sm text-gray-600">
                しかし、父親は子守という名目で、大島小松川公園に幼い雄斗を連れていきました。そこで、父親はスケートボードをし、息子もボードに乗るようになりました。妻への約束を守りつつ、愛する息子にスケボーの世界を教えるという、巧妙かつ愛情あふれる方法だったのです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">父の後ろ姿が最高の教科書</h3>
              <p className="text-sm text-gray-600">
                父親がスケートボードで動く姿を毎日見ることで、息子の脳には最適なお手本がインプットされ続けました。これは、言葉による指導よりも、視覚による学習が優れていることを示す、実例なのです。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100">
          <p className="font-bold text-yellow-900 mb-2">この秘密の背景にある家族関係</p>
          <p className="text-sm text-yellow-800 mb-2">
            妻への約束を「建前」ではなく「本気」で守ろうとした父親。しかし、息子への愛情も、自分の「スケボーへの情熱」も捨てられない。その矛盾を、「子守という名目の公園通い」という知恵で解決した。これは単なる「ウソ」ではなく、家族の絆を維持しながら、息子の才能を開花させるための、父親の愛情の表現だったのです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          5歳から乗り始め、小学生でトップ選手に
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          堀米雄斗選手は5〜6歳の幼少期からスケートボードに乗り始め、小学生の時期に驚異的な成長を遂げました。同年代の子どもたちと比べて、圧倒的な技術差が生まれていったのです。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-yellow-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">段階</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">成果</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">5〜6歳</td>
                <td className="px-3 py-2 text-gray-600">基礎技術の習得期</td>
                <td className="px-3 py-2 text-gray-600">父との練習で基本動作を習得</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学低学年</td>
                <td className="px-3 py-2 text-gray-600">国内大会デビュー</td>
                <td className="px-3 py-2 text-gray-600">地方大会で上位入賞</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学中学年</td>
                <td className="px-3 py-2 text-gray-600">全国大会での活躍</td>
                <td className="px-3 py-2 text-gray-600">同年代でトップクラスの成績</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学高学年</td>
                <td className="px-3 py-2 text-gray-606">国際大会参加</td>
                <td className="px-3 py-2 text-gray-600">海外の強豪選手との対戦経験</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100">
          <p className="font-bold text-yellow-900 mb-3">小学生時代に形成されたもの</p>
          <ul className="space-y-2">
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">技術的な基礎:</span>
              <span>父親の指導で確立された正確なフォームと反応速度</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">精神的な強さ:</span>
              <span>国内外の大会経験で培われた、プレッシャーへの耐性</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">国際的な視点:</span>
              <span>早期の海外大会参加で得た、世界水準への理解</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">継続する習慣:</span>
              <span>「楽しさ」を軸に、何年も同じスポーツを続ける力</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          国内から世界へ：19歳での日本人初優勝
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中学・高校の年代を経て、堀米雄斗選手は国際舞台での活躍を加速させていきました。特に2018年のロンドン・ストリート・リーグでの優勝は、彼の人生を大きく変えるターニングポイントとなったのです。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">国内での活躍</h3>
              <p className="text-sm text-gray-600">
                中学〜高校時代の日本国内での実績が、世界的な認知へのステップとなりました。毎年のように全国大会で優勝し、日本スケートボード界の期待の星として認識されていました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">2018年 ロンドン・ストリート・リーグ優勝</h3>
              <p className="text-sm text-gray-600">
                19歳で、世界的に最高峰のスケートボード大会であるロンドン・ストリート・リーグで日本人として初めて優勝。この優勝により、彼は世界舞台でのスター選手としての地位を確立しました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">世界ランキングの上昇</h3>
              <p className="text-sm text-gray-600">
                ロンドンでの優勝後、世界ランキングが急速に上昇。スケートボード界の最高峰の地位へと着実に進んでいきました。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100">
          <p className="font-bold text-yellow-900 mb-2">日本人初優勝の意味</p>
          <p className="text-sm text-yellow-800">
            ロンドン・ストリート・リーグでの優勝は、単なる大会での成績ではなく、スケートボード文化における「日本代表」としての象徴的な勝利でした。世界の強豪たちが集う舞台で、東京生まれの一人の若き日本人が、最高の技術と精神力を見せたのです。この優勝が、後の五輪での活躍への確信を与えました。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          東京・パリと五輪2連覇達成
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          堀米雄斗選手の最高の成就は、2021年東京オリンピックと2024年パリオリンピックでの2連続金メダル獲得です。この偉業は、幼少期からの一貫した努力と、父親からの教えが遺産として結実した瞬間でした。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
            <p className="font-bold text-yellow-900 mb-2">東京オリンピック2021</p>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>- 金メダル獲得</li>
              <li>- 自国での初五輪</li>
              <li>- 日本スケボー界の最高栄誉</li>
              <li>- オリンピック正式種目化初年での金</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
            <p className="font-bold text-yellow-900 mb-2">パリオリンピック2024</p>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>- 金メダル獲得（2連覇）</li>
              <li>- スケボー史上初の2連覇</li>
              <li>- 世界的なスター選手として確立</li>
              <li>- 次世代への最高の model 提示</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100">
          <p className="font-bold text-yellow-900 mb-3">五輪2連覇を支えた基礎</p>
          <ul className="space-y-2">
            <li className="text-sm text-yellow-800">
              <span className="font-bold">幼少期からの継続:</span>
              <span>5歳からの15年以上の経験が、オリンピック舞台での落ち着きを生み出した</span>
            </li>
            <li className="text-sm text-yellow-800">
              <span className="font-bold">父親のDNA:</span>
              <span>元スケートボード選手だった父親の技術知識と経験が、息子に引き継がれた</span>
            </li>
            <li className="text-sm text-yellow-800">
              <span className="font-bold">愛情に基づく教育:</span>
              <span>強制ではなく、父親の後ろ姿を見ながら学んだからこその「喜び」</span>
            </li>
            <li className="text-sm text-yellow-800">
              <span className="font-bold">世界経験:</span>
              <span>小学生からの国際大会経験が、本番での自信につながった</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          まとめ：「親の背中」が子どもの可能性を開く
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          堀米雄斗選手の成功の原点は、「父親の約束破り」から始まりました。しかし、それは決して不誠実な行動ではなく、息子を愛する父親が、妻への約束と、愛する息子への夢の両立を求めた、人間らしい葛藤の表現だったのです。
        </p>

        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100">
          <p className="font-bold text-yellow-900 mb-3">親が学ぶべき4つのポイント</p>
          <ul className="space-y-2">
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">1. 親の「本気」は子どもに伝わる</span>
              <span>父親がスケートボードを本当に愛していたからこそ、息子も同じ道を歩んだ</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">2. 言葉より「後ろ姿」が最高の教育</span>
              <span>指導者として教えるのではなく、親がプレーする姿を見せることの威力</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">3. 親の夢と子どもの意思のバランス</span>
              <span>自分の情熱を押し付けるのではなく、子ども自身のやりたいことを尊重する</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">4. 幼少期の経験が人生を決める</span>
              <span>5歳からの経験が、20年後のオリンピック金メダルに直結した</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mt-4">
          お子さんがスポーツに興味を持ったとき、親が最も与えられるもの、それはコーチの指導でも、充実した設備でもなく、「親としてそのスポーツを愛する姿」なのです。堀米雄斗選手が五輪で2連覇を成し遂げたのは、父親が約束を破ってまで息子にスケートボードを教えたからではなく、父親がスケートボードを本当に愛していたから。その愛情が息子に受け継がれ、やがて世界の頂点に達したのです。親の背中は、最高の教科書です。
        </p>
      </div>
    </ArticleLayout>
  );
}
