import { AnimatedCard } from "./ui/AnimatedCard";
import { motion } from "framer-motion";

export function Solution() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solution" className="py-20 sm:py-32 px-4 sm:px-6 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">LA SOLUCIÓN</h2>
          <p className="text-sm sm:text-base text-gray-400">
            Infraestructura digital con IA. <span className="text-[#FFD700]">Sistemas que funcionan.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">

          {/* Card 1: Asesoría (Entry) */}
          <AnimatedCard
            delay={0.1}
            glowColor="#3B82F6"
            className="p-8 flex flex-col justify-between h-full min-h-[400px]"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Asesoría Continua</h3>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                Soporte Mensual + IA
              </p>
              <ul className="space-y-4 text-xs sm:text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-[#3B82F6]">+</span> Análisis mensual con IA
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#3B82F6]">+</span> Recomendaciones data-driven
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#3B82F6]">+</span> Soporte técnico prioritario
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-2xl font-black text-white">S/. 800</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 ml-2">/ Mes</span>
            </div>
          </AnimatedCard>

          {/* Card 2: Transformación (Main/Featured) */}
          <AnimatedCard
            delay={0.2}
            glowColor="#FFD700"
            className="p-8 sm:p-10 relative border-[#FFD700]/30 h-full min-h-[450px]"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-[#FFD700] text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Más Elegido
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Transformación
            </h3>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mb-8">
              Programa 8 Semanas
            </p>

            <ul className="space-y-4 text-xs sm:text-sm text-gray-300 mb-10">
              <li className="flex items-center gap-3">
                <span className="text-[#FFD700]">✓</span> Análisis profundo de datos
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FFD700]">✓</span> Web de alta conversión
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FFD700]">✓</span> CRM + Email Marketing IA
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FFD700]">✓</span> Infraestructura escalable
              </li>
            </ul>

            <div className="mt-auto border-t border-white/10 pt-8">
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-black text-white">S/. 2,500</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1.5">Único</span>
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

          {/* Card 3: Custom Solutions (NEW) */}
          <AnimatedCard
            delay={0.3}
            glowColor="#FFFFFF"
            className="p-8 flex flex-col justify-between h-full min-h-[400px] border-white/20 bg-white/[0.03]"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Software a Medida</h3>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                Desarrollo SaaS & Apps
              </p>
              <ul className="space-y-4 text-xs sm:text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-white">→</span> Plataformas SaaS propias
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">→</span> Automatización compleja
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">→</span> Integraciones API a medida
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">→</span> Paneles de control internos
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xl font-bold text-white">Personalizado</span>
              <p className="text-[10px] text-gray-500 mt-1">Cotización según proyecto</p>
              <button
                onClick={scrollToContact}
                className="mt-4 w-full border border-white/20 text-white px-4 py-3 rounded-lg text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-colors"
              >
                Cotizar
              </button>
            </div>
          </AnimatedCard>

        </div>
      </div>
    </section>
  );
}