export interface NFTTransferData {
  caip2Id: string;
  collectionAddress: string;
  nftId: string;
  recipientWalletAddress: string;
  amount: number | bigint;
  nftType: "ERC721" | "ERC1155" | string;
}
