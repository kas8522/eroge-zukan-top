// PC: 左にメイン画像・右に情報 / スマホ: 縦積み
import { gameDetails, environmentItems } from "@/data/mockData";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { Heart, Star } from "lucide-react";
import { toast } from "sonner";
import { Link, useRoute } from "wouter";
import { useEffect, useMemo } from "react";

function RatingBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold w-12" style={{ color: "oklch(0.18 0.03 310)" }}>{label}</span>
      <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${(value / 5) * 100}%`, background: "oklch(0.62 0.22 355)" }}
        />
      </div>
      <span className="text-xs font-bold w-8 text-right" style={{ color: "oklch(0.62 0.22 355)" }}>
        {value.toFixed(1)}
      </span>
    </div>
  );
}

function CTAButton({ label, onClick, isPrimary = false }: { label: string; onClick: () => void; isPrimary?: boolean }) {
  return (
    <button
      className={`w-full py-3 rounded-lg font-bold transition-all ${
        isPrimary ? "text-white hover:opacity-90" : "border hover:bg-pink-50"
      }`}
      style={
        isPrimary
          ? { background: "oklch(0.62 0.22 355)" }
          : { borderColor: "oklch(0.62 0.22 355)", color: "oklch(0.62 0.22 355)" }
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function CTAExternalLink({
  label,
  href,
  isPrimary = false,
}: {
  label: string;
  href?: string;
  isPrimary?: boolean;
}) {
  // "未設定のときだけ準備中" にする（形式チェックはしない）
  if (!href) {
    return (
      <CTAButton
        label={label}
        isPrimary={isPrimary}
        onClick={() => toast(`${label}は準備中です`)}
      />
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`btn-press w-full py-3 rounded-lg font-bold transition-all text-center ${
        isPrimary ? "text-white hover:opacity-90" : "border hover:bg-pink-50"
      }`}
      style={
        isPrimary
          ? { background: "oklch(0.62 0.22 355)" }
          : { borderColor: "oklch(0.62 0.22 355)", color: "oklch(0.62 0.22 355)" }
      }
    >
      {label}
    </a>
  );
}

function WorkCard({ work }: { work: { id: number; title: string; thumbnail: string; maker: string } }) {
  return (
    <div className="bg-white rounded-xl border overflow-hidden flex flex-col h-full" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
      {/* サムネイル: 4:3固定比率 */}
      <div className="relative w-full overflow-hidden" style={{ paddingTop: "75%" }}>
        <img
          src={work.thumbnail}
          alt={work.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* 情報エリア */}
      <div className="p-2 sm:p-2.5 flex flex-col flex-1 gap-1 sm:gap-1.5">
        {/* タイトル: 2行省略 */}
        <p className="text-[11px] sm:text-xs font-bold line-clamp-2 leading-snug"
          style={{ color: "oklch(0.18 0.03 310)" }}>
          {work.title}
        </p>
        {/* メーカー名 */}
        <p className="text-[9px] sm:text-[10px]" style={{ color: "oklch(0.55 0.04 310)" }}>
          {work.maker}
        </p>

        {/* 詳細を見るボタン: 常に下端に揃える */}
        <Link href={`/game/${work.id}`} className="mt-auto">
          <button
            className="w-full py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold border transition-colors hover:bg-pink-50 btn-press"
            style={{ borderColor: "oklch(0.62 0.22 355)", color: "oklch(0.62 0.22 355)" }}
          >
            詳細を見る
          </button>
        </Link>
      </div>
    </div>
  );
}

function EnvCard({ item }: { item: typeof environmentItems[0] }) {
  return (
    <div className="flex flex-col gap-2 p-3 bg-white rounded-lg border" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
      <div className="relative w-full rounded-lg overflow-hidden bg-gray-100" style={{ paddingTop: "100%" }}>
        <img src={item.thumbnail} alt={item.title} className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
      </div>
      <div>
        <p className="text-xs font-bold line-clamp-2" style={{ color: "oklch(0.18 0.03 310)" }}>{item.title}</p>
        <p className="text-xs font-bold mt-1" style={{ color: "oklch(0.62 0.22 355)" }}>{item.price}</p>
      </div>
    </div>
  );
}

export default function GameDetail() {
  const [, params] = useRoute("/game/:id");
  const gameId = params?.id ? parseInt(params.id, 10) : 1;

  // URLパラメータに基づいて正しい作品データを取得
  const gameDetail = useMemo(() => {
    const detail = gameDetails.find(g => g.id === gameId);
    return detail || gameDetails[0];
  }, [gameId]);

  const mainImage = gameDetail.imageUrl ?? gameDetail.mainImage;
  const galleryImages = gameDetail.galleryImages ?? gameDetail.sampleImages;

  // ページ遷移時にスクロール位置をリセット
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [gameId]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.992 0.006 355)" }}>
      {/* ヘッダーは共通 */}
      <header className="bg-white border-b sticky top-0 z-40" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
        <div className="container h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold hover:opacity-80" style={{ color: "oklch(0.18 0.03 310)" }}>
            ← エロゲ図鑑に戻る
          </Link>
        </div>
      </header>
      <AffiliateDisclosure />

      <main className="flex-1 py-4">
        <div className="container">

          {/* ===== PC: 左右2カラム ===== */}
          <div className="hidden lg:grid lg:grid-cols-[1.5fr_1fr] gap-6 mb-16 max-w-5xl mx-auto">

            {/* 左: メイン画像 */}
            <div>
              <div className="rounded-2xl overflow-hidden bg-gray-100 mb-4 relative" style={{ paddingTop: "56.25%", maxHeight: "400px" }}>
                <img src={mainImage} alt={gameDetail.title} className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
              </div>
              {/* サンプル画像ギャラリー */}
              <div>
                <h3 className="text-sm font-bold mb-3" style={{ color: "oklch(0.18 0.03 310)" }}>サンプル画像</h3>
                <div className="grid grid-cols-3 gap-2">
                  {galleryImages.map((img, i) => (
                    <div key={i} className="relative rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-80 transition-opacity"
                      style={{ paddingTop: "75%" }}>
                      <img src={img} alt={`Sample ${i + 1}`} className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 右: 情報カード */}
            <div className="flex flex-col gap-5">
              {/* タイトル・メーカー・発売日・価格 */}
              <div className="bg-white rounded-xl border p-5" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
                <h1 className="text-2xl font-bold mb-3" style={{ color: "oklch(0.18 0.03 310)" }}>
                  {gameDetail.title}
                </h1>
                <p className="text-sm mb-1" style={{ color: "oklch(0.55 0.04 310)" }}>
                  メーカー: {gameDetail.maker}
                </p>
                {gameDetail.brand && (
                  <p className="text-xs mb-3" style={{ color: "oklch(0.55 0.04 310)" }}>
                    ブランド: {gameDetail.brand}
                  </p>
                )}
                {!gameDetail.brand && <div className="mb-3" />}
                <div className="flex items-center justify-between text-sm mb-4 pb-4 border-b" style={{ color: "oklch(0.55 0.04 310)", borderColor: "oklch(0.92 0.02 355)" }}>
                  <span>発売日: {gameDetail.releaseDate}</span>
                  <span className="font-bold text-lg" style={{ color: "oklch(0.62 0.22 355)" }}>¥{gameDetail.price.toLocaleString()}</span>
                </div>

                {/* 評価 */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(gameDetail.rating) ? "fill-yellow-400" : "text-gray-300"}
                        style={{ color: i < Math.floor(gameDetail.rating) ? "oklch(0.85 0.2 65)" : undefined }}
                      />
                    ))}
                  </div>
                  <span className="font-bold" style={{ color: "oklch(0.18 0.03 310)" }}>
                    {gameDetail.rating.toFixed(1)}
                  </span>
                  <span className="text-xs" style={{ color: "oklch(0.55 0.04 310)" }}>
                    ({gameDetail.ratingCount.toLocaleString()}件)
                  </span>
                </div>

                {/* ジャンルタグ */}
                <div className="flex flex-wrap gap-2">
                  {gameDetail.genres.map((g) => (
                    <span key={g} className="tag-chip" style={{ fontSize: "12px", padding: "4px 8px" }}>
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAボタン */}
              <div className="bg-white rounded-xl border p-5" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
                <p className="text-xs font-bold mb-3" style={{ color: "oklch(0.55 0.04 310)" }}>この作品を購入</p>
                <div className="flex flex-col gap-2.5">
                  <CTAExternalLink label="FANZAで見る" href={gameDetail.fanzaUrl} isPrimary />
                  <CTAExternalLink label="DLsiteで見る" href={gameDetail.dlsiteUrl} isPrimary />
                  <CTAExternalLink label="サンプルを見る" href={gameDetail.sampleUrl} />
                </div>
              </div>

              {/* 管理人レビュー */}
              <div className="bg-white rounded-xl border p-5" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
                <p className="text-xs font-bold mb-2" style={{ color: "oklch(0.62 0.22 355)" }}>📝 管理人の一言</p>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.04 310)" }}>
                  {gameDetail.adminReview}
                </p>
              </div>

              {/* こんな人におすすめ */}
              <div className="bg-white rounded-xl border p-5" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
                <p className="text-xs font-bold mb-2" style={{ color: "oklch(0.18 0.03 310)" }}>✅ こんな人におすすめ</p>
                <ul className="space-y-1.5">
                  {gameDetail.recommendedFor.map((item, i) => (
                    <li key={i} className="text-xs flex gap-2" style={{ color: "oklch(0.45 0.04 310)" }}>
                      <span className="text-green-600 flex-shrink-0">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 合わないかも */}
              <div className="bg-white rounded-xl border p-5" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
                <p className="text-xs font-bold mb-2" style={{ color: "oklch(0.18 0.03 310)" }}>❌ こんな人には合わないかも</p>
                <ul className="space-y-1.5">
                  {gameDetail.notRecommendedFor.map((item, i) => (
                    <li key={i} className="text-xs flex gap-2" style={{ color: "oklch(0.45 0.04 310)" }}>
                      <span style={{ color: "oklch(0.58 0.22 25)" }} className="flex-shrink-0">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 評価項目 */}
              <div className="bg-white rounded-xl border p-5" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
                <p className="text-xs font-bold mb-3" style={{ color: "oklch(0.18 0.03 310)" }}>⭐ 評価</p>
                <div className="space-y-2.5">
                  <RatingBar label="キャラ" value={gameDetail.ratings.character} />
                  <RatingBar label="動き" value={gameDetail.ratings.animation} />
                  <RatingBar label="雰囲気" value={gameDetail.ratings.atmosphere} />
                  <RatingBar label="コスパ" value={gameDetail.ratings.value} />
                </div>
              </div>
            </div>

          </div>

          {/* ===== スマホ: 縦積み ===== */}
          <div className="lg:hidden flex flex-col gap-4 mb-8">

            {/* メイン画像 */}
            <div className="relative rounded-xl overflow-hidden bg-gray-100 w-full" style={{ maxHeight: "320px", aspectRatio: "16 / 9" }}>
              <img src={mainImage} alt={gameDetail.title} className="w-full h-full object-cover object-center" loading="lazy" />
            </div>

            {/* タイトル・メーカー・発売日・価格 */}
            <div className="bg-white rounded-xl border p-4" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
              <h1 className="text-lg font-bold mb-2" style={{ color: "oklch(0.18 0.03 310)" }}>
                {gameDetail.title}
              </h1>
              <p className="text-xs mb-1" style={{ color: "oklch(0.55 0.04 310)" }}>
                メーカー: {gameDetail.maker}
              </p>
              {gameDetail.brand && (
                <p className="text-[10px] mb-2" style={{ color: "oklch(0.55 0.04 310)" }}>
                  ブランド: {gameDetail.brand}
                </p>
              )}
              <div className="flex items-center justify-between text-xs mb-3 pb-3 border-b" style={{ color: "oklch(0.55 0.04 310)", borderColor: "oklch(0.92 0.02 355)" }}>
                <span>{gameDetail.releaseDate}</span>
                <span className="font-bold text-base" style={{ color: "oklch(0.62 0.22 355)" }}>
                  ¥{gameDetail.price.toLocaleString()}
                </span>
              </div>

              {/* ジャンルタグ */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {gameDetail.genres.map((g) => (
                  <span key={g} className="tag-chip" style={{ fontSize: "11px", padding: "3px 6px" }}>
                    {g}
                  </span>
                ))}
              </div>

              {/* 評価 */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(gameDetail.rating) ? "fill-yellow-400" : "text-gray-300"}
                      style={{ color: i < Math.floor(gameDetail.rating) ? "oklch(0.85 0.2 65)" : undefined }}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold" style={{ color: "oklch(0.18 0.03 310)" }}>
                  {gameDetail.rating.toFixed(1)}
                </span>
                <span className="text-[10px]" style={{ color: "oklch(0.55 0.04 310)" }}>
                  ({gameDetail.ratingCount.toLocaleString()}件)
                </span>
              </div>
            </div>

            {/* CTAボタン - 目立つ位置に配置 */}
            <div className="bg-white rounded-xl border p-4" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
              <p className="text-xs font-bold mb-3" style={{ color: "oklch(0.55 0.04 310)" }}>この作品を購入</p>
              <div className="flex flex-col gap-2">
                <CTAExternalLink label="FANZAで見る" href={gameDetail.fanzaUrl} isPrimary />
                <CTAExternalLink label="DLsiteで見る" href={gameDetail.dlsiteUrl} isPrimary />
                <CTAExternalLink label="サンプルを見る" href={gameDetail.sampleUrl} />
              </div>
            </div>

            {/* 管理人レビュー */}
            <div className="bg-white rounded-xl border p-4" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
              <p className="text-xs font-bold mb-2" style={{ color: "oklch(0.62 0.22 355)" }}>📝 管理人の一言</p>
              <p className="text-xs leading-relaxed" style={{ color: "oklch(0.45 0.04 310)" }}>
                {gameDetail.adminReview}
              </p>
            </div>

            {/* こんな人におすすめ */}
            <div className="bg-white rounded-xl border p-4" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
              <p className="text-xs font-bold mb-2" style={{ color: "oklch(0.18 0.03 310)" }}>✅ こんな人におすすめ</p>
              <ul className="space-y-1">
                {gameDetail.recommendedFor.map((item, i) => (
                  <li key={i} className="text-[11px] flex gap-2" style={{ color: "oklch(0.45 0.04 310)" }}>
                    <span className="text-green-600 flex-shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 合わないかも */}
            <div className="bg-white rounded-xl border p-4" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
              <p className="text-xs font-bold mb-2" style={{ color: "oklch(0.18 0.03 310)" }}>❌ こんな人には合わないかも</p>
              <ul className="space-y-1">
                {gameDetail.notRecommendedFor.map((item, i) => (
                  <li key={i} className="text-[11px] flex gap-2" style={{ color: "oklch(0.45 0.04 310)" }}>
                    <span style={{ color: "oklch(0.58 0.22 25)" }} className="flex-shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 評価項目 */}
            <div className="bg-white rounded-xl border p-4" style={{ borderColor: "oklch(0.92 0.02 355)" }}>
              <p className="text-xs font-bold mb-3" style={{ color: "oklch(0.18 0.03 310)" }}>⭐ 評価</p>
              <div className="space-y-2">
                <RatingBar label="キャラ" value={gameDetail.ratings.character} />
                <RatingBar label="動き" value={gameDetail.ratings.animation} />
                <RatingBar label="雰囲気" value={gameDetail.ratings.atmosphere} />
                <RatingBar label="コスパ" value={gameDetail.ratings.value} />
              </div>
            </div>

            {/* サンプル画像ギャラリー */}
            <div>
              <h3 className="text-xs font-bold mb-2" style={{ color: "oklch(0.18 0.03 310)" }}>サンプル画像</h3>
              <div className="grid grid-cols-2 gap-2">
                {galleryImages.map((img, i) => (
                  <div key={i} className="relative rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ paddingTop: "75%" }}>
                    <img src={img} alt={`Sample ${i + 1}`} className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== 関連作品セクション（PC/スマホ共通） ===== */}
          <section className="mb-12">
            <h2 className="text-lg font-bold mb-4" style={{ color: "oklch(0.18 0.03 310)" }}>この作品が気になる人におすすめ</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gameDetail.relatedWorks.map((work) => (
                <WorkCard key={work.id} work={work} />
              ))}
            </div>
          </section>

          {/* ===== 同じジャンルの人気作セクション ===== */}
          <section className="mb-12">
            <h2 className="text-lg font-bold mb-4" style={{ color: "oklch(0.18 0.03 310)" }}>同じジャンルの人気作</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gameDetail.similarGenreWorks.map((work) => (
                <WorkCard key={work.id} work={work} />
              ))}
            </div>
          </section>

          {/* ===== この作品を快適に楽しむなら ===== */}
          <section className="mb-12">
            <h2 className="text-lg font-bold mb-4" style={{ color: "oklch(0.18 0.03 310)" }}>この作品を快適に楽しむなら</h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-3">
              {environmentItems.slice(0, 5).map((item) => (
                <EnvCard key={item.id} item={item} />
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
