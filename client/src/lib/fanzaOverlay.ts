import { fanzaProducts, type FanzaProduct } from "@/data/fanzaProducts";
import type { GameCard, HeroSlide, RankingItem, SaleItem } from "@/data/mockData";

const FALLBACK_THUMBNAIL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect fill='%23f3e8f5' width='300' height='400'/%3E%3C/svg%3E";

export type WithAffiliateUrl<T> = T & { affiliateUrl: string };

export function fanzaProductAt(gameId: number) {
  if (!Number.isFinite(gameId) || gameId < 1) return undefined;
  return fanzaProducts[gameId - 1];
}

function parsePriceNum(price?: string): number {
  const match = price?.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function formatYen(price?: string): string {
  const amount = parsePriceNum(price);
  if (amount > 0) return `¥${amount.toLocaleString()}`;
  return "価格未定";
}

function formatReleaseDate(releaseDate?: string): string {
  if (!releaseDate) return "未定";
  return releaseDate.split(" ")[0].replace(/-/g, "/");
}

function productThumbnail(product: FanzaProduct): string {
  const url = product.thumbnail?.trim();
  return url || FALLBACK_THUMBNAIL;
}

function displayGenres(genres: string[]): string[] {
  return genres.filter((genre) => genre.length <= 24).slice(0, 4);
}

function toRankingItem(product: FanzaProduct, index: number): WithAffiliateUrl<RankingItem> {
  const id = index + 1;
  const genres = displayGenres(product.genres);

  return {
    rank: id,
    id,
    title: product.title,
    maker: product.maker ?? "—",
    thumbnail: productThumbnail(product),
    tags: genres.length > 0 ? genres : ["PCゲーム"],
    price: formatYen(product.price),
    rating: 0,
    likes: 0,
    views: 0,
    comment: genres.length > 0 ? `【${genres[0]}】FANZA掲載の注目PCゲームです。` : "FANZA掲載の注目PCゲームです。",
    releaseDate: formatReleaseDate(product.releaseDate),
    affiliateUrl: product.affiliateUrl,
  };
}

function toSaleItem(product: FanzaProduct, index: number): WithAffiliateUrl<SaleItem> {
  const id = index + 1;
  const saleNum = parsePriceNum(product.price);
  const listNum = parsePriceNum(product.listPrice);
  const salePrice = formatYen(product.price);
  let originalPrice = salePrice;
  let discountPercent = 0;

  if (listNum > saleNum && saleNum > 0) {
    originalPrice = formatYen(product.listPrice);
    discountPercent = Math.round((1 - saleNum / listNum) * 100);
  }

  return {
    id,
    title: product.title,
    maker: product.maker ?? "—",
    thumbnail: productThumbnail(product),
    tags: displayGenres(product.genres),
    originalPrice,
    salePrice,
    discountPercent,
    rating: 0,
    likes: 0,
    views: 0,
    saleEndDate: "要確認",
    comment: product.maker ? `${product.maker}のPCゲーム` : "FANZA掲載のPCゲーム",
    affiliateUrl: product.affiliateUrl,
  };
}

function toGameCard(
  product: FanzaProduct,
  index: number,
  label: string,
  labelType: GameCard["labelType"]
): WithAffiliateUrl<GameCard> {
  const id = index + 1;
  const genres = displayGenres(product.genres);

  return {
    id,
    title: product.title,
    maker: product.maker ?? "—",
    thumbnail: productThumbnail(product),
    tags: genres.slice(0, 3),
    description: `${product.maker ?? "FANZA"}のPCゲーム。最新情報はFANZAの商品ページでご確認ください。`,
    label,
    labelType,
    href: `/game/${id}`,
    affiliateUrl: product.affiliateUrl,
  };
}

function toHeroSlide(product: FanzaProduct, index: number): WithAffiliateUrl<HeroSlide> {
  const id = index + 1;
  const genres = displayGenres(product.genres);

  return {
    id,
    title: product.title,
    catchcopy: product.title,
    subcopy: product.maker
      ? `${product.maker} / 発売日 ${formatReleaseDate(product.releaseDate)}`
      : `発売日 ${formatReleaseDate(product.releaseDate)}`,
    tags: genres.slice(0, 4),
    releaseDate: formatReleaseDate(product.releaseDate),
    label: index === 0 ? "今月のイチオシ！" : "新作",
    labelType: index === 0 ? "pickup" : "new",
    thumbnail: productThumbnail(product),
    href: `/game/${id}`,
    affiliateUrl: product.affiliateUrl,
  };
}

const allRankingItems = fanzaProducts.map(toRankingItem);
const allSaleItems = fanzaProducts
  .map(toSaleItem)
  .filter((_, index) => parsePriceNum(fanzaProducts[index]?.price) > 0);

export const rankingItemsWithFanza = allRankingItems;
export const rankingItemsFeaturedWithFanza = allRankingItems.slice(0, 10);
export const saleItemsWithFanza = allSaleItems.length > 0 ? allSaleItems : fanzaProducts.map(toSaleItem);
export const saleItemsFeaturedWithFanza = saleItemsWithFanza.slice(0, 6);
export const newReleasesWithFanza = fanzaProducts.slice(0, 12).map((product, index) =>
  toGameCard(product, index, index === 0 ? "注目" : "新作", index === 0 ? "pickup" : "new")
);
export const heroSlidesWithFanza = fanzaProducts.slice(0, 3).map(toHeroSlide);
