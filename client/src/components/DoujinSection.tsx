// DoujinSection.tsx
// 「実は同人ゲームも熱い！」セクション
// PC: 4列グリッド / スマホ: 横スクロール(カード幅74vw)
// バッジ: 同人/低価格/短時間/セール中/手軽 など
// 白ベース・ピンクアクセント・カード型UI維持
import { doujinGames, DoujinGame, DoujinBadge } from "@/data/mockData";
import { Link } from "wouter";

// バッジの色分け
const badgeStyle: Record<DoujinBadge, string> = {
  "同人": "badge-blue",
  "低価格": "badge-green",
  "短時間": "badge-orange",
  "セール中": "badge-pink",
  "スマホ対応": "badge-green",
  "ブラウザ対応": "badge-blue",
  "手軽": "badge-orange",
};

function DoujinCard({ item }: { item: DoujinGame }) {
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
        {/* 「同人」バッジを左上に固定表示 */}
        <span className="absolute top-1.5 left-1.5 badge-blue" style={{ fontSize: "9px" }}>
          同人
        </span>
        {/* セール中バッジ */}
        {item.badges.includes("セール中") && (
          <span className="absolute top-1.5 right-1.5 badge-pink" style={{ fontSize: "9px" }}>
            セール中
          </span>
        )}
      </div>

      {/* 情報エリア */}
      <div className="p-2.5 flex flex-col flex-1 gap-1.5">
        {/* タイトル */}
        <p className="text-[11px] sm:text-xs font-bold line-clamp-2 leading-snug"
          style={{ color: "oklch(0.18 0.03 310)" }}>
          {item.title}
        </p>
        {/* サークル名 */}
        <p className="text-[10px]" style={{ color: "oklch(0.55 0.04 310)" }}>
          {item.circle}
        </p>

        {/* バッジ群（同人以外） */}
        <div className="flex flex-wrap gap-1">
          {item.badges
            .filter((b) => b !== "同人" && b !== "セール中")
            .map((badge) => (
              <span key={badge} className={badgeStyle[badge]} style={{ fontSize: "9px" }}>
                {badge}
              </span>
            ))}
        </div>

        {/* 説明 */}
        <p className="text-[10px] line-clamp-2 leading-relaxed flex-1"
          style={{ color: "oklch(0.45 0.04 310)" }}>
          {item.description}
        </p>

        {/* 価格 */}
        <p className="text-sm font-extrabold" style={{ color: "oklch(0.62 0.22 355)" }}>
          {item.price}
        </p>

        {/* ボタン */}
        <Link href={item.href}>
          <a className="mt-auto w-full py-1.5 rounded-lg text-[10px] font-semibold border transition-colors hover:bg-pink-50 btn-press block text-center"
            style={{ borderColor: "oklch(0.62 0.22 355)", color: "oklch(0.62 0.22 355)" }}>
            詳細を見る
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function DoujinSection() {
  return (
    <section className="py-5 lg:py-6" style={{ background: "oklch(0.996 0.008 250)" }}>
      {/* 背景は薄い青みがかった白でセール欄と区別 */}
      <div className="container">
        {/* セクションヘッダー */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="section-title">
              <span className="text-lg">💎</span>
              <span>実は同人ゲームも熱い！</span>
            </h2>
            <p className="text-xs mt-1 ml-6" style={{ color: "oklch(0.55 0.04 310)" }}>
              低価格で手軽に遊びやすい、注目の同人ゲームをピックアップ。
            </p>
          </div>
          <Link href="/doujin">
            <a className="text-xs font-medium flex items-center gap-0.5 hover:underline shrink-0 btn-press"
              style={{ color: "oklch(0.62 0.22 355)" }}>
              同人ゲームをもっと見る →
            </a>
          </Link>
        </div>

        {/* ===== PC: 4列グリッド ===== */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {doujinGames.map((item) => (
            <DoujinCard key={item.id} item={item} />
          ))}
        </div>

        {/* ===== スマホ: 横スクロール ===== */}
        <div className="sm:hidden">
          <div className="scroll-x flex gap-3 pb-2" style={{ paddingRight: "1.5rem" }}>
            {doujinGames.map((item) => (
              <div key={item.id} className="shrink-0" style={{ width: "74vw", maxWidth: "240px" }}>
                <DoujinCard item={item} />
              </div>
            ))}
          </div>
          <p className="text-[10px] text-center mt-1" style={{ color: "oklch(0.68 0.04 310)" }}>
            ← スワイプしてもっと見る →
          </p>
        </div>

        {/* 下部CTA */}
        <div className="mt-4 text-center">
          <Link href="/doujin">
            <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border btn-press transition-colors hover:bg-blue-50"
              style={{ borderColor: "oklch(0.55 0.18 250)", color: "oklch(0.45 0.18 250)" }}>
              💎 同人ゲームをもっと見る
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
