import { useState } from "react";
import { toast } from "sonner";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

      {/* 本文 */}
      <div className="container pb-12 sm:pb-16">
        <div className="max-w-2xl bg-white rounded-2xl p-6 sm:p-8 border border-pink-100">
          {submitted && (
            <div className="mb-6 p-4 bg-pink-50 border border-pink-200 rounded-lg">
              <p className="text-sm text-gray-700">
                ご送信ありがとうございます。現在、送信機能は準備中です。お問い合わせは後日対応予定です。
              </p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* お名前 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                お名前 <span className="text-pink-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="例：田中太郎"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
              {submitted && !formData.name && (
                <p className="text-xs text-pink-600 mt-1">お名前を入力してください</p>
              )}
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                メールアドレス <span className="text-pink-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="例：example@email.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
              {submitted && !formData.email && (
                <p className="text-xs text-pink-600 mt-1">メールアドレスを入力してください</p>
              )}
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                お問い合わせ内容 <span className="text-pink-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="ご質問やご意見をお聞かせください"
                rows={6}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                required
              />
              {submitted && !formData.message && (
                <p className="text-xs text-pink-600 mt-1">お問い合わせ内容を入力してください</p>
              )}
            </div>

            {/* 送信ボタン */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all active:scale-95"
            >
              送信する
            </button>
          </form>


        </div>
      </div>
    </div>
  );
}
