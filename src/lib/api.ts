export interface SupportRequest {
  name: string;
  email: string;
  complaint: string;
  submitted_at: string;
  source: string;
}

export interface SupportResponse {
  success: boolean;
  ticket_no?: string;
  message?: string;
}

export async function submitSupportRequest(data: Omit<SupportRequest, 'submitted_at' | 'source'>): Promise<SupportResponse> {
  const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('Missing VITE_N8N_WEBHOOK_URL environment variable');
    throw new Error('Configuration error: Webhook URL is missing');
  }

  const payload: SupportRequest = {
    ...data,
    submitted_at: new Date().toISOString(),
    source: 'supportflow-web'
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();
    return result as SupportResponse;
  } catch (error) {
    console.error('Error submitting support request:', error);
    throw error;
  }
}
