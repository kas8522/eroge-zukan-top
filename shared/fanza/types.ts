/** DMM Affiliate API v3 — shared response shapes for server-side integration. */

export interface FanzaEnvConfig {
  apiId: string;
  affiliateId: string;
}

export interface FanzaItemListParams {
  site?: "FANZA" | "DMM.com";
  service?: "digital" | "mono" | "pcgame";
  floor?: string;
  cid?: string;
  keyword?: string;
  sort?: string;
  hits?: number;
  offset?: number;
}

export interface FanzaImageSize {
  url: string;
  size: string;
}

export interface FanzaItem {
  content_id: string;
  title: string;
  URL: string;
  affiliateURL: string;
  imageURL: {
    large?: string;
    list?: string;
    small?: string;
  };
  prices?: {
    price?: string;
    list_price?: string;
  };
  date?: string;
  iteminfo?: {
    genre?: Array<{ id: number; name: string }>;
    maker?: Array<{ id: number; name: string }>;
    label?: Array<{ id: number; name: string }>;
  };
}

export interface FanzaItemListResult {
  result: {
    status: number;
    result_count: number;
    total_count: number;
    first_position: number;
    items: FanzaItem[];
  };
}
