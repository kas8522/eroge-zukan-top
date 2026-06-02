// SectionHeader.tsx
// デザイン: アイコン + 見出し + 「もっと見る」リンク
// 参考画像に合わせてアイコンと文字の間隔・サイズを調整
import { toast } from "sonner";

interface SectionHeaderProps {
  icon: string;
  title: string;
  subtitle?: string;
  moreHref?: string;
  moreLabel?: string;
}

export default function SectionHeader({ icon, title, subtitle, moreHref, moreLabel = "もっと見る" }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between mb-4">
      <div>
        <h2 className="section-title">
          <span className="text-lg leading-none">{icon}</span>
          <span>{title}</span>
        </h2>
        {subtitle && (
          <p className="text-xs mt-1 ml-6" style={{ color: "oklch(0.55 0.04 310)" }}>
            {subtitle}
          </p>
        )}
      </div>
      {moreHref && (
        <a
          href={moreHref}
          className="text-xs font-medium flex items-center gap-0.5 hover:underline shrink-0"
          style={{ color: "oklch(0.62 0.22 355)" }}
          onClick={(e) => { e.preventDefault(); toast(`「${title}」一覧ページは準備中です`); }}
        >
          {moreLabel} →
        </a>
      )}
    </div>
  );
}
