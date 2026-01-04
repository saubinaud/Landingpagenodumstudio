import { motion } from "framer-motion";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVideo = () => {
    document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Item animation - dramatic slide up
  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-32 px-6 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#FFD700]/20 bg-[#FFD700]/5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse shadow-[0_0_10px_#FFD700]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD700]">
              Sistemas de Crecimiento 2025 • Powered by AI
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6"
        >
          TU NEGOCIO ESTÁ <br />
          <span className="text-gray-600">PERDIENDO DINERO.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-5xl font-light text-white mb-8"
        >
          Nosotros encontramos <span className="text-gold-gradient font-bold italic">dónde.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed px-4 sm:px-0"
        >
          Convertimos negocios caóticos en sistemas que funcionan solos.
          <br />
          <span className="text-white font-medium">Datos claros · Sistemas reales · Crecimiento medible</span>
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4 sm:px-0">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,215,0,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="w-full sm:w-auto group relative px-8 py-4 bg-[#FFD700] text-black font-bold rounded-lg overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.3)] uppercase tracking-widest text-xs"
          >
            <span className="relative z-10">Auditar mi Negocio</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: "#FFD700", color: "#FFD700" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToVideo}
            className="w-full sm:w-auto px-8 py-4 rounded-lg border border-white/20 text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-3"
          >
            <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-[8px]">
              ▶
            </span>
            Ver Metodología
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Metrics Strip */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-24 w-full max-w-5xl mx-auto border-t border-white/10 pt-8 pb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
          <div className="pt-4 md:pt-0">
            <div className="text-4xl font-black text-white mb-1">30-40x</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500">ROAS Promedio</div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-4xl font-black text-white mb-1">+267%</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Crecimiento</div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-4xl font-black text-white mb-1">110</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Alumnos Logrados</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}