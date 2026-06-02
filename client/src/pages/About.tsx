import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <div className="container py-6 sm:py-8">
        <Link href="/" className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700 mb-4">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">トップへ戻る</span>
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">運営者情報</h1>
        <p className="text-gray-600 text-sm sm:text-base">エロゲ図鑑の運営方針について</p>
      </div>
      <AffiliateDisclosure />

      {/* 本文 */}
      <div className="container pb-12 sm:pb-16">
        <div className="max-w-2xl space-y-6">
          {/* サイト情報カード */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-pink-100">
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">サイト名</h3>
                <p className="text-lg font-bold text-gray-900">エロゲ図鑑</p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">運営者</h3>
                <p className="text-base text-gray-700">エロゲ図鑑 管理人</p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">サイト内容</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  エロゲ・同人ゲームの新作、レビュー、セール、ランキング、プレイ環境おすすめを紹介する情報サイトです。ユーザーが自分に合う作品を探しやすいように、様々な視点から作品情報をまとめています。
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">連絡先</h3>
                <p className="text-base text-gray-700">
                  <Link href="/contact" className="text-pink-600 hover:text-pink-700 font-medium">
                    お問い合わせページ
                  </Link>
                  からご連絡ください
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">運営方針</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  作品選びに迷う人が、自分に合う作品を探しやすいサイトを目指しています。ユーザーの視点に立った、分かりやすく、役に立つ情報提供を心がけています。
                </p>
              </div>
            </div>
          </div>

          {/* 最終更新日 */}
          <p className="text-xs text-gray-500 text-center">
            最終更新日：2026年5月28日
          </p>
        </div>
      </div>
    </div>
  );
}
