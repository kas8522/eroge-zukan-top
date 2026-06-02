import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <div className="container py-6 sm:py-8">
        <Link href="/" className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700 mb-4">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">トップへ戻る</span>
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">プライバシーポリシー</h1>
      </div>
      <AffiliateDisclosure />

      {/* 本文 */}
      <div className="container pb-12 sm:pb-16">
        <div className="max-w-2xl space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-pink-100 space-y-8">
            {/* 個人情報の利用目的 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">個人情報の利用目的</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトでは、ユーザーの個人情報を適切に管理し、必要に応じて安全対策を講じるよう努めます。取得した個人情報は、お問い合わせへのご返信、サービス改善、統計情報の作成などの目的で利用する場合があります。
              </p>
            </section>

            {/* お問い合わせ時に取得する情報 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">お問い合わせ時に取得する情報</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                お問い合わせフォームからご連絡いただく際、お名前、メールアドレス、お問い合わせ内容などの情報を取得します。これらの情報は、ご返信以外の目的では使用いたしません。
              </p>
            </section>

            {/* アクセス解析について */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">アクセス解析について</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトでは、サイト改善のためにアクセス解析ツールを導入する場合があります。これらのツールは、個人を特定しない形での統計情報を収集します。
              </p>
            </section>

            {/* 広告配信について */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">広告配信について</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトでは、第三者配信の広告サービスを利用する場合があります。広告配信事業者がCookie等を利用して、ユーザーの興味関心に応じた広告を表示することがあります。
              </p>
            </section>

            {/* Cookieについて */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Cookieについて</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトでは、ユーザーの利便性向上のためにCookieを使用する場合があります。Cookieは、ブラウザの設定で無効化することができます。
              </p>
            </section>

            {/* 広告配信・アフィリエイトについて */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">広告配信・アフィリエイトについて</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトはアフィリエイト広告を利用しています。また、Amazon、FANZA、DLsite、楽天、A8.net などのアフィリエイトプログラムを利用する場合があります。これらのプログラムでは、個人を特定しない形での情報が収集される場合があります。
              </p>
            </section>

            {/* 第三者提供について */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">第三者提供について</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトは、法令等により開示が求められる場合などを除き、本人の同意なく個人情報を第三者に提供しないよう努めます。
              </p>
            </section>

            {/* 免責事項 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">免責事項</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトの情報は、ユーザーの利便性向上を目的として提供されています。掲載情報の正確性、完全性、有用性について、当サイトは一切の保証をいたしません。
              </p>
            </section>

            {/* 著作権について */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">著作権について</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                当サイトに掲載されているコンテンツの著作権は、当サイト運営者または各著作権者に帰属します。無断での転載、複製、配布は禁止いたします。
              </p>
            </section>

            {/* お問い合わせ先 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">お問い合わせ先</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                プライバシーポリシーに関するご質問やご不明な点は、
                <Link href="/contact" className="text-pink-600 hover:text-pink-700 font-medium">
                  お問い合わせページ
                </Link>
                からご連絡ください。
              </p>
            </section>

            {/* 改定について */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">改定について</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                本プライバシーポリシーは、予告なく改定される場合があります。改定後は、当サイトに掲載された時点で効力を生じます。
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
