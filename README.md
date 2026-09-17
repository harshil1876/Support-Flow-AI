# 🤖 SupportFlow AI

> An elegant, AI-powered customer support triage frontend demonstration.

SupportFlow AI is a modern, single-page React application designed to act as the customer-facing portal for an automated AI support system. It captures user complaints and seamlessly forwards them to an **n8n automation webhook** for AI analysis, priority routing, and ticket generation.

## ✨ Features

*   **Modern UI/UX:** Clean, premium SaaS-style interface built with Tailwind CSS.
*   **Fully Responsive:** Optimized for desktop, tablet, and mobile devices.
*   **Client-Side Validation:** Instant feedback on form inputs to ensure data integrity.
*   **Decoupled Architecture:** 100% frontend. Relies entirely on webhooks, meaning no backend credentials or API keys are exposed to the client.
*   **Interactive States:** Professional loading spinners, success screens, and error handling.

## 🛠 Tech Stack

*   **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```text
Support-Flow-AI/
├── src/
│   ├── components/
│   │   ├── ComplaintForm.tsx   # Main support ticket form
│   │   ├── Footer.tsx          # Page footer
│   │   ├── Hero.tsx            # Header & title section
│   │   ├── HowItWorks.tsx      # Informational step-by-step section
│   │   ├── Navbar.tsx          # Top navigation bar
│   │   └── SuccessScreen.tsx   # Post-submission confirmation UI
│   ├── lib/
│   │   └── api.ts              # n8n webhook communication logic
│   ├── App.tsx                 # Main application layout
│   ├── index.css               # Global Tailwind styles
│   └── main.tsx                # React entry point
├── .env.example                # Example environment variables
├── vite.config.ts              # Vite configuration
└── package.json                # Dependencies and scripts
```

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### 2. Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/harshil1876/Support-Flow-AI.git
cd Support-Flow-AI
npm install
```

### 3. Environment Setup
This application requires an n8n webhook to process the form submissions. 
Copy the example environment file and add your webhook URL:
```bash
cp .env.example .env.local
```
Open `.env.local` and configure your URL:
```env
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-endpoint
```

### 4. Run Locally
Start the Vite development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 🔌 The n8n Integration

The frontend expects the n8n webhook to accept a `POST` request with the following JSON payload:
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "complaint": "Description of the issue...",
  "submitted_at": "2024-05-20T10:00:00.000Z",
  "source": "supportflow-web"
}
```

### Expected Response
For the success screen to trigger, your n8n webhook must use a "Respond to Webhook" node returning:
```json
{
  "success": true,
  "ticket_no": "SUP-1047"
}
```

## 🌍 Deployment

This project is optimized for direct deployment to [Vercel](https://vercel.com).

1. Import the repository into your Vercel dashboard.
2. In the **Environment Variables** section, add `VITE_N8N_WEBHOOK_URL` and paste your production n8n webhook URL.
3. Click **Deploy**. Vercel will automatically detect Vite and build the project.

---
*Built for an AI automation demonstration.*
