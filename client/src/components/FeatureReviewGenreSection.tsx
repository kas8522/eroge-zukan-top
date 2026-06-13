// FeatureReviewGenreSection.tsx
// デザイン: 3カラム（特集まとめ・レビュー新着・ジャンルから探す）
import { features, genres, reviews } from "@/data/mockData";
import { Star } from "lucide-react";
import { Link } from "wouter";

function StarRating({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.3;
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-3 h-3"
          style={{
            fill: i < full ? "#f59e0b" : "none",
            color: i < full || (i === full && half) ? "#f59e0b" : "#d1d5db",
          }}
        />
      ))}
      <span className="text-[10px] ml-0.5" style={{ color: "oklch(0.52 0.04 310)" }}>({value})</span>
    </span>
  );
}

export default function FeatureReviewGenreSection() {
  return (
    <section className="py-6" style={{ background: "oklch(0.992 0.006 355)" }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ===== 特集まとめ ===== */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="section-title text-sm">
                <span>🐾</span> 特集まとめ
              </h2>
              <Link href="/features">
                <a className="text-xs" style={{ color: "oklch(0.62 0.22 355)" }}>
                  もっと見る →
                </a>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {features.slice(0, 4).map((f) => (
                <Link key={f.id} href={f.href.startsWith("/") ? f.href : "/features"}>
                  <a className="game-card rounded-xl overflow-hidden border text-left block"
                    style={{ borderColor: "oklch(0.92 0.02 355)" }}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={f.thumbnail} alt={f.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-2 bg-white">
                      <p className="text-[11px] font-bold line-clamp-2 leading-snug" style={{ color: "oklch(0.18 0.03 310)" }}>
                        {f.title}
                      </p>
                      <p className="text-[9px] mt-0.5" style={{ color: "oklch(0.52 0.04 310)" }}>{f.description}</p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>

          {/* ===== レビュー新着 ===== */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="section-title text-sm">
                <span>📝</span> レビュー新着
              </h2>
              <Link href="/reviews">
                <a className="text-xs" style={{ color: "oklch(0.62 0.22 355)" }}>
                  もっと見る →
                </a>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              {reviews.slice(0, 3).map((r) => (
                <Link key={r.id} href={r.href}>
                  <a className="game-card bg-white rounded-xl border p-3 flex items-start gap-3 text-left"
                    style={{ borderColor: "oklch(0.92 0.02 355)" }}>
                    <img
                      src={r.thumbnail}
                      alt={r.title}
                      className="w-12 h-12 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold line-clamp-1" style={{ color: "oklch(0.18 0.03 310)" }}>
                        {r.title}
                      </p>
                      <p className="text-[10px] mb-1" style={{ color: "oklch(0.52 0.04 310)" }}>{r.maker}</p>
                      <StarRating value={r.rating} />
                      <p className="text-[10px] mt-1 line-clamp-2 leading-relaxed" style={{ color: "oklch(0.42 0.04 310)" }}>
                        {r.reviewText}
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>

          {/* ===== ジャンルから探す ===== */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="section-title text-sm">
                <span>🏷️</span> ジャンルから探す
              </h2>
              <Link href="/genres">
                <a className="text-xs" style={{ color: "oklch(0.62 0.22 355)" }}>
                  一覧へ →
                </a>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {genres.slice(0, 5).map((g) => (
                <Link key={g.id} href="/genres">
                  <a className="tag-chip hover:bg-pink-100 transition-colors btn-press">
                    {g.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
