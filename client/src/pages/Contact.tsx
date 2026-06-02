import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

// Set your external contact form URL (e.g. Google Forms) when ready.
// Keep empty to show "準備中" state.
const CONTACT_FORM_URL = "";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <div className="container py-6 sm:py-8">
        <Link href="/" className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700 mb-4">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">トップへ戻る</span>
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">お問い合わせ</h1>
        <p className="text-gray-600 text-sm sm:text-base">エロゲ図鑑へのご連絡はこちらからお願いします</p>
      </div>
      <AffiliateDisclosure />

      {/* 本文 */}
      <div className="container pb-12 sm:pb-16">
        <div className="max-w-2xl bg-white rounded-2xl p-6 sm:p-8 border border-pink-100 space-y-6">
          <div className="space-y-2">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              掲載内容の修正依頼、削除依頼、広告掲載、その他のお問い合わせはこちらからご連絡ください。
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              ※ 迷惑メール対策のため、メールアドレスはサイト上に直接掲載していません。
            </p>
          </div>

          {CONTACT_FORM_URL ? (
            <a
              href={CONTACT_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-press inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 py-3 font-bold text-white hover:from-pink-600 hover:to-pink-700 transition-all"
            >
              お問い合わせフォームへ
            </a>
          ) : (
            <div className="rounded-lg border border-pink-200 bg-pink-50 p-4">
              <p className="text-sm text-gray-700">
                お問い合わせフォームは準備中です。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
