import { Link } from "wouter";
import { reviews } from "@/data/mockData";
import { Star } from "lucide-react";

export default function Reviews() {
  const tabs = ["すべて", "新着", "高評価", "セール中", "同人ゲーム", "Live2D", "初心者向け"];

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/">
            <a className="text-pink-600 hover:text-pink-700 text-sm font-medium mb-4 inline-block">
              ← エロゲ図鑑に戻る
            </a>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">新着レビュー</h1>
          <p className="text-sm sm:text-base text-gray-600">
            管理人が気になった作品を、短く分かりやすくレビュー
          </p>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* レビュー切り替えタブ */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-3 sm:px-4 py-2 rounded-full whitespace-nowrap text-xs sm:text-sm font-medium transition-colors ${
                tab === "すべて"
                  ? "bg-pink-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* レビュー一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {reviews.map((review) => (
            <Link key={review.id} href={review.href}>
              <a className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {/* レビューカード */}
                <div className="flex flex-col h-full">
                  {/* サムネイル */}
                  <div className="relative w-full h-40 sm:h-48 bg-gray-100 overflow-hidden flex-shrink-0">
                    <img
                      src={review.thumbnail}
                      alt={review.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* レビュー情報 */}
                  <div className="p-3 sm:p-4 flex flex-col flex-grow">
                    {/* メーカー名 */}
                    <p className="text-xs text-gray-500 mb-1.5">{review.maker}</p>

                    {/* タイトル */}
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm sm:text-base">
                      {review.title}
                    </h3>

                    {/* ジャンルタグ */}
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      {review.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 評価と価格 */}
                    <div className="flex items-center justify-between mb-2.5 text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-gray-900">{review.rating}</span>
                      </div>
                      <span className="font-bold text-pink-600">{review.price}</span>
                    </div>

                    {/* レビュー本文 */}
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-3 leading-relaxed">
                      {review.reviewText}
                    </p>

                    {/* おすすめな人 */}
                    <p className="text-xs text-gray-500 mb-3 hidden sm:block">
                      <span className="font-medium">向いている人:</span> {review.recommendedFor}
                    </p>

                    {/* ボタン */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="w-full block text-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 sm:py-2.5 text-xs sm:text-sm rounded transition-colors active:scale-95 mt-auto"
                    >
                      詳細を見る →
                    </button>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>

        {/* サイド導線セクション */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {/* 高評価レビュー */}
          <section className="bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">⭐ 高評価レビュー</h3>
            <div className="space-y-3">
              {reviews
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 3)
                .map((review) => (
                  <Link key={review.id} href={review.href}>
                    <a className="block text-sm text-gray-700 hover:text-pink-600 transition-colors">
                      <div className="font-medium line-clamp-1">{review.title}</div>
                      <div className="text-xs text-gray-500">★{review.rating}</div>
                    </a>
                  </Link>
                ))}
            </div>
          </section>

          {/* セール中のレビュー */}
          <section className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">🔥 セール中のレビュー</h3>
            <div className="space-y-3">
              {reviews
                .filter((r) => r.tags.includes("セール"))
                .slice(0, 3)
                .map((review) => (
                  <Link key={review.id} href={review.href}>
                    <a className="block text-sm text-gray-700 hover:text-orange-600 transition-colors">
                      <div className="font-medium line-clamp-1">{review.title}</div>
                      <div className="text-xs text-orange-600 font-medium">{review.price}</div>
                    </a>
                  </Link>
                ))}
            </div>
          </section>
        </div>

        {/* 作品ページへ戻る導線 */}
        <section className="text-center py-6 sm:py-8 border-t border-gray-200">
          <p className="text-sm sm:text-base text-gray-600 mb-4">気になる作品は見つかりましたか？</p>
          <div className="flex gap-2 sm:gap-4 justify-center flex-wrap">
            <Link href="/">
              <a className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base transition-colors">
                ホームに戻る
              </a>
            </Link>
            <Link href="/ranking">
              <a className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base transition-colors">
                人気ランキング
              </a>
            </Link>
            <Link href="/sale">
              <a className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base transition-colors">
                セール作品
              </a>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
