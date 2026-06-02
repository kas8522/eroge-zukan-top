# エロゲ図鑑 開発引き継ぎ仕様書

**作成日**: 2026年5月28日  
**バージョン**: 1.0.0  
**プロジェクト名**: eroge-zukan-top

---

## 1. サイト概要

### 1.1 サイト名
**エロゲ図鑑** 〜新作・レビュー・セール情報を毎日更新〜

### 1.2 コンセプト
ビジュアルノベル・エロゲ・同人ゲームの新作情報、レビュー、セール情報、ランキング、プレイ環境おすすめを一元管理する個人運営の情報サイト。ユーザーが自分に合う作品を探しやすいように、複数の視点（ジャンル、メーカー、セール、ランキング等）から作品情報を提供します。

### 1.3 主な対象ユーザー
- ビジュアルノベル・エロゲの愛好者
- 新作情報を探している人
- セール情報を探している人
- 同人ゲームに興味がある人
- プレイ環境（ゲーミング機器）のおすすめを探している人
- 作品選びに迷っている初心者

### 1.4 デザイン方針

**カラースキーム**
- **背景**: 白ベース（oklch(0.992 0.006 355)）
- **アクセント**: ピンク（oklch(0.62 0.22 355)）
- **テキスト**: 濃いグレー/紺（oklch(0.18 0.03 310)）
- **セール/強調**: 赤（oklch(0.58 0.22 25)）

**UI要素**
- **カード型レイアウト**: すべてのコンテンツはカード形式で統一
- **サムネイル主役**: 作品画像を大きく、視覚的に訴求
- **ボーダー**: 薄いピンク（oklch(0.92 0.02 355)）
- **シャドウ**: 軽い影でカード感を演出

**レスポンシブ**
- **スマホファースト**: 小画面で最適化してから PC 拡張
- **ブレークポイント**: md (768px), lg (1024px)
- **PC版**: 4〜6カラムグリッド、ナビゲーションバー表示
- **スマホ版**: 2〜3カラムグリッド、ハンバーガーメニュー

**ロゴ**
- 本のアウトラインとゲームパッドを組み合わせたカスタム SVG
- テキスト: 「エロゲ」は濃い色、「図鑑」はピンクボックス背景

---

## 2. 作成済みページ一覧

| URL | ページ名 | 役割 | 主な表示内容 |
|-----|---------|------|-----------|
| `/` | ホーム | サイトの入口、全体の概要表示 | ヒーロースライド、注目の新作、セール情報、同人ゲーム、プレイ環境、特集、レビュー、ジャンル |
| `/game/:id` | 作品詳細 | 個別作品の詳細情報表示 | メイン画像、サンプル画像、基本情報、レーティング、レビュー、関連作品、購入リンク（未実装） |
| `/ranking` | 人気ランキング | 作品の人気度をランキング表示 | 1位カード（大）、2〜10位カード、タブフィルタ（総合/急上昇/新作/セール中/同人/Live2D） |
| `/sale` | セール情報 | 割引中の作品を表示 | セールカード（割引率表示）、タブフィルタ、セール終了日 |
| `/genres` | ジャンルから探す | ジャンル別の作品分類 | ジャンルカード（3画像表示）、ジャンル別人気作品グリッド |
| `/environment` | プレイ環境 | ゲーミング機器のおすすめ | 使用例カード、商品グリッド（椅子、ヘッドホン、モニター等） |
| `/reviews` | レビュー一覧 | ユーザー/管理人レビュー表示 | レビューカード、カテゴリタブ、高評価/セール中の特集 |
| `/features` | 特集まとめ | テーマ別の作品まとめ | 特集カード、特集内の関連作品グリッド、カテゴリタブ |
| `/doujin` | 同人ゲーム | 同人作品の専門ページ | ハイライト、同人ゲームグリッド、バッジ（低価格/短時間/スマホ対応等） |
| `/makers` | メーカー/サークル | メーカー・サークル情報 | ハイライト、メーカーカード、代表作品表示 |
| `/search` | 検索結果 | 検索クエリに基づく結果表示 | フィルタ（すべて/作品名/メーカー/ジャンル）、結果グリッド |
| `/contact` | お問い合わせ | ユーザー問い合わせフォーム | 名前・メール・メッセージ入力フィールド、送信ボタン（未実装） |
| `/about` | 運営者情報 | サイト運営者の情報表示 | サイト名、運営者、サイト内容、連絡先、運営方針 |
| `/privacy` | プライバシーポリシー | 個人情報の取り扱い方針 | 個人情報の利用目的、Cookie、アフィリエイト、免責事項 |
| `/terms` | 利用規約 | サイト利用時の規約 | サイト利用、禁止事項、著作権、外部リンク、変更通知 |
| `/disclaimer` | 免責事項・広告について | 免責事項とアフィリエイト広告の説明 | 掲載情報の免責、価格変動、アフィリエイト広告表示、成人向けコンテンツ注記 |

---

## 3. 主要コンポーネント一覧

### 3.1 グローバルコンポーネント

| コンポーネント | 場所 | 役割 | 主な props |
|--------------|------|------|---------|
| **Header** | `components/Header.tsx` | 全ページ共通ヘッダー | なし（内部状態管理） |
| **Footer** | `components/Footer.tsx` | 全ページ共通フッター | なし（固定リンク） |
| **Logo** | `components/Logo.tsx` | ロゴ表示 | `size: "sm"\|"md"\|"lg"`, `showSubcopy: boolean` |

### 3.2 ホームページコンポーネント

| コンポーネント | 場所 | 役割 | 主な props |
|--------------|------|------|---------|
| **HeroSection** | `components/HeroSection.tsx` | ヒーロースライド、ランキング概要、お知らせ | なし |
| **NewReleasesSection** | `components/NewReleasesSection.tsx` | 注目の新作（スマホのみ） | なし |
| **MiddleRowSection** | `components/MiddleRowSection.tsx` | 4カラム概要（PC のみ） | なし |
| **SaleSection** | `components/SaleSection.tsx` | セール情報セクション | なし |
| **DoujinSection** | `components/DoujinSection.tsx` | 同人ゲームセクション | なし |
| **PlayEnvironmentSection** | `components/PlayEnvironmentSection.tsx` | プレイ環境セクション | なし |
| **FeatureReviewGenreSection** | `components/FeatureReviewGenreSection.tsx` | 特集・レビュー・ジャンル下部セクション | なし |
| **FollowCTA** | `components/FollowCTA.tsx` | X/Twitter フォロー CTA | なし |

### 3.3 カードコンポーネント

| コンポーネント | 場所 | 役割 | 主な props |
|--------------|------|------|---------|
| **GameCard** | `components/GameCard.tsx` | 作品カード（小） | `item: GameCard` |
| **RankingCard** | `pages/Ranking.tsx` 内 | ランキングカード（2〜10位） | `item: RankingItem` |
| **RankOneCard** | `pages/Ranking.tsx` 内 | 1位カード（大） | `item: RankingItem` |
| **SaleCard** | `pages/Sale.tsx` 内 | セールカード | `item: SaleItem` |
| **ReviewCard** | `pages/Reviews.tsx` 内 | レビューカード | `item: Review` |
| **GenreCard** | `pages/Genres.tsx` 内 | ジャンルカード（3画像） | `item: Genre` |
| **FeatureCard** | `pages/Features.tsx` 内 | 特集カード | `item: Feature` |
| **DoujinGameCard** | `pages/Doujin.tsx` 内 | 同人ゲームカード | `item: DoujinGame` |
| **MakerCard** | `pages/Makers.tsx` 内 | メーカー/サークルカード | `item: Maker` |
| **EnvironmentProductCard** | `pages/Environment.tsx` 内 | 環境商品カード | `item: EnvironmentProduct` |

### 3.4 UI ユーティリティ

| コンポーネント | 場所 | 役割 | 主な props |
|--------------|------|------|---------|
| **SectionHeader** | `components/SectionHeader.tsx` | セクションタイトル | `icon: string`, `title: string`, `subtitle?: string`, `moreHref?: string`, `moreLabel?: string` |
| **CTAButton** | `pages/GameDetail.tsx` 内 | CTA ボタン | `label: string`, `onClick: () => void`, `isPrimary?: boolean` |
| **RatingBar** | `pages/GameDetail.tsx` 内 | レーティングバー | `label: string`, `value: number` |
| **WorkCard** | `pages/GameDetail.tsx` 内 | 関連作品カード | `work: { id, title, thumbnail, maker }` |
| **EnvCard** | `pages/GameDetail.tsx` 内 | 環境商品カード（詳細ページ） | `item: EnvironmentItem` |

### 3.5 その他

| コンポーネント | 場所 | 役割 |
|--------------|------|------|
| **ErrorBoundary** | `components/ErrorBoundary.tsx` | エラーハンドリング |
| **ThemeProvider** | `contexts/ThemeContext.tsx` | テーマ管理（現在は light 固定） |
| **Toaster** | shadcn/ui | トースト通知（Sonner） |

---

## 4. 仮データ構造

### 4.1 ヒーロースライド（HeroSlide）

```typescript
interface HeroSlide {
  id: number;                           // スライド ID
  title: string;                        // 作品タイトル
  catchcopy: string;                    // キャッチコピー
  subcopy: string;                      // サブコピー
  tags: string[];                       // ジャンルタグ
  releaseDate: string;                  // リリース日（YYYY/MM/DD）
  label: string;                        // ラベルテキスト（「今月のイチオシ！」等）
  labelType: "new" | "pickup" | "sale"; // ラベルタイプ
  thumbnail: string;                    // サムネイル URL
  href: string;                         // リンク先（現在は "#"）
}
```

**データ例**:
```json
{
  "id": 1,
  "title": "サクラノ詩 -桜の森の下を歩む-",
  "catchcopy": "君と紡ぐ、特別な時間。",
  "subcopy": "優しくて、あたたかい物語がここにある。",
  "tags": ["学園", "恋愛", "ピュア", "Live2D"],
  "releaseDate": "2024/05/31",
  "label": "今月のイチオシ！",
  "labelType": "pickup",
  "thumbnail": "https://images.unsplash.com/...",
  "href": "#"
}
```

### 4.2 作品詳細（GameDetail）

```typescript
interface GameDetail {
  id: number;                           // 作品 ID
  title: string;                        // 作品タイトル
  maker: string;                        // メーカー/サークル名
  releaseDate: string;                  // リリース日
  price: number;                        // 価格（数値）
  rating: number;                       // 総合評価（0-5）
  ratingCount: number;                  // 評価数
  genres: string[];                     // ジャンル配列
  thumbnail: string;                    // サムネイル URL
  mainImage: string;                    // メイン画像 URL
  description: string;                  // 作品説明
  adminReview: string;                  // 管理人レビュー
  recommendedFor: string[];             // おすすめユーザー
  notRecommendedFor: string[];          // 非推奨ユーザー
  ratings: {                            // 詳細レーティング
    character: number;                  // キャラクター評価
    animation: number;                  // アニメーション評価
    atmosphere: number;                 // 雰囲気評価
    value: number;                      // コスパ評価
  };
  sampleImages: string[];               // サンプル画像 URL 配列
  relatedWorks: Array<{                 // 関連作品
    id: number;
    title: string;
    thumbnail: string;
    maker: string;
  }>;
  similarGenreWorks: Array<{            // 同ジャンル作品
    id: number;
    title: string;
    thumbnail: string;
    maker: string;
  }>;
  fanzaUrl?: string;                    // FANZA リンク（未実装）
  dlsiteUrl?: string;                   // DLsite リンク（未実装）
  sampleUrl?: string;                   // サンプル URL（未実装）
}
```

### 4.3 ランキング（RankingItem）

```typescript
interface RankingItem {
  rank: number;                         // ランク（1-10）
  id: number;                           // 作品 ID
  title: string;                        // 作品タイトル
  maker: string;                        // メーカー名
  thumbnail: string;                    // サムネイル URL
  tags: string[];                       // ジャンルタグ
  price: string;                        // 価格（文字列）
  rating: number;                       // 評価（0-5）
  likes: number;                        // いいね数
  views: number;                        // 閲覧数
  comment: string;                      // 短評
  releaseDate: string;                  // リリース日
}
```

### 4.4 セール（SaleItem）

```typescript
interface SaleItem {
  id: number;                           // セール ID
  title: string;                        // 作品タイトル
  maker: string;                        // メーカー名
  thumbnail: string;                    // サムネイル URL
  tags: string[];                       // ジャンルタグ
  originalPrice: string;                // 定価
  salePrice: string;                    // セール価格
  discountPercent: number;              // 割引率（%）
  rating: number;                       // 評価
  likes: number;                        // いいね数
  views: number;                        // 閲覧数
  saleEndDate: string;                  // セール終了日
  comment: string;                      // 短評
}
```

### 4.5 レビュー（Review）

```typescript
interface Review {
  id: number;                           // レビュー ID
  gameId: number;                       // 作品 ID
  title: string;                        // 作品タイトル
  maker: string;                        // メーカー名
  thumbnail: string;                    // サムネイル URL
  tags: string[];                       // ジャンルタグ
  rating: number;                       // 評価
  price: string;                        // 価格
  reviewText: string;                   // レビュー本文
  recommendedFor: string;               // おすすめ対象
  reviewDate: string;                   // レビュー日
  href: string;                         // リンク先
}
```

### 4.6 特集（Feature）

```typescript
interface Feature {
  id: number;                           // 特集 ID
  title: string;                        // 特集タイトル
  description: string;                  // 特集説明
  thumbnail: string;                    // サムネイル URL
  tags: string[];                       // タグ
  itemCount: number;                    // 作品数
  updatedAt: string;                    // 更新日
  href: string;                         // リンク先
  relatedGameIds: number[];             // 関連作品 ID 配列
}

interface FeatureGame {
  id: number;                           // 作品 ID
  title: string;                        // 作品タイトル
  maker: string;                        // メーカー名
  thumbnail: string;                    // サムネイル URL
  tags: string[];                       // ジャンルタグ
  rating: number;                       // 評価
  price: string;                        // 価格
  comment: string;                      // 短評
  href: string;                         // リンク先
}
```

### 4.7 ジャンル（Genre）

```typescript
interface Genre {
  id: string;                           // ジャンル ID（スラッグ）
  name: string;                         // ジャンル名
  description: string;                  // ジャンル説明
  count: number;                        // 作品数
  thumbnails: string[];                 // サムネイル URL 配列（3枚）
}
```

### 4.8 同人ゲーム（DoujinGame）

```typescript
interface DoujinGame {
  id: number;                           // 同人ゲーム ID
  title: string;                        // 作品タイトル
  circle: string;                       // サークル名
  thumbnail: string;                    // サムネイル URL
  tags: string[];                       // ジャンルタグ
  price: string;                        // 価格
  rating: number;                       // 評価
  description: string;                  // 説明
  badges: DoujinBadge[];                // バッジ配列
  isSale: boolean;                      // セール中フラグ
  isSmartphoneSupported: boolean;       // スマホ対応フラグ
  isBrowserSupported: boolean;          // ブラウザ対応フラグ
  href: string;                         // リンク先
  fanzaUrl?: string;                    // FANZA リンク（未実装）
  dlsiteUrl?: string;                   // DLsite リンク（未実装）
}

type DoujinBadge = "同人" | "低価格" | "短時間" | "セール中" | "スマホ対応" | "ブラウザ対応" | "手軽";
```

### 4.9 メーカー/サークル（Maker）

```typescript
interface Maker {
  id: number;                           // メーカー ID
  name: string;                         // メーカー/サークル名
  type: "maker" | "circle";             // タイプ
  logo: string;                         // ロゴ URL
  thumbnail: string;                    // サムネイル URL
  description: string;                  // 説明
  tags: string[];                       // タグ
  itemCount: number;                    // 作品数
  representativeGameIds: number[];      // 代表作品 ID 配列
  href: string;                         // リンク先
}
```

### 4.10 プレイ環境商品（EnvironmentProduct）

```typescript
interface EnvironmentProduct {
  id: number;                           // 商品 ID
  name: string;                         // 商品名
  category: "椅子・クッション" | "ヘッドホン" | "モニターライト" | "PC小物" | "スマホ周辺" | "VPN・セキュリティ";
  image: string;                        // 商品画像 URL
  price: string;                        // 価格
  description: string;                  // 説明
  recommendedFor: string;               // おすすめ対象
  affiliateProvider: AffiliateProvider; // アフィリエイト提供者
  amazonUrl?: string;                   // Amazon リンク（未実装）
  rakutenUrl?: string;                  // 楽天リンク（未実装）
  a8Url?: string;                       // A8 リンク（未実装）
  href: string;                         // リンク先
}

type AffiliateProvider = "fanza" | "dlsite" | "amazon" | "a8" | "none";
```

### 4.11 その他のデータ

**Notice（お知らせ）**
```typescript
interface Notice {
  id: number;
  date: string;        // MM/DD 形式
  text: string;        // お知らせテキスト
  href: string;        // リンク先
}
```

**GameCard（汎用作品カード）**
```typescript
interface GameCard {
  id: number;
  title: string;
  maker: string;
  thumbnail: string;
  tags: string[];
  description: string;
  label: string;
  labelType: "today" | "pickup" | "special";
  href: string;
}
```

---

## 5. 現在まだ未実装のもの

### 5.1 バックエンド・データベース

- [ ] **DB 接続**: PostgreSQL/MySQL などのデータベース接続
- [ ] **API 接続**: REST API または GraphQL の実装
- [ ] **自動取得**: 外部サイト（FANZA、DLsite 等）からの自動データ取得・更新

### 5.2 アフィリエイトリンク

- [ ] **FANZA 本番リンク**: 本番環境の FANZA API キー設定
- [ ] **DLsite 本番リンク**: 本番環境の DLsite API キー設定
- [ ] **Amazon 本番リンク**: 本番環境の Amazon Associates リンク
- [ ] **楽天本番リンク**: 本番環境の楽天アフィリエイトリンク
- [ ] **A8 本番リンク**: 本番環境の A8.net リンク

### 5.3 ユーザー機能

- [ ] **ログイン**: ユーザー認証機能
- [ ] **お気に入り本実装**: ローカルストレージではなく DB への保存
- [ ] **ユーザーレビュー**: ユーザーが投稿できるレビュー機能

### 5.4 お問い合わせ

- [ ] **お問い合わせ送信機能**: メール送信機能の実装

### 5.5 分析・トラッキング

- [ ] **Google Analytics**: GA4 の実装
- [ ] **Cookie 同意バナー**: GDPR/CCPA 対応の Cookie 同意
- [ ] **年齢確認モーダル**: 18+ コンテンツ閲覧前の年齢確認

### 5.6 本番デプロイ

- [ ] **本番デプロイ設定**: 環境変数、SSL 証明書、CDN 設定
- [ ] **ドメイン設定**: カスタムドメインの設定
- [ ] **SEO 最適化**: meta タグ、sitemap.xml、robots.txt の最適化

---

## 6. 今後の実装優先順位

### フェーズ 1: 本番公開準備（必須）

1. **年齢確認モーダル**
   - 18+ コンテンツサイトのため、訪問時に年齢確認を実施
   - ローカルストレージに確認済みフラグを保存

2. **Cookie 同意バナー**
   - GDPR/CCPA 対応
   - 分析ツール使用前に同意を取得

3. **SEO 最適化**
   - meta タグ（title, description, og:image 等）の動的生成
   - sitemap.xml の生成
   - robots.txt の設定
   - canonical タグの実装

4. **本番デプロイ設定**
   - 環境変数の分離（開発/本番）
   - SSL 証明書の設定
   - CDN キャッシュ戦略の設定

### フェーズ 2: アフィリエイトリンク管理（収益化）

1. **アフィリエイト管理システム**
   - 作品ごとにアフィリエイトリンク（FANZA、DLsite、Amazon 等）を管理
   - リンク先の切り替え機能

2. **FANZA API 統合**
   - 本番環境の FANZA API キー設定
   - 作品情報の自動取得（オプション）

3. **DLsite API 統合**
   - 本番環境の DLsite API キー設定
   - 同人ゲーム情報の自動取得（オプション）

4. **Amazon Associates 統合**
   - 本番環境の Amazon Associates ID 設定
   - プレイ環境商品リンクの自動生成

### フェーズ 3: 作品データ管理（スケーラビリティ）

1. **データベース構築**
   - PostgreSQL/MySQL の構築
   - スキーマ設計（作品、セール、レビュー、ユーザー等）

2. **管理画面の実装**
   - 作品情報の CRUD 操作
   - セール情報の管理
   - レビューの管理

3. **自動データ取得**
   - 定期的な外部サイトからのデータ取得
   - 価格・セール情報の自動更新

### フェーズ 4: SEO・アクセス解析

1. **Google Analytics 統合**
   - GA4 の実装
   - ユーザー行動の追跡

2. **検索エンジン最適化**
   - キーワード調査と最適化
   - 内部リンク構造の改善
   - ページスピード最適化

3. **ソーシャルメディア連携**
   - OG タグの最適化
   - Twitter Card の設定

### フェーズ 5: 自動更新・スケーリング

1. **定期更新スケジューラ**
   - 新作情報の自動取得
   - セール情報の自動更新
   - ランキングの自動計算

2. **キャッシング戦略**
   - Redis キャッシュの導入
   - CDN キャッシュの最適化

3. **パフォーマンス最適化**
   - 画像最適化（WebP 変換等）
   - コード分割とレイジーローディング

### フェーズ 6: 収益改善

1. **ユーザー機能の拡充**
   - ログイン・ユーザー認証
   - お気に入り機能（DB 保存）
   - ユーザーレビュー投稿

2. **マネタイズ戦略**
   - 広告配置の最適化
   - アフィリエイト収益の最大化
   - プレミアム機能の検討

3. **ユーザー体験の向上**
   - 推奨エンジンの実装
   - パーソナライゼーション

---

## 7. 技術スタック

### フロントエンド

| 技術 | バージョン | 用途 |
|------|----------|------|
| React | 19.2.1 | UI フレームワーク |
| TypeScript | 5.6.3 | 型安全性 |
| Tailwind CSS | 4.1.14 | スタイリング |
| Vite | 7.1.7 | ビルドツール |
| Wouter | 3.3.5 | ルーティング |
| Radix UI | 最新 | UI コンポーネント |
| shadcn/ui | - | UI コンポーネントライブラリ |
| Sonner | 2.0.7 | トースト通知 |
| Framer Motion | 12.23.22 | アニメーション |
| React Hook Form | 7.64.0 | フォーム管理 |
| Zod | 4.1.12 | スキーマ検証 |
| Lucide React | 0.453.0 | アイコン |

### バックエンド（将来）

| 技術 | 用途 |
|------|------|
| Node.js + Express | サーバー |
| PostgreSQL / MySQL | データベース |
| Redis | キャッシング |
| Docker | コンテナ化 |

### デプロイ

| サービス | 用途 |
|---------|------|
| Manus | ホスティング（現在） |
| Vercel / Netlify | 代替ホスティング |
| AWS / GCP | スケーリング時 |

---

## 8. ファイル構成

```
client/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── __manus__/
│       ├── debug-collector.js
│       └── version.json
├── src/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── GameDetail.tsx
│   │   ├── Ranking.tsx
│   │   ├── Sale.tsx
│   │   ├── Genres.tsx
│   │   ├── Environment.tsx
│   │   ├── Reviews.tsx
│   │   ├── Features.tsx
│   │   ├── Doujin.tsx
│   │   ├── Makers.tsx
│   │   ├── Search.tsx
│   │   ├── Contact.tsx
│   │   ├── About.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   ├── Disclaimer.tsx
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── HeroSection.tsx
│   │   ├── NewReleasesSection.tsx
│   │   ├── MiddleRowSection.tsx
│   │   ├── SaleSection.tsx
│   │   ├── DoujinSection.tsx
│   │   ├── PlayEnvironmentSection.tsx
│   │   ├── FeatureReviewGenreSection.tsx
│   │   ├── FollowCTA.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── GameCard.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── ManusDialog.tsx
│   │   ├── Map.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── tabs.tsx
│   │       └── ... (shadcn/ui コンポーネント)
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   ├── useComposition.ts
│   │   ├── useMobile.tsx
│   │   └── usePersistFn.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── data/
│   │   └── mockData.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.ts
server/
├── index.ts
└── ... (将来のバックエンド)
shared/
├── const.ts
└── ... (共有型定義)
```

---

## 9. 開発ガイドライン

### 9.1 新しいページの追加

1. `client/src/pages/` に新しい `.tsx` ファイルを作成
2. `client/src/App.tsx` に Route を追加
3. `client/src/components/Header.tsx` の `navItems` にナビゲーション項目を追加（必要に応じて）

### 9.2 新しいコンポーネントの追加

1. `client/src/components/` に新しい `.tsx` ファイルを作成
2. TypeScript インターフェースで props を定義
3. Tailwind CSS でスタイリング（インラインスタイルは避ける）
4. `index.css` の CSS 変数を活用

### 9.3 スタイリング規則

- **色**: `index.css` の CSS 変数を使用（`oklch(...)` 形式）
- **スペーシング**: Tailwind の spacing scale を使用
- **ボーダー**: `border-border` クラスを使用
- **シャドウ**: 軽い影を使用（`shadow-sm`）
- **ボーダーラジアス**: `rounded-lg` または `rounded-xl` を使用

### 9.4 データ管理

- **モック データ**: `client/src/data/mockData.ts` で管理
- **API 連携**: 将来は `client/src/api/` ディレクトリを作成
- **ローカルストレージ**: `useEffect` + `localStorage` で管理

### 9.5 ルーティング

- **内部リンク**: `wouter` の `<Link>` コンポーネントを使用
- **プログラマティック遷移**: `useLocation` の `setLocation` を使用
- **URL パラメータ**: `useRoute` で取得

### 9.6 フォーム管理

- **React Hook Form** + **Zod** を使用
- バリデーションは Zod スキーマで定義
- エラーメッセージは日本語で表示

### 9.7 通知・トースト

- **Sonner** を使用（`toast()` 関数）
- 成功: `toast.success("メッセージ")`
- エラー: `toast.error("エラーメッセージ")`
- 情報: `toast("メッセージ")`

---

## 10. 注意事項

### 10.1 設計原則

- **既存デザインを大きく崩さない**: 白ベース、ピンクアクセント、カード型 UI を維持
- **スマホファースト**: 小画面で最適化してから PC 拡張
- **作品カード遷移**: すべての作品カードは `/game/:id` に正しく遷移
- **ページトップ表示**: ページ遷移時は `window.scrollTo(0, 0)` で上部から表示

### 10.2 パフォーマンス

- **画像最適化**: Unsplash URL に `?w=400&q=80` などのパラメータを付与
- **レイジーローディング**: `loading="lazy"` を img タグに付与
- **コード分割**: 大きなコンポーネントは動的インポートを検討

### 10.3 アクセシビリティ

- **alt テキスト**: すべての img タグに alt 属性を付与
- **キーボード操作**: フォーカス可能な要素は Tab キーで操作可能
- **コントラスト**: テキストと背景のコントラスト比は 4.5:1 以上

### 10.4 セキュリティ

- **XSS 対策**: ユーザー入力は必ず検証・サニタイズ
- **CSRF 対策**: フォーム送信時は CSRF トークンを使用（将来）
- **環境変数**: API キーは `.env` ファイルで管理

### 10.5 本番公開前のチェックリスト

- [ ] 年齢確認モーダルの実装
- [ ] Cookie 同意バナーの実装
- [ ] meta タグの最適化
- [ ] sitemap.xml の生成
- [ ] robots.txt の設定
- [ ] SSL 証明書の設定
- [ ] 環境変数の分離
- [ ] パフォーマンステストの実施
- [ ] クロスブラウザテストの実施
- [ ] モバイルデバイステストの実施

---

## 11. トラブルシューティング

### 11.1 よくある問題

**Q: ページ遷移時にスクロール位置がリセットされない**
- A: `GameDetail.tsx` のように `useEffect` で `window.scrollTo(0, 0)` を呼び出す

**Q: 画像が表示されない**
- A: Unsplash URL が正しいか確認。`?w=400&q=80` などのパラメータが付いているか確認

**Q: スタイルが反映されない**
- A: `index.css` の CSS 変数を使用しているか確認。Tailwind クラス名が正しいか確認

**Q: トースト通知が表示されない**
- A: `<Toaster />` が `App.tsx` に含まれているか確認

---

## 12. 参考資料

### 公式ドキュメント

- [React 公式](https://react.dev)
- [Tailwind CSS 公式](https://tailwindcss.com)
- [Wouter ドキュメント](https://github.com/molefrog/wouter)
- [shadcn/ui ドキュメント](https://ui.shadcn.com)
- [Sonner ドキュメント](https://sonner.emilkowal.ski)

### 関連ファイル

- `README.md`: プロジェクト概要
- `package.json`: 依存関係
- `vite.config.ts`: Vite 設定
- `tailwind.config.ts`: Tailwind 設定
- `tsconfig.json`: TypeScript 設定

---

**最終更新**: 2026年5月28日  
**メンテナー**: エロゲ図鑑 開発チーム
