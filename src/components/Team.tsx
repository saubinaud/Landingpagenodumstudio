export function Team() {
  const team = [
    {
      initial: 'S',
      name: 'Sebastien',
      role: 'Founder',
      description: 'Especialista en analítica. Datos complejos a estrategias claras, Construyo sistemas.',
    },
    {
      initial: 'JP',
      name: 'Jean Pier',
      role: 'Vibe Coder',
      description: 'Especialista en programación. Creador de plataformas SaaS con implementaciones profesionales.',
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="fade-in text-center text-2xl sm:text-3xl font-bold text-white mb-12 sm:mb-16 uppercase tracking-widest">
          El Equipo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="scale-in premium-card p-6 sm:p-8 rounded-2xl flex items-center gap-4 sm:gap-6"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/5 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold text-[#FFD700] border border-white/10 relative z-10 flex-shrink-0">
                {member.initial}
              </div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-white">{member.name}</h3>
                <p className="text-[10px] sm:text-xs font-bold text-[#FFD700] uppercase tracking-widest mb-1 sm:mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-gray-400">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
