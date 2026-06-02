// エロゲ図鑑 — 仮データ (mockData)
// 後からFANZA/DLsite/Amazon/A8などのアフィリエイトに対応できる構造
// ==========================================================

export type AffiliateProvider = "fanza" | "dlsite" | "amazon" | "a8" | "none";
export type LinkType = "affiliate" | "review" | "feature" | "external";

// ヒーロースライド
export interface HeroSlide {
  id: number;
  title: string;
  catchcopy: string;
  subcopy: string;
  tags: string[];
  releaseDate: string;
  label: string;
  labelType: "new" | "pickup" | "sale";
  thumbnail: string;
  href: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "サクラノ詩 -桜の森の下を歩む-",
    catchcopy: "君と紡ぐ、特別な時間。",
    subcopy: "優しくて、あたたかい物語がここにある。",
    tags: ["学園", "恋愛", "ピュア", "Live2D"],
    releaseDate: "2024/05/31",
    label: "今月のイチオシ！",
    labelType: "pickup",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    href: "#",
  },
  {
    id: 2,
    title: "アマカノ2",
    catchcopy: "雪解けの季節に、恋が芽吹く。",
    subcopy: "泣けて、甘くて、心に残る純愛ストーリー。",
    tags: ["純愛", "泣きゲー", "冬", "フルボイス"],
    releaseDate: "2024/06/14",
    label: "新作",
    labelType: "new",
    thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80",
    href: "#",
  },
  {
    id: 3,
    title: "恋するコロと魔法のコトバ",
    catchcopy: "魔法が解けても、この気持ちは本物。",
    subcopy: "切なくて優しい、心に響くラブストーリー。",
    tags: ["ファンタジー", "恋愛", "泣きゲー"],
    releaseDate: "2024/06/28",
    label: "注目作",
    labelType: "pickup",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    href: "#",
  },
];



// お知らせ
export interface Notice {
  id: number;
  date: string;
  text: string;
  href: string;
}

export const notices: Notice[] = [
  { id: 1, date: "05/24", text: "新作レビューを追加しました", href: "#" },
  { id: 2, date: "05/23", text: "ランキングを更新しました", href: "#" },
  { id: 3, date: "05/22", text: "特集ページを公開しました", href: "#" },
];

export const adminNote = "今月は注目の新作が多めです！週末にじっくり遊ぶ作品を探している方はぜひランキングもチェックしてみてください。";

// 注目の新作
export interface GameCard {
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

export const newReleases: GameCard[] = [
  {
    id: 1,
    title: "サクラノ詩 -桜の森の下を歩む-",
    maker: "HOOKSOFT",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80",
    tags: ["甘々", "Live2D"],
    description: "泣ける、甘い、優しい。すべてが詰まった名作。",
    label: "本日発売！",
    labelType: "today",
    href: "#",
  },
  {
    id: 2,
    title: "アマカノ2",
    maker: "あざらしそふと",
    thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=80",
    tags: ["イチャラブ", "学園"],
    description: "もっと近くに、もっと遠く。ドキドキが止まらない！",
    label: "イチャラブの極み",
    labelType: "pickup",
    href: "#",
  },
  {
    id: 3,
    title: "天使☆騒々 RE-BOOT!",
    maker: "ゆずソフト",
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80",
    tags: ["コメディ", "学園"],
    description: "笑って泣いて、たまにえっち。テンポ最強コメディ！",
    label: "駄天使に悩まされる",
    labelType: "special",
    href: "#",
  },
  {
    id: 4,
    title: "恋するコロと魔法のコトバ",
    maker: "まどそふと",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
    tags: ["純愛", "泣きゲー"],
    description: "切なくて優しい。心に残る物語。",
    label: "純愛・必泣",
    labelType: "pickup",
    href: "#",
  },
  {
    id: 5,
    title: "ハミダシクリエイティブ♭",
    maker: "まどそふと",
    thumbnail: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&q=80",
    tags: ["コメディ", "イチャラブ"],
    description: "個性的なキャラが織りなす、笑いと恋の物語。",
    label: "個性派揃い",
    labelType: "pickup",
    href: "#",
  },
];

// セール

// 環境・アイテム
export type DoujinBadge = "同人" | "低価格" | "短時間" | "セール中" | "スマホ対応" | "ブラウザ対応" | "手軽";

export interface EnvironmentItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  price: string;
}

export const environmentItems: EnvironmentItem[] = [
  { id: 1, title: "ASUS ROG Ally", category: "ゲーミング機", thumbnail: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=200&q=80", description: "携帯ゲーミング機の最高峰。快適にプレイできます。", price: "¥79,800" },
  { id: 2, title: "BenQ ScreenBar Halo", category: "ヘッドホン", thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80", description: "夜間のプレイに最適な照明。目に優しい。", price: "¥18,900" },
  { id: 3, title: "Audio-Technica ATH-M50x", category: "ヘッドホン", thumbnail: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=200&q=80", description: "プロ向けヘッドホン。音質最高。", price: "¥15,800" },
  { id: 4, title: "GTOP ゲーミングチェア", category: "ゲーミング機", thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80", description: "長時間のプレイに最適。快適性抜群。", price: "¥21,800" },
  { id: 5, title: "Dell UltraSharp 27", category: "モニター", thumbnail: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&q=80", description: "4K対応の高品質モニター。映像美を堪能。", price: "¥45,000" },
];

// 同人ゲーム
export interface DoujinGame {
  id: number;
  title: string;
  circle: string;
  thumbnail: string;
  price: string;
  description: string;
  badges: DoujinBadge[];
  href: string;
}



// 作品詳細ページ用データ
export interface GameDetail {
  id: number;
  title: string;
  maker: string;
  releaseDate: string;
  price: number;
  rating: number;
  ratingCount: number;
  genres: string[];
  thumbnail: string;
  mainImage: string;
  description: string;
  adminReview: string;
  recommendedFor: string[];
  notRecommendedFor: string[];
  ratings: {
    character: number;
    animation: number;
    atmosphere: number;
    value: number;
  };
  sampleImages: string[];
  relatedWorks: Array<{ id: number; title: string; thumbnail: string; maker: string }>;
  similarGenreWorks: Array<{ id: number; title: string; thumbnail: string; maker: string }>;
  fanzaUrl?: string;
  dlsiteUrl?: string;
  sampleUrl?: string;
}

export const gameDetails: GameDetail[] = [
  {
    id: 1,
    title: "サクラノ詩 -桜の樹の下を歩む-",
    maker: "HOOKSOFT",
    releaseDate: "2024/05/31",
    price: 8800,
    rating: 4.8,
    ratingCount: 1256,
    genres: ["恋愛", "Live2D", "学園"],
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80",
    mainImage: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    description: "春の桜を背景に、主人公とヒロインたちが紡ぐ恋愛物語。Live2Dアニメーションでキャラクターが生き生きと動く。メインシナリオから特典シーンまで、幸せに満ちた二人の時間を描いた作品。",
    adminReview: "Live2Dの動きが本当に素晴らしい。キャラクターが生き生きしていて、見ているだけで時間が経つのを忘れてしまいます。シナリオも個性的で、推し推しできる作品です。",
    recommendedFor: [
      "Live2Dアニメーション好きな人",
      "キャラクターの動きを楽しみたい人",
      "恋愛ゲーム初心者",
      "じっくり遊びたい人",
    ],
    notRecommendedFor: [
      "ストーリーをガッツリ求める人",
      "短時間でクリアしたい人",
    ],
    ratings: {
      character: 5,
      animation: 5,
      atmosphere: 4.5,
      value: 4.5,
    },
    sampleImages: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=80",
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&q=80",
    ],
    relatedWorks: [
      { id: 2, title: "アマカノ2", thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=200&q=80", maker: "あざらしそふと" },
      { id: 3, title: "天使・緑々 RE-BOOT!", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&q=80", maker: "ゆずソフト" },
      { id: 4, title: "恋するココロと魔法のコトバ", thumbnail: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=200&q=80", maker: "まどそふと" },
    ],
    similarGenreWorks: [
      { id: 5, title: "ハミダククリエイティブプラス", thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&q=80", maker: "まどそふと" },
      { id: 2, title: "アマカノ2", thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=200&q=80", maker: "あざらしそふと" },
    ],
    fanzaUrl: "#",
    dlsiteUrl: "#",
    sampleUrl: "#",
  },
  {
    id: 2,
    title: "アマカノ2",
    maker: "あざらしそふと",
    releaseDate: "2024/06/14",
    price: 7700,
    rating: 4.6,
    ratingCount: 982,
    genres: ["イチャラブ", "学園", "純愛"],
    thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=80",
    mainImage: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80",
    description: "甘めの雰囲気が強い作品。キャラとの距離感が近くて、イチャラブ系が好きなら刺さりやすいです。フルボイスで没入感も抜群。",
    adminReview: "甘めの雰囲気が強い作品。キャラとの距離感が近くて、イチャラブ系が好きなら刺さりやすいです。",
    recommendedFor: [
      "イチャラブが好きな人",
      "甘い雰囲気が好きな人",
      "フルボイス作品が好きな人",
      "キャラとの距離感が近い作品が好きな人",
    ],
    notRecommendedFor: [
      "シリアスな展開を求める人",
      "短編を求める人",
    ],
    ratings: {
      character: 4.8,
      animation: 4.5,
      atmosphere: 4.7,
      value: 4.4,
    },
    sampleImages: [
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
    ],
    relatedWorks: [
      { id: 1, title: "サクラノ詩 -桜の樹の下を歩む-", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&q=80", maker: "HOOKSOFT" },
      { id: 4, title: "恋するココロと魔法のコトバ", thumbnail: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=200&q=80", maker: "まどそふと" },
      { id: 5, title: "ハミダククリエイティブプラス", thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&q=80", maker: "まどそふと" },
    ],
    similarGenreWorks: [
      { id: 1, title: "サクラノ詩 -桜の樹の下を歩む-", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&q=80", maker: "HOOKSOFT" },
      { id: 3, title: "天使・緑々 RE-BOOT!", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&q=80", maker: "ゆずソフト" },
    ],
    fanzaUrl: "#",
    dlsiteUrl: "#",
    sampleUrl: "#",
  },
  {
    id: 3,
    title: "天使☆騒々 RE-BOOT!",
    maker: "ゆずソフト",
    releaseDate: "2024/06/07",
    price: 8800,
    rating: 4.5,
    ratingCount: 871,
    genres: ["コメディ", "学園", "恋愛"],
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80",
    mainImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    description: "笑って泣いて、たまにえっち。テンポ最強コメディゲーム。個性的なキャラクターたちが織りなす、予測不能なストーリー。",
    adminReview: "笑いとテンポが最高。個性的なキャラが好きならハマること間違いなし。",
    recommendedFor: [
      "コメディゲームが好きな人",
      "個性的なキャラが好きな人",
      "テンポの良い作品が好きな人",
      "笑える作品を求める人",
    ],
    notRecommendedFor: [
      "シリアスな展開を求める人",
      "感動系を求める人",
    ],
    ratings: {
      character: 4.7,
      animation: 4.3,
      atmosphere: 4.4,
      value: 4.5,
    },
    sampleImages: [
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80",
    ],
    relatedWorks: [
      { id: 1, title: "サクラノ詩 -桜の樹の下を歩む-", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&q=80", maker: "HOOKSOFT" },
      { id: 5, title: "ハミダククリエイティブプラス", thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&q=80", maker: "まどそふと" },
      { id: 2, title: "アマカノ2", thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=200&q=80", maker: "あざらしそふと" },
    ],
    similarGenreWorks: [
      { id: 5, title: "ハミダククリエイティブプラス", thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&q=80", maker: "まどそふと" },
      { id: 2, title: "アマカノ2", thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=200&q=80", maker: "あざらしそふと" },
    ],
    fanzaUrl: "#",
    dlsiteUrl: "#",
    sampleUrl: "#",
  },
  {
    id: 4,
    title: "恋するコロと魔法のコトバ",
    maker: "まどそふと",
    releaseDate: "2024/06/28",
    price: 7700,
    rating: 4.7,
    ratingCount: 654,
    genres: ["ファンタジー", "恋愛", "泣きゲー"],
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
    mainImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    description: "魔法が解けても、この気持ちは本物。切なくて優しい、心に残るラブストーリー。",
    adminReview: "切なくて優しい。心に残る物語。純愛好きなら必プレイ。",
    recommendedFor: [
      "純愛が好きな人",
      "ファンタジーが好きな人",
      "泣きゲーが好きな人",
      "感動系を求める人",
    ],
    notRecommendedFor: [
      "コメディを求める人",
      "短編を求める人",
    ],
    ratings: {
      character: 4.8,
      animation: 4.6,
      atmosphere: 4.8,
      value: 4.5,
    },
    sampleImages: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=80",
    ],
    relatedWorks: [
      { id: 1, title: "サクラノ詩 -桜の樹の下を歩む-", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&q=80", maker: "HOOKSOFT" },
      { id: 2, title: "アマカノ2", thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=200&q=80", maker: "あざらしそふと" },
      { id: 5, title: "ハミダククリエイティブプラス", thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&q=80", maker: "まどそふと" },
    ],
    similarGenreWorks: [
      { id: 1, title: "サクラノ詩 -桜の樹の下を歩む-", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&q=80", maker: "HOOKSOFT" },
      { id: 5, title: "ハミダククリエイティブプラス", thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&q=80", maker: "まどそふと" },
    ],
    fanzaUrl: "#",
    dlsiteUrl: "#",
    sampleUrl: "#",
  },
  {
    id: 5,
    title: "ハミダシクリエイティブ♭",
    maker: "まどそふと",
    releaseDate: "2024/05/10",
    price: 7700,
    rating: 4.4,
    ratingCount: 612,
    genres: ["コメディ", "イチャラブ", "学園"],
    thumbnail: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&q=80",
    mainImage: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&q=80",
    description: "個性的なキャラが織りなす、笑いと恋の物語。",
    adminReview: "個性的なキャラが好きならハマること間違いなし。",
    recommendedFor: [
      "個性的なキャラが好きな人",
      "コメディとイチャラブの両立を求める人",
      "学園ものが好きな人",
    ],
    notRecommendedFor: [
      "シリアスな展開を求める人",
    ],
    ratings: {
      character: 4.6,
      animation: 4.2,
      atmosphere: 4.3,
      value: 4.4,
    },
    sampleImages: [
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80",
    ],
    relatedWorks: [
      { id: 2, title: "アマカノ2", thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=200&q=80", maker: "あざらしそふと" },
      { id: 3, title: "天使・緑々 RE-BOOT!", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&q=80", maker: "ゆずソフト" },
      { id: 1, title: "サクラノ詩 -桜の樹の下を歩む-", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&q=80", maker: "HOOKSOFT" },
    ],
    similarGenreWorks: [
      { id: 3, title: "天使・緑々 RE-BOOT!", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&q=80", maker: "ゆずソフト" },
      { id: 2, title: "アマカノ2", thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=200&q=80", maker: "あざらしそふと" },
    ],
    fanzaUrl: "#",
    dlsiteUrl: "#",
    sampleUrl: "#",
  },
];

// 後方互換性: gameDetail（最初の作品）
export const gameDetail = gameDetails[0];




// ランキング
export interface RankingItem {
  rank: number;
  id: number;
  title: string;
  maker: string;
  thumbnail: string;
  tags: string[];
  price: string;
  rating: number;
  likes: number;
  views: number;
  comment: string;
  releaseDate: string;
}

export const rankingItems: RankingItem[] = [
  {
    rank: 1,
    id: 1,
    title: "サクラノ詩 -桜の森の下を歩む-",
    maker: "HOOKSOFT",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80",
    tags: ["学園", "恋愛", "ピュア", "Live2D"],
    price: "¥8,800",
    rating: 4.8,
    likes: 1256,
    views: 8420,
    comment: "優しくて、あたたかい物語。キャラとの絆が深い。",
    releaseDate: "2024/05/31",
  },
  {
    rank: 2,
    id: 2,
    title: "アマカノ2",
    maker: "あぐりぐ",
    thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=80",
    tags: ["純愛", "泣きゲー", "冬", "フルボイス"],
    price: "¥7,920",
    rating: 4.6,
    likes: 982,
    views: 6150,
    comment: "泣ける純愛ストーリー。冬の雰囲気が最高。",
    releaseDate: "2024/06/14",
  },
  {
    rank: 3,
    id: 3,
    title: "恋するコロと魔法のコトバ",
    maker: "ハーモニー",
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80",
    tags: ["ファンタジー", "恋愛", "冒険"],
    price: "¥6,600",
    rating: 4.4,
    likes: 871,
    views: 5230,
    comment: "魔法と恋愛が絡み合う冒険ストーリー。",
    releaseDate: "2024/05/10",
  },
  {
    rank: 4,
    id: 4,
    title: "天使と騎士 RE-BOOT!",
    maker: "ゆぞソフト",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
    tags: ["ファンタジー", "冒険", "Live2D"],
    price: "¥5,500",
    rating: 4.3,
    likes: 654,
    views: 4120,
    comment: "壮大なファンタジー世界。やり込み要素が豊富。",
    releaseDate: "2024/04/20",
  },
  {
    rank: 5,
    id: 5,
    title: "ハミダシクリエイティブ",
    maker: "ハミダシ",
    thumbnail: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&q=80",
    tags: ["コメディ", "学園", "ギャグ"],
    price: "¥4,400",
    rating: 4.2,
    likes: 612,
    views: 3890,
    comment: "笑える場面が満載。気軽に楽しめる作品。",
    releaseDate: "2024/03/15",
  },
  {
    rank: 6,
    id: 1,
    title: "サクラノ詩 -桜の森の下を歩む-",
    maker: "HOOKSOFT",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80",
    tags: ["学園", "恋愛", "ピュア"],
    price: "¥8,800",
    rating: 4.8,
    likes: 1256,
    views: 8420,
    comment: "優しくて、あたたかい物語。キャラとの絆が深い。",
    releaseDate: "2024/05/31",
  },
  {
    rank: 7,
    id: 2,
    title: "アマカノ2",
    maker: "あぐりぐ",
    thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=80",
    tags: ["純愛", "泣きゲー", "冬"],
    price: "¥7,920",
    rating: 4.6,
    likes: 982,
    views: 6150,
    comment: "泣ける純愛ストーリー。冬の雰囲気が最高。",
    releaseDate: "2024/06/14",
  },
  {
    rank: 8,
    id: 3,
    title: "恋するコロと魔法のコトバ",
    maker: "ハーモニー",
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80",
    tags: ["ファンタジー", "恋愛", "冒険"],
    price: "¥6,600",
    rating: 4.4,
    likes: 871,
    views: 5230,
    comment: "魔法と恋愛が絡み合う冒険ストーリー。",
    releaseDate: "2024/05/10",
  },
  {
    rank: 9,
    id: 4,
    title: "天使と騎士 RE-BOOT!",
    maker: "ゆぞソフト",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
    tags: ["ファンタジー", "冒険"],
    price: "¥5,500",
    rating: 4.3,
    likes: 654,
    views: 4120,
    comment: "壮大なファンタジー世界。やり込み要素が豊富。",
    releaseDate: "2024/04/20",
  },
  {
    rank: 10,
    id: 5,
    title: "ハミダシクリエイティブ",
    maker: "ハミダシ",
    thumbnail: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&q=80",
    tags: ["コメディ", "学園"],
    price: "¥4,400",
    rating: 4.2,
    likes: 612,
    views: 3890,
    comment: "笑える場面が満載。気軽に楽しめる作品。",
    releaseDate: "2024/03/15",
  },
];

// セール作品データ
export interface SaleItem {
  id: number;
  title: string;
  maker: string;
  thumbnail: string;
  tags: string[];
  originalPrice: string;
  salePrice: string;
  discountPercent: number;
  rating: number;
  likes: number;
  views: number;
  saleEndDate: string;
  comment: string;
}

export const saleItems: SaleItem[] = [
  {
    id: 1,
    title: "サクラノ詩 -桜の森の下を歩む-",
    maker: "HOOKSOFT",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80",
    tags: ["学園", "恋愛", "ピュア"],
    originalPrice: "¥8,800",
    salePrice: "¥4,400",
    discountPercent: 50,
    rating: 4.8,
    likes: 1256,
    views: 8920,
    saleEndDate: "2026/05/27",
    comment: "優しい物語が心に残る。50%OFFは必見。",
  },
  {
    id: 2,
    title: "アマカノ2",
    maker: "あさくらぐ",
    thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=80",
    tags: ["純愛", "泣きゲー", "フルボイス"],
    originalPrice: "¥7,700",
    salePrice: "¥3,850",
    discountPercent: 50,
    rating: 4.6,
    likes: 982,
    views: 6540,
    saleEndDate: "2026/05/27",
    comment: "泣ける純愛ストーリー。セール中がお得。",
  },
  {
    id: 3,
    title: "恋するコロと魔法のコトバ",
    maker: "ハーモニー",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&q=80",
    tags: ["ファンタジー", "恋愛", "魔法"],
    originalPrice: "¥6,600",
    salePrice: "¥3,300",
    discountPercent: 50,
    rating: 4.4,
    likes: 871,
    views: 5230,
    saleEndDate: "2026/05/28",
    comment: "ファンタジー好きなら必プレイ。",
  },
  {
    id: 4,
    title: "天使と騎士 RE-BOOT!",
    maker: "ねもソフト",
    thumbnail: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&q=80",
    tags: ["ファンタジー", "冒険", "Live2D"],
    originalPrice: "¥8,800",
    salePrice: "¥4,400",
    discountPercent: 50,
    rating: 4.5,
    likes: 654,
    views: 4120,
    saleEndDate: "2026/05/29",
    comment: "壮大なファンタジー。やり込み要素が豊富。",
  },
  {
    id: 5,
    title: "ハミダシクリエイティブ",
    maker: "ハミダシ",
    thumbnail: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&q=80",
    tags: ["コメディ", "学園"],
    originalPrice: "¥5,500",
    salePrice: "¥2,750",
    discountPercent: 50,
    rating: 4.2,
    likes: 612,
    views: 3890,
    saleEndDate: "2026/05/30",
    comment: "笑える場面が満載。気軽に楽しめる。",
  },
  {
    id: 6,
    title: "放課後の秘密基地",
    maker: "FAVORITE",
    thumbnail: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
    tags: ["学園", "コメディ", "恋愛"],
    originalPrice: "¥6,600",
    salePrice: "¥1,980",
    discountPercent: 70,
    rating: 4.3,
    likes: 745,
    views: 4560,
    saleEndDate: "2026/05/27",
    comment: "70%OFFは本日終了。見逃し厳禁。",
  },
  {
    id: 7,
    title: "魔法使いと恋の物語",
    maker: "HOOKSOFT",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&q=80",
    tags: ["ファンタジー", "魔法", "恋愛"],
    originalPrice: "¥7,700",
    salePrice: "¥3,080",
    discountPercent: 60,
    rating: 4.7,
    likes: 1100,
    views: 7200,
    saleEndDate: "2026/05/28",
    comment: "魔法ファンタジー。60%OFFで今がお得。",
  },
  {
    id: 8,
    title: "冬の恋、春の別れ",
    maker: "あさくらぐ",
    thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=80",
    tags: ["純愛", "季節", "フルボイス"],
    originalPrice: "¥6,600",
    salePrice: "¥2,640",
    discountPercent: 60,
    rating: 4.5,
    likes: 890,
    views: 5680,
    saleEndDate: "2026/05/29",
    comment: "季節の移ろいと恋の物語。",
  },
  {
    id: 9,
    title: "ドリームワールド",
    maker: "ドリームソフト",
    thumbnail: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&q=80",
    tags: ["ファンタジー", "冒険", "Live2D"],
    originalPrice: "¥8,800",
    salePrice: "¥2,640",
    discountPercent: 70,
    rating: 4.6,
    likes: 1050,
    views: 6890,
    saleEndDate: "2026/05/27",
    comment: "70%OFFは本日終了。大型セール。",
  },
  {
    id: 10,
    title: "同人ゲーム傑作選",
    maker: "同人サークル",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&q=80",
    tags: ["同人", "恋愛", "コメディ"],
    originalPrice: "¥3,300",
    salePrice: "¥1,650",
    discountPercent: 50,
    rating: 4.1,
    likes: 520,
    views: 3240,
    saleEndDate: "2026/05/30",
    comment: "同人作品も充実。50%OFFでお得。",
  },
];


// ===== ジャンル =====
export interface Genre {
  id: string;
  name: string;
  description: string;
  count: number;
  thumbnails: string[];
}

export const genres: Genre[] = [
  {
    id: "pure-love",
    name: "純愛",
    description: "やさしい雰囲気やキャラとの関係性を重視した作品。",
    count: 24,
    thumbnails: [
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=200&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=200&q=80",
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=200&q=80",
    ],
  },
  {
    id: "school",
    name: "学園",
    description: "学園を舞台にした青春ストーリー。友情と恋愛が交錯する。",
    count: 18,
    thumbnails: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=200&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=200&q=80",
    ],
  },
  {
    id: "live2d",
    name: "Live2D",
    description: "Live2D技術を使用した滑らかなアニメーション表現。",
    count: 15,
    thumbnails: [
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=200&q=80",
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=200&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=200&q=80",
    ],
  },
  {
    id: "doujin",
    name: "同人ゲーム",
    description: "個性的な同人サークルによる創意工夫あふれた作品。",
    count: 32,
    thumbnails: [
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=200&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=200&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=200&q=80",
    ],
  },
  {
    id: "crying",
    name: "泣きゲー",
    description: "感動的なストーリーで心を揺さぶる作品。",
    count: 12,
    thumbnails: [
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=200&q=80",
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=200&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=200&q=80",
    ],
  },
  {
    id: "icharabu",
    name: "イチャラブ",
    description: "キャラとの甘い関係性を重視したラブコメ作品。",
    count: 20,
    thumbnails: [
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=200&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=200&q=80",
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=200&q=80",
    ],
  },
  {
    id: "fantasy",
    name: "ファンタジー",
    description: "魔法や冒険が満載の異世界ストーリー。",
    count: 22,
    thumbnails: [
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=200&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=200&q=80",
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=200&q=80",
    ],
  },
  {
    id: "asmr",
    name: "ASMR・音声",
    description: "音声表現を重視した没入感のある作品。",
    count: 8,
    thumbnails: [
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=200&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=200&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=200&q=80",
    ],
  },
  {
    id: "comedy",
    name: "コメディ",
    description: "笑える場面が満載。気軽に楽しめる作品。",
    count: 16,
    thumbnails: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&q=80",
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=200&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=200&q=80",
    ],
  },
  {
    id: "sale",
    name: "セール中",
    description: "今だけお得にチェックできる作品。",
    count: 10,
    thumbnails: [
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=200&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=200&q=80",
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=200&q=80",
    ],
  },
];

// ジャンル別おすすめ作品（ジャンルごとに3～4件）
export interface GenreRecommendation {
  genreId: string;
  genreName: string;
  works: typeof gameDetails;
}

export const genreRecommendations: GenreRecommendation[] = [
  {
    genreId: "pure-love",
    genreName: "純愛",
    works: gameDetails.slice(0, 3),
  },
  {
    genreId: "live2d",
    genreName: "Live2D",
    works: gameDetails.slice(1, 4),
  },
  {
    genreId: "doujin",
    genreName: "同人ゲーム",
    works: gameDetails.slice(2, 5),
  },
  {
    genreId: "sale",
    genreName: "セール中",
    works: gameDetails.slice(3, 6),
  },
];


// プレイ環境商品
export interface EnvironmentProduct {
  id: number;
  name: string;
  category: "椅子・クッション" | "ヘッドホン" | "モニターライト" | "PC小物" | "スマホ周辺" | "VPN・セキュリティ";
  image: string;
  price: string;
  description: string;
  recommendedFor: string;
  affiliateProvider: AffiliateProvider;
  amazonUrl?: string;
  rakutenUrl?: string;
  a8Url?: string;
  href: string;
}

export const environmentProducts: EnvironmentProduct[] = [
  {
    id: 1,
    name: "Herman Miller Aeron Chair",
    category: "椅子・クッション",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
    price: "¥138,600",
    description: "長時間のゲームプレイに最適な人間工学設計の高機能チェア。腰痛対策に。",
    recommendedFor: "長時間ADV・ノベルゲームをプレイする人",
    affiliateProvider: "amazon",
    href: "#",
  },
  {
    id: 2,
    name: "Audio-Technica ATH-M40x",
    category: "ヘッドホン",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    price: "¥15,800",
    description: "音声作品や深夜プレイ向け。音の細かさを楽しみたい人に。",
    recommendedFor: "ASMR・音声作品をよく聴く人",
    affiliateProvider: "amazon",
    href: "#",
  },
  {
    id: 3,
    name: "BenQ e-Reading Lamp",
    category: "モニターライト",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=500&q=80&auto=format&fit=crop",
    price: "¥8,900",
    description: "深夜プレイでも目に優しい。ブルーライト軽減で睡眠を妨げない。",
    recommendedFor: "深夜にゲームをプレイする人",
    affiliateProvider: "amazon",
    href: "#",
  },
  {
    id: 4,
    name: "Logicool MX Master 3S",
    category: "PC小物",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
    price: "¥11,990",
    description: "高精度マウス。長時間使用でも疲れにくい。ゲームプレイの快適性向上。",
    recommendedFor: "PC周りを整えたい人",
    affiliateProvider: "amazon",
    href: "#",
  },
  {
    id: 5,
    name: "iPad Pro 12.9インチ",
    category: "スマホ周辺",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
    price: "¥129,800～",
    description: "同人ゲーム・ノベルゲームを大画面で楽しめる。寝転びプレイに最適。",
    recommendedFor: "同人ゲーム・スマホゲームをよくプレイする人",
    affiliateProvider: "amazon",
    href: "#",
  },
  {
    id: 6,
    name: "Anker PowerCore 26800",
    category: "スマホ周辺",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    price: "¥3,999",
    description: "大容量モバイルバッテリー。長時間のゲームプレイも安心。",
    recommendedFor: "スマホでゲームをよくプレイする人",
    affiliateProvider: "amazon",
    href: "#",
  },
  {
    id: 7,
    name: "Elgato Key Light",
    category: "モニターライト",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80&auto=format&fit=crop",
    price: "¥19,980",
    description: "スマートLEDライト。色温度を自由に調整。深夜プレイに最適。",
    recommendedFor: "深夜プレイ・配信環境を整えたい人",
    affiliateProvider: "amazon",
    href: "#",
  },
  {
    id: 8,
    name: "Sennheiser HD 660S",
    category: "ヘッドホン",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
    price: "¥64,900",
    description: "高級ヘッドホン。音声作品の細かなニュアンスを完全に再現。",
    recommendedFor: "音質にこだわる人・ASMR好きな人",
    affiliateProvider: "amazon",
    href: "#",
  },
  {
    id: 9,
    name: "Keychron K2 Pro",
    category: "PC小物",
    image: "https://images.unsplash.com/photo-1587829191301-4b5556b1047e?w=500&q=80",
    price: "¥7,999",
    description: "ワイヤレスメカニカルキーボード。静音性に優れ、深夜プレイに最適。",
    recommendedFor: "深夜プレイ・PC周りを整えたい人",
    affiliateProvider: "amazon",
    href: "#",
  },
  {
    id: 10,
    name: "Dell S2721DGF",
    category: "PC小物",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    price: "¥39,800",
    description: "27インチ高リフレッシュレートモニター。ゲーム画面が美しく見える。",
    recommendedFor: "PC周りを整えたい人・画質にこだわる人",
    affiliateProvider: "amazon",
    href: "#",
  },
  {
    id: 11,
    name: "Noctua NH-D15",
    category: "PC小物",
    image: "https://images.unsplash.com/photo-1555617519-4b142712b81d?w=500&q=80",
    price: "¥9,980",
    description: "高性能CPUクーラー。PC温度を下げ、安定したプレイ環境を実現。",
    recommendedFor: "PC周りを整えたい人・長時間プレイする人",
    affiliateProvider: "amazon",
    href: "#",
  },
  {
    id: 12,
    name: "Anker Nano Power Bank",
    category: "スマホ周辺",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    price: "¥2,490",
    description: "コンパクトなモバイルバッテリー。持ち運びに最適。",
    recommendedFor: "スマホゲームをよくプレイする人",
    affiliateProvider: "amazon",
    href: "#",
  },
];

// 用途別おすすめ
export interface UseCaseCard {
  id: number;
  title: string;
  description: string;
  items: string[];
  icon: string;
}

export const useCaseCards: UseCaseCard[] = [
  {
    id: 1,
    title: "長時間ADV向け",
    description: "椅子、クッション、デスク周りを整える",
    items: ["椅子・クッション", "PC小物", "モニターライト"],
    icon: "🪑",
  },
  {
    id: 2,
    title: "深夜プレイ向け",
    description: "モニターライト、ヘッドホン、静音アイテム",
    items: ["モニターライト", "ヘッドホン", "PC小物"],
    icon: "🌙",
  },
  {
    id: 3,
    title: "ASMR・音声作品向け",
    description: "ヘッドホン、イヤホン、DACなど",
    items: ["ヘッドホン", "PC小物"],
    icon: "🎧",
  },
  {
    id: 4,
    title: "スマホ・同人ゲーム向け",
    description: "スマホスタンド、タブレットスタンド、充電環境",
    items: ["スマホ周辺", "PC小物"],
    icon: "📱",
  },
  {
    id: 5,
    title: "PC周りを整える",
    description: "モニター、キーボード、マウス、USBハブ",
    items: ["PC小物", "モニターライト"],
    icon: "🖥️",
  },
];

// レビュー
export interface Review {
  id: number;
  gameId: number;
  title: string;
  maker: string;
  thumbnail: string;
  tags: string[];
  rating: number;
  price: string;
  reviewText: string;
  recommendedFor: string;
  reviewDate: string;
  href: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    gameId: 1,
    title: "サクラノ詩 -桜の森の下を歩む-",
    maker: "HOOKSOFT",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
    tags: ["学園", "恋愛", "Live2D"],
    rating: 4.8,
    price: "8,800円",
    reviewText: "Live2Dの動きが良い。キャラの表情がちゃんと動くから、見てるだけで気持ちいい。シナリオ量は少なめだけど、その分雰囲気を楽しむゲーム。",
    recommendedFor: "Live2D好き・キャラ重視・雰囲気重視の人",
    reviewDate: "2024/05/28",
    href: "/game/1",
  },
  {
    id: 2,
    gameId: 2,
    title: "アマカノ2",
    maker: "あおぞら",
    thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&q=80",
    tags: ["純愛", "泣きゲー", "フルボイス"],
    rating: 4.6,
    price: "7,700円",
    reviewText: "前作未プレイでも大丈夫。ストーリーがちゃんと作られてて、キャラに感情移入しやすい。涙腺注意。",
    recommendedFor: "泣きゲー好き・純愛好き・ストーリー重視の人",
    reviewDate: "2024/05/26",
    href: "/game/2",
  },
  {
    id: 3,
    gameId: 3,
    title: "恋するコロと魔法のコトバ",
    maker: "ハーモニー",
    thumbnail: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
    tags: ["ファンタジー", "恋愛", "初心者向け"],
    rating: 4.4,
    price: "5,500円",
    reviewText: "短くてテンポいい。キャラが可愛いし、ビジュアルノベル初心者にもちょうどいい。気軽に遊べる。",
    recommendedFor: "初心者・短編好き・可愛いキャラ好きな人",
    reviewDate: "2024/05/24",
    href: "/game/3",
  },
  {
    id: 4,
    gameId: 4,
    title: "天使と紡ぐ RE-BOOT!",
    maker: "なぞ",
    thumbnail: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
    tags: ["ファンタジー", "冒険", "Live2D"],
    rating: 4.5,
    price: "6,600円",
    reviewText: "世界観がしっかりしてて、ゲームの中に引き込まれる感じ。Live2Dも動きがいい。ファンタジー好きなら刺さると思う。",
    recommendedFor: "世界観重視・ファンタジー好き・Live2D好きな人",
    reviewDate: "2024/05/22",
    href: "/game/4",
  },
  {
    id: 5,
    gameId: 5,
    title: "ハミダシクリエイティブ",
    maker: "ハミダシ",
    thumbnail: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    tags: ["同人ゲーム", "ギャグ", "短編"],
    rating: 4.3,
    price: "1,000円",
    reviewText: "同人とは思えないクオリティ。ギャグのセンスが良くて、笑える。1000円だし試す価値あり。",
    recommendedFor: "同人ゲーム好き・ギャグ好き・気軽に遊びたい人",
    reviewDate: "2024/05/20",
    href: "/game/5",
  },
  {
    id: 6,
    gameId: 6,
    title: "サクラノ詩 -桜の森の下を歩む-",
    maker: "HOOKSOFT",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
    tags: ["学園", "恋愛", "セール"],
    rating: 4.8,
    price: "4,400円（セール中）",
    reviewText: "セール価格だからお得。フルプライスでも買う価値ある作品。今買わないと後悔するかも。",
    recommendedFor: "セール狙い・コスパ重視・高クオリティ作品を探している人",
    reviewDate: "2024/05/18",
    href: "/game/6",
  },
  {
    id: 7,
    gameId: 7,
    title: "恋のミナモト",
    maker: "ビーグル",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    tags: ["恋愛", "ギャルゲー", "フルボイス"],
    rating: 4.2,
    price: "8,800円",
    reviewText: "キャラがちゃんと立ってる。ボイスも良くて、各ルートで違う話が楽しめる。ギャルゲー好きなら遊ぶべき。",
    recommendedFor: "ギャルゲー好き・キャラ重視・ボイス重視の人",
    reviewDate: "2024/05/16",
    href: "/game/7",
  },
  {
    id: 8,
    gameId: 8,
    title: "初心者向けビジュアルノベル",
    maker: "スターター",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
    tags: ["初心者向け", "学園", "短編"],
    rating: 4.1,
    price: "3,300円",
    reviewText: "ビジュアルノベル初めての人向け。ボリュームもちょうどいいし、ストーリーも分かりやすい。入門作に最適。",
    recommendedFor: "初心者・ビジュアルノベル未経験者・短編好きな人",
    reviewDate: "2024/05/14",
    href: "/game/8",
  },
  {
    id: 9,
    gameId: 9,
    title: "深夜の恋愛ゲーム",
    maker: "ナイトメア",
    thumbnail: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
    tags: ["恋愛", "サスペンス", "深夜"],
    rating: 4.7,
    price: "7,700円",
    reviewText: "深夜にプレイするのに最適な雰囲気。恋愛とサスペンスのバランスが良くて、先が気になる。予測できない展開。",
    recommendedFor: "深夜プレイ好き・サスペンス好き・ドキドキしたい人",
    reviewDate: "2024/05/12",
    href: "/game/9",
  },
  {
    id: 10,
    gameId: 10,
    title: "Live2D最高峰作品",
    maker: "ビジュアルスタジオ",
    thumbnail: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
    tags: ["Live2D", "ファンタジー", "高クオリティ"],
    rating: 4.9,
    price: "9,900円",
    reviewText: "Live2Dの動きがすごい。キャラが本当に動いてるみたいで、見てるだけで楽しい。ビジュアルノベルってここまで来たのかって感じ。",
    recommendedFor: "Live2D好き・ビジュアル重視・新しい体験を求める人",
    reviewDate: "2024/05/10",
    href: "/game/10",
  },
];

// 特集
export interface Feature {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  itemCount: number;
  updatedAt: string;
  href: string;
  relatedGameIds: number[];
}

export interface FeatureGame {
  id: number;
  title: string;
  maker: string;
  thumbnail: string;
  tags: string[];
  rating: number;
  price: string;
  comment: string;
  href: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "はじめてでも選びやすい初心者向け作品",
    description: "クセが強すぎず、雰囲気で楽しみやすい作品を中心にピックアップ。",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
    tags: ["初心者向け", "純愛", "学園"],
    itemCount: 10,
    updatedAt: "2024/05/28",
    href: "#",
    relatedGameIds: [1, 3, 8],
  },
  {
    id: 2,
    title: "今だけお得なセール作品まとめ",
    description: "割引率や評価を見ながら、今チェックしやすい作品をまとめました。",
    thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&q=80",
    tags: ["セール", "高評価", "期間限定"],
    itemCount: 12,
    updatedAt: "2024/05/27",
    href: "#",
    relatedGameIds: [2, 6, 7],
  },
  {
    id: 3,
    title: "実は同人ゲームも熱い",
    description: "低価格で手軽に遊びやすい同人ゲームを中心に紹介。",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
    tags: ["同人ゲーム", "低価格", "短時間"],
    itemCount: 8,
    updatedAt: "2024/05/26",
    href: "#",
    relatedGameIds: [5, 8],
  },
  {
    id: 4,
    title: "Live2D・アニメーション重視の注目作",
    description: "キャラの動きや演出を重視したい人向けの作品まとめ。",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
    tags: ["Live2D", "アニメーション", "キャラ重視"],
    itemCount: 9,
    updatedAt: "2024/05/25",
    href: "#",
    relatedGameIds: [1, 4, 10],
  },
  {
    id: 5,
    title: "泣ける・雰囲気重視の作品",
    description: "シナリオや空気感を重視して選びたい人向け。",
    thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&q=80",
    tags: ["泣きゲー", "雰囲気", "シナリオ"],
    itemCount: 7,
    updatedAt: "2024/05/24",
    href: "#",
    relatedGameIds: [2, 9],
  },
];

export const featureGames: FeatureGame[] = [
  {
    id: 1,
    title: "サクラノ詩 -桜の森の下を歩む-",
    maker: "HOOKSOFT",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
    tags: ["学園", "恋愛", "Live2D"],
    rating: 4.8,
    price: "8,800円",
    comment: "Live2Dの動きが良い。見ているだけで気持ちいい。",
    href: "/game/1",
  },
  {
    id: 2,
    title: "アマカノ2",
    maker: "あおぞら",
    thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&q=80",
    tags: ["純愛", "泣きゲー", "フルボイス"],
    rating: 4.6,
    price: "7,700円",
    comment: "ストーリーがちゃんと作られてて、キャラに感情移入しやすい。",
    href: "/game/2",
  },
  {
    id: 3,
    title: "恋するコロと魔法のコトバ",
    maker: "ハーモニー",
    thumbnail: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
    tags: ["ファンタジー", "恋愛", "初心者向け"],
    rating: 4.4,
    price: "5,500円",
    comment: "短くてテンポいい。初心者にもちょうどいい。",
    href: "/game/3",
  },
  {
    id: 4,
    title: "天使と紡ぐ RE-BOOT!",
    maker: "なぞ",
    thumbnail: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
    tags: ["ファンタジー", "冒険", "Live2D"],
    rating: 4.5,
    price: "6,600円",
    comment: "世界観がしっかりしてて、ゲームの中に引き込まれる。",
    href: "/game/4",
  },
  {
    id: 5,
    title: "ハミダシクリエイティブ",
    maker: "ハミダシ",
    thumbnail: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    tags: ["同人ゲーム", "ギャグ", "短編"],
    rating: 4.3,
    price: "1,000円",
    comment: "同人とは思えないクオリティ。1000円だし試す価値あり。",
    href: "/game/5",
  },
  {
    id: 6,
    title: "サクラノ詩 -桜の森の下を歩む-",
    maker: "HOOKSOFT",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
    tags: ["学園", "恋愛", "セール"],
    rating: 4.8,
    price: "4,400円（セール中）",
    comment: "セール価格だからお得。フルプライスでも買う価値ある。",
    href: "/game/6",
  },
  {
    id: 7,
    title: "恋のミナモト",
    maker: "ビーグル",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    tags: ["恋愛", "ギャルゲー", "フルボイス"],
    rating: 4.2,
    price: "8,800円",
    comment: "キャラがちゃんと立ってる。各ルートで違う話が楽しめる。",
    href: "/game/7",
  },
  {
    id: 8,
    title: "初心者向けビジュアルノベル",
    maker: "スターター",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
    tags: ["初心者向け", "学園", "短編"],
    rating: 4.1,
    price: "3,300円",
    comment: "ビジュアルノベル初心者にぴったり。気軽に遊べる。",
    href: "/game/8",
  },
  {
    id: 9,
    title: "深夜の恋愛ゲーム",
    maker: "ナイトメア",
    thumbnail: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
    tags: ["恋愛", "サスペンス", "深夜"],
    rating: 4.7,
    price: "7,700円",
    comment: "深夜にプレイするのに最適な雰囲気。先が気になる。",
    href: "/game/9",
  },
  {
    id: 10,
    title: "Live2D最高峰作品",
    maker: "ビジュアルスタジオ",
    thumbnail: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
    tags: ["Live2D", "ファンタジー", "高クオリティ"],
    rating: 4.9,
    price: "9,900円",
    comment: "Live2Dの動きがすごい。ビジュアルノベルの新しい可能性。",
    href: "/game/10",
  },
];

// 同人ゲーム
export interface DoujinGame {
  id: number;
  title: string;
  circle: string;
  thumbnail: string;
  tags: string[];
  price: string;
  rating: number;
  description: string;
  badges: DoujinBadge[];
  isSale: boolean;
  isSmartphoneSupported: boolean;
  isBrowserSupported: boolean;
  href: string;
  fanzaUrl?: string;
  dlsiteUrl?: string;
}

export const doujinGames: DoujinGame[] = [
  {
    id: 1,
    title: "ハミダシクリエイティブ",
    circle: "ハミダシ",
    thumbnail: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
    tags: ["ギャグ", "短編", "恋愛"],
    price: "1,000円",
    rating: 4.3,
    description: "同人とは思えないクオリティ。ギャグのセンスが良くて、笑える。",
    badges: ["同人", "低価格", "短時間"],
    isSale: false,
    isSmartphoneSupported: true,
    isBrowserSupported: true,
    href: "/game/5",
  },
  {
    id: 2,
    title: "ドリームサークル",
    circle: "ドリームチーム",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
    tags: ["純愛", "学園", "短編"],
    price: "800円",
    rating: 4.1,
    description: "手軽に遊べる純愛ゲーム。キャラクターが可愛い。",
    badges: ["同人", "低価格", "短時間", "スマホ対応"],
    isSale: false,
    isSmartphoneSupported: true,
    isBrowserSupported: false,
    href: "/game/8",
  },
  {
    id: 3,
    title: "ナイトメアシティ",
    circle: "ナイトスタジオ",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
    tags: ["サスペンス", "短編", "ミステリー"],
    price: "1,500円",
    rating: 4.5,
    description: "短編ながらストーリーがしっかり。ドキドキが止まらない。",
    badges: ["同人", "短時間"],
    isSale: true,
    isSmartphoneSupported: false,
    isBrowserSupported: true,
    href: "/game/9",
  },
  {
    id: 4,
    title: "ラブコメディパーティ",
    circle: "コメディラボ",
    thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&q=80",
    tags: ["ギャグ", "恋愛", "学園"],
    price: "600円",
    rating: 4.0,
    description: "笑えるラブコメ。気軽に遊べる。",
    badges: ["同人", "低価格", "短時間", "ブラウザ対応"],
    isSale: false,
    isSmartphoneSupported: true,
    isBrowserSupported: true,
    href: "/game/3",
  },
  {
    id: 5,
    title: "ファンタジーアドベンチャー",
    circle: "アドベンチャーワークス",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    tags: ["ファンタジー", "冒険", "短編"],
    price: "1,200円",
    rating: 4.4,
    description: "同人とは思えないボリューム。冒険好きにはたまらない。",
    badges: ["同人", "短時間"],
    isSale: true,
    isSmartphoneSupported: false,
    isBrowserSupported: false,
    href: "/game/4",
  },
  {
    id: 6,
    title: "ミニゲームコレクション",
    circle: "ゲームパック",
    thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&q=80",
    tags: ["ミニゲーム", "複数ジャンル"],
    price: "500円",
    rating: 3.9,
    description: "複数のミニゲームが詰まった楽しいパック。",
    badges: ["同人", "低価格", "短時間", "ブラウザ対応"],
    isSale: false,
    isSmartphoneSupported: true,
    isBrowserSupported: true,
    href: "/game/2",
  },
  {
    id: 7,
    title: "恋愛シミュレーター",
    circle: "シミュレーションラボ",
    thumbnail: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    tags: ["恋愛", "シミュレーション"],
    price: "1,800円",
    rating: 4.6,
    description: "同人の恋愛シミュレーション。選択肢が豊富。",
    badges: ["同人"],
    isSale: true,
    isSmartphoneSupported: true,
    isBrowserSupported: false,
    href: "/game/7",
  },
  {
    id: 8,
    title: "クイズチャレンジ",
    circle: "クイズマスター",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
    tags: ["クイズ", "教育", "短編"],
    price: "300円",
    rating: 3.8,
    description: "楽しく遊べるクイズゲーム。暇つぶしに最適。",
    badges: ["同人", "低価格", "短時間", "スマホ対応", "ブラウザ対応"],
    isSale: false,
    isSmartphoneSupported: true,
    isBrowserSupported: true,
    href: "/game/1",
  },
  {
    id: 9,
    title: "ストーリーアドベンチャー",
    circle: "ストーリーハウス",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    tags: ["冒険", "ファンタジー", "長編"],
    price: "2,000円",
    rating: 4.7,
    description: "同人とは思えないストーリー。やり込み要素も豊富。",
    badges: ["同人"],
    isSale: false,
    isSmartphoneSupported: false,
    isBrowserSupported: false,
    href: "/game/10",
  },
  {
    id: 10,
    title: "パズルマスター",
    circle: "パズルスタジオ",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    tags: ["パズル", "脳トレ", "短編"],
    price: "400円",
    rating: 4.2,
    description: "脳トレにぴったり。ハマる難易度。",
    badges: ["同人", "低価格", "短時間", "ブラウザ対応"],
    isSale: true,
    isSmartphoneSupported: false,
    isBrowserSupported: true,
    href: "/game/6",
  },
];

// 同人ゲーム注目枠
export interface DoujinHighlight {
  id: number;
  title: string;
  description: string;
  icon: string;
  gameIds: number[];
}

export const doujinHighlights: DoujinHighlight[] = [
  {
    id: 1,
    title: "今週の同人注目作",
    description: "今週ピックアップした注目の同人ゲーム",
    icon: "⭐",
    gameIds: [1, 7, 9],
  },
  {
    id: 2,
    title: "低価格で遊べる作品",
    description: "1,000円以下の手軽な作品",
    icon: "💰",
    gameIds: [2, 4, 6, 8],
  },
  {
    id: 3,
    title: "セール中の同人ゲーム",
    description: "今だけお得な作品",
    icon: "🔥",
    gameIds: [3, 5, 7, 10],
  },
  {
    id: 4,
    title: "短時間で楽しめる作品",
    description: "30分～1時間で遊べる",
    icon: "⏱️",
    gameIds: [1, 2, 4, 6, 8],
  },
];

// メーカー・サークル
export interface Maker {
  id: number;
  name: string;
  type: "maker" | "circle";
  logo: string;
  thumbnail: string;
  description: string;
  tags: string[];
  itemCount: number;
  representativeGameIds: number[];
  href: string;
}

export const makers: Maker[] = [
  {
    id: 1,
    name: "HOOKSOFT",
    type: "maker",
    logo: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
    description: "やさしい雰囲気やキャラとの距離感を重視した作品が多いメーカー。",
    tags: ["純愛", "学園", "キャラ重視"],
    itemCount: 12,
    representativeGameIds: [1, 3, 5],
    href: "#",
  },
  {
    id: 2,
    name: "あるくまい",
    type: "maker",
    logo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "個性的なキャラクターと独特の世界観が特徴。ファンからの支持が厚い。",
    tags: ["ファンタジー", "個性的", "高評価"],
    itemCount: 8,
    representativeGameIds: [2, 4, 7],
    href: "#",
  },
  {
    id: 3,
    name: "ハーモニー",
    type: "circle",
    logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
    description: "同人サークルながら商業レベルのクオリティを実現。注目度が高い。",
    tags: ["同人", "高クオリティ", "セール中"],
    itemCount: 5,
    representativeGameIds: [6, 8, 10],
    href: "#",
  },
  {
    id: 4,
    name: "ドリームチーム",
    type: "circle",
    logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
    description: "低価格で手軽に遊べる作品を中心に制作。初心者向けサークル。",
    tags: ["同人", "低価格", "初心者向け"],
    itemCount: 6,
    representativeGameIds: [1, 2, 3],
    href: "#",
  },
  {
    id: 5,
    name: "ビジュアルワークス",
    type: "maker",
    logo: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
    description: "Live2Dアニメーションを駆使した作品が多い。映像美が特徴。",
    tags: ["Live2D", "アニメーション", "高評価"],
    itemCount: 10,
    representativeGameIds: [4, 5, 9],
    href: "#",
  },
  {
    id: 6,
    name: "ストーリーハウス",
    type: "maker",
    logo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "シナリオ重視の作品を制作。感動的なストーリーが評判。",
    tags: ["シナリオ", "泣きゲー", "感動"],
    itemCount: 7,
    representativeGameIds: [7, 8, 10],
    href: "#",
  },
  {
    id: 7,
    name: "ゆめのかけら",
    type: "circle",
    logo: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
    description: "短編ながら完成度の高い作品が多い。短時間プレイ向け。",
    tags: ["同人", "短編", "短時間"],
    itemCount: 4,
    representativeGameIds: [1, 3, 6],
    href: "#",
  },
  {
    id: 8,
    name: "月光工房",
    type: "circle",
    logo: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
    description: "音楽とストーリーの融合が特徴。BGMのクオリティが高い。",
    tags: ["同人", "音楽", "シナリオ"],
    itemCount: 3,
    representativeGameIds: [2, 5, 9],
    href: "#",
  },
];

// メーカー注目枠
export interface MakerHighlight {
  id: number;
  title: string;
  description: string;
  icon: string;
  makerIds: number[];
}

export const makerHighlights: MakerHighlight[] = [
  {
    id: 1,
    title: "人気メーカー",
    description: "ユーザーから支持が高いメーカー",
    icon: "⭐",
    makerIds: [1, 2, 5],
  },
  {
    id: 2,
    title: "注目サークル",
    description: "今注目の同人サークル",
    icon: "🎉",
    makerIds: [3, 4, 7],
  },
  {
    id: 3,
    title: "新作あり",
    description: "最近新作をリリースしたメーカー",
    icon: "🆕",
    makerIds: [1, 5, 6],
  },
  {
    id: 4,
    title: "セール中",
    description: "セール中のメーカー作品",
    icon: "🔥",
    makerIds: [2, 3, 8],
  },
];
