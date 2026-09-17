# SupportFlow AI

AI-powered customer support triage demonstration frontend.
Built with React, TypeScript, Vite, and Tailwind CSS.

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

## 3. Configure VITE_N8N_WEBHOOK_URL

Copy `.env.example` to `.env.local` and add your actual n8n webhook URL:

```bash
VITE_N8N_WEBHOOK_URL=https://YOUR-N8N-DOMAIN/webhook/YOUR-ENDPOINT
```

## 4. Build

```bash
npm run build
```

## 5. Deploy to Vercel

This project is configured to be deployed directly to Vercel. 
You can import the repository into your Vercel dashboard and deploy it.

## 6. Configure the environment variable in Vercel

In your Vercel project settings, navigate to Environment Variables and add `VITE_N8N_WEBHOOK_URL` with your n8n production webhook URL.
