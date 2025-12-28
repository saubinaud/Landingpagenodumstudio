export function Process() {
  const steps = [
    {
      number: '1',
      title: 'Diagnóstico',
      description: 'Analizo tu negocio completo. Encuentro dónde pierdes dinero. Mapa claro de acción.',
    },
    {
      number: '2',
      title: 'Implementación',
      description: 'Construyo todo. Web. CRM. Email. Dashboards. Sistemas hechos para tu negocio.',
    },
    {
      number: '3',
      title: 'Optimización',
      description: 'Ajusto con datos reales. Te enseño todo. Documentación completa.',
    },
  ];

  return (
    <section id="process" className="py-32 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="reveal text-center text-3xl font-black text-white mb-16 uppercase tracking-widest">
          Cómo Funciona
        </h2>

        <div className="space-y-0 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

          {steps.map((step) => (
            <div key={step.number} className="reveal pl-16 pb-12 relative">
              <div className="absolute left-0 top-1 w-8 h-8 bg-black border border-white/20 rounded-full flex items-center justify-center text-xs text-gray-500 font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
