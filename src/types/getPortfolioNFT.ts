export interface PortfolioNFTResponse {
  status: string;
  data: {
    count: number;
    details: Nft[];
  };
}
export interface Nft {
  caip_id: string;
  network_name: string;
  entity_type: string;
  collection_address: string;
  collection_name: string;
  nft_id: string;
  image: string;
  quantity: string;
  token_uri: string;
  description: string;
  nft_name: string;
  explorer_smart_contract_url: string;
  collection_image: string;
}
