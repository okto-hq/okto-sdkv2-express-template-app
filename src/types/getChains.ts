export interface ChainResponse {
  status: string,
  data: {
    network: [{
      caip_id: string,
      network_name: string,
      chain_id: string,
      logo: string,
      sponsorship_enabled: boolean,
      gsn_enabled: boolean,
      type: string,
      network_id: string,
      onramp_enabled: boolean,
      whitelisted: boolean
    }]
  }
}
