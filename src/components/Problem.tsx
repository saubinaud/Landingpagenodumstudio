import { BarChart3, Clock, TrendingDown, Search } from 'lucide-react';

export function Problem() {
  const problems = [
    {
      icon: BarChart3,
      title: 'Cero datos',
      description: 'No sabes de dónde vienen tus mejores clientes ni por qué se van.',
      color: 'text-gray-500',
    },
    {
      icon: Clock,
      title: 'Todo manual',
      description: 'WhatsApp y Excel dependen de tu memoria. Pierdes horas al día.',
      color: 'text-gray-500',
    },
    {
      icon: TrendingDown,
      title: 'Ventas perdidas',
      description: 'Clientes que podrían quedarse. Ventas que se escapan por caos.',
      color: 'text-red-500 group-hover:text-red-400',
    },
    {
      icon: Search,
      title: 'Ceguera',
      description: 'Sientes que podrías crecer más pero no sabes qué palanca mover.',
      color: 'text-gray-500',
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-32 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-16 sm:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            El Problema <span className="text-[#FFD700]">Real</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 px-4">Si tu negocio funciona con Excel y WhatsApp, estás perdiendo dinero.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="scale-in premium-card p-6 sm:p-8 rounded-2xl group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 ${problem.color} group-hover:text-[#FFD700] transition-colors`}>
                  <Icon className="w-full h-full" strokeWidth={1.5} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{problem.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}