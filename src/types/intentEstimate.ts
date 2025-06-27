export interface IntentEstimateResponse {
  status: string;
  data: {
    callData?: {
      clientSWA?: string;
      feePayerAddress?: string;
      gsn?: {
        isPossible?: boolean;
        isRequired?: boolean;
        requiredNetworks?: string[];
        tokens?: string[];
      };
      intentType?: string;
      jobId?: string;
      payload?: {
        caip2Id?: string;
        transactions?: {
          data?: string;
          from?: string;
          to?: string;
          value?: string;
        }[];
      };
      policies?: {
        gsnEnabled?: boolean;
        sponsorshipEnabled?: boolean;
      };
      userSWA?: string;
    };
    details?: {
      estimation?: {
        amount?: string;
        crossChainFee?: string;
        crossChainFeeCollector?: string;
        gasFeesInInputToken?: string;
        integratorFeesInInputToken?: string;
        outputAmount?: string;
        platformBaseFeesInInputToken?: string;
        recommendedSlippage?: string;
        routeId?: string;
        routeValidUntil?: string;
        sameChainFee?: string;
        sameChainFeeCollector?: string;
        slippageUsed?: string;
        totalFeesInInputToken?: string;
      };
      fees?: {
        approxTransactionFeesInUSDT?: string;
        transactionFees?: {
          [key: string]: string;
        };
      };
      swapFees?: {
        gasFeesInInputToken?: string;
        integratorFeesInInputToken?: string;
        platformBaseFeesInInputToken?: string;
        totalFeesInInputToken?: string;
      };
    };
    userOps?: {
      callData?: string;
      callGasLimit?: string;
      maxFeePerGas?: string;
      maxPriorityFeePerGas?: string;
      nonce?: string;
      paymaster?: string;
      paymasterData?: string;
      paymasterPostOpGasLimit?: string;
      paymasterVerificationGasLimit?: string;
      preVerificationGas?: string;
      sender?: string;
      verificationGasLimit?: string;
    };
  };
}
