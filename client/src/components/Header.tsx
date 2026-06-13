// Header.tsx
// デザイン: 参考画像に寄せたロゴ（本+コントローラー、エロゲ濃い文字+図鑑ピンクボックス）
// PC: ロゴ左、検索欄中央、アイコン右
// スマホ: ロゴ左、検索アイコン+メニューアイコン右、縦に大きくならない
import { Heart, Bell, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";
import Logo from "./Logo";

const navItems = [
  { label: "ホーム", href: "/", icon: "👑" },
  { label: "人気ランキング", href: "/ranking", icon: "📊" },
  { label: "急上昇", href: "/ranking", icon: "📈" },
  { label: "新作", href: "/game/1", icon: "✨" },
  { label: "ジャンル", href: "/genres", icon: "🏷️" },
  { label: "セール", href: "/sale", icon: "🔥" },
  { label: "レビュー", href: "/reviews", icon: "💬" },
  { label: "特集", href: "/features", icon: "🌟" },
  { label: "同人ゲーム", href: "/doujin", icon: "🎉" },
  { label: "メーカー", href: "/makers", icon: "🏢" },
  { label: "プレイ環境", href: "/environment", icon: "🖥️" },
];

export default function Header() {
  const [, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePlaceholder = (label: string) => {
    toast(`「${label}」は準備中です`);
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50"
      style={{
        borderColor: "oklch(0.92 0.02 355)",
        boxShadow: "0 1px 6px oklch(0.62 0.22 355 / 0.07)"
      }}>

      {/* ===== メインヘッダー行 ===== */}
      <div className="container">
        <div className="flex items-center gap-3 py-2.5 md:py-3 lg:py-3.5">

          {/* ロゴ（PC: lg+サブコピー付き、スマホ: smサブコピーなし） */}
          <div className="shrink-0">
            {/* PC大 */}
            <div className="hidden lg:block">
              <Logo size="lg" showSubcopy={true} />
            </div>
            {/* PC中 */}
            <div className="hidden md:block lg:hidden">
              <Logo size="md" showSubcopy={true} />
            </div>
            {/* スマホ */}
            <div className="md:hidden">
              <Logo size="sm" showSubcopy={false} />
            </div>
          </div>

          {/* 検索欄（PC） */}
          <div className="hidden md:flex flex-1 max-w-[320px] ml-auto items-center gap-2 px-4 py-2 rounded-full border"
            style={{ borderColor: "oklch(0.88 0.03 355)", background: "oklch(0.996 0.003 355)" }}>
            <Search className="w-3.5 h-3.5 shrink-0" style={{ color: "oklch(0.62 0.22 355)" }} />
            <input
              type="text"
              placeholder="作品名・メーカー名で検索"
              className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-400"
              style={{ color: "oklch(0.18 0.03 310)" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchQuery.trim()) {
                  setLocation(`/search?q=${encodeURIComponent(searchQuery)}`);
                  setSearchQuery("");
                }
              }}
            />
          </div>

          {/* 右アイコン群 */}
          <div className="flex items-center gap-1 ml-auto md:ml-3">
            {/* 検索（スマホ） */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-pink-50 transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="検索"
            >
              <Search className="w-5 h-5" style={{ color: "oklch(0.62 0.22 355)" }} />
            </button>

            {/* お気に入り（PC） */}
            <button
              className="hidden sm:flex flex-col items-center px-2.5 py-1 rounded-xl hover:bg-pink-50 transition-colors"
              onClick={() => handlePlaceholder("お気に入り")}
            >
              <Heart className="w-5 h-5" style={{ color: "oklch(0.62 0.22 355)" }} />
              <span className="text-[10px] mt-0.5" style={{ color: "oklch(0.45 0.04 310)" }}>お気に入り</span>
            </button>

            {/* お知らせ（PC） */}
            <button
              className="hidden sm:flex flex-col items-center px-2.5 py-1 rounded-xl hover:bg-pink-50 transition-colors relative"
              onClick={() => handlePlaceholder("お知らせ")}
            >
              <div className="relative">
                <Bell className="w-5 h-5" style={{ color: "oklch(0.45 0.04 310)" }} />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full text-[8px] font-bold text-white flex items-center justify-center"
                  style={{ background: "oklch(0.62 0.22 355)" }}>3</span>
              </div>
              <span className="text-[10px] mt-0.5" style={{ color: "oklch(0.45 0.04 310)" }}>お知らせ</span>
            </button>

            {/* メニュー */}
            <button
              className="flex flex-col items-center px-2.5 py-1 rounded-xl hover:bg-pink-50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen
                ? <X className="w-5 h-5" style={{ color: "oklch(0.45 0.04 310)" }} />
                : <Menu className="w-5 h-5" style={{ color: "oklch(0.45 0.04 310)" }} />
              }
              <span className="text-[10px] mt-0.5" style={{ color: "oklch(0.45 0.04 310)" }}>メニュー</span>
            </button>
          </div>
        </div>

        {/* スマホ検索欄 */}
        {searchOpen && (
          <div className="md:hidden pb-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{ borderColor: "oklch(0.88 0.03 355)", background: "oklch(0.996 0.003 355)" }}>
              <Search className="w-3.5 h-3.5 shrink-0" style={{ color: "oklch(0.62 0.22 355)" }} />
              <input
                type="text"
                placeholder="作品名・メーカー名で検索"
                className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-400"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && searchQuery.trim()) {
                    setLocation(`/search?q=${encodeURIComponent(searchQuery)}`);
                    setSearchQuery("");
                    setSearchOpen(false);
                  }
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* ===== グローバルナビ ===== */}
      <nav className="border-t" style={{ borderColor: "oklch(0.94 0.02 355)" }}>
        <div className="container">
          <div className="scroll-x flex items-center gap-0.5" style={{ paddingRight: "2.5rem" }}>
            {navItems.map((item) => {
              const isActive = item.href === "/";
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="shrink-0 flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors relative whitespace-nowrap rounded-lg"
                  style={{
                    color: isActive ? "oklch(0.62 0.22 355)" : "oklch(0.38 0.03 310)",
                    background: isActive ? "oklch(0.96 0.025 355)" : "transparent",
                  }}
                  onClick={item.href === "#" ? (e) => { e.preventDefault(); handlePlaceholder(item.label); } : undefined}
                >
                  <span className="text-sm">{item.icon}</span>
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ===== モバイルメニュー ===== */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white"
          style={{ borderColor: "oklch(0.94 0.02 355)" }}>
          <div className="container py-3 grid grid-cols-2 gap-1.5">
            {navItems.slice(1).map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-xl hover:bg-pink-50 transition-colors text-left"
                style={{ color: "oklch(0.35 0.03 310)" }}
                onClick={() => {
                  setLocation(item.href);
                  setMobileMenuOpen(false);
                }}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
