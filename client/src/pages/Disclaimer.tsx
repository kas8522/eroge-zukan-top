import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <div className="container py-6 sm:py-8">
        <Link href="/" className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700 mb-4">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">トップへ戻る</span>
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">免責事項・広告について</h1>
      </div>

      {/* 本文 */}
      <div className="container pb-12 sm:pb-16">
        <div className="max-w-2xl space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-pink-100 space-y-8">
            {/* 掲載情報について */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">掲載情報について</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトに掲載されている作品情報、レビュー、ランキング、セール情報などは、ユーザーの利便性向上を目的として提供されています。掲載情報の正確性、完全性、有用性について、当サイトは一切の保証をいたしません。
              </p>
            </section>

            {/* 価格・セール情報について */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">価格・セール情報について</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトに掲載されている価格、割引率、セール情報などは、掲載時点での情報です。価格、割引率、販売状況、対応環境などは変更される場合があります。最新の情報は、リンク先の販売サイトでご確認ください。
              </p>
            </section>

            {/* 作品画像・商品画像について */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">作品画像・商品画像について</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトに掲載されている作品画像、商品画像などは、各メーカー、サークル、販売サイトから引用しています。著作権は各著作権者に帰属します。
              </p>
            </section>

            {/* 外部サイトへのリンクについて */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">外部サイトへのリンクについて</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトに掲載されている外部リンク先のサイトについて、当サイトは一切の責任を負いません。リンク先サイトの利用は、ユーザーの自己責任で行ってください。商品・作品の購入は、リンク先の販売サイトの情報を確認した上で行ってください。
              </p>
            </section>

            {/* アフィリエイト広告について */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">アフィリエイト広告について</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                <span className="font-bold">当サイトはアフィリエイト広告を利用する場合があります。</span>
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトに掲載されているリンクの一部は、Amazon、FANZA、DLsite、楽天、A8.net などのアフィリエイトプログラムのリンクです。これらのリンクから購入・登録いただくと、当サイト運営者に手数料が入る場合があります。ユーザーの負担は増えません。
              </p>
            </section>

            {/* 成人向けコンテンツについて */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">成人向けコンテンツについて</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                <span className="font-bold">当サイトは成人向けコンテンツを扱う場合があるため、18歳未満の方の閲覧はご遠慮ください。</span>
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトに掲載されている作品の一部は、成人向けのコンテンツです。18歳未満の方が閲覧することは法律で禁止されています。ご注意ください。
              </p>
            </section>

            {/* 重要な注記 */}
            <section className="bg-pink-50 p-4 rounded-lg border border-pink-200">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                <span className="font-bold">重要：</span> 当サイトの利用により生じたいかなる損害についても、当サイト運営者は一切の責任を負いません。ユーザーは、当サイトの利用に関するすべての責任を自己負担するものとします。
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
