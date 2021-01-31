# P U R P L E | C O N V E R T E R

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running the app

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

To run production build locally:

```bash
npm run build
npm start
# or
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on:

- (http://localhost:3000/api/conversions)
- (http://localhost:3000/api/aggregate)
- (http://localhost:3000/api/currencies)

Supported HTTP methods:

- /conversions (GET, POST)
- /aggregate (GET)
- /currencies (GET)

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
