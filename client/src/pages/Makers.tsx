import { Link } from "wouter";
import { Star } from "lucide-react";
import { makers, makerHighlights, gameDetails } from "../data/mockData";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export default function Makers() {
  const tabs = [
    "すべて",
    "人気メーカー",
    "同人サークル",
    "新作あり",
    "セール中",
    "高評価",
    "Live2Dあり",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-b border-pink-200 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/">
            <a className="text-pink-600 hover:text-pink-700 text-sm font-medium mb-4 inline-block">
              ← TOPへ戻る
            </a>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            メーカー・サークルから探す
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            気になるメーカーやサークルの作品をまとめてチェック
          </p>
        </div>
      </div>
      <AffiliateDisclosure />

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
          {makerHighlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 rounded-lg p-3 sm:p-4 text-center"
            >
              <div className="text-3xl sm:text-4xl mb-2">{highlight.icon}</div>
              <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">
                {highlight.title}
              </h3>
              <p className="text-xs text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* メーカー一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {makers.map((maker) => (
            <div
              key={maker.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col h-full">
                {/* メーカーロゴ/サムネイル */}
                <div className="relative w-full h-32 sm:h-40 bg-gray-100 overflow-hidden flex-shrink-0">
                  <img
                    src={maker.thumbnail}
                    alt={maker.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* メーカー情報 */}
                <div className="p-3 sm:p-4 flex flex-col flex-grow">
                  {/* メーカー名 */}
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                    {maker.name}
                  </h3>

                  {/* タイプバッジ */}
                  <div className="mb-2">
                    <span
                      className={`text-xs px-2 py-1 rounded font-medium ${
                        maker.type === "maker"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {maker.type === "maker" ? "公式メーカー" : "同人サークル"}
                    </span>
                  </div>

                  {/* 説明文 */}
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2 leading-snug">
                    {maker.description}
                  </p>

                  {/* 作品数 */}
                  <p className="text-xs text-gray-500 mb-2">
                    作品数: <span className="font-bold text-pink-600">{maker.itemCount}件</span>
                  </p>

                  {/* タグ */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {maker.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 代表作品 */}
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1.5 font-medium">代表作品</p>
                    <div className="flex gap-1.5">
                      {maker.representativeGameIds.map((gameId) => {
                        const game = gameDetails.find((g: any) => g.id === gameId);
                        return game ? (
                          <Link key={gameId} href={`/game/${gameId}`}>
                            <a className="flex-shrink-0 w-12 h-16 rounded overflow-hidden hover:opacity-80 transition-opacity">
                              <img
                                src={game.thumbnail}
                                alt={game.title}
                                className="w-full h-full object-cover"
                              />
                            </a>
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>

                  {/* ボタン */}
                  <a href="#" className="w-full block text-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 text-xs rounded transition-colors active:scale-95 mt-auto">
                    作品を見る
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 下部導線 */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            メーカーの注目作品
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gameDetails.slice(0, 8).map((game: any) => (
              <Link key={game.id} href={`/game/${game.id}`}>
                <a className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col h-full">
                    {/* サムネイル */}
                    <div className="relative w-full h-32 sm:h-40 bg-gray-100 overflow-hidden flex-shrink-0">
                      <img
                        src={game.thumbnail}
                        alt={game.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* ゲーム情報 */}
                    <div className="p-2 sm:p-3 flex flex-col flex-grow">
                      {/* メーカー名 */}
                      <p className="text-xs text-gray-500 mb-0.5">{game.maker}</p>

                      {/* タイトル */}
                      <h4 className="font-bold text-gray-900 mb-1 line-clamp-2 text-xs sm:text-sm">
                        {game.title}
                      </h4>

                      {/* 価格と評価 */}
                      <div className="flex items-center justify-between mb-2 text-xs">
                        <span className="font-bold text-pink-600">{typeof game.price === 'number' ? `${game.price.toLocaleString()}円` : game.price}</span>
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold text-gray-900">{game.rating}</span>
                        </div>
                      </div>

                      {/* ボタン */}
                      <button className="w-full block text-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-1.5 text-xs rounded transition-colors active:scale-95 mt-auto">
                        詳細を見る
                      </button>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
