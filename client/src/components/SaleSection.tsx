// SaleSection.tsx
// PC (lg以上): 5〜6列グリッド、右端が切れない
// スマホ: 横スクロール、カード幅74vw、右端に余白あり
// 価格: 通常価格取り消し線(薄) + セール価格ピンク大 + 割引バッジ目立たせ
// ボタン文言: 「セールをチェック」
import { saleItems, SaleItem } from "@/data/mockData";
import SectionHeader from "./SectionHeader";
import { Link } from "wouter";

function SaleCard({ item }: { item: SaleItem }) {
  return (
    <div
      className="game-card bg-white rounded-xl border overflow-hidden flex flex-col h-full"
      style={{ borderColor: "oklch(0.92 0.02 355)" }}
    >
      {/* サムネイル: 4:3比率 */}
      <div className="relative w-full overflow-hidden" style={{ paddingTop: "75%" }}>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* 割引バッジ */}
        <div className="absolute top-1.5 left-1.5 flex flex-col items-center justify-center rounded-lg text-white font-extrabold leading-tight"
          style={{
            background: "oklch(0.58 0.22 25)",
            width: "36px",
            height: "36px",
            fontSize: "10px",
          }}>
          <span>{item.discountPercent}%</span>
          <span style={{ fontSize: "8px" }}>OFF</span>
        </div>
      </div>

      {/* 情報 */}
      <div className="p-2.5 flex flex-col flex-1 gap-1">
        <p className="text-[11px] font-bold line-clamp-2 leading-snug" style={{ color: "oklch(0.18 0.03 310)" }}>
          {item.title}
        </p>
        <p className="text-[10px]" style={{ color: "oklch(0.55 0.04 310)" }}>{item.maker}</p>

        {/* 価格 */}
        <div className="flex flex-col gap-0.5 mt-0.5">
          <span className="text-[10px] line-through" style={{ color: "oklch(0.70 0.04 310)" }}>
            {item.originalPrice}
          </span>
          <span className="text-base font-extrabold leading-none" style={{ color: "oklch(0.62 0.22 355)" }}>
            {item.salePrice}
          </span>
        </div>

        {/* 終了日 */}
        <p className="text-[9px]" style={{ color: "oklch(0.58 0.04 310)" }}>
          〜{item.saleEndDate}まで
        </p>

        {/* ボタン */}
        <Link href={`/game/${item.id}`}>
          <a className="mt-auto w-full py-1.5 rounded-lg text-[10px] font-bold text-white btn-press transition-opacity hover:opacity-90 block text-center"
            style={{ background: "oklch(0.62 0.22 355)" }}>
            詳細を見る
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function SaleSection() {
  return (
    <section className="py-5 lg:py-6" style={{ background: "oklch(0.992 0.006 355)" }}>
      <div className="container">
        <SectionHeader icon="🐱" title="今だけお得！セール中の注目作品" moreHref="/sale" />

        {/* ===== PC: グリッド ===== */}
        <div className="hidden lg:grid lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {saleItems.map((item) => (
            <SaleCard key={item.id} item={item} />
          ))}
        </div>

        {/* ===== スマホ: 横スクロール ===== */}
        <div className="lg:hidden">
          <div className="scroll-x flex gap-3 pb-2" style={{ paddingRight: "1.5rem" }}>
            {saleItems.map((item) => (
              <div key={item.id} className="shrink-0" style={{ width: "74vw", maxWidth: "240px" }}>
                <SaleCard item={item} />
              </div>
            ))}
          </div>
          <p className="text-[10px] text-center mt-1" style={{ color: "oklch(0.68 0.04 310)" }}>
            ← スワイプしてもっと見る →
          </p>
        </div>
      </div>
    </section>
  );
}
