import { Link } from "wouter";
import { environmentProducts, useCaseCards } from "@/data/mockData";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export default function Environment() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">快適プレイ環境</h1>
          <p className="text-sm sm:text-base text-gray-600">
            長時間プレイ・深夜プレイ・ASMR・同人ゲームをもっと快適に
          </p>
        </div>
      </div>
      <AffiliateDisclosure />

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* 用途別おすすめ */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">用途別おすすめ</h2>
          <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 px-4 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 -mx-4 sm:mx-0">
            {useCaseCards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-64 sm:w-auto bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-lg p-4 sm:p-5 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{card.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 sm:mb-2.5 text-sm sm:text-base leading-tight">{card.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-3.5 leading-relaxed">{card.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {card.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-pink-100 text-pink-700 px-2.5 py-1 rounded font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* カテゴリタブ */}
        <section className="mb-12 sm:mb-16">
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6 sm:mb-8">
            {["すべて", "椅子・クッション", "ヘッドホン", "モニターライト", "PC小物", "スマホ周辺", "VPN・セキュリティ"].map(
              (tab) => (
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
              )
            )}
          </div>

          {/* 商品グリッド */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {environmentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
              >
                {/* 商品画像 */}
                <div className="relative w-full h-36 sm:h-44 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f9e8f0;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f3d8e8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='32' font-weight='bold' fill='%23d98bb0'%3E📦%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {/* 商品情報 */}
                <div className="p-2.5 sm:p-3.5 flex flex-col flex-grow">
                  <div className="mb-1.5">
                    <span className="inline-block text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded mb-1.5 font-medium">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-0.5 sm:mb-1 line-clamp-2 text-xs sm:text-sm">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-xs text-gray-600 mb-1.5 sm:mb-2 line-clamp-2">
                    {product.description}
                  </p>

                  <p className="text-xs text-gray-500 mb-1.5 sm:mb-2 hidden sm:block">
                    <span className="font-medium">向いている人:</span> {product.recommendedFor}
                  </p>

                  <div className="flex items-center justify-between mb-2 sm:mb-2.5 mt-auto">
                    <span className="text-sm sm:text-base font-bold text-pink-600">
                      {product.price}
                    </span>
                  </div>

                  <button
                    type="button"
                    disabled
                    className="w-full block text-center bg-gray-200 text-gray-500 font-medium py-2 sm:py-2.5 text-xs sm:text-sm rounded cursor-not-allowed"
                  >
                    購入リンク準備中
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 管理人のひとこと */}
        <section className="mb-12 sm:mb-16 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-lg p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">管理人のひとこと</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
            長時間プレイするなら、まず椅子と音まわりを整えるのが一番体感しやすいです。いきなり高いものを買うより、疲れにくさ・音の聞きやすさ・深夜でも使いやすいかを基準に選ぶのがおすすめです。
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            特にASMR・音声作品をよく聴く人は、ヘッドホン選びが重要。自分の耳に合ったものを見つけると、作品の世界観にもっと没入できますよ。
          </p>
        </section>

        {/* 作品ページへ戻る導線 */}
        <section className="text-center py-6 sm:py-8 border-t border-gray-200">
          <p className="text-sm sm:text-base text-gray-600 mb-4">快適な環境で、もっと作品を楽しもう</p>
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
