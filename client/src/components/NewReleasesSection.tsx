// NewReleasesSection.tsx
// スマホ: 確実に2列 (grid-cols-2)
// タブレット(sm〜md): 3列
// PC (lg以上): 6列
import { newReleasesWithFanza } from "@/lib/fanzaOverlay";
import SectionHeader from "./SectionHeader";
import GameCard from "./GameCard";

export default function NewReleasesSection() {
  return (
    <section className="py-5 lg:py-6" style={{ background: "oklch(1 0 0)" }}>
      <div className="container">
        <SectionHeader icon="✨" title="注目の新作" moreHref="#" />
        {/*
          grid-cols-2: スマホ（〜639px）
          sm:grid-cols-3: タブレット（640px〜）
          lg:grid-cols-6: PC（1024px〜）
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {newReleasesWithFanza.map((item) => (
            <GameCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
