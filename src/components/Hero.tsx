import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="text-center space-y-4 max-w-3xl mx-auto pt-4 pb-4">
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2 border border-slate-200">
        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
        AI Support Automation
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
        Your issue. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Automatically routed.</span>
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mt-4">
        Submit a support request and let our AI-powered workflow analyze, prioritize, and route it automatically.
      </p>
    </div>
  );
}
