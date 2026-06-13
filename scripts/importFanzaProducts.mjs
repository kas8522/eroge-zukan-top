import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");
const ENV_LOCAL_PATH = path.join(PROJECT_ROOT, ".env.local");
const OUTPUT_PATH = path.join(PROJECT_ROOT, "client", "src", "data", "fanzaProducts.ts");
const ITEM_LIST_URL = "https://api.dmm.com/affiliate/v3/ItemList";

function maskSensitiveText(text) {
  if (!text) return text;
  return text
    .replace(/([?&]api_id=)[^&"'\s]*/gi, "$1***")
    .replace(/([?&]affiliate_id=)[^&"'\s]*/gi, "$1***");
}

function maskSensitiveUrl(url) {
  const masked = new URL(url);
  if (masked.searchParams.has("api_id")) {
    masked.searchParams.set("api_id", "***");
  }
  if (masked.searchParams.has("affiliate_id")) {
    masked.searchParams.set("affiliate_id", "***");
  }
  return masked.toString();
}

const AFFILIATE_ID_FORMAT = /^[a-zA-Z0-9-]+$/;
const API_ID_FORMAT = /^[A-Za-z0-9]+$/;
const FULL_WIDTH_HYPHEN_PATTERN = /[\uFF0D\u30FC\u2010\u2011\u2012\u2013\u2014\u2212]/;

function countHalfWidthHyphens(value) {
  return (value.match(/-/g) ?? []).length;
}

function countFullWidthHyphens(value) {
  return (value.match(FULL_WIDTH_HYPHEN_PATTERN) ?? []).length;
}

function hasLeadingOrTrailingWhitespace(value) {
  if (value === undefined) return false;
  return value !== value.trim();
}

function looksLikeAffiliateId(value) {
  return AFFILIATE_ID_FORMAT.test(value) && value.includes("-");
}

function looksLikeApiId(value) {
  return API_ID_FORMAT.test(value) && !value.includes("-") && value.length >= 10;
}

function detectPossibleIdSwap(apiId, affiliateId) {
  if (!apiId || !affiliateId) return false;

  const apiIdLooksLikeAffiliate = looksLikeAffiliateId(apiId);
  const affiliateIdLooksLikeApi = looksLikeApiId(affiliateId);

  return apiIdLooksLikeAffiliate && affiliateIdLooksLikeApi;
}

function validateCredential(name, rawValue, { expectedFormat, allowHyphen }) {
  const trimmed = rawValue?.trim() ?? "";
  const configured = Boolean(trimmed);
  const whitespaceIssue = hasLeadingOrTrailingWhitespace(rawValue);
  const charCount = configured ? trimmed.length : 0;
  const halfWidthHyphenCount = configured ? countHalfWidthHyphens(trimmed) : 0;
  const fullWidthHyphenCount = configured ? countFullWidthHyphens(trimmed) : 0;
  const formatOk =
    configured &&
    expectedFormat.test(trimmed) &&
    fullWidthHyphenCount === 0 &&
    (allowHyphen || halfWidthHyphenCount === 0);

  return {
    name,
    configured,
    whitespaceIssue,
    charCount,
    halfWidthHyphenCount,
    fullWidthHyphenCount,
    formatOk,
  };
}

function logEnvValidation(env) {
  const apiIdRaw = env.DMM_API_ID;
  const affiliateIdRaw = env.DMM_AFFILIATE_ID;

  const apiId = validateCredential("DMM_API_ID", apiIdRaw, {
    expectedFormat: API_ID_FORMAT,
    allowHyphen: false,
  });

  const affiliateId = validateCredential("DMM_AFFILIATE_ID", affiliateIdRaw, {
    expectedFormat: AFFILIATE_ID_FORMAT,
    allowHyphen: true,
  });

  console.log("Environment validation (.env.local):");
  console.log("");
  console.log("DMM_API_ID:");
  console.log(`  設定: ${apiId.configured ? "設定済み" : "未設定"}`);
  console.log(`  文字数: ${apiId.charCount}`);
  console.log(`  半角ハイフン数: ${apiId.halfWidthHyphenCount}`);
  console.log(`  形式: ${apiId.formatOk ? "OK" : "NG"}`);
  console.log("");
  console.log("DMM_AFFILIATE_ID:");
  console.log(`  設定: ${affiliateId.configured ? "設定済み" : "未設定"}`);
  console.log(`  前後空白: ${affiliateId.whitespaceIssue ? "あり" : "なし"}`);
  console.log(`  文字数: ${affiliateId.charCount}`);
  console.log(`  半角ハイフン数: ${affiliateId.halfWidthHyphenCount}`);
  console.log(`  全角ハイフン: ${affiliateId.fullWidthHyphenCount > 0 ? "あり" : "なし"}`);
  console.log(
    `  形式 (半角英数字+半角ハイフンのみ): ${affiliateId.formatOk ? "OK" : "NG"}`,
  );

  const warnings = [];

  if (apiId.configured && affiliateId.configured) {
    if (detectPossibleIdSwap(apiIdRaw?.trim() ?? "", affiliateIdRaw?.trim() ?? "")) {
      warnings.push("DMM_API_ID と DMM_AFFILIATE_ID が逆に設定されている可能性があります。");
    }
  }

  if (affiliateId.whitespaceIssue) {
    warnings.push("DMM_AFFILIATE_ID の前後に空白があります。値を見直してください。");
  }

  if (affiliateId.fullWidthHyphenCount > 0) {
    warnings.push("DMM_AFFILIATE_ID に全角ハイフンが含まれています。半角ハイフン (-) に置き換えてください。");
  }

  if (affiliateId.configured && !affiliateId.formatOk && affiliateId.fullWidthHyphenCount === 0) {
    warnings.push(
      "DMM_AFFILIATE_ID の形式が不正です。半角英数字と半角ハイフンのみ使用できます。",
    );
  }

  if (warnings.length > 0) {
    console.log("");
    console.log("警告:");
    for (const warning of warnings) {
      console.log(`  - ${warning}`);
    }
  }

  console.log("");

  return {
    apiId,
    affiliateId,
    hasBlockingIssues: !apiId.configured || !affiliateId.configured,
  };
}

function loadEnvLocal() {
  if (!fs.existsSync(ENV_LOCAL_PATH)) {
    throw new Error(
      ".env.local not found. Create it with DMM_API_ID and DMM_AFFILIATE_ID (see .env.example).",
    );
  }

  const env = {};
  const content = fs.readFileSync(ENV_LOCAL_PATH, "utf-8");

  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    env[key] = value;
  }

  return env;
}

function mapItem(item) {
  return {
    contentId: item.content_id ?? "",
    title: item.title ?? "",
    affiliateUrl: item.affiliateURL ?? "",
    productUrl: item.URL ?? "",
    thumbnail: item.imageURL?.large ?? item.imageURL?.list ?? item.imageURL?.small,
    price: item.prices?.price,
    listPrice: item.prices?.list_price,
    releaseDate: item.date,
    maker: item.iteminfo?.maker?.[0]?.name,
    genres: (item.iteminfo?.genre ?? []).map((genre) => genre.name),
  };
}

function buildItemListUrl(apiId, affiliateId) {
  const url = new URL(ITEM_LIST_URL);
  url.searchParams.set("api_id", apiId);
  url.searchParams.set("affiliate_id", affiliateId);
  url.searchParams.set("site", "FANZA");
  url.searchParams.set("service", "digital");
  url.searchParams.set("output", "json");
  url.searchParams.set("hits", "20");
  url.searchParams.set("sort", "date");
  return url;
}

function generateTypeScriptFile(products, importedAt) {
  const serializedProducts = JSON.stringify(products, null, 2);

  return `/** Auto-generated by scripts/importFanzaProducts.mjs — do not edit manually. */
export interface FanzaProduct {
  contentId: string;
  title: string;
  affiliateUrl: string;
  productUrl: string;
  thumbnail?: string;
  price?: string;
  listPrice?: string;
  releaseDate?: string;
  maker?: string;
  genres: string[];
}

export const fanzaProductsImportedAt: string | null = ${JSON.stringify(importedAt)};

export const fanzaProducts: FanzaProduct[] = ${serializedProducts};
`;
}

function maskSensitiveObject(value, inParameters = false) {
  if (Array.isArray(value)) {
    return value.map((item) => maskSensitiveObject(item, inParameters));
  }

  if (value && typeof value === "object") {
    const masked = {};

    for (const [key, entry] of Object.entries(value)) {
      const childInParameters = inParameters || key === "parameters";

      if ((key === "api_id" || key === "affiliate_id") && childInParameters) {
        masked[key] = "***";
      } else if (key === "api_id" || key === "affiliate_id") {
        masked[key] = typeof entry === "string" ? entry : maskSensitiveObject(entry, childInParameters);
      } else {
        masked[key] = maskSensitiveObject(entry, childInParameters);
      }
    }

    return masked;
  }

  if (typeof value === "string") {
    return maskSensitiveText(value);
  }

  return value;
}

function formatResponseBody(responseText) {
  try {
    const parsed = JSON.parse(responseText);
    return JSON.stringify(maskSensitiveObject(parsed), null, 2);
  } catch {
    return maskSensitiveText(responseText) || "(empty)";
  }
}

async function fetchItemList(requestUrl) {
  const response = await fetch(requestUrl);
  const responseText = await response.text();

  if (!response.ok) {
    console.error(`Request URL: ${maskSensitiveUrl(requestUrl)}`);
    console.error(`Response status: ${response.status} ${response.statusText}`);
    console.error("Response body:");
    console.error(formatResponseBody(responseText));
    throw new Error(`DMM API request failed: ${response.status} ${response.statusText}`);
  }

  try {
    return JSON.parse(responseText);
  } catch {
    console.error(`Request URL: ${maskSensitiveUrl(requestUrl)}`);
    console.error("Response body:");
    console.error(formatResponseBody(responseText));
    throw new Error("DMM API response is not valid JSON.");
  }
}

async function main() {
  const env = loadEnvLocal();
  const validation = logEnvValidation(env);

  const apiId = env.DMM_API_ID?.trim();
  const affiliateId = env.DMM_AFFILIATE_ID?.trim();

  if (validation.hasBlockingIssues) {
    throw new Error("DMM_API_ID and DMM_AFFILIATE_ID must be set in .env.local.");
  }

  const requestUrl = buildItemListUrl(apiId, affiliateId);
  const payload = await fetchItemList(requestUrl);
  const items = payload?.result?.items ?? [];

  if (!Array.isArray(items)) {
    console.error(`Request URL: ${maskSensitiveUrl(requestUrl)}`);
    console.error("Response body:");
    console.error(formatResponseBody(JSON.stringify(payload)));
    throw new Error("Unexpected DMM API response: result.items is not an array.");
  }

  const products = items.map(mapItem);
  const importedAt = new Date().toISOString();
  const output = generateTypeScriptFile(products, importedAt);

  fs.writeFileSync(OUTPUT_PATH, output, "utf-8");

  console.log(`Imported ${products.length} products to ${path.relative(PROJECT_ROOT, OUTPUT_PATH)}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
