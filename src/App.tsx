import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComplaintForm from './components/ComplaintForm';
import SuccessScreen from './components/SuccessScreen';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  const [ticketNo, setTicketNo] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <Hero />
        <div className="max-w-2xl mx-auto w-full">
          {ticketNo ? (
            <SuccessScreen ticketNo={ticketNo} onReset={() => setTicketNo(null)} />
          ) : (
            <ComplaintForm onSuccess={(ticket) => setTicketNo(ticket)} />
          )}
        </div>
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
