export interface Token {
  address: string,
  caip_id: string,
  symbol: string,
  image: string,
  name: string,
  short_name: string,
  id: string,
  group_id: string,
  is_primary: boolean,
  network_id: string,
  network_name: string,
  onramp_enabled: boolean,
  whitelisted: boolean,
  decimals: string,
  precision: string
}

export interface TokenResponse {
  status: string,
  data: {
    count: number,
    tokens: Token[]
  }
}
