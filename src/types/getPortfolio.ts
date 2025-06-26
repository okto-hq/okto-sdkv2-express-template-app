export interface PortfolioResponse {
  status: string;
  data: {
    aggregated_data: AggregatedData;
    group_tokens: GroupToken[];
  };
}
export interface AggregatedData {
  holdings_count: string;
  holdings_price_inr: string;
  holdings_price_usdt: string;
  total_holding_price_inr: string;
  total_holding_price_usdt: string;
}
export interface GroupToken {
  id: string;
  name: string;
  symbol: string;
  short_name: string;
  token_image: string;
  token_address: string;
  group_id: string;
  network_id: string;
  precision: string;
  network_name: string;
  is_primary: boolean;
  balance: string;
  holdings_price_usdt: string;
  holdings_price_inr: string;
  aggregation_type: string;
  tokens: {
    id: string;
    name: string;
    symbol: string;
    short_name: string;
    token_image: string;
    token_address: string;
    network_id: string;
    precision: string;
    network_name: string;
    is_primary: boolean;
    balance: string;
    holdings_price_usdt: string;
    holdings_price_inr: string;
  }[];
}
