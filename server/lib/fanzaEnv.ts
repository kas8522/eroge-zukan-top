import type { FanzaEnvConfig } from "../../shared/fanza/types.js";

const FANZA_API_BASE = "https://api.dmm.com/affiliate/v3";

export function getFanzaEnv(): FanzaEnvConfig | null {
  const apiId = process.env.DMM_API_ID?.trim();
  const affiliateId = process.env.DMM_AFFILIATE_ID?.trim();

  if (!apiId || !affiliateId) {
    return null;
  }

  return { apiId, affiliateId };
}

export function isFanzaConfigured(): boolean {
  return getFanzaEnv() !== null;
}

export function buildFanzaItemListUrl(
  config: FanzaEnvConfig,
  params: Record<string, string | number | undefined>,
): string {
  const url = new URL(`${FANZA_API_BASE}/ItemList`);
  url.searchParams.set("api_id", config.apiId);
  url.searchParams.set("affiliate_id", config.affiliateId);
  url.searchParams.set("output", "json");

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") {
      url.searchParams.set(key, String(value));
    }
  }

  return url.toString();
}
