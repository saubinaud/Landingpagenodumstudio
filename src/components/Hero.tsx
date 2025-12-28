export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVideo = () => {
    document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <div className="reveal inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#FFD700]/20 bg-[#FFD700]/5 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse shadow-[0_0_10px_#FFD700]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD700]">
            Sistemas de Crecimiento 2025 • Powered by AI
          </span>
        </div>

        <h1 className="reveal text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6">
          TU NEGOCIO ESTÁ <br />
          <span className="text-gray-600">PERDIENDO DINERO.</span>
        </h1>

        <h2 className="reveal text-2xl sm:text-3xl md:text-5xl font-light text-white mb-8">
          Nosotros encontramos <span className="text-gold-gradient font-bold italic">dónde.</span>
        </h2>

        <p className="reveal text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed px-4 sm:px-0">
          Convertimos negocios caóticos en sistemas que funcionan solos.
          <br />
          <span className="text-white font-medium">Datos claros · Sistemas reales · Crecimiento medible</span>
        </p>

        <div className="reveal flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4 sm:px-0">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#FFD700] text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-gold-glow uppercase tracking-widest text-xs"
          >
            <span className="relative z-10">Auditar mi Negocio</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity" />
          </button>
          <button
            onClick={scrollToVideo}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-white/10 hover:border-[#FFD700] text-white font-bold text-xs uppercase tracking-widest hover:text-[#FFD700] transition-colors flex items-center justify-center gap-3"
          >
            <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-[8px]">
              ▶
            </span>
            Ver Metodología
          </button>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="reveal mt-24 w-full max-w-5xl mx-auto border-t border-white/10 pt-8 pb-8">
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
      </div>
    </section>
  );
}