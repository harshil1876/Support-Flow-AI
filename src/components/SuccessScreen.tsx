import { CheckCircle2, RotateCcw } from 'lucide-react';

interface SuccessScreenProps {
  ticketNo: string;
  onReset: () => void;
}

export default function SuccessScreen({ ticketNo, onReset }: SuccessScreenProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 sm:p-12 text-center animate-in fade-in zoom-in-95 duration-300">
      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
        <CheckCircle2 className="w-8 h-8" />
      </div>
      
      <h2 className="text-3xl font-bold text-slate-900 mb-3">Request received!</h2>
      <p className="text-slate-600 mb-8 max-w-sm mx-auto leading-relaxed">
        Your request has been successfully submitted to our support system.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 max-w-xs mx-auto shadow-inner">
        <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">Ticket ID</div>
        <div className="text-3xl font-extrabold text-slate-900 tracking-tight">{ticketNo}</div>
      </div>

      <p className="text-sm text-slate-500 mb-2 font-medium">Keep this ticket number for reference.</p>
      <p className="text-sm text-slate-500 mb-8 font-medium">A confirmation email will be sent to the email address you provided.</p>

      <button
        onClick={onReset}
        className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-6 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-200"
      >
        <RotateCcw className="w-4 h-4" />
        Submit Another Request
      </button>
    </div>
  );
}
