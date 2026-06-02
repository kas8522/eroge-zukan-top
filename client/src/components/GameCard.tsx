// GameCard.tsx
// デザイン: サムネイル主役(4:3固定)、ラベル、タグ、短い説明、詳細ボタン
// スマホ2列でも崩れないよう: タイトル2行省略、ボタンmt-auto、h-full
import { GameCard as GameCardType } from "@/data/mockData";
import { Link } from "wouter";

interface GameCardProps {
  item: GameCardType;
}

const labelColors: Record<string, string> = {
  today: "badge-pink",
  pickup: "badge-orange",
  live2d: "badge-blue",
  special: "badge-green",
  new: "badge-pink",
};

export default function GameCard({ item }: GameCardProps) {
  return (
    <div
      className="game-card bg-white rounded-xl border overflow-hidden flex flex-col h-full"
      style={{ borderColor: "oklch(0.92 0.02 355)" }}
    >
      {/* サムネイル: 4:3固定比率 */}
      <div className="relative w-full overflow-hidden" style={{ paddingTop: "75%" }}>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {item.label && (
          <span
            className={`absolute top-1.5 left-1.5 ${labelColors[item.labelType ?? "pickup"] ?? "badge-pink"}`}
            style={{ fontSize: "9px" }}
          >
            {item.label}
          </span>
        )}
      </div>

      {/* 情報エリア */}
      <div className="p-2 sm:p-2.5 flex flex-col flex-1 gap-1 sm:gap-1.5">
        {/* タイトル: 2行省略 */}
        <p className="text-[11px] sm:text-xs font-bold line-clamp-2 leading-snug"
          style={{ color: "oklch(0.18 0.03 310)" }}>
          {item.title}
        </p>
        {/* メーカー名 */}
        <p className="text-[9px] sm:text-[10px]" style={{ color: "oklch(0.55 0.04 310)" }}>
          {item.maker}
        </p>

        {/* タグ */}
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag) => (
            <span key={tag} className="tag-chip" style={{ fontSize: "9px" }}>{tag}</span>
          ))}
        </div>

        {/* 説明: 2行省略、flex-1で押し下げ */}
        <p className="text-[9px] sm:text-[10px] line-clamp-2 leading-relaxed flex-1"
          style={{ color: "oklch(0.45 0.04 310)" }}>
          {item.description}
        </p>

        {/* ボタン: 常に下端に揃える */}
        <Link href={`/game/${item.id}`}>
          <button
            className="mt-auto w-full py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold border transition-colors hover:bg-pink-50 btn-press"
            style={{ borderColor: "oklch(0.62 0.22 355)", color: "oklch(0.62 0.22 355)" }}
          >
            詳細を見る
          </button>
        </Link>
      </div>
    </div>
  );
}
