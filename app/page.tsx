'use client';

import Link from 'next/link';
import Image from 'next/image';
import AverageDataSection from '@/components/AverageDataSection';
import AverageDataTopShare from '@/components/AverageDataTopShare';
import HeroSlider from '@/components/HeroSlider';
import CommunityStats from '@/components/CommunityStats';
import { useLanguage } from '@/contexts/LanguageContext';

const athleteArticles = [
  { slug: 'ohtani-shohei-childhood',       title: '大谷翔平の子供時代｜野球を始めた年齢・家族・幼少期エピソード',              image: '/images/articles/ohtani-shohei-childhood.jpg',       tags: ['大谷翔平', '野球'] },
  { slug: 'hanyu-yuzuru-childhood',        title: '羽生結弦の子供時代｜スケートを始めたきっかけは喘息だった',                  image: '/images/articles/hanyu-yuzuru-childhood.jpg',        tags: ['羽生結弦', 'フィギュア'] },
  { slug: 'asada-mao-childhood',           title: '浅田真央の子供時代｜5歳でスケートを始めた天才少女の原点',                  image: '/images/articles/asada-mao-childhood.jpg',           tags: ['浅田真央', 'フィギュア'] },
  { slug: 'nishikori-kei-childhood',       title: '錦織圭の子供時代｜5歳でテニスを始め13歳でアメリカへ渡った少年',            image: '/images/articles/nishikori-kei-childhood.jpg',       tags: ['錦織圭', 'テニス'] },
  { slug: 'uchimura-kohei-childhood',      title: '内村航平の子供時代｜体操一家で育った「遅咲きの天才」の原点',               image: '/images/articles/uchimura-kohei-childhood.jpg',      tags: ['内村航平', '体操'] },
  { slug: 'yoshida-saori-childhood',       title: '吉田沙保里の子供時代｜金メダルを見て泣いた5歳の女の子',                   image: '/images/articles/yoshida-saori-childhood.jpg',       tags: ['吉田沙保里', 'レスリング'] },
  { slug: 'ito-mima-childhood',            title: '伊藤美誠の子供時代｜2歳で卓球を始め、母と二人三脚で歩んだ道',             image: '/images/articles/ito-mima-childhood.jpg',            tags: ['伊藤美誠', '卓球'] },
  { slug: 'ikee-rikako-childhood',         title: '池江璃花子の子供時代｜3歳で水泳を始め、5歳で4泳法を泳いだ少女',           image: '/images/articles/ikee-rikako-childhood.jpg',         tags: ['池江璃花子', '水泳'] },
  { slug: 'nishiya-momiji-childhood',      title: '西矢椛の子供時代｜6歳でスケボーを始め13歳で五輪金メダルを獲った少女',     image: '/images/articles/nishiya-momiji-childhood.jpg',      tags: ['西矢椛', 'スケボー'] },
  { slug: 'horigome-yuto-childhood',       title: '堀米雄斗の子供時代｜父の「こっそりスケボー」から始まった五輪2連覇',       image: '/images/articles/horigome-yuto-childhood.jpg',       tags: ['堀米雄斗', 'スケボー'] },
  { slug: 'kitajima-kosuke-childhood',     title: '北島康介の子供時代｜太っていた少年が世界最速の平泳ぎ王者へ',              image: '/images/articles/kitajima-kosuke-childhood.jpg',     tags: ['北島康介', '水泳'] },
  { slug: 'fukuhara-ai-childhood',         title: '福原愛の子供時代｜3歳から卓球を始めた天才少女の原点',                    image: '/images/articles/fukuhara-ai-childhood.jpg',         tags: ['福原愛', '卓球'] },
  { slug: 'miyazato-ai-childhood',         title: '宮里藍の子供時代｜沖縄の少女が世界ランク1位のゴルファーになった理由',      image: '/images/articles/miyazato-ai-childhood.jpg',         tags: ['宮里藍', 'ゴルフ'] },
  { slug: 'nakamura-shunsuke-childhood',   title: '中村俊輔の子供時代｜セレクション落ちから世界トップへの逆転劇',            image: '/images/articles/nakamura-shunsuke-childhood.jpg',   tags: ['中村俊輔', 'サッカー'] },
  { slug: 'ishikawa-kasumi-childhood',     title: '石川佳純の子供時代｜5歳で卓球を始めた下関っ子が3大会連続五輪へ',         image: '/images/articles/ishikawa-kasumi-childhood.jpg',     tags: ['石川佳純', '卓球'] },
  { slug: 'abe-hifumi-childhood',          title: '阿部一二三の子供時代｜3歳から始めた柔道で東京・パリ連覇の道',            image: '/images/articles/abe-hifumi-childhood.jpg',          tags: ['阿部一二三', '柔道'] },
  { slug: 'abe-uta-childhood',             title: '阿部詩の子供時代｜兄・一二三と共に歩んだ柔道一家の軌跡',                  image: '/images/articles/abe-uta-childhood.jpg',             tags: ['阿部詩', '柔道'] },
  { slug: 'hashimoto-daiki-childhood',     title: '橋本大輝の子供時代｜東京五輪個人総合金メダリストの原点',                  image: '/images/articles/hashimoto-daiki-childhood.jpg',     tags: ['橋本大輝', '体操'] },
  { slug: 'harimoto-tomokazu-childhood',   title: '張本智和の子供時代｜卓球一家に生まれた神童が世界を驚かせるまで',          image: '/images/articles/harimoto-tomokazu-childhood.jpg',   tags: ['張本智和', '卓球'] },
  { slug: 'hayata-hina-childhood',         title: '早田ひなの子供時代｜3歳から始めた卓球でパリ五輪メダリストへ',            image: '/images/articles/hayata-hina-childhood.jpg',         tags: ['早田ひな', '卓球'] },
  { slug: 'sakamoto-kaori-childhood',      title: '坂本花織の子供時代｜神戸育ちの少女が世界選手権3連覇へ',                  image: '/images/articles/sakamoto-kaori-childhood.jpg',      tags: ['坂本花織', 'フィギュア'] },
  { slug: 'hachimura-rui-childhood',       title: '八村塁の子供時代｜富山からNBAへ、日本人初の快挙の原点',                  image: '/images/articles/hachimura-rui-childhood.jpg',       tags: ['八村塁', 'バスケ'] },
  { slug: 'takahashi-ran-childhood',       title: '高橋藍の子供時代｜兄の背中を追ってバレー界の新星へ',                    image: '/images/articles/takahashi-ran-childhood.jpg',       tags: ['高橋藍', 'バレー'] },
  { slug: 'nakayama-funa-childhood',       title: '中山楓奈の子供時代｜2大会連続五輪メダリストの原点',                      image: '/images/articles/nakayama-funa-childhood.jpg',       tags: ['中山楓奈', 'スケボー'] },
  { slug: 'seto-daiya-childhood',          title: '瀬戸大也の子供時代｜4歳から始めた水泳で世界選手権金メダリストへ',        image: '/images/articles/seto-daiya-childhood.jpg',          tags: ['瀬戸大也', '水泳'] },
  { slug: 'murakami-munetaka-childhood',   title: '村上宗隆の子供時代｜小学校から始めた野球で三冠王・ホームラン王への道',   image: '/images/articles/murakami-munetaka-childhood.jpg',   tags: ['村上宗隆', '野球'] },
  { slug: 'suzuki-seiya-childhood',        title: '鈴木誠也の子供時代｜東京下町から広島・MLBへ駆け上がった野球人生',       image: '/images/articles/suzuki-seiya-childhood.jpg',        tags: ['鈴木誠也', '野球'] },
  { slug: 'darvish-yu-childhood',          title: 'ダルビッシュ有の子供時代｜大阪で始めた野球でMLBを代表する投手へ',       image: '/images/articles/darvish-yu-childhood.jpg',          tags: ['ダルビッシュ有', '野球'] },
  { slug: 'kikuchi-yusei-childhood',       title: '菊池雄星の子供時代｜大谷翔平と同じ花巻東から世界へ羽ばたいた左腕',     image: '/images/articles/kikuchi-yusei-childhood.jpg',       tags: ['菊池雄星', '野球'] },
  { slug: 'mitoma-kaoru-childhood',        title: '三笘薫の子供時代｜川崎生まれのドリブラーがプレミアリーグへ至るまで',   image: '/images/articles/mitoma-kaoru-childhood.jpg',        tags: ['三笘薫', 'サッカー'] },
  { slug: 'doan-ritsu-childhood',          title: '堂安律の子供時代｜ガンバ大阪の名門アカデミーからブンデスリーガへ',     image: '/images/articles/doan-ritsu-childhood.jpg',          tags: ['堂安律', 'サッカー'] },
  { slug: 'ito-junya-childhood',           title: '伊東純也の子供時代｜遅咲きのスプリンターが世界トップへ駆け上がるまで', image: '/images/articles/ito-junya-childhood.jpg',           tags: ['伊東純也', 'サッカー'] },
  { slug: 'tomiyasu-takehiro-childhood',   title: '冨安健洋の子供時代｜福岡育ちの万能DFがアーセナルの主力へ至るまで',   image: '/images/articles/tomiyasu-takehiro-childhood.jpg',   tags: ['冨安健洋', 'サッカー'] },
  { slug: 'minamino-takumi-childhood',     title: '南野拓実の子供時代｜セレッソ大阪の英才教育からリバプールへ',           image: '/images/articles/minamino-takumi-childhood.jpg',     tags: ['南野拓実', 'サッカー'] },
  { slug: 'kubo-takefusa-childhood',       title: '久保建英の子供時代｜10歳でバルセロナに渡った天才少年の原点',           image: '/images/articles/kubo-takefusa-childhood.jpg',       tags: ['久保建英', 'サッカー'] },
  { slug: 'endo-wataru-childhood',         title: '遠藤航の子供時代｜横浜生まれの闘将がリバプールの主将へ至るまで',       image: '/images/articles/endo-wataru-childhood.jpg',         tags: ['遠藤航', 'サッカー'] },
  { slug: 'nakata-hidetoshi-childhood',    title: '中田英寿の子供時代｜山梨の少年がセリエAのスターへ—日本サッカーの先駆者', image: '/images/articles/nakata-hidetoshi-childhood.jpg',    tags: ['中田英寿', 'サッカー'] },
  { slug: 'nagatomo-yuto-childhood',       title: '長友佑都の子供時代｜愛媛の少年がインテル・ミランの左SBへ這い上がるまで', image: '/images/articles/nagatomo-yuto-childhood.jpg',       tags: ['長友佑都', 'サッカー'] },
  { slug: 'kagawa-shinji-childhood',       title: '香川真司の子供時代｜セレッソ大阪の神童がドルトムントとマンUへ',       image: '/images/articles/kagawa-shinji-childhood.jpg',       tags: ['香川真司', 'サッカー'] },
  { slug: 'honda-keisuke-childhood',       title: '本田圭佑の子供時代｜大阪の少年がACミランのエースへ—強さの原点',       image: '/images/articles/honda-keisuke-childhood.jpg',       tags: ['本田圭佑', 'サッカー'] },
];

const latestArticles = [
  { slug: 'sumo-aptitude', title: '相撲に向いている子の特徴｜文部科学省の公式資料から見る武道としての特性', image: '/images/articles/sumo-aptitude.jpg', tags: ['相撲', '武道'] },
  { slug: 'boxing-aptitude', title: 'ボクシングに向いている子の特徴｜年代別試合規定で見る成長への配慮', image: '/images/articles/boxing-aptitude.jpg', tags: ['ボクシング', '武道'] },
  { slug: 'cheerleading-aptitude', title: 'チアリーディングに向いている子の特徴｜安全規則から見る年代別の成長段階', image: '/images/articles/cheerleading-aptitude.jpg', tags: ['チアリーディング', '表現運動'] },
  { slug: 'ski-snowboard-aptitude', title: 'スキー・スノーボードに向いている子の特徴｜6つの競技で見る適性と地域性', image: '/images/articles/ski-snowboard-aptitude.jpg', tags: ['スキー', 'ウィンタースポーツ'] },
  { slug: 'archery-aptitude', title: 'アーチェリーに向いている子の特徴｜年齢や性別を問わずできるスポーツ', image: '/images/articles/archery-aptitude.jpg', tags: ['アーチェリー', '個人競技'] },
  { slug: 'softball-aptitude', title: 'ソフトボールに向いている子の特徴｜小学校と中学校の規則で見る競技設計', image: '/images/articles/softball-aptitude.jpg', tags: ['ソフトボール', 'ベースボール型'] },
  { slug: 'handball-aptitude', title: 'ハンドボールに向いている子の特徴｜学校体育で学べるゴール型ゲーム', image: '/images/articles/handball-aptitude.jpg', tags: ['ハンドボール', 'ボール運動'] },
  { slug: 'shuttle-run-kids', title: '20mシャトルランの平均回数は？小学生・中学生の全国平均と得点表', image: '/images/articles/shuttle-run-kids.jpg', tags: ['シャトルラン', '体力テスト'] },
  { slug: 'grip-strength-kids', title: '小学生の握力の平均は？全国平均と得点表', image: '/images/articles/grip-strength-kids.jpg', tags: ['握力', '体力テスト'] },
  { slug: 'standing-long-jump-kids', title: '立ち幅跳びの平均は？小学生・中学生の全国平均と得点表', image: '/images/articles/standing-long-jump-kids.jpg', tags: ['立ち幅跳び', '体力テスト'] },
  { slug: 'side-step-kids', title: '反復横跳びの平均は？小学生・中学生の全国平均と得点表', image: '/images/articles/side-step-kids.jpg', tags: ['反復横跳び', '体力テスト'] },
  { slug: 'sit-up-kids', title: '上体起こしの平均は？小学生・中学生の全国平均と得点表', image: '/images/articles/sit-up-kids.jpg', tags: ['上体起こし', '体力テスト'] },
  { slug: 'sit-and-reach-kids', title: '長座体前屈の平均値は？小学生の全国平均と柔軟性測定方法', image: '/images/articles/sit-and-reach-kids.jpg', tags: ['長座体前屈', '体力テスト'] },
  { slug: 'jikyuso-kids', title: '中学生の持久走の平均記録は？中2の全国平均と得点表', image: '/images/articles/jikyuso-kids.jpg', tags: ['持久走', '体力テスト'] },
  { slug: 'track-and-field-aptitude', title: '陸上競技に向いている子の特徴|小学生の適性を新体力テストで判断', image: '/images/articles/track-and-field-aptitude.jpg', tags: ['陸上競技', '適性診断'] },
  { slug: 'dance-aptitude', title: 'ダンスに向いている子の特徴|中学では全生徒が体験する現代的なダンス', image: '/images/articles/dance-aptitude.jpg', tags: ['ダンス', '適性診断'] },
  { slug: 'kendo-aptitude', title: '剣道に向いている子の特徴｜反復と型を積み重ねる武道の適性', image: '/images/articles/kendo-aptitude.jpg', tags: ['剣道', '武道'] },
  { slug: 'rugby-aptitude', title: 'ラグビーに向いている子の特徴｜学年別規則で見る発育発達への配慮', image: '/images/articles/rugby-aptitude.jpg', tags: ['ラグビー', 'ボール運動'] },
  { slug: 'climbing-aptitude', title: 'スポーツクライミングに向いている子の特徴｜オリンピック競技の適性診断', image: '/images/articles/climbing-aptitude.jpg', tags: ['クライミング', 'オリンピック'] },
  { slug: 'skateboard-aptitude', title: 'スケートボードに向いている子の特徴｜オリンピック競技の適性診断', image: '/images/articles/skateboard-aptitude.jpg', tags: ['スケートボード', 'オリンピック'] },
  { slug: 'figure-skating-aptitude', title: 'フィギュアスケートに向いている子の特徴|級取得と発達段階から見る適性', image: '/images/articles/figure-skating-aptitude.jpg', tags: ['フィギュアスケート', '適性診断'] },
  { slug: 'rhythmic-gymnastics-aptitude', title: '新体操に向いている子の特徴|柔軟性と表現力で見る適性診断', image: '/images/articles/rhythmic-gymnastics-aptitude.jpg', tags: ['新体操', '適性診断'] },
  { slug: 'sports-insurance-kids', title: 'スポーツ安全保険とは？子どもの習い事のけがの補償内容・掛金・加入の流れ', image: '/images/articles/sports-insurance-kids.jpg', tags: ['スポーツ保険', '習い事'] },
  { slug: 'sports-shonendan', title: 'スポーツ少年団とは？組織構造・指導者資格・掛金・活動内容を解説', image: '/images/articles/sports-shonendan.jpg', tags: ['スポーツ少年団', '地域スポーツ'] },
  { slug: 'youji-undo-shishin', title: '文部科学省「幼児期運動指針」の「毎日60分」は何か。科学的根拠と実現可能性の違い', image: '/images/articles/youji-undo-shishin.jpg', tags: ['幼児期運動指針', '運動発達'] },
  { slug: 'undoki-kenshin', title: '学校の運動器検診とは。座高測定がなくなった同じ改正で始まった新しい健診', image: '/images/articles/undoki-kenshin.jpg', tags: ['学校健診', '運動器検診'] },
  { slug: 'school-swimming-lesson', title: '学校の水泳授業では何を学ぶ？学習指導要領に基づく学年ごとの内容解説', image: '/images/articles/school-swimming-lesson.jpg', tags: ['水泳', '学習指導要領'] },
  { slug: 'tairyoku-chosa-r7', title: '令和7年度 全国体力テストの結果｜小5の全国平均とコロナ前との比較', image: '/images/articles/tairyoku-chosa-r7.jpg', tags: ['体力テスト', '全国平均'] },
  { slug: 'tairyoku-todofuken-ranking', title: '子どもの体力が高い都道府県は？｜令和7年度の全国ランキング', image: '/images/articles/tairyoku-todofuken-ranking.jpg', tags: ['体力テスト', '都道府県別'] },
  { slug: 'tairyoku-teika-suii', title: '子どもの体力は本当に落ちている？｜平成20年からのデータで検証', image: '/images/articles/tairyoku-teika-suii.jpg', tags: ['体力テスト', '経年変化'] },
  { slug: 'chugakusei-tairyoku', title: '中学2年生の体力テスト全国平均｜8種目の目安と評価基準', image: '/images/articles/chugakusei-tairyoku.jpg', tags: ['体力テスト', '中学生'] },
  { slug: 'onnanoko-undo-banare', title: '女の子の運動離れは本当か｜データで見る「運動が好き」の男女差', image: '/images/articles/onnanoko-undo-banare.jpg', tags: ['女の子', '運動離れ'] },
  { slug: 'undo-jikan-nikyokka', title: '小学生は1週間にどれくらい運動している？｜全国データで見る運動時間', image: '/images/articles/undo-jikan-nikyokka.jpg', tags: ['運動時間', '小学生'] },
  { slug: 'undo-suki-kirai-data', title: '運動が好きな子は何割？｜「運動嫌い」のデータと体力の関係', image: '/images/articles/undo-suki-kirai-data.jpg', tags: ['運動意欲', 'アンケート'] },
  { slug: 'screen-time-tairyoku', title: '子どものスクリーンタイムは平均どれくらい？｜体力との関係を公的データで解説', image: '/images/articles/screen-time-tairyoku.jpg', tags: ['スクリーンタイム', 'スマートフォン'] },
  { slug: 'game-vs-sports', title: '子どものゲーム時間は平均どれくらい？｜体力との関係を公的データで見る', image: '/images/articles/game-vs-sports.jpg', tags: ['ゲーム時間', 'スクリーンタイム'] },
  { slug: 'asagohan-tairyoku', title: '朝食を食べない子は体力が低い？｜全国調査データで確認できること', image: '/images/articles/asagohan-tairyoku.jpg', tags: ['朝食', '生活習慣'] },
  { slug: 'sakaagari-kids', title: '逆上がりができないのは遅れている？｜学習指導要領で確認できること', image: '/images/articles/sakaagari-kids.jpg', tags: ['逆上がり', '学習指導要領'] },
  { slug: 'ball-throwing-kids', title: 'ソフトボール投げの全国平均は？｜投げるのが苦手な子に親ができること', image: '/images/articles/ball-throwing-kids.jpg', tags: ['ボール投げ', '体力テスト'] },
  { slug: 'junior-high-club', title: '中学の部活選び｜2026年度からの地域移行で何が変わるのか', image: '/images/articles/junior-high-club.jpg', tags: ['部活動', '地域移行'] },
  { slug: 'benchwarmer-kids', title: '試合に出してもらえない子ども｜補欠問題をどう考えるか', image: '/images/articles/benchwarmer-kids.jpg', tags: ['補欠問題', 'スポーツ医学'] },
  { slug: 'parent-duty-sports', title: 'スポーツ少年団の保護者当番｜実態が見えにくい理由と対策', image: '/images/articles/parent-duty-sports.jpg', tags: ['スポーツ少年団', '保護者当番'] },
  { slug: 'working-parents-sports', title: '共働きで子どもの習い事送迎ができない｜親の現実と現代的な課題', image: '/images/articles/working-parents-sports.jpg', tags: ['共働き', '習い事'] },
  { slug: 'developmental-disorder-sports', title: '発達障害・DCDとスポーツ｜子どもの運動支援ガイド', image: '/images/articles/developmental-disorder-sports.jpg', tags: ['発達障害', 'DCD'] },
  { slug: 'asthma-kids-sports', title: '喘息・アレルギーのある子どもとスポーツ｜適切な管理で運動はできる', image: '/images/articles/asthma-kids-sports.jpg', tags: ['喘息', 'アレルギー'] },
  { slug: 'kids-nervous-games', title: '子どもが本番・試合で緊張して力を出せない時｜メンタルの整え方', image: '/images/articles/kids-nervous-games.jpg', tags: ['メンタル', 'スポーツ心理学'] },
  { slug: 'kids-cry-losing', title: '負けて泣く・悔しがりすぎる子への関わり方｜感情の発達から考える', image: '/images/articles/kids-cry-losing.jpg', tags: ['感情コントロール', '発達心理学'] },
  { slug: 'golden-age',            title: 'ゴールデンエイジとは？9〜12歳が「運動神経の黄金期」と呼ばれる理由', image: '/images/articles/golden-age.jpg',            tags: ['運動発達', 'ゴールデンエイジ'] },
  { slug: 'soccer-aptitude',       title: 'サッカーに向いている子の特徴｜体力データから見る適性の見極め方',     image: '/images/articles/soccer-aptitude.jpg',       tags: ['サッカー', '適性診断'] },
  { slug: 'swimming-aptitude',     title: '水泳に向いている子の特徴｜持久力と柔軟性で見る習い事適性',          image: '/images/articles/swimming-aptitude.jpg',     tags: ['水泳', '習い事'] },
  { slug: 'fitness-test-guide',    title: '小学生の新体力テスト完全ガイド｜8種目の見方と平均値の活用法',       image: '/images/articles/fitness-test-guide.jpg',    tags: ['新体力テスト', '体力測定'] },
  { slug: 'sport-selection',       title: '子どもの習い事でスポーツを選ぶ5つのポイント｜後悔しない選び方',     image: '/images/articles/sport-selection.jpg',       tags: ['習い事', 'スポーツ選び'] },
  { slug: 'basketball-aptitude',   title: 'バスケットボールに向いている子の特徴｜敏捷性と瞬発力で見る適性',   image: '/images/articles/basketball-aptitude.jpg',   tags: ['バスケ', '適性診断'] },
  { slug: 'speed-running',         title: '50m走が速い子の特徴と走力を伸ばす方法',                             image: '/images/articles/speed-running.jpg',         tags: ['50m走', '瞬発力'] },
  { slug: 'motor-development',     title: '子どもの運動神経はいつまでに鍛えれば良い？年齢別発達の目安',        image: '/images/articles/motor-development.jpg',     tags: ['運動神経', '発達'] },
  { slug: 'gymnastics-aptitude',   title: '体操・体育系に向いている子の特徴｜柔軟性と巧緻性で見る適性',       image: '/images/articles/gymnastics-aptitude.jpg',   tags: ['体操', '柔軟性'] },
  { slug: 'martial-arts-aptitude', title: '空手・柔道に向いている子の特徴｜武道で伸びる子の共通点',           image: '/images/articles/martial-arts-aptitude.jpg', tags: ['空手', '柔道'] },
  { slug: 'age-3-sports',          title: '3歳の子どもに向いているスポーツ｜運動発達の特徴と習い事の始め方',    image: '/images/articles/age-3-sports.jpg',          tags: ['3歳', '幼児'] },
  { slug: 'age-4-sports',          title: '4歳の子どもに向いているスポーツ｜運動発達の特徴と習い事の選び方',    image: '/images/articles/age-4-sports.jpg',          tags: ['4歳', '幼児'] },
  { slug: 'age-5-sports',          title: '5歳の子どもに向いているスポーツ｜幼児期後半の運動発達と習い事',      image: '/images/articles/age-5-sports.jpg',          tags: ['5歳', '幼児'] },
  { slug: 'age-6-sports',          title: '6歳の子どもに向いているスポーツ｜小学校入学期の運動発達',           image: '/images/articles/age-6-sports.jpg',          tags: ['6歳', '小学1年生'] },
  { slug: 'age-7-sports',          title: '7歳の子どもに向いているスポーツ｜小学2年生の運動発達と適性',        image: '/images/articles/age-7-sports.jpg',          tags: ['7歳', '小学2年生'] },
  { slug: 'age-8-sports',          title: '8歳の子どもに向いているスポーツ｜小学3年生の巧緻性発達',           image: '/images/articles/age-8-sports.jpg',          tags: ['8歳', '小学3年生'] },
  { slug: 'age-9-sports',          title: '9歳の子どもに向いているスポーツ｜ゴールデンエイジ開始',             image: '/images/articles/age-9-sports.jpg',          tags: ['9歳', 'ゴールデンエイジ'] },
  { slug: 'age-10-sports',         title: '10歳の子どもに向いているスポーツ｜ゴールデンエイジ中期',            image: '/images/articles/age-10-sports.jpg',         tags: ['10歳', 'ゴールデンエイジ'] },
  { slug: 'age-11-sports',         title: '11歳の子どもに向いているスポーツ｜ゴールデンエイジ後期',            image: '/images/articles/age-11-sports.jpg',         tags: ['11歳', '小学6年生'] },
  { slug: 'age-12-sports',         title: '12歳の子どもに向いているスポーツ｜ゴールデンエイジ終期',            image: '/images/articles/age-12-sports.jpg',         tags: ['12歳', '中学1年生'] },
  { slug: 'kids-nutrition-sports',  title: '子どものスポーツと栄養・食事の基本｜運動能力を引き出す食べ方',      image: '/images/articles/kids-nutrition-sports.jpg',  tags: ['栄養', '食事'] },
  { slug: 'indoor-rainy-day-sports', title: '雨の日でもできる子どもの室内スポーツ・運動10選',                  image: '/images/articles/indoor-rainy-day-sports.jpg', tags: ['室内運動', '雨の日'] },
  { slug: 'kids-sleep-sports',      title: '子どものスポーツと睡眠の関係｜成長ホルモンと回復力を最大化する方法', image: '/images/articles/kids-sleep-sports.jpg',      tags: ['睡眠', '成長ホルモン'] },
  { slug: 'introverted-kids-sports', title: '人見知り・内向的な子に向いているスポーツ｜個人競技で自信をつける', image: '/images/articles/introverted-kids-sports.jpg', tags: ['人見知り', '個人競技'] },
  { slug: 'kids-core-training',     title: '子どもの体幹トレーニング入門｜何歳から？家でできるメニュー7選',    image: '/images/articles/kids-core-training.jpg',     tags: ['体幹', 'トレーニング'] },
  { slug: 'sports-club-choosing',   title: '子どものスポーツクラブ・少年団の選び方｜後悔しない7つのチェックポイント', image: '/images/articles/sports-club-choosing.jpg',   tags: ['クラブ選び', '少年団'] },
  { slug: 'heat-stroke-sports-kids', title: '子どものスポーツ中の熱中症対策｜症状の見分け方・予防・応急処置',   image: '/images/articles/heat-stroke-sports-kids.jpg', tags: ['熱中症', '水分補給'] },
  { slug: 'left-handed-sports',     title: '左利きの子どもに有利なスポーツとは｜利き手を活かせる種目を解説',    image: '/images/articles/left-handed-sports.jpg',     tags: ['左利き', '適性'] },
  { slug: 'sports-cost-comparison',  title: '子どものスポーツ習い事の費用・月謝比較｜種目別コストと選び方',      image: '/images/articles/sports-cost-comparison.jpg',  tags: ['費用', '月謝'] },
  { slug: 'kids-posture-sports',    title: '子どもの姿勢改善に効果的なスポーツ｜猫背・反り腰を直す種目と運動',  image: '/images/articles/kids-posture-sports.jpg',    tags: ['姿勢', '猫背改善'] },
];

const sportImages = [
  { name: 'サッカー',     src: '/images/sport-soccer.jpg' },
  { name: '水泳',         src: '/images/sport-swimming.jpg' },
  { name: 'テニス',       src: '/images/sport-tennis.jpg' },
  { name: 'バスケット',   src: '/images/sport-basketball.jpg' },
  { name: '野球',         src: '/images/sport-baseball.jpg' },
  { name: '体操',         src: '/images/sport-gymnastics.jpg' },
  { name: 'ゴルフ',       src: '/images/sport-golf.jpg' },
  { name: 'ダンス',       src: '/images/sport-dance.jpg' },
  { name: '空手',         src: '/images/sport-karate.jpg' },
  { name: '柔道・武道',   src: '/images/sport-judo.jpg' },
  { name: 'バレーボール', src: '/images/sport-volleyball.jpg' },
  { name: 'バドミントン', src: '/images/sport-badminton.jpg' },
  { name: '卓球',         src: '/images/sport-tabletennis.jpg' },
  { name: 'ラグビー',     src: '/images/sport-rugby.jpg' },
  { name: '自転車競技',   src: '/images/sport-cycling.jpg' },
];

export default function Home() {
  const { t } = useLanguage();

  const trustItems = [
    t('home.trust1'),
    t('home.trust2'),
    t('home.trust3'),
    t('home.trust4'),
  ];

  const steps = [
    { step: '1', title: t('home.step1Title'), desc: t('home.step1Desc') },
    { step: '2', title: t('home.step2Title'), desc: t('home.step2Desc') },
    { step: '3', title: t('home.step3Title'), desc: t('home.step3Desc') },
  ];

  return (
    <div className="bg-[#F7F9FF]">

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[460px] sm:min-h-[600px] flex items-center">
        <HeroSlider />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 w-full py-10 sm:py-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-white mb-4 sm:mb-6">
              <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {t('home.badge')}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-5 leading-tight">
              {t('home.heroTitle')}
            </h1>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              {t('home.heroSubtext')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/shindan/sports"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-2xl bg-white text-blue-700 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {t('home.heroCta1')}
              </Link>
              <Link
                href="/shindan/check"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-2xl bg-white/15 border-2 border-white/40 text-white font-bold text-sm sm:text-base hover:bg-white/25 transition-all backdrop-blur-sm"
              >
                {t('home.heroCta2')}
              </Link>
            </div>

            <AverageDataTopShare />
          </div>
        </div>
      </section>

      {/* 安心バー */}
      <section className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-x-4 sm:gap-x-8 gap-y-2">
          {trustItems.map((text) => (
            <div key={text} className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 font-medium">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* 2つの診断メニュー */}
      <section className="py-10 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-7 sm:mb-10">
            <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-2">Diagnosis</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">{t('home.diagnosisSection')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* スポーツ適性診断 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/images/kids-running.jpg"
                  alt={t('home.sportsCardTitle')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">{t('home.sportsCardBadge')}</span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2">{t('home.sportsCardTitle')}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {t('home.sportsCardDesc')}
                </p>
                <Link
                  href="/shindan/sports"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                >
                  {t('home.startDiagnosis')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* うちの子大丈夫診断 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/images/kids-check.jpg"
                  alt={t('home.checkCardTitle')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">{t('home.checkCardBadge')}</span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2">{t('home.checkCardTitle')}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {t('home.checkCardDesc')}
                </p>
                <Link
                  href="/shindan/check"
                  className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-green-700 transition-colors text-sm"
                >
                  {t('home.startDiagnosis')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* スポーツ種目グリッド */}
      <section className="py-10 sm:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-7 sm:mb-10">
            <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-2">Sports</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">{t('home.sportsSection')}</h2>
            <p className="text-gray-500 mt-2 text-sm">{t('home.sportsSectionSub')}</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {sportImages.map((sport) => (
              <div key={sport.name} className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-default">
                <Image
                  src={sport.src}
                  alt={sport.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                  <span className="text-white font-black text-xs sm:text-base drop-shadow-md">{sport.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <span className="bg-gray-100 text-gray-500 text-xs font-medium px-4 py-1.5 rounded-full">{t('home.sportsSectionMore')}</span>
          </div>
        </div>
      </section>

      {/* コーチと子供セクション */}
      <section className="py-10 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-52 sm:h-64 md:h-auto md:min-h-[280px]">
                <Image
                  src="/images/kids-relay.jpg"
                  alt="子供たちがリレーをしている"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-8 flex flex-col justify-center">
                <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-2 sm:mb-3">How it works</p>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4">{t('home.howSection')}</h2>
                <div className="space-y-4">
                  {steps.map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-black">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href="/shindan/sports"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-2xl hover:bg-blue-700 transition-colors text-sm shadow-md shadow-blue-200"
                  >
                    {t('home.diagnoseNow')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* コミュニティ統計 */}
      <CommunityStats />

      {/* 全国平均データ */}
      <AverageDataSection />

      {/* 記事一覧：選手記事 × お役立ち記事 横並び2列 */}
      <section className="py-10 sm:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

            {/* 左列：あの選手の子供時代 */}
            <div>
              <div className="mb-4">
                <p className="text-yellow-500 font-semibold text-xs uppercase tracking-widest mb-1">Athletes</p>
                <h2 className="text-lg sm:text-xl font-black text-gray-900">あの選手の子供時代</h2>
              </div>
              <div className="flex flex-col gap-2">
                {athleteArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="flex items-center gap-3 bg-[#F7F9FF] rounded-xl border border-gray-100 hover:shadow-sm hover:-translate-y-0.5 transition-all group overflow-hidden"
                  >
                    <div className="relative w-20 h-14 shrink-0 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 py-2 pr-3 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-yellow-600 text-xs font-bold">{article.tags[0]}</span>
                        <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-1.5 py-0.5 rounded-full">{article.tags[1]}</span>
                      </div>
                      <p className="text-xs font-bold text-gray-900 line-clamp-2 leading-snug">
                        {article.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 右列：お役立ち記事 */}
            <div>
              <div className="mb-4">
                <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-1">Articles</p>
                <h2 className="text-lg sm:text-xl font-black text-gray-900">お役立ち記事</h2>
              </div>
              <div className="flex flex-col gap-2">
                {latestArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="flex items-center gap-3 bg-[#F7F9FF] rounded-xl border border-gray-100 hover:shadow-sm hover:-translate-y-0.5 transition-all group overflow-hidden"
                  >
                    <div className="relative w-20 h-14 shrink-0 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 py-2 pr-3 min-w-0">
                      <span className="text-blue-600 text-xs font-bold">{article.tags[0]}</span>
                      <p className="text-xs font-bold text-gray-900 line-clamp-2 leading-snug mt-0.5">
                        {article.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* 記事一覧への導線 */}
          <div className="mt-10 text-center">
            <Link
              href="/articles"
              className="inline-block bg-white border-2 border-gray-900 text-gray-900 font-black text-sm px-8 py-3 rounded-xl hover:bg-gray-900 hover:text-white transition-colors"
            >
              記事をすべて見る
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
