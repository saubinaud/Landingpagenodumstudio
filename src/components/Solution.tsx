export function Solution() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solution" className="py-20 sm:py-32 px-4 sm:px-6 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="slide-in-left mb-16 sm:mb-20 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">LA SOLUCIÓN</h2>
          <p className="text-sm sm:text-base text-gray-400">
            Infraestructura digital con IA. <span className="text-[#FFD700]">Sistemas que funcionan.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Card */}
          <div className="slide-in-right lg:col-span-2 premium-card p-8 sm:p-12 rounded-3xl group border-[#FFD700]/20 relative">
            <div className="absolute top-4 right-4 sm:top-0 sm:right-0 sm:p-8">
              <span className="bg-[#FFD700] text-black px-2 sm:px-3 py-1 rounded-sm text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                Más Elegido
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-[#FFD700] transition-colors">
              Transformación Completa
            </h3>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 sm:mb-10">
              Programa 8 Semanas • Análisis con IA
            </p>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 relative z-10">
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-[#FFD700]">✓</span> Análisis de datos con IA
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FFD700]">✓</span> Web que convierte
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FFD700]">✓</span> CRM completo
                </li>
              </ul>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-[#FFD700]">✓</span> Email automático con IA
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FFD700]">✓</span> Estrategia basada en datos
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-t border-white/10 pt-6 sm:pt-8 gap-4 relative z-10">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-white">S/. 2,500</span>
                <span className="block text-[10px] uppercase tracking-widest text-gray-500 mt-1">
                  Inversión única
                </span>
              </div>
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 font-bold rounded hover:bg-[#FFD700] transition-colors uppercase text-xs tracking-widest"
              >
                Empezar
              </button>
            </div>
          </div>

          {/* Side Card */}
          <div className="scale-in premium-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between group">
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Asesoría Continua</h3>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 sm:mb-8">
                Soporte Mensual + IA
              </p>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-white">+</span> Análisis mensual con IA
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">+</span> Recomendaciones personalizadas
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">+</span> Soporte técnico
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 sm:pt-8 border-t border-white/10 relative z-10">
              <span className="text-xl sm:text-2xl font-black text-white">S/. 800</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 ml-2">/ Mes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}