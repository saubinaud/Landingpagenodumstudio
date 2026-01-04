import { motion } from "framer-motion";

export function BeforeAfter() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 bg-[#030303] relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-widest">
            Antes <span className="text-gray-700 italic px-4 lowercase">vs</span> Después
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-stretch">
          {/* Chaos Card - "Estado Actual" */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-3xl bg-[#080808] border border-white/5"
          >
            {/* Image Header */}
            <div className="aspect-[16/10] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-10" />
              <img
                src="/images/mockup-chaos.png"
                alt="Chaos Workflow"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-6 left-6 z-20">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <h3 className="text-red-500 font-bold uppercase text-xs tracking-[0.2em]">Estado Actual</h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 relative z-10 -mt-12">
              <ul className="space-y-4 text-base sm:text-lg text-gray-400 font-light">
                <li className="flex items-start gap-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-red-500/50 mt-1">✕</span>
                  <span>Excel y libretas caóticas</span>
                </li>
                <li className="flex items-start gap-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-red-500/50 mt-1">✕</span>
                  <span>WhatsApp manual infinito</span>
                </li>
                <li className="flex items-start gap-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-red-500/50 mt-1">✕</span>
                  <span>Clientes se van sin razón</span>
                </li>
                <li className="flex items-start gap-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-red-500/50 mt-1">✕</span>
                  <span>Decisiones por intuición</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Order Card - "Estado Nodum + IA" */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-3xl bg-[#080808] border border-[#FFD700]/30 shadow-[0_0_50px_rgba(255,215,0,0.05)]"
          >
            {/* Top Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-50" />

            {/* Image Header */}
            <div className="aspect-[16/10] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent z-10" />
              <img
                src="/images/mockup-calendar.png"
                alt="Nodum Dashboard"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-6 left-6 z-20">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_10px_#FFD700]" />
                  <h3 className="text-[#FFD700] font-bold uppercase text-xs tracking-[0.2em]">Estado Nodum + IA</h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 relative z-10 -mt-12">
              <ul className="space-y-4 text-base sm:text-lg text-white font-medium">
                <li className="flex items-start gap-4">
                  <span className="text-[#FFD700] mt-1">✓</span>
                  <span>CRM inteligente con IA</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#FFD700] mt-1">✓</span>
                  <span>Email automático personalizado</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#FFD700] mt-1">✓</span>
                  <span>Datos de retención en tiempo real</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#FFD700] mt-1">✓</span>
                  <span>Escalabilidad real automatizada</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}