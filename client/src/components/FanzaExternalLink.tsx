export default function FanzaExternalLink({
  href,
  className = "",
  compact = false,
}: {
  href: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`block text-center font-semibold border transition-colors hover:bg-pink-50 btn-press ${
        compact ? "py-1 rounded text-[10px]" : "py-1.5 rounded-lg text-[10px] sm:text-xs"
      } ${className}`}
      style={{ borderColor: "oklch(0.62 0.22 355)", color: "oklch(0.62 0.22 355)" }}
      onClick={(e) => e.stopPropagation()}
    >
      FANZAで見る
    </a>
  );
}
