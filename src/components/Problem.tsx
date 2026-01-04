import { AlertTriangle, XCircle, Activity, Globe } from 'lucide-react';
import { motion } from "framer-motion";

export function Problem() {
  const problems = [
    {
      icon: XCircle,
      title: 'Ceguera de Datos',
      description: 'Decisiones basadas en intuición, no en números reales.',
      stat: '0%',
      Label: 'Visibilidad',
    },
    {
      icon: Activity,
      title: 'Procesos Manuales',
      description: 'El equipo pierde 4h/día en tareas repetitivas.',
      stat: '-4h',
      Label: 'Diarias',
    },
    {
      icon: AlertTriangle,
      title: 'Fuga de Clientes',
      description: 'Leads olvidados en WhatsApps sin responder.',
      stat: '!!!',
      Label: 'Riesgo Alto',
    },
    {
      icon: Globe,
      title: 'Web Invisible',
      description: 'Una web bonita que no vende ni convierte visitas.',
      stat: '404',
      Label: 'Conversión',
    },
  ];

  return (
    <section id="problem" className="py-24 sm:py-32 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            System Critical Error
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-none">
            Tu negocio <br className="hidden sm:block" />
            <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              está fallando
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg font-light leading-relaxed">
            Mientras lees esto, estás perdiendo dinero por procesos manuales y falta de infraestructura.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-red-500/30 transition-all duration-300"
              >
                {/* Background Noise/Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="mb-8">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-red-500/20 group-hover:text-red-500 transition-colors text-gray-500">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-500 transition-colors">{problem.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                      {problem.description}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 flex justify-between items-end">
                    <span className="text-[10px] uppercase tracking-widest text-gray-600 font-medium">{problem.Label}</span>
                    <span className="text-2xl font-mono font-bold text-white/20 group-hover:text-red-500 transition-colors">{problem.stat}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}