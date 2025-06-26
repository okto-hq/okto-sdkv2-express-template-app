import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const BASE_URL = process.env.BASE_URL || "https://sandbox-api.okto.tech";
// export const CLIENT_SWA = process.env.OKTO_CLIENT_SWA as Hex;
// export const OKTO_CLIENT_PRIVATE_KEY = process.env.OKTO_CLIENT_PRIVATE_KEY as string;
