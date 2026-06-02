// Footer.tsx
// デザイン: シンプルな白フッター、利用規約・プライバシー・問い合わせ・運営者情報
// コピーライト: © 2026 EROGE ZUKAN All Rights Reserved.
import { Gamepad2 } from "lucide-react";
import { Link } from "wouter";
import Logo from "./Logo";

const footerLinks = [
  { label: "お問い合わせ", href: "/contact" },
  { label: "運営者情報", href: "/about" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "利用規約", href: "/terms" },
  { label: "免責事項・広告について", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="border-t py-6" style={{ background: "oklch(1 0 0)", borderColor: "oklch(0.92 0.02 355)" }}>
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* ロゴ（小サイズ、サブコピーなし） */}
          <Logo size="sm" showSubcopy={false} />

          {/* リンク */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
            {footerLinks.map((l) => (
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

          {/* コピーライト */}
          <p className="text-[10px]" style={{ color: "oklch(0.65 0.04 310)" }}>
            © 2026 EROGE ZUKAN All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
