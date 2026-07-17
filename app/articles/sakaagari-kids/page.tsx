import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '逆上がりができないのは遅れている？｜学習指導要領で確認できること',
  description:
    '逆上がりはいつから学習する技？できない子が珍しくない理由を、文部科学省の学習指導要領原典から確認。文科省が公式に示す「苦手な児童への段階的な手立て」を紹介します。',
  openGraph: {
    title: '逆上がりができないのは遅れている？｜学習指導要領で確認できること',
    description:
      '逆上がりの習得段階と、苦手な児童への公式な配慮方法を学習指導要領から解説。「できない子がいることを前提とした学習設計」を示します。',
    images: [{ url: '/images/articles/sakaagari-kids.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/sakaagari-kids',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/sakaagari-kids',
  },
  twitter: {
    card: 'summary_large_image',
    title: '逆上がりができないのは遅れている？｜学習指導要領で確認できること',
    images: ['/images/articles/sakaagari-kids.jpg'],
  },
};

export default function SakaagariKidsPage() {
  return (
    <ArticleLayout
      title="逆上がりができないのは遅れている？｜学習指導要領で確認できること"
      heroImage="/images/articles/sakaagari-kids.jpg"
      heroAlt="逆上がりに取り組む小学生"
      publishDate="2026年7月"
      slug="sakaagari-kids"
      description="逆上がりはいつから学習する技？できない子が珍しくない理由を、文部科学省の学習指導要領原典から確認。文科省が公式に示す「苦手な児童への段階的な手立て」を紹介します。"
      tags={['逆上がり', '学習指導要領', '器械運動', '個人差']}
      shareText="逆上がりができない子は珍しくない。文科省の学習指導要領から、苦手な児童への段階的な指導方法を紹介しています。 #子育て #体育"
      citations={[
        '文部科学省「小学校学習指導要領（平成29年告示）解説 体育編」（令和6年9月一部改訂） https://www.mext.go.jp/content/20240918-mxt_kyoiku01-100002607.pdf',
        '同 学習指導要領の掲載ページ https://www.mext.go.jp/a_menu/shotou/new-cs/1387014.htm',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          「うちの子、逆上がりができないんです」という相談は、多くの保護者から聞かれます。学習が遅れているのではないか、他の子より劣っているのではないかと心配になるのは自然なことです。しかし、文部科学省の学習指導要領を見ると、その心配は根拠のないものであることが分かります。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、文部科学省が公開している「小学校学習指導要領（平成29年告示）解説 体育編」から、逆上がりの学習段階と、苦手な児童への対応方法を確認します。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mt-6">
          <p className="font-bold text-blue-900 mb-2">このページについて</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">情報源:</span>
              <span>文部科学省の学習指導要領原典（PDF）から直接引用</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">学習段階:</span>
              <span>中学年（第3・4学年）から始まる</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">重要:</span>
              <span>できない子がいることを前提とした、公式な段階的指導法が用意されている</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          逆上がりは中学年から登場する技
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          逆上がりはいつの学年で習うのでしょうか。学習指導要領には、器械運動の学習が学年別ではなく「学年段階」で区切られています。小学校では「低学年（1～2年）」「中学年（3～4年）」「高学年（5～6年）」に分けられているため、「◯年生ではこれを習う」という決まりはありません。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-800 mb-3">中学年（第3・4学年）での鉄棒運動</p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            「補助逆上がり（発展技：逆上がり）」が鉄棒運動の例示として挙げられています。
          </p>
          <p className="text-sm text-gray-600 italic">
            「補助や補助具を利用した易しい条件の下で，足の振り上げとともに腕を曲げ上体を後方へ倒し，手首を返して鉄棒に上がること。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: 文部科学省「小学校学習指導要領解説 体育編」p.87</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          注目すべきは「補助逆上がり」が例示されているという点です。つまり、いきなり逆上がりをするのではなく、補助がある形で段階的に学習するのが、文部科学省の教育設計です。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="font-bold text-gray-800 mb-3">高学年（第5・6学年）での鉄棒運動</p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            「逆上がり」が発展技として例示されます。
          </p>
          <p className="text-sm text-gray-600 italic">
            「足の振り上げとともに腕を曲げ，上体を後方へ倒し手首を返して鉄棒に上がること。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: 同 p.126</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          「できない子がいること」が公式に想定されている
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          学習指導要領の最も重要な部分は、「苦手な児童への配慮」が明記されているということです。つまり、文部科学省自身が「全ての子どもが同じペースで習得できるわけではない」と前提として、段階的な手立てを用意しているのです。
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3 mt-6">中学年での対応方法</h3>
        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            「補助逆上がりが苦手な児童には，ダンゴムシや足抜き回り，ふとん干しから支持の姿勢を繰り返すなどの運動遊びに取り組み，体を鉄棒に引きつけたり，回転したり，腹支持から起き上がる動きが身に付くようにするなどの配慮をする。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: 同 p.87</p>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3">高学年での対応方法</h3>
        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            「逆上がりが苦手な児童には， 体を鉄棒に引きつける運動に取り組んだり，補助や補助具を利用して足を振り上げながら後方回転をしたりして，体を上昇させながら鉄棒に引きつけ回転する動きが身に付くようにするなどの配慮をする。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: 同 p.127</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-3">文科省が示す練習の入口</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800">・ダンゴムシ（足を抱えて丸くなる）</li>
            <li className="text-sm text-blue-800">・足抜き回り</li>
            <li className="text-sm text-blue-800">・ふとん干しから支持の姿勢</li>
          </ul>
          <p className="text-xs text-gray-600 mt-3">これらの運動を通じて、「体を鉄棒に引きつける」「回転する」「腹支持から起き上がる」という3つの動きを段階的に習得します。</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          補助具を使ってもいい
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「補助や補助具を利用して」という表現が、学習指導要領に明記されています。これは、いわゆる「ホッピング君」などの補助具を使って練習することが、公式に認められているという意味です。
        </p>
        <p className="text-gray-700 leading-relaxed">
          逆上がりが苦手な子に対して、段階的な補助や補助具を使うことは、教育の遅れを示すものではなく、学習指導要領で想定された、むしろ標準的な指導方法なのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          「◯%の小学生が逆上がりできない」という数字について
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ネットで「◯%の小学生が逆上がりできない」という数値を見かけることがあります。しかし、この数字には注意が必要です。スポーツ庁の「全国体力・運動能力、運動習慣等調査」は、握力・上体起こし・長座体前屈・反復横とび・シャトルラン・50m走・立ち幅とび・ソフトボール投げという8種目を全国調査しています。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">重要な事実</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            逆上がりは、この全国調査に含まれていません。つまり、「◯%の小学生が逆上がりできない」という国の公式統計は、存在しないのです。そうした数字を見かけたら、出典を疑ってください。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          学年比較は意味がない
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          学習指導要領が「第3・4学年」「第5・6学年」と2学年をまとめて示す理由は、学習段階を示すためです。つまり、「3年生ではできないと遅れている」「4年生までにはできなければならない」といった基準はありません。同じ4年生でも、3月生まれと4月生まれでは1年近い発達差があります。
        </p>
        <p className="text-gray-700 leading-relaxed">
          学習指導要領は「どの段階までに習うか」を示しているだけで、「いつまでにできなければいけないか」という達成期限を決めているわけではありません。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          親にできることは、焦らず段階的に
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          逆上がりが苦手なお子さんに対して、親ができることは以下の通りです。
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">ダンゴムシから始める</p>
            <p className="text-sm text-blue-800">足を抱えて丸くなる運動で、体を鉄棒に引きつける感覚を養います。</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">補助具を活用する</p>
            <p className="text-sm text-blue-800">補助ベルトや補助具は、学習指導要領で明記された標準的な支援方法です。</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">楽しく続ける</p>
            <p className="text-sm text-blue-800">「できない」と落ち込ませるのではなく、運動遊びの一環として取り組むことが大切です。</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">学校の先生に相談する</p>
            <p className="text-sm text-blue-800">学校では、このリサーチで示した配慮方法を使って段階的に指導しています。</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          「逆上がりができない＝遅れている」ではありません。文部科学省の教育設計は、むしろそうした個人差を想定して、段階的な手立てを用意しているのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          体育の向き・不向きを知る
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          逆上がりは器械運動の一種ですが、すべての子どもが器械運動に向いているわけではありません。当サイトの診断では、新体力テストの8種目から、お子さんの体力の特徴を分析し、向いているスポーツの傾向を見ることができます。
        </p>
        <p className="text-gray-700 leading-relaxed">
          「逆上がりが苦手＝運動が苦手」ではなく、別の種目では得意かもしれません。お子さんの個性に合った運動活動を見つけることが、体育学習をより豊かにします。
        </p>
      </div>
    </ArticleLayout>
  );
}
