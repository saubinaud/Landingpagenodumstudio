export function CaseStudy() {
  return (
    <section id="case-study" className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="fade-in flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-20 gap-6 sm:gap-8">
          <div>
            <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">
              Caso de Éxito • Con IA
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-2 leading-none">
              AMAS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
                TEAM WOLF
              </span>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-white font-medium text-sm sm:text-base">Academia de Artes Marciales</p>
            <p className="text-xs sm:text-sm text-gray-500">Lima, Perú</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          <div className="scale-in premium-card p-6 sm:p-8 rounded-2xl text-center border-[#FFD700]/20">
            <div className="text-4xl sm:text-5xl font-black text-white mb-2 relative z-10">30x</div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold relative z-10">
              ROAS Ads
            </p>
          </div>
          <div
            className="scale-in premium-card p-6 sm:p-8 rounded-2xl text-center"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="text-4xl sm:text-5xl font-black text-white mb-2 relative z-10">65%</div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold relative z-10">
              Open Rate
            </p>
          </div>
          <div
            className="scale-in premium-card p-6 sm:p-8 rounded-2xl text-center sm:col-span-2 md:col-span-1"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="text-4xl sm:text-5xl font-black text-[#FFD700] mb-2 relative z-10">+267%</div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold relative z-10">
              Crecimiento
            </p>
          </div>
        </div>

        <div className="slide-in-left premium-card p-8 sm:p-12 rounded-3xl border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-xs sm:text-sm leading-relaxed relative z-10">
            <div>
              <h4 className="text-gray-500 font-bold uppercase tracking-wider mb-3 text-xs">
                Problema
              </h4>
              <p className="text-gray-300">
                Todo por WhatsApp y Excel. Sin web. Sin datos. Ads sin estrategia.
              </p>
            </div>
            <div>
              <h4 className="text-gray-500 font-bold uppercase tracking-wider mb-3 text-xs">
                Solución
              </h4>
              <p className="text-gray-300">
                Web + CRM + Email con IA + Campañas optimizadas.
              </p>
            </div>
            <div>
              <h4 className="text-[#FFD700] font-bold uppercase tracking-wider mb-3 text-xs">
                Resultado
              </h4>
              <p className="text-gray-300">
                Sistema completo funcionando. Horas ahorradas. Crecimiento medible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}