export interface OrderHistoryResponse {
  status: string;
  data: {
    count: number;
    items: OrderItem[];
  };
}
export interface OrderItem {
  downstream_transaction_hash: string[];
  transaction_hash: string[];
  status: string;
  intent_id: string;
  intent_type: string;
  network_name: string;
  caip_id: string;
  details: {
    amount?: string;
    caip2Id?: string;
    recipientWalletAddress?: string;
    tokenAddress?: string;
  };
  reason: string;
  block_timestamp: number;
}
