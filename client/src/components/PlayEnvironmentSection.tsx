// PlayEnvironmentSection.tsx
// PC (lg以上): 5〜6列グリッド + 右サイドカード
// スマホ: 横スクロール、カード幅74vw、右端に余白あり
// Amazon欄ではなくプレイ環境おすすめ、複数ASP対応構造
import { environmentItems, EnvironmentItem } from "@/data/mockData";
import SectionHeader from "./SectionHeader";
import { toast } from "sonner";

function EnvCard({ item }: { item: EnvironmentItem }) {
  return (
    <div
      className="game-card bg-white rounded-xl border overflow-hidden flex flex-col h-full"
      style={{ borderColor: "oklch(0.92 0.02 355)" }}
    >
      {/* カテゴリバッジ */}
      <div className="px-2.5 pt-2.5">
        <span className="badge-pink" style={{ fontSize: "9px" }}>{item.category}</span>
      </div>

      {/* 画像: 正方形比率 */}
      <div className="relative overflow-hidden mx-2.5 mt-1.5 rounded-lg bg-gray-50"
        style={{ paddingTop: "calc(100% - 20px)", width: "calc(100% - 20px)" }}>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      {/* 情報 */}
      <div className="p-2.5 flex flex-col flex-1 gap-1">
        <p className="text-[11px] font-bold line-clamp-2 leading-snug" style={{ color: "oklch(0.18 0.03 310)" }}>
          {item.title}
        </p>
        <p className="text-[10px] line-clamp-2 flex-1 leading-relaxed" style={{ color: "oklch(0.52 0.04 310)" }}>
          {item.description}
        </p>
        <p className="text-sm font-extrabold" style={{ color: "oklch(0.18 0.03 310)" }}>
          {item.price}
        </p>
        <button
          className="w-full py-1.5 rounded-lg text-[10px] font-semibold border transition-colors hover:bg-pink-50 btn-press"
          style={{ borderColor: "oklch(0.62 0.22 355)", color: "oklch(0.62 0.22 355)" }}
          onClick={() => toast(`「${item.title}」の詳細ページは準備中です`)}
        >
          詳細を見る
        </button>
      </div>
    </div>
  );
}

export default function PlayEnvironmentSection() {
  return (
    <section className="py-5 lg:py-6" style={{ background: "oklch(1 0 0)" }}>
      <div className="container">
        <SectionHeader
          icon="🎮"
          title="快適プレイ環境のおすすめ"
          subtitle="管理人が実際に使っているアイテムを中心に紹介！"
          moreHref="#"
        />

        {/* ===== PC: グリッド + 右サイドカード ===== */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_180px] gap-4">
          {/* メインカード 5列 */}
          <div className="grid grid-cols-5 xl:grid-cols-6 gap-3">
            {environmentItems.map((item) => (
              <EnvCard key={item.id} item={item} />
            ))}
          </div>

          {/* 右サイドカード */}
          <div className="flex flex-col gap-2 rounded-xl border p-3"
            style={{ borderColor: "oklch(0.92 0.02 355)", background: "oklch(0.98 0.015 355)" }}>
            <p className="text-xs font-bold mb-1" style={{ color: "oklch(0.18 0.03 310)" }}>
              🎯 プレイ環境特集
            </p>
            {[
              { title: "長時間プレイ向けチェア比較", sub: "腰が楽で集中できる！" },
              { title: "深夜プレイにおすすめアイテム", sub: "静かで快適な環境をつくる" },
              { title: "ASMR最適ヘッドホン特集", sub: "没入感が段違い！" },
            ].map((f) => (
              <button
                key={f.title}
                className="flex items-start gap-2 p-2 rounded-lg bg-white border text-left hover:bg-pink-50 transition-colors"
                style={{ borderColor: "oklch(0.92 0.02 355)" }}
                onClick={() => toast(`「${f.title}」は準備中です`)}
              >
                <div className="w-10 h-9 rounded-md shrink-0" style={{ background: "oklch(0.94 0.03 355)" }} />
                <div>
                  <p className="text-[11px] font-semibold leading-snug" style={{ color: "oklch(0.18 0.03 310)" }}>{f.title}</p>
                  <p className="text-[9px] mt-0.5" style={{ color: "oklch(0.55 0.04 310)" }}>{f.sub}</p>
                </div>
              </button>
            ))}
            <button
              className="mt-1 w-full py-2 rounded-lg text-xs font-bold text-white btn-press"
              style={{ background: "oklch(0.62 0.22 355)" }}
              onClick={() => toast("特集ページは準備中です")}
            >
              特集ページを見る
            </button>
          </div>
        </div>

        {/* ===== スマホ: 横スクロール ===== */}
        <div className="lg:hidden">
          <div className="scroll-x flex gap-3 pb-2" style={{ paddingRight: "1.5rem" }}>
            {environmentItems.map((item) => (
              <div key={item.id} className="shrink-0" style={{ width: "74vw", maxWidth: "230px" }}>
                <EnvCard item={item} />
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
