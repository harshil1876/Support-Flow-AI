export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Submit',
      description: 'Describe your issue through the support form.'
    },
    {
      number: '02',
      title: 'AI Analyzes',
      description: 'Our automation analyzes the request and determines its category, priority, and sentiment.'
    },
    {
      number: '03',
      title: 'Automatically Routed',
      description: 'The request is routed to the appropriate workflow and a confirmation is sent.'
    }
  ];

  return (
    <section id="how-it-works" className="max-w-4xl mx-auto py-12">
      <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">How it works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="text-5xl font-extrabold text-slate-50 absolute -top-4 -right-4 transition-transform group-hover:scale-110 select-none">
              {step.number}
            </div>
            <div className="relative z-10">
              <div className="text-sm font-bold text-blue-600 mb-2">{step.number}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
