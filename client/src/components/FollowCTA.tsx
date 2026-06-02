// FollowCTA.tsx
// デザイン: ピンク系淡い背景、Xフォロー・更新情報導線（会員登録なし）
import { Mail, Twitter } from "lucide-react";
import { toast } from "sonner";

export default function FollowCTA() {
  return (
    <section className="py-10 relative overflow-hidden"
      style={{ background: "oklch(0.95 0.04 355)" }}>
      {/* 装飾的な背景キラキラ */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {["top-4 left-8", "top-6 right-16", "bottom-4 left-1/4", "bottom-6 right-1/3", "top-1/2 left-4", "top-1/2 right-8"].map((pos, i) => (
          <span key={i} className={`absolute text-pink-300 opacity-40 text-lg ${pos}`}>✦</span>
        ))}
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* テキスト */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-extrabold mb-1" style={{ color: "oklch(0.18 0.03 310)" }}>
              エロゲ図鑑をフォローしよう！
            </h2>
            <p className="text-sm" style={{ color: "oklch(0.45 0.05 310)" }}>
              新作情報やセール情報をお届けします
            </p>
          </div>

          {/* ボタン群 */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white btn-press transition-opacity hover:opacity-90"
              style={{ background: "oklch(0.18 0.03 310)" }}
              onClick={() => toast("Twitterフォロー機能は準備中です")}
            >
              <Twitter className="w-4 h-4" />
              X（Twitter）をフォロー
            </button>
            <button
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white btn-press transition-opacity hover:opacity-90"
              style={{ background: "oklch(0.62 0.22 355)" }}
              onClick={() => toast("メルマガ登録機能は準備中です")}
            >
              <Mail className="w-4 h-4" />
              更新情報を受け取る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
