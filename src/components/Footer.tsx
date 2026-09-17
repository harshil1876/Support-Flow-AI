import { Bot } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-4 opacity-80">
          <Bot className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-slate-900">SupportFlow AI</span>
        </div>
        <p className="text-slate-600 font-medium mb-1">AI-powered support automation demo</p>
        <p className="text-slate-500 text-sm">Built for an AI automation demonstration.</p>
      </div>
    </footer>
  );
}
