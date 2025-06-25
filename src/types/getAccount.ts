export interface GetAccountResponse {
  status: string,
  data: {
    caip_id: string,
    network_name: string,
    address: string,
    network_id: string,
    network_symbol: string
  }
}
