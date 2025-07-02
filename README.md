# okto-express-template-app

This is an Express app designed to demo an implementation of how to interact with the Okto 3pBFF through API calls. It shows the implementation of three categories of APIs:

- **Auth APIs** ([`authRoutes.ts`](https://github.com/okto-hq/okto-sdkv2-express-template-app/blob/main/src/routes/authRoutes.ts))
- **Explorer APIs** ([`explorerRoutes.ts`](https://github.com/okto-hq/okto-sdkv2-express-template-app/blob/main/src/routes/explorerRoutes.ts))
- **Intent APIs** ([`intentRoutes.ts`](https://github.com/okto-hq/okto-sdkv2-express-template-app/blob/main/src/routes/intentRoutes.ts))

Each of these route files demonstrates how to interact with the Okto backend for their respective API categories.

---

## API Routes

### Auth Routes (`/api/auth`)

| Method | Path                 | Description              |
| ------ | -------------------- | ------------------------ |
| POST   | /email/otp           | Request OTP for email    |
| POST   | /email/verify-otp    | Verify OTP for email     |
| POST   | /whatsapp/otp        | Request OTP for WhatsApp |
| POST   | /whatsapp/verify-otp | Verify OTP for WhatsApp  |
| POST   | /authenticate        | Authenticate user        |

### Explorer Routes (`/api/explorer`)

| Method | Path                | Description                     |
| ------ | ------------------- | ------------------------------- |
| GET    | /account            | Get account details             |
| GET    | /chains             | Get supported chains            |
| GET    | /tokens             | Get supported tokens            |
| GET    | /portfolio          | Get portfolio summary           |
| GET    | /portfolio-activity | Get portfolio activity          |
| GET    | /portfolio-nft      | Get portfolio NFTs              |
| GET    | /order-history      | Get order history               |
| POST   | /read-contract-data | Read data from a smart contract |

### Intent Routes (`/api/intent`)

| Method | Path                                 | Description                              |
| ------ | ------------------------------------ | ---------------------------------------- |
| POST   | /tokenTransfer                       | Initiate a token transfer intent         |
| POST   | /rawTransaction                      | Initiate a raw transaction intent        |
| POST   | /tokenTransfer/estimate              | Estimate a token transfer intent         |
| POST   | /rawTransaction/estimate             | Estimate a raw transaction intent        |
| POST   | /tokenTransfer/executeAfterEstimate  | Execute token transfer after estimation  |
| POST   | /rawTransaction/executeAfterEstimate | Execute raw transaction after estimation |

---

## Local Setup

Follow these steps to run the app locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/okto-hq/okto-sdkv2-express-template-app.git
   cd okto-sdkv2-express-template-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Copy the example environment file and update it with your values:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and fill in the required environment variables (such as `PORT`, `BASE_URL`, `OKTO_ENVIRONMENT`, etc.).

4. **Run the app:**
   ```bash
   npm run dev
   ```
   The server will start on port 3000 by default (or the port you specify in your `.env`).

---

## 📬 Postman Collection

**A complete Postman collection is available for all endpoints in this app.**

- Download or view here: [`Okto-express-template-app.postman_collection.json`](https://github.com/okto-hq/okto-sdkv2-express-template-app/blob/main/Okto-express-template-app.postman_collection.json)
