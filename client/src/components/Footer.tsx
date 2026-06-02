// Footer.tsx
// デザイン: シンプルな白フッター、利用規約・プライバシー・問い合わせ・運営者情報
// コピーライト: © 2026 EROGE ZUKAN All Rights Reserved.
import { Link } from "wouter";
import Logo from "./Logo";

const primaryLinks = [
  { label: "お問い合わせ", href: "/contact" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "免責事項・広告について", href: "/disclaimer" },
] as const;

const secondaryLinks = [
  { label: "運営者情報", href: "/about" },
  { label: "利用規約", href: "/terms" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t py-6" style={{ background: "oklch(1 0 0)", borderColor: "oklch(0.92 0.02 355)" }}>
      <div className="container">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <Logo size="sm" showSubcopy={false} />
            <p className="text-[10px]" style={{ color: "oklch(0.65 0.04 310)" }}>
              © 2026 EROGE ZUKAN All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 sm:justify-end text-xs">
              {primaryLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="whitespace-nowrap rounded-full border px-3 py-1 hover:bg-pink-50 transition-colors"
                  style={{ color: "oklch(0.52 0.04 310)", borderColor: "oklch(0.92 0.02 355)" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:justify-end text-[11px]">
              {secondaryLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="hover:underline whitespace-nowrap"
                  style={{ color: "oklch(0.52 0.04 310)" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
