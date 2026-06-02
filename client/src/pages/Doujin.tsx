import { Link } from "wouter";
import { doujinGames, doujinHighlights } from "@/data/mockData";
import { Star, Zap } from "lucide-react";

export default function Doujin() {
  const tabs = ["すべて", "低価格", "短時間で遊べる", "セール中", "スマホ対応", "ブラウザ対応", "高評価", "新着"];

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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">実は同人ゲームも熱い！</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            低価格で手軽に遊びやすい、注目の同人ゲームをピックアップ
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            同人ゲームは価格が手頃で、短時間でも遊びやすい作品が多いです。大作エロゲとは違う、気軽に楽しめる魅力があります。
          </p>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* カテゴリタブ */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 px-0 -mx-4 px-4">
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

        {/* 注目枠 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {doujinHighlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 rounded-lg p-3 sm:p-4 text-center"
            >
              <div className="text-3xl sm:text-4xl mb-2">{highlight.icon}</div>
              <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">{highlight.title}</h3>
              <p className="text-xs text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* 同人ゲーム一覧 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {doujinGames.map((game) => (
            <Link key={game.id} href={game.href}>
              <a className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col h-full">
                  {/* サムネイル */}
                  <div className="relative w-full h-32 sm:h-40 bg-gray-100 overflow-hidden flex-shrink-0">
                    <img
                      src={game.thumbnail}
                      alt={game.title}
                      className="w-full h-full object-cover object-center"
                    />
                    {/* セールバッジ */}
                    {game.isSale && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        セール
                      </div>
                    )}
                  </div>

                  {/* ゲーム情報 */}
                  <div className="p-2 sm:p-3 flex flex-col flex-grow">
                    {/* サークル名 */}
                    <p className="text-xs text-gray-500 mb-0.5">{game.circle}</p>

                    {/* タイトル */}
                    <h4 className="font-bold text-gray-900 mb-1 line-clamp-2 text-xs sm:text-sm">
                      {game.title}
                    </h4>

                    {/* ジャンルタグ */}
                    <div className="flex flex-wrap gap-0.5 mb-1.5">
                      {game.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-pink-100 text-pink-700 px-1.5 py-0.5 rounded font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 価格と評価 */}
                    <div className="flex items-center justify-between mb-1.5 text-xs">
                      <span className="font-bold text-pink-600">{game.price}</span>
                      <div className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-gray-900">{game.rating}</span>
                      </div>
                    </div>

                    {/* 説明 */}
                    <p className="text-xs text-gray-600 mb-1 line-clamp-2 leading-snug">
                      {game.description}
                    </p>

                    {/* バッジ */}
                    <div className="flex flex-wrap gap-0.5 mb-1">
                      {game.badges.slice(0, 2).map((badge) => (
                        <span
                          key={badge}
                          className="text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* 対応表示 */}
                    <div className="flex gap-1 mb-1.5">
                      {game.isSmartphoneSupported && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-medium">
                          📱 スマホ対応
                        </span>
                      )}
                      {game.isBrowserSupported && (
                        <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">
                          🌐 ブラウザ対応
                        </span>
                      )}
                    </div>

                    {/* ボタン */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="w-full block text-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-1.5 sm:py-2 text-xs rounded transition-colors active:scale-95 mt-auto"
                    >
                      詳細を見る
                    </button>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>

        {/* 下部導線 */}
        <section className="text-center py-6 sm:py-8 border-t border-gray-200 mt-12">
          <p className="text-sm sm:text-base text-gray-600 mb-4">気になる同人ゲームは見つかりましたか？</p>
          <div className="flex gap-2 sm:gap-4 justify-center flex-wrap">
            <Link href="/">
              <a className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base transition-colors">
                ホームに戻る
              </a>
            </Link>
            <Link href="/reviews">
              <a className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base transition-colors">
                レビュー一覧
              </a>
            </Link>
            <Link href="/ranking">
              <a className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base transition-colors">
                人気ランキング
              </a>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
