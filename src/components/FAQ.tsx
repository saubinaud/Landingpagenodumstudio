export function FAQ() {
  const faqs = [
    {
      question: '¿Qué negocios ayudas?',
      answer: 'Academias, nidos, clínicas, centros de enseñanza. Servicios recurrentes.',
    },
    {
      question: '¿Y si ya tengo web?',
      answer: 'La analizamos. Si funciona, la dejamos. Si no, la mejoramos.',
    },
    {
      question: '¿Garantizas resultados?',
      answer: 'Garantizo sistemas que funcionan. El mercado decide el resto, pero mis clientes crecen.',
    },
  ];

  return (
    <section id="faq" className="py-32 px-6 relative z-10 bg-white/[0.01]">
      <div className="max-w-3xl mx-auto space-y-4">
        <h2 className="reveal text-center text-2xl font-bold text-white mb-12 uppercase tracking-widest">
          Preguntas Frecuentes
        </h2>

        {faqs.map((faq) => (
          <div key={faq.question} className="reveal premium-card p-6 rounded-xl cursor-pointer">
            <h4 className="text-white font-bold text-sm mb-1 relative z-10">{faq.question}</h4>
            <p className="text-gray-500 text-xs relative z-10">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
