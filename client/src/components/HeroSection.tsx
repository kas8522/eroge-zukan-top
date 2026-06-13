// HeroSection.tsx
// PC (lg以上): 3カラム横並び（左ヒーロー / 中ランキング / 右サイドカード）
// スマホ: ヒーロー → ランキング(コンパクト) → お知らせ+CTA+管理人(まとめカード)
import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Bell, Gamepad2, Twitter } from "lucide-react";
import { heroSlides, rankingItems, notices, adminNote } from "@/data/mockData";
import { Link } from "wouter";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const slide = heroSlides[current];

  const prev = () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setCurrent((c) => (c + 1) % heroSlides.length);

  return (
    <section className="py-3 lg:py-4" style={{ background: "oklch(0.992 0.006 355)" }}>
      <div className="container">
        {/* PC: 3カラム横並び / スマホ: 縦積み */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px_210px] gap-3 items-start">

          {/* ===== ヒーローカード ===== */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-md bg-gray-900 w-full"
            style={{ height: "clamp(220px, 52vw, 380px)" }}
          >
            <img
              src={slide.thumbnail}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: 0.72 }}
            />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(15,3,10,0.92) 0%, rgba(15,3,10,0.35) 50%, rgba(0,0,0,0.08) 100%)" }} />

            {/* ラベル */}
            <div className="absolute top-3 left-3 flex gap-1.5 z-10">
              <span className="badge-pink">{slide.label}</span>
              {slide.labelType === "new" && <span className="badge-blue">新作</span>}
            </div>

            {/* テキスト */}
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 z-10">
              <h2 className="text-white text-lg lg:text-2xl font-extrabold leading-tight mb-1 drop-shadow-md">
                {slide.catchcopy}
              </h2>
              <p className="text-white/80 text-xs lg:text-sm mb-2 drop-shadow">{slide.subcopy}</p>
              <div className="flex flex-wrap gap-1.5 mb-1.5">
                {slide.tags.map((tag) => (
                  <span key={tag}
                    className="text-white text-[10px] font-medium bg-black/45 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/25">
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-white/55 text-[11px]">発売日：{slide.releaseDate}</p>
            </div>

            {/* 左右ボタン */}
            <button onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors z-10">
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors z-10">
              <ChevronRight className="w-4 h-4 text-white" />
            </button>

            {/* ドット */}
            <div className="absolute bottom-3 right-4 flex gap-1.5 z-10">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === current ? "18px" : "6px",
                    height: "6px",
                    background: i === current ? "oklch(0.62 0.22 355)" : "rgba(255,255,255,0.45)",
                  }} />
              ))}
            </div>
          </div>

          {/* ===== 人気ランキング ===== */}
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden"
            style={{ borderColor: "oklch(0.92 0.02 355)" }}>
            <div className="flex items-center justify-between px-3 py-2.5 border-b"
              style={{ borderColor: "oklch(0.95 0.015 355)" }}>
              <h3 className="section-title text-sm">
                <span>🔥</span> 人気ランキング
              </h3>
              <Link href="/ranking">
                <a className="text-xs shrink-0" style={{ color: "oklch(0.62 0.22 355)" }}>
                  見る →
                </a>
              </Link>
            </div>
            <div className="divide-y divide-pink-50/80">
              {rankingItems.map((item) => (
                <Link key={item.rank} href={`/game/${item.id}`}>
                  <a className="flex items-center gap-2 px-3 py-2 hover:bg-pink-50/40 transition-colors">
                  <span className="w-5 text-center font-extrabold text-sm shrink-0"
                    style={{
                      color: item.rank === 1 ? "#e8a000"
                        : item.rank === 2 ? "#9ba0a8"
                        : item.rank === 3 ? "#c07840"
                        : "oklch(0.55 0.04 310)"
                    }}>
                    {item.rank}
                  </span>
                  <img src={item.thumbnail} alt={item.title}
                    className="w-9 h-9 rounded-lg object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold line-clamp-1" style={{ color: "oklch(0.18 0.03 310)" }}>
                      {item.title}
                    </p>
                    <p className="text-[10px]" style={{ color: "oklch(0.55 0.04 310)" }}>{item.maker}</p>
                  </div>
                  <div className="flex items-center gap-0.5 shrink-0">
                    <Heart className="w-3 h-3" style={{ color: "oklch(0.62 0.22 355)" }} />
                    <span className="text-[10px]" style={{ color: "oklch(0.55 0.04 310)" }}>
                      {item.likes.toLocaleString()}
                    </span>
                  </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>

          {/* ===== 右サイドカード: お知らせ + フォロー + 管理人 ===== */}
          {/* PC: 縦3枚 / スマホ: 横2分割（お知らせ左 + フォロー右）+ 管理人下 */}
          <div className="flex flex-col gap-2.5">

            {/* スマホ: お知らせ + フォロー を横並び / PC: 縦積み */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">

              {/* お知らせ */}
              <div className="bg-white rounded-2xl shadow-sm border overflow-hidden"
                style={{ borderColor: "oklch(0.92 0.02 355)" }}>
                <div className="flex items-center justify-between px-3 py-2 border-b"
                  style={{ borderColor: "oklch(0.95 0.015 355)" }}>
                  <h3 className="section-title text-xs">
                    <Bell className="w-3.5 h-3.5" style={{ color: "oklch(0.62 0.22 355)" }} />
                    お知らせ
                  </h3>
                  <Link href="/features">
                    <span className="text-[10px] shrink-0 cursor-pointer" style={{ color: "oklch(0.62 0.22 355)" }}>
                      もっと見る
                    </span>
                  </Link>
                </div>
                <div className="divide-y divide-pink-50/80">
                  {notices.map((n) => (
                    <Link key={n.id} href={n.href}>
                      <a className="flex items-start gap-1.5 px-3 py-1.5 hover:bg-pink-50/40 transition-colors">
                        <span className="text-[10px] shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.04 310)" }}>{n.date}</span>
                        <span className="text-[10px] line-clamp-1" style={{ color: "oklch(0.25 0.03 310)" }}>{n.text}</span>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              {/* フォロー誘導 */}
              <div className="rounded-2xl border p-3 flex flex-col justify-between"
                style={{ borderColor: "oklch(0.88 0.04 355)", background: "oklch(0.97 0.02 355)" }}>
                <div>
                  <p className="text-xs font-bold mb-1" style={{ color: "oklch(0.18 0.03 310)" }}>
                    📢 更新情報を受け取る
                  </p>
                  <p className="text-[10px] mb-2 leading-relaxed" style={{ color: "oklch(0.42 0.04 310)" }}>
                    新作・セール情報をXでチェック！
                  </p>
                </div>
                <button
                  type="button"
                  disabled
                  className="w-full py-1.5 rounded-lg text-[11px] font-bold text-white opacity-60 cursor-not-allowed flex items-center justify-center gap-1.5"
                  style={{ background: "oklch(0.18 0.03 310)" }}
                >
                  <Twitter className="w-3.5 h-3.5" />
                  Xをフォロー（準備中）
                </button>
              </div>
            </div>

            {/* 管理人コメント */}
            <div className="bg-white rounded-2xl shadow-sm border p-3"
              style={{ borderColor: "oklch(0.92 0.02 355)" }}>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "oklch(0.96 0.025 355)" }}>
                  <Gamepad2 className="w-3 h-3" style={{ color: "oklch(0.62 0.22 355)" }} />
                </div>
                <span className="text-[11px] font-bold" style={{ color: "oklch(0.18 0.03 310)" }}>管理人のひとこと</span>
              </div>
              <p className="text-[10px] leading-relaxed" style={{ color: "oklch(0.38 0.04 310)" }}>
                {adminNote}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
