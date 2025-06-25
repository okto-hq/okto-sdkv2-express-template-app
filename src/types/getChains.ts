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

/*
{
  "status": "success",
  "data": {
    "network": [
      {
        "caip_id": "eip155:56",
        "network_name": "BSC",
        "chain_id": "56",
        "logo": "BSC",
        "sponsorship_enabled": true,
        "gsn_enabled": false,
        "type": "EVM",
        "network_id": "9a26afcf-ed62-43d8-91ea-42dc7cd55890",
        "onramp_enabled": false,
        "whitelisted": true
      }
    ]
  }
}
*/
