import { AnimatedCard } from "./ui/AnimatedCard";
import { motion } from "framer-motion";

export function Solution() {
  const scrollToContact = (source?: string) => {
    if (source) {
      window.dispatchEvent(new CustomEvent('contact-source', { detail: source }));
    }
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solution" className="py-12 sm:py-16 px-4 sm:px-6 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">LA SOLUCIÓN</h2>
          <p className="text-sm sm:text-base text-gray-400">
            Infraestructura digital con IA. <span className="text-[#FFD700]">Sistemas que funcionan.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">

          {/* Card 1: Asesoría Comercial */}
          <AnimatedCard
            delay={0.1}
            glowColor="#3B82F6"
            className="p-8 flex flex-col justify-between h-full min-h-[400px]"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Asesoría Comercial</h3>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                Estrategia de Ventas
              </p>
              <ul className="space-y-4 text-xs sm:text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-[#3B82F6]">+</span> Estrategia comercial personalizada
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#3B82F6]">+</span> Optimización de procesos de venta
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#3B82F6]">+</span> Análisis de mercado y competencia
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-2xl font-black text-white">$350</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 ml-2">/ Mes</span>
            </div>
          </AnimatedCard>

          {/* Card 2: Asesoría Financiera */}
          <AnimatedCard
            delay={0.2}
            glowColor="#10B981"
            className="p-8 flex flex-col justify-between h-full min-h-[400px]"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Asesoría Financiera</h3>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                Control Financiero
              </p>
              <ul className="space-y-4 text-xs sm:text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-[#10B981]">+</span> Cashflow management
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#10B981]">+</span> P&L (Profit & Loss)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#10B981]">+</span> Proyecciones y presupuestos
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-2xl font-black text-white">$300</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 ml-2">/ Mes</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToContact('asesoria-financiera')}
                className="mt-4 w-full border border-[#10B981]/30 text-[#10B981] px-4 py-3 rounded-lg text-[10px] uppercase tracking-widest font-bold hover:bg-[#10B981] hover:text-black transition-colors"
              >
                Más Información
              </motion.button>
            </div>
          </AnimatedCard>

          {/* Card 3: Arquitectura de Sistema de Negocio + Transformación Digital (Featured) */}
          <AnimatedCard
            delay={0.3}
            glowColor="#FFD700"
            className="p-8 sm:p-10 relative border-[#FFD700]/30 h-full min-h-[450px] lg:col-span-2"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-[#FFD700] text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Más Elegido
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Arquitectura de Sistema de Negocio
            </h3>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mb-8">
              Transformación Digital
            </p>

            <ul className="space-y-4 text-xs sm:text-sm text-gray-300 mb-10">
              <li className="flex items-center gap-3">
                <span className="text-[#FFD700]">✓</span> Creación de arquitectura de sistema de negocio
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FFD700]">✓</span> Transformación digital completa
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FFD700]">✓</span> Infraestructura escalable con IA
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FFD700]">✓</span> Automatización de procesos
              </li>
            </ul>

            <div className="mt-auto border-t border-white/10 pt-8">
              <div className="flex items-end gap-2 mb-6">
                <span className="text-sm uppercase tracking-widest text-gray-400">Desde</span>
                <span className="text-4xl font-black text-white">$1,000</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="w-full bg-[#FFD700] text-black px-6 py-4 font-bold rounded-lg uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-shadow"
              >
                Empezar Ahora
              </motion.button>
            </div>
          </AnimatedCard>

        </div>
      </div>
    </section>
  );
}