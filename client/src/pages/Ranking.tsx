import { useState } from "react";
import { Link } from "wouter";
import { Star, Heart, Eye, ChevronRight, Crown } from "lucide-react";
import { rankingItemsWithFanza } from "@/lib/fanzaOverlay";
import FanzaExternalLink from "@/components/FanzaExternalLink";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

type RankingTab = "総合" | "急上昇" | "新作" | "セール中" | "同人ゲーム" | "Live2D";

// Tailwindの line-clamp が効かない場合でも高さを揃えるための2行クランプ
const lineClamp2Style = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
} as any;

function StarRating({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="relative w-3 h-3">
          <Star className="w-3 h-3" fill="none" stroke="oklch(0.52 0.04 310)" />
          {i < full && <Star className="w-3 h-3 absolute top-0 left-0" fill="oklch(0.62 0.22 355)" stroke="oklch(0.62 0.22 355)" />}
          {i === full && half && (
            <div className="absolute top-0 left-0 w-1.5 h-3 overflow-hidden">
              <Star className="w-3 h-3" fill="oklch(0.62 0.22 355)" stroke="oklch(0.62 0.22 355)" />
            </div>
          )}
        </div>
      ))}
      <span className="text-xs ml-1" style={{ color: "oklch(0.52 0.04 310)" }}>{value.toFixed(1)}</span>
    </div>
  );
}

// ===== ランキングカード（PC版・2位以降） =====
function RankingCard({ item }: { item: typeof rankingItemsWithFanza[0] }) {
  return (
    <div className="space-y-2">
    <Link href={`/game/${item.id}`}>
      <a className="game-card bg-white rounded-xl border overflow-hidden hover:shadow-md transition-shadow" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
        {/* PC版: 横並び */}
        <div className="hidden sm:flex gap-3 p-3">
          {/* 順位バッジ */}
          <div className="shrink-0 flex flex-col items-center justify-center w-12 h-12 rounded-lg font-bold text-lg leading-none" style={{ backgroundColor: "oklch(0.95 0.02 355)", color: "oklch(0.18 0.03 310)" }}>
            {item.rank}
          </div>

          {/* サムネイル */}
          <div className="shrink-0 w-16 h-24 rounded-lg overflow-hidden">
            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
          </div>

          {/* 情報 */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <p className="text-sm font-bold mb-1" style={{ color: "oklch(0.18 0.03 310)", ...lineClamp2Style }}>
                {item.title}
              </p>
              <p className="text-xs mb-2" style={{ color: "oklch(0.52 0.04 310)" }}>{item.maker}</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {item.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap" style={{ backgroundColor: "oklch(0.95 0.02 355)", color: "oklch(0.18 0.03 310)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs mb-2" style={{ color: "oklch(0.42 0.04 310)", ...lineClamp2Style }}>
                {item.comment}
              </p>
            </div>

            {/* 下部情報 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {item.rating > 0 && <StarRating value={item.rating} />}
                {item.likes > 0 && (
                <div className="flex items-center gap-1 text-xs" style={{ color: "oklch(0.52 0.04 310)" }}>
                  <Heart className="w-3 h-3" fill="currentColor" />
                  {item.likes}
                </div>
                )}
                {item.views > 0 && (
                <div className="flex items-center gap-1 text-xs" style={{ color: "oklch(0.52 0.04 310)" }}>
                  <Eye className="w-3 h-3" />
                  {item.views}
                </div>
                )}
              </div>
              <div className="text-sm font-bold text-right whitespace-nowrap min-w-[68px] flex-shrink-0" style={{ color: "oklch(0.62 0.22 355)" }}>
                {item.price}
              </div>
            </div>
          </div>

          {/* 詳細ボタン */}
          <div className="shrink-0 w-8 flex items-center justify-center">
            <ChevronRight className="w-5 h-5" style={{ color: "oklch(0.62 0.22 355)" }} />
          </div>
        </div>

        {/* スマホ版: 縦積み */}
        <div className="sm:hidden flex flex-col gap-3 p-4">
          {/* 順位バッジ + サムネイル */}
          <div className="flex gap-3">
            <div className="shrink-0 flex flex-col items-center justify-center w-10 h-10 rounded-lg font-bold text-base leading-none" style={{ backgroundColor: "oklch(0.95 0.02 355)", color: "oklch(0.18 0.03 310)" }}>
              {item.rank}
            </div>
            <div className="shrink-0 w-16 h-24 rounded-lg overflow-hidden">
              <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold mb-0.5" style={{ color: "oklch(0.18 0.03 310)", ...lineClamp2Style }}>
                  {item.title}
                </p>
                <p className="text-[10px] mb-1" style={{ color: "oklch(0.52 0.04 310)" }}>{item.maker}</p>
              </div>
              <div className="flex items-center gap-1 text-[10px]" style={{ color: "oklch(0.52 0.04 310)" }}>
                {item.likes > 0 && (
                <>
                <Heart className="w-2.5 h-2.5" fill="currentColor" />
                {item.likes}
                </>
                )}
                {item.views > 0 && (
                <>
                <Eye className="w-2.5 h-2.5" />
                {item.views}
                </>
                )}
              </div>
            </div>
          </div>

          {/* タグ */}
          <div className="flex flex-wrap gap-1">
            {item.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "oklch(0.95 0.02 355)", color: "oklch(0.18 0.03 310)" }}>
                {tag}
              </span>
            ))}
          </div>

          {/* コメント */}
          <p className="text-xs" style={{ color: "oklch(0.42 0.04 310)", ...lineClamp2Style }}>
            {item.comment}
          </p>

          {/* 星評価 */}
          {item.rating > 0 && (
          <div className="flex items-center gap-2">
            <StarRating value={item.rating} />
          </div>
          )}

          {/* 価格 */}
          <div className="text-base font-bold whitespace-nowrap" style={{ color: "oklch(0.62 0.22 355)" }}>
            {item.price}
          </div>
        </div>
      </a>
    </Link>
    <FanzaExternalLink href={item.affiliateUrl} compact />
    </div>
  );
}

// ===== 1位カード（特別表示） =====
function RankOneCard({ item }: { item: typeof rankingItemsWithFanza[0] }) {
  return (
    <div className="space-y-2">
    <Link href={`/game/${item.id}`}>
      <a className="game-card bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-shadow relative" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
        {/* PC版：王冠バッジ */}
        <div className="hidden sm:flex absolute top-3 left-3 z-10 items-center gap-1 px-3 py-1 rounded-full font-bold text-sm" style={{ backgroundColor: "oklch(0.62 0.22 355)", color: "white" }}>
          <Crown className="w-4 h-4" fill="currentColor" />
          1位
        </div>

        {/* サムネイル */}
        <div className="relative overflow-hidden bg-gray-100" style={{ paddingTop: "56.25%", maxHeight: "180px" }}>
          <img src={item.thumbnail} alt={item.title} className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>

        {/* 情報 */}
        <div className="p-4">
          <p className="text-sm font-bold mb-1" style={{ color: "oklch(0.18 0.03 310)", ...lineClamp2Style }}>
            {item.title}
          </p>
          <p className="text-xs mb-2" style={{ color: "oklch(0.52 0.04 310)" }}>{item.maker}</p>

          <div className="flex flex-wrap gap-1 mb-2">
            {item.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "oklch(0.95 0.02 355)", color: "oklch(0.18 0.03 310)" }}>
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs mb-2" style={{ color: "oklch(0.42 0.04 310)", ...lineClamp2Style }}>
            {item.comment}
          </p>

          <div className="flex items-center justify-between mb-2">
            {item.rating > 0 && <StarRating value={item.rating} />}
            <div className="text-sm font-bold whitespace-nowrap min-w-[68px] text-right flex-shrink-0" style={{ color: "oklch(0.62 0.22 355)" }}>
              {item.price}
            </div>
          </div>

          {(item.likes > 0 || item.views > 0) && (
          <div className="flex items-center gap-2 text-xs mb-3" style={{ color: "oklch(0.52 0.04 310)" }}>
            {item.likes > 0 && (
            <>
            <Heart className="w-3 h-3" fill="currentColor" />
            {item.likes}
            </>
            )}
            {item.views > 0 && (
            <>
            <Eye className="w-3 h-3" />
            {item.views}
            </>
            )}
          </div>
          )}

          {/* 詳細ボタン */}
          <div className="flex items-center justify-between">
            <span className="sm:hidden text-xs font-semibold" style={{ color: "oklch(0.62 0.22 355)" }}>詳細を見る</span>
            <ChevronRight className="w-5 h-5 hidden sm:block" style={{ color: "oklch(0.62 0.22 355)" }} />
          </div>
        </div>
      </a>
    </Link>
    <FanzaExternalLink href={item.affiliateUrl} />
    </div>
  );
}

// ===== サイドカード =====
function SideCard({ title, items }: { title: string; items: { label: string; value: string }[] }) {
  return (
    <div className="bg-white rounded-xl border p-4" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
      <h3 className="text-sm font-bold mb-3" style={{ color: "oklch(0.18 0.03 310)" }}>
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between text-xs">
            <span style={{ color: "oklch(0.52 0.04 310)" }}>{item.label}</span>
            <span className="font-bold" style={{ color: "oklch(0.62 0.22 355)" }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Ranking() {
  const [activeTab, setActiveTab] = useState<RankingTab>("総合");

  const tabs: RankingTab[] = ["総合", "急上昇", "新作", "セール中", "同人ゲーム", "Live2D"];
  const firstItem = rankingItemsWithFanza[0];
  const restItems = rankingItemsWithFanza.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <div className="border-b" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
        <div className="container py-6">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-sm mb-4" style={{ color: "oklch(0.62 0.22 355)" }}>
              ← エロゲ図鑑に戻る
            </a>
          </Link>
          <h1 className="text-3xl font-bold mb-2" style={{ color: "oklch(0.18 0.03 310)" }}>
            人気ランキング
          </h1>
          <p className="text-sm" style={{ color: "oklch(0.52 0.04 310)" }}>
            今チェックされている注目作品をランキング形式で紹介
          </p>
        </div>
      </div>
      <AffiliateDisclosure />

      {/* タブ */}
      <div className="border-b sticky top-0 bg-white z-10" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
        <div className="container flex gap-4 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "border-pink-500"
                  : "border-transparent"
              }`}
              style={{
                color: activeTab === tab ? "oklch(0.62 0.22 355)" : "oklch(0.52 0.04 310)",
              }}
            >
              {tab}
            </button>
          ))}
          <div className="shrink-0 w-4" />
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左：ランキング一覧 */}
          <div className="lg:col-span-2 space-y-3">
            {/* 1位 */}
            <div className="mb-4">
              <RankOneCard item={firstItem} />
            </div>

            {/* 2位以降 */}
            {restItems.map((item) => (
              <RankingCard key={item.id} item={item} />
            ))}
          </div>

          {/* 右：サイドカード（PC版のみ） */}
          <div className="hidden lg:flex flex-col gap-4">
            <SideCard
              title="今週の注目ジャンル"
              items={[
                { label: "泣きゲー", value: "↑ 3位" },
                { label: "ファンタジー", value: "↑ 5位" },
                { label: "コメディ", value: "→ 8位" },
              ]}
            />
            <SideCard
              title="セール中の人気作"
              items={[
                { label: "アマカノ2", value: "¥4,400" },
                { label: "天使と騎士", value: "¥3,300" },
              ]}
            />
            <SideCard
              title="実は同人ゲームも人気"
              items={[
                { label: "同人作品A", value: "1,200円" },
                { label: "同人作品B", value: "800円" },
              ]}
            />
            <SideCard
              title="プレイ環境おすすめ"
              items={[
                { label: "ASUS ROG Ally", value: "¥79,800" },
                { label: "BenQ ScreenBar", value: "¥18,900" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* スマホ版：サイドカード（下部） */}
      <div className="lg:hidden container py-8 border-t" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
        <div className="space-y-4">
          <SideCard
            title="今週の注目ジャンル"
            items={[
              { label: "泣きゲー", value: "↑ 3位" },
              { label: "ファンタジー", value: "↑ 5位" },
              { label: "コメディ", value: "→ 8位" },
            ]}
          />
          <SideCard
            title="セール中の人気作"
            items={[
              { label: "アマカノ2", value: "¥4,400" },
              { label: "天使と騎士", value: "¥3,300" },
            ]}
          />
          <SideCard
            title="実は同人ゲームも人気"
            items={[
              { label: "同人作品A", value: "1,200円" },
              { label: "同人作品B", value: "800円" },
            ]}
          />
          <SideCard
            title="プレイ環境おすすめ"
            items={[
              { label: "ASUS ROG Ally", value: "¥79,800" },
              { label: "BenQ ScreenBar", value: "¥18,900" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
