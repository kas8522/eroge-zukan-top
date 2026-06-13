// MiddleRowSection.tsx
// 参考画像に合わせた横並び4カラム構成（PC）
// 左から: 注目の新作 / セール中の注目作品 / 実は同人ゲームも熱い！ / 快適プレイ環境おすすめ
// スマホ: 縦積み（新作→セール→同人→プレイ環境）
//
// PC各カラムの構成:
//   - セクションヘッダー（アイコン + タイトル + 「見る→」）
//   - サムネイルカードを縦に3件
//   - 下部CTA ボタン
import { newReleasesWithFanza, saleItemsFeaturedWithFanza } from "@/lib/fanzaOverlay";
import { doujinGames, environmentItems, DoujinBadge } from "@/data/mockData";
import { Heart } from "lucide-react";
import { Link } from "wouter";

// ===== 共通: ミニセクションヘッダー =====
function MiniHeader({ icon, title, moreHref }: { icon: string; title: string; moreHref: string }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="flex items-center gap-1.5 text-sm font-bold" style={{ color: "oklch(0.18 0.03 310)" }}>
        <span>{icon}</span>
        {title}
      </h2>
      <Link href={moreHref}>
        <a className="text-xs font-medium hover:underline shrink-0" style={{ color: "oklch(0.62 0.22 355)" }}>
          見る →
        </a>
      </Link>
    </div>
  );
}

// ===== 新作ミニカード =====
function NewMiniCard({ item }: { item: typeof newReleasesWithFanza[0] }) {
  const labelColors: Record<string, string> = {
    today: "badge-pink", pickup: "badge-orange", live2d: "badge-blue",
    special: "badge-green", new: "badge-pink",
  };
  return (
    <a href={`/game/${item.id}`} className="flex gap-2.5 items-start hover:bg-pink-50/40 rounded-lg p-1.5 -mx-1.5 transition-colors">
      <div className="relative shrink-0 w-16 h-12 rounded-lg overflow-hidden">
        <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
        {item.label && (
          <span className={`absolute top-0.5 left-0.5 ${labelColors[item.labelType ?? "pickup"] ?? "badge-pink"}`}
            style={{ fontSize: "8px", padding: "1px 4px" }}>
            {item.label}
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-bold line-clamp-1" style={{ color: "oklch(0.18 0.03 310)" }}>{item.title}</p>
        <p className="text-[10px]" style={{ color: "oklch(0.55 0.04 310)" }}>{item.maker}</p>
        <div className="flex flex-wrap gap-0.5 mt-0.5">
          {item.tags.slice(0, 2).map((t) => (
            <span key={t} className="tag-chip" style={{ fontSize: "8px", padding: "1px 5px" }}>{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

// ===== セールミニカード =====
function SaleMiniCard({ item }: { item: typeof saleItemsFeaturedWithFanza[0] }) {
  return (
    <a href={`/game/${item.id}`} className="flex gap-2.5 items-start hover:bg-pink-50/40 rounded-lg p-1.5 -mx-1.5 transition-colors">
      <div className="relative shrink-0 w-16 h-12 rounded-lg overflow-hidden">
        <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-0.5 left-0.5 rounded text-white font-extrabold leading-tight"
          style={{ background: "oklch(0.58 0.22 25)", fontSize: "8px", padding: "1px 4px" }}>
          {item.discountPercent}%OFF
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-bold line-clamp-1" style={{ color: "oklch(0.18 0.03 310)" }}>{item.title}</p>
        <p className="text-[10px]" style={{ color: "oklch(0.55 0.04 310)" }}>{item.maker}</p>
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span className="text-[9px] line-through" style={{ color: "oklch(0.70 0.04 310)" }}>
            {item.originalPrice}
          </span>
          <span className="text-xs font-extrabold" style={{ color: "oklch(0.62 0.22 355)" }}>
            {item.salePrice}
          </span>
        </div>
      </div>
    </a>
  );
}

// ===== 同人ミニカード =====
const badgeStyle: Record<DoujinBadge, string> = {
  "同人": "badge-blue", "低価格": "badge-green", "短時間": "badge-orange",
  "セール中": "badge-pink", "スマホ対応": "badge-green", "ブラウザ対応": "badge-blue", "手軽": "badge-orange",
};
function DoujinMiniCard({ item }: { item: typeof doujinGames[0] }) {
  return (
    <a href={`/game/${item.id}`} className="flex gap-2.5 items-start hover:bg-pink-50/40 rounded-lg p-1.5 -mx-1.5 transition-colors">
      <div className="relative shrink-0 w-16 h-12 rounded-lg overflow-hidden">
        <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
        <span className="absolute top-0.5 left-0.5 badge-blue" style={{ fontSize: "8px", padding: "1px 4px" }}>同人</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-bold line-clamp-1" style={{ color: "oklch(0.18 0.03 310)" }}>{item.title}</p>
        <p className="text-[10px]" style={{ color: "oklch(0.55 0.04 310)" }}>{item.circle}</p>
        <div className="flex flex-wrap gap-0.5 mt-0.5">
          {item.badges.filter((b) => b !== "同人").slice(0, 2).map((b) => (
            <span key={b} className={badgeStyle[b]} style={{ fontSize: "8px", padding: "1px 4px" }}>{b}</span>
          ))}
          <span className="text-[9px] font-bold ml-0.5" style={{ color: "oklch(0.62 0.22 355)" }}>{item.price}</span>
        </div>
      </div>
    </a>
  );
}

// ===== プレイ環境ミニカード =====
function EnvMiniCard({ item }: { item: typeof environmentItems[0] }) {
  return (
    <Link href="/environment">
      <a className="flex gap-2.5 items-start hover:bg-pink-50/40 rounded-lg p-1.5 -mx-1.5 transition-colors">
      <div className="shrink-0 w-16 h-12 rounded-lg overflow-hidden bg-gray-50">
        <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="flex-1 min-w-0">
        <span className="badge-pink" style={{ fontSize: "8px", padding: "1px 4px" }}>{item.category}</span>
        <p className="text-[11px] font-bold line-clamp-1 mt-0.5" style={{ color: "oklch(0.18 0.03 310)" }}>{item.title}</p>
        <p className="text-[10px] line-clamp-1" style={{ color: "oklch(0.55 0.04 310)" }}>{item.description}</p>
        <p className="text-xs font-extrabold mt-0.5" style={{ color: "oklch(0.18 0.03 310)" }}>{item.price}</p>
      </div>
      </a>
    </Link>
  );
}

// ===== CTAボタン =====
function CTAButton({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href}>
      <a
        className="mt-4 w-full py-2.5 rounded-xl text-xs font-bold text-white btn-press transition-opacity hover:opacity-90 flex items-center justify-center gap-1"
        style={{ background: "oklch(0.62 0.22 355)" }}
      >
        {label} ▶
      </a>
    </Link>
  );
}

// ===== メインコンポーネント =====
export default function MiddleRowSection() {
  return (
    <section className="py-5 lg:py-6" style={{ background: "oklch(0.995 0.005 355)" }}>
      <div className="container">

        {/* ===== PC: 4カラム横並び ===== */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4">

          {/* 1: 注目の新作 */}
          <div className="bg-white rounded-2xl border p-4 pb-5 flex flex-col"
            style={{ borderColor: "oklch(0.92 0.02 355)" }}>
            <MiniHeader icon="✨" title="注目の新作" moreHref="/ranking" />
            <div className="flex flex-col gap-1 flex-1">
              {newReleasesWithFanza.slice(0, 3).map((item) => (
                <NewMiniCard key={item.id} item={item} />
              ))}
            </div>
            <CTAButton label="新作をもっと見る" href="/ranking" />
          </div>

          {/* 2: セール中の注目作品 */}
          <div className="bg-white rounded-2xl border p-4 pb-5 flex flex-col"
            style={{ borderColor: "oklch(0.92 0.02 355)" }}>
            <MiniHeader icon="🐱" title="セール中の注目作品" moreHref="/sale" />
            <div className="flex flex-col gap-1 flex-1">
              {saleItemsFeaturedWithFanza.slice(0, 3).map((item) => (
                <SaleMiniCard key={item.id} item={item} />
              ))}
            </div>
            <CTAButton label="セールをチェック" href="/sale" />
          </div>

          {/* 3: 実は同人ゲームも熱い！ */}
          <div className="bg-white rounded-2xl border p-4 pb-5 flex flex-col"
            style={{ borderColor: "oklch(0.92 0.02 355)" }}>
            <MiniHeader icon="💎" title="実は同人ゲームも熱い！" moreHref="/doujin" />
            <div className="flex flex-col gap-1 flex-1">
              {doujinGames.slice(0, 3).map((item) => (
                <DoujinMiniCard key={item.id} item={item} />
              ))}
            </div>
            <CTAButton label="同人ゲームをもっと見る" href="/doujin" />
          </div>

          {/* 4: 快適プレイ環境おすすめ */}
          <div className="bg-white rounded-2xl border p-4 pb-5 flex flex-col"
            style={{ borderColor: "oklch(0.92 0.02 355)" }}>
            <MiniHeader icon="🎮" title="快適プレイ環境おすすめ" moreHref="/environment" />
            <div className="flex flex-col gap-1 flex-1">
              {environmentItems.slice(0, 3).map((item) => (
                <EnvMiniCard key={item.id} item={item} />
              ))}
            </div>
            <CTAButton label="プレイ環境をもっと見る" href="/environment" />
          </div>

        </div>

        {/* ===== スマホ: 縦積み（各セクション独立） ===== */}
        {/* スマホでは既存の独立セクション（SaleSection, DoujinSection, PlayEnvironmentSection）を使うため、
            このコンポーネントはPC専用表示のみ担当 */}

      </div>
    </section>
  );
}
