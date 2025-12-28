export function BeforeAfter() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 bg-black relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="fade-in text-center text-3xl sm:text-4xl font-black text-white mb-16 sm:mb-24 uppercase tracking-widest">
          Antes <span className="text-gray-700 italic px-4">vs</span> Después
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-stretch">
          {/* Chaos Card */}
          <div className="slide-in-left status-card chaos p-8 sm:p-10 rounded-2xl opacity-60 hover:opacity-100 transition-all duration-500">
            <div className="flex justify-between items-start mb-8 sm:mb-10">
              <h3 className="text-red-500 font-black uppercase text-xs sm:text-sm tracking-widest">Estado Actual</h3>
              <span className="text-3xl sm:text-4xl">📉</span>
            </div>
            <ul className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-400 text-right">
              <li>Excel y libretas caóticas</li>
              <li>WhatsApp manual infinito</li>
              <li>Clientes se van sin razón</li>
              <li>Decisiones por intuición</li>
            </ul>
          </div>

          {/* Order Card */}
          <div className="slide-in-right status-card order p-8 sm:p-10 rounded-2xl shadow-gold-glow">
            <div className="flex justify-between items-start mb-8 sm:mb-10">
              <h3 className="text-[#FFD700] font-black uppercase text-xs sm:text-sm tracking-widest">Estado Nodum + IA</h3>
              <span className="text-3xl sm:text-4xl">🚀</span>
            </div>
            <ul className="space-y-4 sm:space-y-6 text-base sm:text-lg text-white font-medium">
              <li className="flex items-center gap-4">
                <span className="text-[#FFD700]">✓</span> CRM inteligente
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#FFD700]">✓</span> Email automático con IA
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#FFD700]">✓</span> Datos de retención en tiempo real
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#FFD700]">✓</span> Escalabilidad real
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}