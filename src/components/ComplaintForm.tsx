import { useState, type FormEvent } from 'react';
import { Send, AlertCircle, Loader2 } from 'lucide-react';
import { submitSupportRequest } from '../lib/api';

interface ComplaintFormProps {
  onSuccess: (ticketNo: string) => void;
}

export default function ComplaintForm({ onSuccess }: ComplaintFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [complaint, setComplaint] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim() || name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!complaint.trim() || complaint.length < 10) {
      newErrors.complaint = 'Please provide at least 10 characters.';
    } else if (complaint.length > 2000) {
      newErrors.complaint = 'Complaint cannot exceed 2000 characters.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setApiError(null);
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await submitSupportRequest({
        name: name.trim(),
        email: email.trim(),
        complaint: complaint.trim(),
      });
      
      if (response.success && response.ticket_no) {
        onSuccess(response.ticket_no);
      } else {
        throw new Error(response.message || 'Invalid response from server');
      }
    } catch (err: any) {
      console.error(err);
      setApiError(err.message || 'We couldn\'t submit your request right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 sm:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Submit a Support Request</h2>
        <p className="text-slate-600">Tell us what happened and our automated support system will take care of the rest.</p>
      </div>

      {apiError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-red-800">Something went wrong</h3>
            <p className="text-sm text-red-700 mt-1">{apiError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              disabled={isSubmitting}
              className={`w-full px-4 py-2.5 rounded-xl border ${errors.name ? 'border-red-300 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-100'} bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:border-blue-500 transition-all`}
            />
            {errors.name && <p className="text-sm text-red-600 font-medium">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              disabled={isSubmitting}
              className={`w-full px-4 py-2.5 rounded-xl border ${errors.email ? 'border-red-300 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-100'} bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:border-blue-500 transition-all`}
            />
            {errors.email && <p className="text-sm text-red-600 font-medium">{errors.email}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <label htmlFor="complaint" className="block text-sm font-medium text-slate-700">Describe your issue</label>
            <span className={`text-xs font-medium ${complaint.length > 2000 ? 'text-red-500' : 'text-slate-400'}`}>
              {complaint.length} / 2000
            </span>
          </div>
          <textarea
            id="complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Tell us what happened, including any important details..."
            rows={5}
            disabled={isSubmitting}
            className={`w-full px-4 py-3 rounded-xl border ${errors.complaint ? 'border-red-300 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-100'} bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:border-blue-500 transition-all resize-y`}
          />
          {errors.complaint && <p className="text-sm text-red-600 font-medium">{errors.complaint}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-sm hover:shadow disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting Request...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit Support Request
            </>
          )}
        </button>
      </form>
    </div>
  );
}
