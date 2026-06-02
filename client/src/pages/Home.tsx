// Home.tsx — エロゲ図鑑 TOPページ
// PC: MiddleRowSection（新作・セール・同人・プレイ環境を4カラム横並び）
// スマホ: 各セクション縦積み（新作→セール→同人→プレイ環境）
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import NewReleasesSection from "@/components/NewReleasesSection";
import SaleSection from "@/components/SaleSection";
import DoujinSection from "@/components/DoujinSection";
import PlayEnvironmentSection from "@/components/PlayEnvironmentSection";
import MiddleRowSection from "@/components/MiddleRowSection";
import FeatureReviewGenreSection from "@/components/FeatureReviewGenreSection";
import FollowCTA from "@/components/FollowCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.992 0.006 355)" }}>
      <Header />
      <AffiliateDisclosure />
      <main className="flex-1">
        <HeroSection />

        {/* 注目の新作: スマホのみ表示（PC版はMiddleRowSectionに統合） */}
        <div className="lg:hidden">
          <NewReleasesSection />
        </div>

        {/* PC: 4カラム横並び（新作・セール・同人・プレイ環境） */}
        <MiddleRowSection />

        {/* スマホ: 縦積み（セール→同人→プレイ環境） */}
        <div className="lg:hidden">
          <SaleSection />
          <DoujinSection />
          <PlayEnvironmentSection />
        </div>

        <FeatureReviewGenreSection />
        <FollowCTA />
      </main>
      <Footer />
    </div>
  );
}
