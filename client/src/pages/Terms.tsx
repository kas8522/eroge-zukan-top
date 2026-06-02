import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <div className="container py-6 sm:py-8">
        <Link href="/" className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700 mb-4">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">トップへ戻る</span>
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">利用規約</h1>
      </div>
      <AffiliateDisclosure />

      {/* 本文 */}
      <div className="container pb-12 sm:pb-16">
        <div className="max-w-2xl space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-pink-100 space-y-8">
            {/* 本サイトの利用について */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">本サイトの利用について</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトは、ユーザーが自由に閲覧・利用できるサイトです。本サイトの利用により、本規約に同意したものとみなします。
              </p>
            </section>

            {/* 禁止事項 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">禁止事項</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                当サイトの利用にあたり、以下の行為は禁止いたします：
              </p>
              <ul className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-2 list-disc list-inside">
                <li>違法行為または違法行為に該当する可能性のある行為</li>
                <li>当サイトのコンテンツの無断転載、複製、配布</li>
                <li>当サイトのサーバーに対する不正アクセス</li>
                <li>他のユーザーの迷惑となる行為</li>
                <li>当サイトの運営を妨害する行為</li>
              </ul>
            </section>

            {/* 掲載情報について */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">掲載情報について</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトに掲載されている情報は、ユーザーの利便性向上を目的として提供されています。掲載情報の正確性、完全性、有用性について、当サイトは一切の保証をいたしません。
              </p>
            </section>

            {/* 外部リンクについて */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">外部リンクについて</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトに掲載されている外部リンク先のサイトについて、当サイトは一切の責任を負いません。リンク先サイトの利用は、ユーザーの自己責任で行ってください。
              </p>
            </section>

            {/* 免責事項 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">免責事項</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトの利用により生じたいかなる損害についても、当サイト運営者は一切の責任を負いません。ユーザーは、当サイトの利用に関するすべての責任を自己負担するものとします。
              </p>
            </section>

            {/* 著作権 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">著作権</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトに掲載されているコンテンツの著作権は、当サイト運営者または各著作権者に帰属します。無断での転載、複製、配布は禁止いたします。
              </p>
            </section>

            {/* 規約の変更 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">規約の変更</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                本規約は、予告なく改定される場合があります。改定後は、当サイトに掲載された時点で効力を生じます。
              </p>
            </section>

            {/* お問い合わせ */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">お問い合わせ</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                本規約に関するご質問やご不明な点は、
                <Link href="/contact" className="text-pink-600 hover:text-pink-700 font-medium">
                  お問い合わせページ
                </Link>
                からご連絡ください。
              </p>
            </section>
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
