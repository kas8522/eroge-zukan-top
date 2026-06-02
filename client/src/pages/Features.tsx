import { Link } from "wouter";
import { features, featureGames } from "@/data/mockData";
import { Star } from "lucide-react";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export default function Features() {
  const tabs = ["すべて", "初心者向け", "セールまとめ", "同人ゲーム", "Live2D", "泣きゲー", "短時間で遊べる", "管理人おすすめ"];

  // 特集1の関連作品を取得
  const feature1Games = featureGames.filter((g) => features[0].relatedGameIds.includes(g.id));
  // 特集2の関連作品を取得
  const feature2Games = featureGames.filter((g) => features[1].relatedGameIds.includes(g.id));

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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">特集まとめ</h1>
          <p className="text-sm sm:text-base text-gray-600">
            初心者向け・セール・同人ゲーム・Live2Dなど、テーマ別に注目作品をまとめました
          </p>
        </div>
      </div>
      <AffiliateDisclosure />

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* 特集カテゴリタブ */}
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

        {/* 特集カード一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* 特集サムネイル */}
              <div className="relative w-full h-40 sm:h-48 bg-gray-100 overflow-hidden">
                <img
                  src={feature.thumbnail}
                  alt={feature.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* 特集情報 */}
              <div className="p-3 sm:p-4">
                {/* タイトル */}
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm sm:text-base">
                  {feature.title}
                </h3>

                {/* 説明文 */}
                <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
                  {feature.description}
                </p>

                {/* タグ */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 掲載作品数と更新日 */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{feature.itemCount}件の作品</span>
                  <span>更新: {feature.updatedAt}</span>
                </div>

                {/* ボタン */}
                <Link href={feature.href}>
                  <a className="block w-full text-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 sm:py-2.5 text-xs sm:text-sm rounded transition-colors active:scale-95">
                    特集を見る →
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 注目の特集作品セクション */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">注目の特集作品</h2>

          {/* 特集1の作品 */}
          <div className="mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{features[0].title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {feature1Games.map((game) => (
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
                      </div>

                      {/* 作品情報 */}
                      <div className="p-2.5 sm:p-3 flex flex-col flex-grow">
                        {/* メーカー名 */}
                        <p className="text-xs text-gray-500 mb-1">{game.maker}</p>

                        {/* タイトル */}
                        <h4 className="font-bold text-gray-900 mb-1.5 line-clamp-2 text-xs sm:text-sm">
                          {game.title}
                        </h4>

                        {/* ジャンルタグ */}
                        <div className="flex flex-wrap gap-0.5 mb-2">
                          {game.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-pink-100 text-pink-700 px-1.5 py-0.5 rounded font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* 評価と価格 */}
                        <div className="flex items-center justify-between mb-2 text-xs">
                          <div className="flex items-center gap-0.5">
                            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                            <span className="font-bold text-gray-900">{game.rating}</span>
                          </div>
                          <span className="font-bold text-pink-600">{game.price}</span>
                        </div>

                        {/* コメント */}
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2 leading-relaxed">
                          {game.comment}
                        </p>

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
          </div>

          {/* 特集2の作品 */}
          <div className="mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{features[1].title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {feature2Games.map((game) => (
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
                      </div>

                      {/* 作品情報 */}
                      <div className="p-2.5 sm:p-3 flex flex-col flex-grow">
                        {/* メーカー名 */}
                        <p className="text-xs text-gray-500 mb-1">{game.maker}</p>

                        {/* タイトル */}
                        <h4 className="font-bold text-gray-900 mb-1.5 line-clamp-2 text-xs sm:text-sm">
                          {game.title}
                        </h4>

                        {/* ジャンルタグ */}
                        <div className="flex flex-wrap gap-0.5 mb-2">
                          {game.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-pink-100 text-pink-700 px-1.5 py-0.5 rounded font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* 評価と価格 */}
                        <div className="flex items-center justify-between mb-2 text-xs">
                          <div className="flex items-center gap-0.5">
                            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                            <span className="font-bold text-gray-900">{game.rating}</span>
                          </div>
                          <span className="font-bold text-pink-600">{game.price}</span>
                        </div>

                        {/* コメント */}
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2 leading-relaxed">
                          {game.comment}
                        </p>

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
          </div>
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
