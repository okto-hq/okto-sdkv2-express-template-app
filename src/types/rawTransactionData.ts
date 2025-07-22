export interface RawTransactionData {
  caip2Id: string;
  transaction: EVMRawTransactionData | AptosRawTransactionData | SVMRawTransactionData;
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

export interface SVMRawTransaction {
  instructions: {
    programId: string;
    keys: {
      pubkey: string;
      isSigner: boolean;
      isWritable: boolean;
    }[];
    data: number[];
  }[];
  signers: string[];
  feePayerAddress: string;
}

export interface SVMRawTransactionData {
  caip2Id: string;
  transactions: SVMRawTransaction[];
}