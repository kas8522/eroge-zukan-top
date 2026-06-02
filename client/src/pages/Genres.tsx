import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { genres, genreRecommendations, gameDetails } from "@/data/mockData";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

// ===== ジャンルカード =====
function GenreCard({ genre }: { genre: typeof genres[0] }) {
  return (
    <a href={`#${genre.id}`} className="bg-white rounded-xl border overflow-hidden hover:shadow-md transition-shadow group block" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
        {/* サムネイル3枚 */}
        <div className="grid grid-cols-3 gap-0 overflow-hidden bg-gray-100 h-16">
          {genre.thumbnails.map((thumb, idx) => (
            <div key={idx} className="relative overflow-hidden">
              <img src={thumb} alt={`${genre.name} ${idx + 1}`} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform" onError={(e) => { e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23f3e8f5' width='100' height='100'/%3E%3C/svg%3E"; }} />
            </div>
          ))}
        </div>

        {/* 情報 */}
        <div className="p-2.5">
          <h3 className="text-xs font-bold mb-0.5" style={{ color: "oklch(0.18 0.03 310)" }}>
            {genre.name}
          </h3>
          <p className="text-[10px] mb-1.5 line-clamp-2" style={{ color: "oklch(0.52 0.04 310)" }}>
            {genre.description}
          </p>
          <p className="text-[9px] mb-2" style={{ color: "oklch(0.62 0.22 355)" }}>
            作品数: {genre.count}件
          </p>

          {/* ボタン */}
          <button className="w-full flex items-center justify-between py-1.5 px-2 rounded-lg text-[10px] font-semibold hover:bg-pink-50 transition-colors" style={{ color: "oklch(0.62 0.22 355)", border: "1px solid oklch(0.92 0.02 355)" }}>
            <span>このジャンルを見る</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </a>
  );
}

// ===== 注目ジャンルカード =====
function FeatureGenreCard({ title, genreName, emoji }: { title: string; genreName: string; emoji: string }) {
  const genre = genres.find(g => g.name === genreName);
  if (!genre) return null;

  return (
    <a href={`#${genre.id}`} className="bg-white rounded-xl border p-4 hover:shadow-md transition-shadow block" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
        <p className="text-[10px] mb-1" style={{ color: "oklch(0.52 0.04 310)" }}>{title}</p>
        <p className="text-lg font-bold" style={{ color: "oklch(0.18 0.03 310)" }}>
          {emoji} {genreName}
        </p>
      </a>
  );
}

// ===== ジャンル別おすすめ作品セクション =====
function GenreRecommendationSection({ recommendation }: { recommendation: typeof genreRecommendations[0] }) {
  return (
    <section className="py-4 lg:py-6">
      <div className="container">
        <h3 className="text-lg font-bold mb-4" style={{ color: "oklch(0.18 0.03 310)" }}>
          {recommendation.genreName}の人気作
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {recommendation.works.map((work) => (
            <Link key={work.id} href={`/game/${work.id}`}>
              <a className="bg-white rounded-xl border overflow-hidden hover:shadow-md transition-shadow group" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
                <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
                  <img src={work.mainImage} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" onError={(e) => { e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect fill='%23f3e8f5' width='300' height='400'/%3E%3C/svg%3E"; }} />
                </div>
                <div className="p-2">
                  <p className="text-[10px] font-bold line-clamp-2" style={{ color: "oklch(0.18 0.03 310)" }}>
                    {work.title}
                  </p>
                  <p className="text-[9px]" style={{ color: "oklch(0.52 0.04 310)" }}>
                    {work.maker}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Genres() {
  const [activeTab, setActiveTab] = useState<string>("all");

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <div className="border-b" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
        <div className="container py-4 lg:py-6">
          <Link href="/">
            <a className="inline-flex items-center gap-1 text-sm mb-3 hover:opacity-70 transition-opacity" style={{ color: "oklch(0.52 0.04 310)" }}>
              ← エロゲ図鑑に戻る
            </a>
          </Link>
          <h1 className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: "oklch(0.18 0.03 310)" }}>
            ジャンルから探す
          </h1>
          <p className="text-sm" style={{ color: "oklch(0.52 0.04 310)" }}>
            好みに合う作品をジャンル別にチェック
          </p>
        </div>
      </div>
      <AffiliateDisclosure />

      {/* 注目ジャンル */}
      <section className="py-5 lg:py-6" style={{ background: "oklch(0.992 0.006 355)" }}>
        <div className="container">
          <h2 className="text-sm font-bold mb-3" style={{ color: "oklch(0.18 0.03 310)" }}>
            今週の注目ジャンル
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <FeatureGenreCard title="今週人気" genreName="Live2D" emoji="✨" />
            <FeatureGenreCard title="手軽に遊ぶなら" genreName="同人ゲーム" emoji="🎮" />
            <FeatureGenreCard title="初心者向け" genreName="純愛" emoji="💕" />
          </div>
        </div>
      </section>

      {/* ジャンル一覧 */}
      <section className="py-5 lg:py-6" id="all-genres">
        <div className="container">
          <h2 className="text-lg font-bold mb-4" style={{ color: "oklch(0.18 0.03 310)" }}>
            すべてのジャンル
          </h2>

          {/* PC版: 3列、スマホ版: 2列 */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {genres.map((genre) => (
              <div key={genre.id} id={genre.id}>
                <GenreCard genre={genre} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ジャンル別おすすめ作品 */}
      {genreRecommendations.map((rec) => (
        <section key={rec.genreId} id={`${rec.genreId}-works`} className="py-4 lg:py-6" style={{ background: rec.genreId === "live2d" ? "oklch(0.992 0.006 355)" : "white" }}>
          <div className="container">
            <h3 className="text-lg font-bold mb-4" style={{ color: "oklch(0.18 0.03 310)" }}>
              {rec.genreName}の人気作
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {rec.works.map((work) => (
                <Link key={work.id} href={`/game/${work.id}`}>
                  <a className="bg-white rounded-xl border overflow-hidden hover:shadow-md transition-shadow group" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
                    <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
                      <img src={work.mainImage} alt={work.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform" onError={(e) => { e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect fill='%23f3e8f5' width='300' height='400'/%3E%3C/svg%3E"; }} />
                    </div>
                    <div className="p-1.5">
                      <p className="text-[9px] font-bold line-clamp-2" style={{ color: "oklch(0.18 0.03 310)" }}>
                        {work.title}
                      </p>
                      <p className="text-[8px]" style={{ color: "oklch(0.52 0.04 310)" }}>
                        {work.maker}
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
