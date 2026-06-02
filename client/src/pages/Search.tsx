import { Link, useLocation } from "wouter";
import { Star, Search as SearchIcon } from "lucide-react";
import { useState, useMemo } from "react";
import { gameDetails } from "../data/mockData";

export default function Search() {
  const [location, setLocation] = useLocation();
  const queryParams = new URLSearchParams(location.split("?")[1] || "");
  const initialQuery = queryParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedTab, setSelectedTab] = useState("すべて");

  const tabs = [
    "すべて",
    "作品名",
    "メーカー",
    "ジャンル",
    "セール中",
    "同人ゲーム",
    "Live2D",
  ];

  // 簡易検索ロジック
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return gameDetails;
    }

    const query = searchQuery.toLowerCase();
    return gameDetails.filter((game: any) => {
      const titleMatch = game.title.toLowerCase().includes(query);
      const makerMatch = game.maker.toLowerCase().includes(query);
      const genreMatch = game.genres?.some((g: string) =>
        g.toLowerCase().includes(query)
      );

      if (selectedTab === "作品名") return titleMatch;
      if (selectedTab === "メーカー") return makerMatch;
      if (selectedTab === "ジャンル") return genreMatch;
      if (selectedTab === "すべて") return titleMatch || makerMatch || genreMatch;

      return false;
    });
  }, [searchQuery, selectedTab]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

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
            作品を検索
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            作品名・メーカー名・ジャンルから気になる作品を探せます
          </p>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* 検索フォーム */}
        <form onSubmit={handleSearch} className="mb-8 sm:mb-12">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="作品名・メーカー名・ジャンルで検索"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
              />
              <SearchIcon className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors active:scale-95"
            >
              検索
            </button>
          </div>
        </form>

        {/* 検索結果タブ */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 px-4 -mx-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-3 sm:px-4 py-2 rounded-full whitespace-nowrap text-xs sm:text-sm font-medium transition-colors ${
                selectedTab === tab
                  ? "bg-pink-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 検索結果情報 */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            {searchQuery ? (
              <>
                「<span className="font-bold text-gray-900">{searchQuery}</span>
                」の検索結果:{" "}
                <span className="font-bold text-pink-600">
                  {searchResults.length}
                </span>
                件
              </>
            ) : (
              <>
                全作品: <span className="font-bold text-pink-600">{gameDetails.length}</span>件
              </>
            )}
          </p>
        </div>

        {/* 検索結果 */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {searchResults.map((game: any) => (
              <Link key={game.id} href={`/game/${game.id}`}>
                <a className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col h-full">
                    {/* サムネイル */}
                    <div className="relative w-full h-40 sm:h-48 bg-gray-100 overflow-hidden flex-shrink-0">
                      <img
                        src={game.thumbnail}
                        alt={game.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* ゲーム情報 */}
                    <div className="p-3 sm:p-4 flex flex-col flex-grow">
                      {/* メーカー名 */}
                      <p className="text-xs text-gray-500 mb-1">{game.maker}</p>

                      {/* タイトル */}
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm sm:text-base">
                        {game.title}
                      </h3>

                      {/* ジャンルタグ */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {game.genres?.slice(0, 2).map((genre: string) => (
                          <span
                            key={genre}
                            className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded font-medium"
                          >
                            {genre}
                          </span>
                        ))}
                        {game.genres?.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{game.genres.length - 2}
                          </span>
                        )}
                      </div>

                      {/* 価格と評価 */}
                      <div className="flex items-center justify-between mb-3 text-xs sm:text-sm">
                        <span className="font-bold text-pink-600">
                          {typeof game.price === "number"
                            ? `${game.price.toLocaleString()}円`
                            : game.price}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold text-gray-900">
                            {game.rating}
                          </span>
                        </div>
                      </div>

                      {/* ボタン */}
                      <button className="w-full block text-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 text-xs rounded transition-colors active:scale-95 mt-auto">
                        詳細を見る
                      </button>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-2">検索結果がありません</p>
            <p className="text-sm text-gray-500">
              別のキーワードで検索してみてください
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
