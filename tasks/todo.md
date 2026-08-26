# SEO記事20本 量産（2026-08-26）完了

方針: カバレッジギャップ優先 / 20本 / 全記事で一次ソース調査

## A. 新体力テスト 種目別ガイド 7本
- [x] docs/research/shin-tairyoku-test-youkou.md（実施要項をGemini OCRで原典から書き起こし＋得点表）
- [x] shuttle-run-kids / standing-long-jump-kids / side-step-kids / sit-up-kids
- [x] grip-strength-kids / sit-and-reach-kids / jikyuso-kids

## B. 種目別適性 8本
- [x] track-and-field-aptitude（JAAF大会要項＋学習指導要領）
- [x] dance-aptitude（学習指導要領・中学必修の根拠）
- [x] kendo-aptitude（全剣連 称号・段級位審査規則）
- [x] skateboard-aptitude（ワールドスケートジャパン 大会要項）
- [x] figure-skating-aptitude（日本スケート連盟 参加資格）
- [x] rugby-aptitude（JRFU ミニラグビー競技規則）
- [x] climbing-aptitude（JMSCA 競技規則のユース区分）
- [x] rhythmic-gymnastics-aptitude（日本体操協会）

## C. 制度・公的データ系 5本
- [x] sports-insurance-kids（スポーツ安全保険 令和8年度）
- [x] youji-undo-shishin（文科省 幼児期運動指針）
- [x] school-swimming-lesson（学習指導要領 水泳運動系）
- [x] sports-shonendan（JSPO スポーツ少年団ガイドブック）※当初案の「スポーツ実施率」は既存記事 undo-jikan-nikyokka と重複するため差し替え
- [x] undoki-kenshin（学校保健安全法施行規則の改正通知）

## 仕上げ
- [x] build-articles-index.mjs（136件・要確認0件）
- [x] generate-missing-images.mjs で画像20枚生成
      ※ imagen-4.0-fast-generate-001 がAPIから廃止されていたため gemini-3.1-flash-image + sharp圧縮に移行
- [x] verify-article-numbers.mjs の NEW_SLUGS 差し替え → 20本すべてパス（要確認0件）
- [x] verify-internal-links.mjs を新規作成 → 136本・131リンクすべて実在
- [x] app/page.tsx の latestArticles に20本追加
- [x] npm run build（エラー0）
- [x] master push → 本番20URL curl 200確認（記事・ヒーロー画像とも全件200）
- [x] submit-indexnow.mjs（155URL送信・ステータス200）

## 新しく作ったツール
- `scripts/ocr-pdf.mjs` … 画像スキャンPDF（テキストレイヤー無し）をGeminiでOCR。文科省の新体力テスト実施要項はこれでしか読めなかった
- `scripts/verify-internal-links.mjs` … 記事の内部リンクが実在ページを指すか検証
- `scripts/verify-article-numbers.mjs` に金額パターン（4,500万円のような桁区切り・万億）を追加。従来は「円」が照合対象外で、保険料などが素通りしていた

## レビュー
- 一次ソース収集をサブエージェントに任せた最初の試行は、ネットワーク不調と「原典で確認できず」の多発で使い物にならなかった。
  結局、官公庁PDFの機械抽出（extract-pdf / ocr-pdf）と自分でのWebFetchで取り直した。**収集は機械抽出、執筆はエージェント**の分担が正しい。
- 実施要項PDFが画像スキャンだったため、得点表PDF（テキスト）との2経路で数値の一致を確認してから記事に使った。
