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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">LA SOLUCIÓN</h2>
          <p className="text-sm sm:text-base text-gray-400">
            Infraestructura digital con IA. <span className="text-[#FFD700]">Sistemas que funcionan.</span>
          </p>
        </motion.div>

        {/* Row 1: Two small cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">

          {/* Card 1: Asesoría Comercial */}
          <AnimatedCard
            delay={0.1}
            glowColor="#3B82F6"
            className="p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Asesoría Comercial</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-5">
                Estrategia de Ventas
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
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
            <div className="mt-6 pt-5 border-t border-white/10">
              <span className="text-2xl font-black text-white">$350</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 ml-2">/ Mes</span>
            </div>
          </AnimatedCard>

          {/* Card 2: Asesoría Financiera */}
          <AnimatedCard
            delay={0.2}
            glowColor="#10B981"
            className="p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Asesoría Financiera</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-5">
                Control Financiero
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
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
            <div className="mt-6 pt-5 border-t border-white/10 flex items-end justify-between gap-4">
              <div>
                <span className="text-2xl font-black text-white">$300</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 ml-2">/ Mes</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToContact('asesoria-financiera')}
                className="border border-[#10B981]/30 text-[#10B981] px-4 py-2 rounded-lg text-[10px] uppercase tracking-widest font-bold hover:bg-[#10B981] hover:text-black transition-colors whitespace-nowrap"
              >
                Más Info
              </motion.button>
            </div>
          </AnimatedCard>
        </div>

        {/* Row 2: Featured card full width */}
        <AnimatedCard
          delay={0.3}
          glowColor="#FFD700"
          className="p-6 sm:p-10 relative border-[#FFD700]/30"
        >
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-[#FFD700] text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Más Elegido
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Arquitectura de Sistema de Negocio
              </h3>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                Transformación Digital
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
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
            </div>

            <div className="flex flex-col items-start md:items-end gap-4">
              <div>
                <span className="text-sm uppercase tracking-widest text-gray-400">Desde</span>
                <span className="text-4xl sm:text-5xl font-black text-white ml-3">$1,000</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToContact()}
                className="bg-[#FFD700] text-black px-8 py-4 font-bold rounded-lg uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-shadow"
              >
                Empezar Ahora
              </motion.button>
            </div>
          </div>
        </AnimatedCard>

      </div>
    </section>
  );
}
