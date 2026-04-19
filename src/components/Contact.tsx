import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    industry: '',
    challenge: '',
  });
  const [sent, setSent] = useState(false);
  const sourceRef = useRef<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      sourceRef.current = (e as CustomEvent).detail;
    };
    window.addEventListener('contact-source', handler);
    return () => window.removeEventListener('contact-source', handler);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const payload = { ...formData, source: sourceRef.current || undefined };

    // 1. Enviar datos al Webhook de n8n
    fetch('https://pallium-n8n.s6hx3x.easypanel.host/webhook/registro-cliente', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(err => console.error('Webhook error:', err));

    // 2. Enviar correo via API
    fetch('https://nodumstudio-api.s6hx3x.easypanel.host/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(err => console.error('Email API error:', err));

    sourceRef.current = null;
    setSent(true);
    setFormData({ name: '', email: '', business: '', industry: '', challenge: '' });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="premium-card p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-[2rem] relative overflow-hidden reveal">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 relative z-10">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-none">
                ¿LISTO?
              </h2>
              <p className="text-lg text-[#FFD700] mb-6">15 minutos. Sin compromiso.</p>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">
                Si puedo ayudarte, te digo cómo. Si no, te lo digo honestamente.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">
                <li>✓ Respuesta en 24h</li>
                <li>✓ Análisis inicial gratis</li>
              </ul>
            </div>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center">
                    <span className="text-[#FFD700] text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Tu mensaje se ha enviado</h3>
                  <p className="text-sm text-gray-400">Te contactamos en menos de 24 horas.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-[10px] uppercase tracking-widest text-gray-500 hover:text-[#FFD700] transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-2 gap-3">
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
                    className="w-full bg-[#FFD700] text-black py-3.5 rounded-lg font-bold hover:brightness-110 hover:scale-[1.02] transition-all uppercase tracking-widest text-xs"
                  >
                    Enviar
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
