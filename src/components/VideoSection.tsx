export function VideoSection() {
  return (
    <section id="video" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">De Caos a Sistema</h2>
          <p className="text-gray-500 text-sm uppercase tracking-widest">
            Entiende el método en 2 minutos
          </p>
        </div>

        <div className="reveal relative aspect-video premium-card rounded-2xl flex items-center justify-center group cursor-pointer border border-white/10 hover:border-[#FFD700]/50">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          {/* Play Button */}
          <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-500 z-20">
            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center z-20">
            <span className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
              Ver Explicación Completa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
