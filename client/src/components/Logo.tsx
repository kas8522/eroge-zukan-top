// Logo.tsx
// デザイン参考: 開いた本の中にゲームパッドアイコン
//   「エロゲ」濃い文字 + 「図鑑」ピンク背景ボックス
//   キラキラ(✦)装飾、サブコピー付き、個人運営メディア感
// PC: lg サイズで存在感を出す / スマホ: sm サイズで省スペース
interface LogoProps {
  size?: "sm" | "md" | "lg";
  showSubcopy?: boolean;
}

export default function Logo({ size = "md", showSubcopy = true }: LogoProps) {
  const iconW = size === "sm" ? 40 : size === "lg" ? 68 : 56;
  const iconH = size === "sm" ? 34 : size === "lg" ? 58 : 48;
  const titleClass =
    size === "sm" ? "text-xl" :
    size === "lg" ? "text-[1.75rem]" :
    "text-2xl";
  const subcopyClass = size === "sm" ? "text-[9px]" : size === "lg" ? "text-[11px]" : "text-[10px]";

  return (
    <a href="/" className="flex items-center gap-2 shrink-0 select-none">
      {/* ===== アイコン SVG ===== */}
      <div className="shrink-0 relative" style={{ width: iconW, height: iconH }}>
        <svg
          viewBox="0 0 52 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={iconW}
          height={iconH}
        >
          {/* ---- 本の外枠（角丸四角） ---- */}
          <rect x="2" y="4" width="48" height="36" rx="5" fill="white"
            stroke="oklch(0.62 0.22 355)" strokeWidth="2" />

          {/* ---- 本の中央の背表紙ライン ---- */}
          <line x1="26" y1="6" x2="26" y2="38" stroke="oklch(0.62 0.22 355)" strokeWidth="1.5" strokeDasharray="2 2" />

          {/* ---- 左ページの罫線（ページ感） ---- */}
          <line x1="7" y1="13" x2="22" y2="13" stroke="oklch(0.88 0.06 355)" strokeWidth="1" />
          <line x1="7" y1="17" x2="22" y2="17" stroke="oklch(0.88 0.06 355)" strokeWidth="1" />
          <line x1="7" y1="21" x2="22" y2="21" stroke="oklch(0.88 0.06 355)" strokeWidth="1" />

          {/* ---- ゲームパッド（右ページ中央） ---- */}
          {/* ボディ */}
          <rect x="29" y="14" width="18" height="12" rx="6" fill="oklch(0.62 0.22 355)" />
          {/* グリップ左 */}
          <rect x="29" y="22" width="5" height="6" rx="2.5" fill="oklch(0.62 0.22 355)" />
          {/* グリップ右 */}
          <rect x="42" y="22" width="5" height="6" rx="2.5" fill="oklch(0.62 0.22 355)" />
          {/* 十字キー（左） */}
          <rect x="31" y="18" width="5" height="1.8" rx="0.9" fill="white" fillOpacity="0.95" />
          <rect x="33" y="16.5" width="1.8" height="4.8" rx="0.9" fill="white" fillOpacity="0.95" />
          {/* ボタン群（右） */}
          <circle cx="42.5" cy="17.5" r="1.3" fill="white" fillOpacity="0.95" />
          <circle cx="44.5" cy="20" r="1.3" fill="white" fillOpacity="0.95" />
          <circle cx="42.5" cy="22.5" r="1.3" fill="white" fillOpacity="0.95" />
          <circle cx="40.5" cy="20" r="1.3" fill="white" fillOpacity="0.95" />
          {/* セレクト/スタート */}
          <rect x="36" y="19" width="2.5" height="1.5" rx="0.75" fill="white" fillOpacity="0.7" />
          <rect x="39" y="19" width="2.5" height="1.5" rx="0.75" fill="white" fillOpacity="0.7" />

          {/* ---- 本の下部（背表紙の厚み感） ---- */}
          <rect x="2" y="37" width="48" height="5" rx="3" fill="oklch(0.92 0.04 355)" />

          {/* ---- キラキラ装飾 ---- */}
          <text x="0" y="5" fontSize="7" fill="oklch(0.62 0.22 355)" fontWeight="bold">✦</text>
          <text x="44" y="4" fontSize="6" fill="oklch(0.72 0.16 355)">✦</text>
          <text x="1" y="45" fontSize="5" fill="oklch(0.72 0.16 355)">✦</text>
        </svg>
      </div>

      {/* ===== テキスト部分 ===== */}
      <div className="flex flex-col leading-none gap-0.5">
        {/* メインタイトル */}
        <div className={`flex items-center gap-1 font-extrabold ${titleClass} tracking-tight leading-none`}>
          <span className="text-[0.55em]" style={{ color: "oklch(0.62 0.22 355)" }}>✦</span>
          <span style={{ color: "oklch(0.18 0.03 310)" }}>エロゲ</span>
          <span
            className="text-white rounded-md px-1.5 py-0.5 inline-block"
            style={{
              background: "oklch(0.62 0.22 355)",
              fontSize: "0.92em",
              lineHeight: 1.25,
              letterSpacing: "0.02em",
            }}
          >
            図鑑
          </span>
          <span className="text-[0.45em]" style={{ color: "oklch(0.72 0.16 355)" }}>✦</span>
        </div>

        {/* サブコピー */}
        {showSubcopy && (
          <p className={`${subcopyClass} font-medium tracking-wide flex items-center gap-0.5`}
            style={{ color: "oklch(0.55 0.08 355)" }}>
            <span className="text-[0.8em]">✦</span>
            新作・レビュー・セール情報を毎日更新
            <span className="text-[0.8em]">✦</span>
          </p>
        )}
      </div>
    </a>
  );
}
