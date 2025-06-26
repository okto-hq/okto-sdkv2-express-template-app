import { Hex } from 'viem';
import { ethers } from "ethers";

/**
 * Signs any arbitrary payload (no key sorting).
 * @param data - The payload object to sign
 * @returns {Promise<string>} - A hex signature string
 *
 */
export async function generateClientSignature(
  clientPK: Hex,
  data: Record<string, any>
): Promise<string> {
  const wallet = new ethers.Wallet(clientPK);
  const message = JSON.stringify(data);
  const signature = await wallet.signMessage(message);
  return signature;
}
