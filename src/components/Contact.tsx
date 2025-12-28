import { useState, FormEvent } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    industry: '',
    challenge: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hola! Soy ${formData.name} de ${formData.business}. 

Rubro: ${formData.industry}
Email: ${formData.email}

Desafío: ${formData.challenge}

Quiero saber más sobre sus sistemas con IA.`;
    
    window.open(`https://wa.me/51981811185?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="premium-card p-12 md:p-20 rounded-[3rem] relative overflow-hidden reveal">
          {/* Decorative Background */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-none">
                ¿LISTO?
              </h2>
              <p className="text-xl text-[#FFD700] mb-8">15 minutos. Sin compromiso.</p>
              <p className="text-gray-400 mb-8">
                Si puedo ayudarte, te digo cómo. Si no, te lo digo honestamente.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 font-bold uppercase tracking-wider">
                <li>✓ Respuesta en 24h</li>
                <li>✓ Análisis inicial gratis</li>
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Tu Negocio"
                required
                value={formData.business}
                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#FFD700] focus:outline-none transition-colors"
              />
              <select
                required
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-400 focus:border-[#FFD700] focus:outline-none transition-colors"
              >
                <option value="">Rubro</option>
                <option value="academia">Academia</option>
                <option value="clinica">Clínica</option>
                <option value="otro">Otro</option>
              </select>
              <textarea
                placeholder="¿Cuál es tu desafío?"
                rows={3}
                required
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#FFD700] focus:outline-none transition-colors"
              />

              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-lg font-bold hover:bg-[#FFD700] hover:scale-[1.02] transition-all uppercase tracking-widest text-xs"
              >
                Enviar y abrir WhatsApp
              </button>
              <p className="text-center text-[10px] text-gray-600 mt-4">
                Te contacto en menos de 24 horas
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}