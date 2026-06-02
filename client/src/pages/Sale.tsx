import { useState } from "react";
import { Link } from "wouter";
import { Star, Heart, Eye, ChevronRight } from "lucide-react";
import { saleItems } from "@/data/mockData";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

type SaleTab = "すべて" | "本日終了" | "30%以上OFF" | "50%以上OFF" | "人気順" | "同人ゲーム" | "Live2D";

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

// ===== セールカード =====
function SaleCard({ item }: { item: typeof saleItems[0] }) {
  return (
    <Link href={`/game/${item.id}`}>
      <a className="game-card bg-white rounded-xl border overflow-hidden hover:shadow-md transition-shadow group" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
        {/* サムネイル + 割引バッジ */}
        <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
          <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" onError={(e) => { e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect fill='%23f3e8f5' width='300' height='400'/%3E%3C/svg%3E"; }} />
          {/* 割引率バッジ */}
          <div className="absolute top-2 right-2 px-2 py-1 rounded-lg font-bold text-sm text-white" style={{ backgroundColor: "oklch(0.62 0.22 355)" }}>
            {item.discountPercent}% OFF
          </div>
        </div>

        {/* 情報 */}
        <div className="p-3">
          <p className="text-xs font-bold line-clamp-2 mb-1" style={{ color: "oklch(0.18 0.03 310)" }}>
            {item.title}
          </p>
          <p className="text-[10px] mb-2" style={{ color: "oklch(0.52 0.04 310)" }}>{item.maker}</p>

          {/* タグ */}
          <div className="flex flex-wrap gap-1 mb-2">
            {item.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded-full" style={{ backgroundColor: "oklch(0.95 0.02 355)", color: "oklch(0.18 0.03 310)" }}>
                {tag}
              </span>
            ))}
          </div>

          {/* 価格 */}
          <div className="mb-2">
            <div className="text-[10px] line-through" style={{ color: "oklch(0.52 0.04 310)" }}>
              {item.originalPrice}
            </div>
            <div className="text-base font-bold" style={{ color: "oklch(0.62 0.22 355)" }}>
              {item.salePrice}
            </div>
          </div>

          {/* 評価 */}
          <div className="flex items-center justify-between mb-2">
            <StarRating value={item.rating} />
            <div className="flex items-center gap-1 text-[10px]" style={{ color: "oklch(0.52 0.04 310)" }}>
              <Heart className="w-2.5 h-2.5" fill="currentColor" />
              {item.likes}
            </div>
          </div>

          {/* セール終了日 */}
          <div className="text-[10px] mb-2" style={{ color: "oklch(0.42 0.04 310)" }}>
            終了: {item.saleEndDate}
          </div>

          {/* 詳細ボタン */}
          <button className="w-full flex items-center justify-between pt-2 border-t hover:bg-pink-50 transition-colors py-2 px-0" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
            <span className="text-xs font-semibold" style={{ color: "oklch(0.62 0.22 355)" }}>詳細を見る</span>
            <ChevronRight className="w-4 h-4" style={{ color: "oklch(0.62 0.22 355)" }} />
          </button>
        </div>
      </a>
    </Link>
  );
}

export default function Sale() {
  const [activeTab, setActiveTab] = useState<SaleTab>("すべて");

  const tabs: SaleTab[] = ["すべて", "本日終了", "30%以上OFF", "50%以上OFF", "人気順", "同人ゲーム", "Live2D"];

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
            セール中の注目作品
          </h1>
          <p className="text-sm" style={{ color: "oklch(0.52 0.04 310)" }}>
            今だけお得にチェックできる作品をピックアップ
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

      {/* セール作品グリッド */}
      <div className="container py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {saleItems.map((item) => (
            <SaleCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* フッター情報 */}
      <div className="border-t" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
        <div className="container py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border p-4" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
              <h3 className="text-sm font-bold mb-3" style={{ color: "oklch(0.18 0.03 310)" }}>
                本日終了のセール
              </h3>
              <div className="space-y-2 text-xs" style={{ color: "oklch(0.52 0.04 310)" }}>
                <div>ドリームワールド: 70% OFF</div>
                <div>放課後の秘密基地: 70% OFF</div>
                <div>サクラノ詩: 50% OFF</div>
              </div>
            </div>

            <div className="bg-white rounded-xl border p-4" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
              <h3 className="text-sm font-bold mb-3" style={{ color: "oklch(0.18 0.03 310)" }}>
                高割引セール（60%以上）
              </h3>
              <div className="space-y-2 text-xs" style={{ color: "oklch(0.52 0.04 310)" }}>
                <div>ドリームワールド: 70% OFF</div>
                <div>放課後の秘密基地: 70% OFF</div>
                <div>魔法使いと恋の物語: 60% OFF</div>
              </div>
            </div>

            <div className="bg-white rounded-xl border p-4" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
              <h3 className="text-sm font-bold mb-3" style={{ color: "oklch(0.18 0.03 310)" }}>
                人気セール作品
              </h3>
              <div className="space-y-2 text-xs" style={{ color: "oklch(0.52 0.04 310)" }}>
                <div>サクラノ詩: 1,256 いいね</div>
                <div>アマカノ2: 982 いいね</div>
                <div>ドリームワールド: 1,050 いいね</div>
              </div>
            </div>

            <div className="bg-white rounded-xl border p-4" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
              <h3 className="text-sm font-bold mb-3" style={{ color: "oklch(0.18 0.03 310)" }}>
                セール情報
              </h3>
              <div className="space-y-2 text-xs" style={{ color: "oklch(0.52 0.04 310)" }}>
                <div>セール中の作品: {saleItems.length}件</div>
                <div>平均割引率: 56%</div>
                <div>最大割引: 70% OFF</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
