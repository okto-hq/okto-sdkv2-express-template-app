export interface PortfolioActivityResponse {
  status: string;
  data: {
    count: number;
    activity: Activity[];
  };
}
export interface Activity {
  symbol: string;
  image: string;
  name: string;
  short_name: string;
  id: string;
  group_id: string;
  description: string;
  quantity: string;
  amount: string;
  order_type: string;
  transfer_type: string;
  status: boolean;
  created_at: number;
  updated_at: number;
  timestamp: number;
  tx_hash: string;
  network_id: string;
  network_name: string;
  network_explorer_url: string;
  network_symbol: string;
  caip_id: string;
}
