import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import {
  featureArticleNavLinks,
  featureArticles,
} from "@/data/featureArticles";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import NotFound from "@/pages/NotFound";

const siteNavLinks = [
  { label: "トップページ", href: "/" },
  { label: "人気ランキング", href: "/ranking" },
  { label: "セール情報", href: "/sale" },
  { label: "特集まとめ", href: "/features" },
];

function getCtaLinks(slug: string) {
  if (slug === "beginner") {
    return [
      { label: "人気ランキングを見る", href: "/ranking" },
      { label: "作品詳細を見る", href: "/game/1" },
    ];
  }
  if (slug === "sale-low-price") {
    return [
      { label: "セール情報を見る", href: "/sale" },
      { label: "初心者向けガイド", href: "/features/beginner" },
    ];
  }
  return [
    { label: "人気ランキングを見る", href: "/ranking" },
    { label: "セール情報を見る", href: "/sale" },
  ];
}

export default function FeatureArticle() {
  const [, params] = useRoute("/features/:slug");
  const slug = params?.slug ?? "";
  const article = featureArticles[slug];

  useEffect(() => {
    if (article) {
      document.title = `${article.title}｜エロゲ図鑑`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", article.metaDescription);
      }
    }
  }, [article]);

  if (!article) {
    return <NotFound />;
  }

  const ctaLinks = getCtaLinks(slug);
  const otherArticles = featureArticleNavLinks.filter((link) => !link.href.endsWith(slug));

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-6 sm:py-8">
        <Link
          href="/features"
          className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700 mb-4"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">特集まとめへ戻る</span>
        </Link>

        <p className="text-xs text-gray-500 mb-2">18歳以上の方を対象としたガイド記事</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-snug">
          {article.title}
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{article.lead}</p>
      </div>

      <AffiliateDisclosure />

      <article className="container pb-12 sm:pb-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-pink-100 shadow-sm space-y-8">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-sm sm:text-base text-gray-700 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">よくある質問</h2>
              <dl className="space-y-4">
                {article.faq.map((item) => (
                  <div key={item.question} className="border-b border-pink-50 pb-4 last:border-0">
                    <dt className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                      Q. {item.question}
                    </dt>
                    <dd className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      A. {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="rounded-xl bg-pink-50 border border-pink-100 p-5 sm:p-6">
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-4">
                {article.cta}
              </p>
              <div className="flex flex-wrap gap-2">
                {ctaLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium px-4 py-2 rounded text-sm transition-colors">
                      {link.label}
                    </a>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-pink-100 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">関連ガイド</h2>
            <ul className="space-y-2 mb-6">
              {otherArticles.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-pink-600 hover:text-pink-700 text-sm sm:text-base font-medium">
                      {link.label} →
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-lg font-bold text-gray-900 mb-4">サイト内リンク</h2>
            <div className="flex flex-wrap gap-2">
              {siteNavLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium px-3 py-2 rounded text-sm transition-colors">
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </section>

          <p className="text-xs text-gray-500 text-center">
            本記事は18歳以上の方を対象としています。掲載リンクにはアフィリエイトが含まれる場合があります。
          </p>
        </div>
      </article>
    </div>
  );
}
