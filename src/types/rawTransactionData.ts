export interface RawTransactionData {
  caip2Id: string;
  transaction: EVMRawTransactionData | AptosRawTransactionData;
}

export interface EVMRawTransactionData {
  from: string;
  to: string;
  data: string;
  value: string;
}

export interface AptosRawTransactionData {
  function: string;
  typeArguments: [string];
  functionArguments: [string];
}
