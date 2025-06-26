import * as intentClient from "../api/intentClient";
import * as explorerClient from "../api/explorerClient";
import { TokenTransferData } from "../types/tokenTransferData";
import { RawTransactionData } from "../types/rawTransactionData";
import { IntentExecuteResponse } from "../types/intentExecute";
import { ErrorResponse } from "../types/error";
import { SessionConfig } from "../types/sessionConfig";
import { v4 as uuidv4 } from "uuid";
import { Constants } from "../helper/constants";
import {
  encodeAbiParameters,
  encodeFunctionData,
  Hex,
  parseAbiParameters,
  stringToBytes,
  toHex,
} from "viem";
import { nonceToBigInt } from "../helper/nonceToBigInt";
import { INTENT_ABI } from "../helper/abi";
import { generateUserOp } from "../utils/userOp/generateUserOp";
import { signUserOp } from "../utils/userOp/signUserOp";

export const tokenTransfer = async (
  authToken: string,
  data: TokenTransferData,
  sessionConfig: SessionConfig,
  clientSWA: Hex,
  clientPrivateKey: string,
  feePayerAddress?: string
) => {
  // Generate nonce
  const nonce = uuidv4();

  // Get the Intent execute API info as required on Okto chain
  const jobParametersAbiType =
    "(string caip2Id, string recipientWalletAddress, string tokenAddress, uint amount)";
  const gsnDataAbiType = `(bool isRequired, string[] requiredNetworks, ${jobParametersAbiType}[] tokens)`;

  // Get current chain info
  const chainsResponse = await explorerClient.getChains(authToken);
  const chains = chainsResponse.data.network;

  const currentChain = chains.find(
    (chain: any) => chain.caip_id.toLowerCase() === data.caip2Id.toLowerCase()
  );

  // Feepayer address set to default if not provided
  if (!feePayerAddress) {
    feePayerAddress = Constants.FEE_PAYER_ADDRESS;
  }

  // Generate calldata
  const calldata = encodeAbiParameters(
    parseAbiParameters("bytes4, address,uint256, bytes"),
    [
      Constants.EXECUTE_USEROP_FUNCTION_SELECTOR,
      Constants.getEnvConfig().JOB_MANAGER_ADDRESS,
      Constants.USEROP_VALUE,
      encodeFunctionData({
        abi: INTENT_ABI,
        functionName: Constants.FUNCTION_NAME,
        args: [
          toHex(nonceToBigInt(nonce), { size: 32 }),
          clientSWA,
          sessionConfig.userSWA,
          feePayerAddress,
          encodeAbiParameters(
            parseAbiParameters("(bool gsnEnabled, bool sponsorshipEnabled)"),
            [
              {
                gsnEnabled: currentChain.gsn_enabled ?? false,
                sponsorshipEnabled: currentChain.sponsorship_enabled ?? false,
              },
            ]
          ),
          encodeAbiParameters(parseAbiParameters(gsnDataAbiType), [
            {
              isRequired: false,
              requiredNetworks: [],
              tokens: [],
            },
          ]),
          encodeAbiParameters(parseAbiParameters(jobParametersAbiType), [
            {
              amount: BigInt(data.amount),
              caip2Id: data.caip2Id,
              recipientWalletAddress: data.recipient,
              tokenAddress: data.token,
            },
          ]),
          Constants.INTENT_TYPE.TOKEN_TRANSFER,
        ],
      }),
    ]
  );

  const gasPrice = await explorerClient.getUserOperationGasPrice(authToken);

  // Generate unsigned userOp
  const userOp = await generateUserOp(
    nonce,
    sessionConfig,
    calldata,
    gasPrice,
    clientSWA,
    clientPrivateKey
  );

  // Sign the userOp
  const signedUserOp = await signUserOp(userOp, sessionConfig);

  const jobId: IntentExecuteResponse | ErrorResponse =
    await intentClient.execute(authToken, signedUserOp);

  return jobId;
};

export const rawTransaction = async (
  authToken: string,
  data: RawTransactionData,
  sessionConfig: SessionConfig,
  clientSWA: Hex,
  clientPrivateKey: string,
  feePayerAddress?: string
) => {
  // Generate nonce
  const nonce = uuidv4();

  // Get the Intent execute API info as required on Okto chain
  const jobParametersAbiType = "(string caip2Id, bytes[] transactions)";
  const gsnDataAbiType = `(bool isRequired, string[] requiredNetworks, ${jobParametersAbiType}[] tokens)`;

  // Get current chain info
  const chainsResponse = await explorerClient.getChains(authToken);
  const chains = chainsResponse.data.network;

  const currentChain = chains.find(
    (chain: any) => chain.caip_id.toLowerCase() === data.caip2Id.toLowerCase()
  );

  // Feepayer address set to default if not provided
  if (!feePayerAddress) {
    feePayerAddress = Constants.FEE_PAYER_ADDRESS;
  }

  // Generate calldata
  const calldata = encodeAbiParameters(
    parseAbiParameters("bytes4, address,uint256, bytes"),
    [
      Constants.EXECUTE_USEROP_FUNCTION_SELECTOR, //execute userop function selector
      Constants.getEnvConfig().JOB_MANAGER_ADDRESS, //The Job Manager address is now replaced with "RawTransactionBloc" address
      Constants.USEROP_VALUE,
      encodeFunctionData({
        abi: INTENT_ABI,
        functionName: Constants.FUNCTION_NAME,
        args: [
          toHex(nonceToBigInt(nonce), { size: 32 }),
          clientSWA,
          sessionConfig.userSWA,
          feePayerAddress,
          encodeAbiParameters(
            parseAbiParameters("(bool gsnEnabled, bool sponsorshipEnabled)"),
            [
              {
                gsnEnabled: currentChain.gsn_enabled ?? false,
                sponsorshipEnabled: currentChain.sponsorship_enabled ?? false,
              },
            ]
          ),
          encodeAbiParameters(parseAbiParameters(gsnDataAbiType), [
            {
              isRequired: false,
              requiredNetworks: [],
              tokens: [],
            },
          ]),
          encodeAbiParameters(parseAbiParameters(jobParametersAbiType), [
            {
              caip2Id: data.caip2Id,
              transactions: [
                toHex(stringToBytes(JSON.stringify(data.transaction))),
              ],
            },
          ]),
          Constants.INTENT_TYPE.RAW_TRANSACTION,
        ],
      }),
    ]
  );

  const gasPrice = await explorerClient.getUserOperationGasPrice(authToken);

  // Generate unsigned userOp
  const userOp = await generateUserOp(
    nonce,
    sessionConfig,
    calldata,
    gasPrice,
    clientSWA,
    clientPrivateKey
  );

  // Sign the userOp
  const signedUserOp = await signUserOp(userOp, sessionConfig);

  const jobId: IntentExecuteResponse | ErrorResponse =
    await intentClient.execute(authToken, signedUserOp);

  return jobId;
};
