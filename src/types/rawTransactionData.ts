export interface RawTransactionData {
  caip2Id: string;
  transaction: EVMRawTransaction | AptosRawTransaction;
}

interface EVMRawTransaction {
  from: string;
  to: string;
  data: string;
  value: string;
}

interface AptosRawTransaction {
  function: string;
  typeArguments: [string];
  functionArguments: [string];
}
