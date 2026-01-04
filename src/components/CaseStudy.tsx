import { SpotlightCard } from "./ui/SpotlightCard";
import { ScrollReveal } from "./ui/ScrollReveal";
import { motion } from "framer-motion";
import { Database, Layout, PartyPopper } from "lucide-react";

export function CaseStudy() {
  return (
    <section id="case-study" className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 relative z-10 overflow-hidden">
      {/* Background Golden Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-40">

        {/* --- CASE STUDY 1: AMAS --- */}
        <div>
          <ScrollReveal width="100%" mode="slide-left">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-20 gap-6 sm:gap-8">
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
          </ScrollReveal>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 md:grid md:grid-cols-3 md:gap-6 md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
            <SpotlightCard spotlightColor="rgba(255, 215, 0, 0.25)" className="snap-center shrink-0 w-[85vw] md:w-auto p-8 sm:p-10 bg-black/40 backdrop-blur-md border-[#FFD700]/30">
              <div className="text-5xl sm:text-6xl font-black text-white mb-3">30x</div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">ROAS Ads</p>
            </SpotlightCard>
            <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.25)" className="snap-center shrink-0 w-[85vw] md:w-auto p-8 sm:p-10 bg-black/40 backdrop-blur-md">
              <div className="text-5xl sm:text-6xl font-black text-white mb-3">65%</div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Open Rate</p>
            </SpotlightCard>
            <SpotlightCard spotlightColor="rgba(16, 185, 129, 0.25)" className="snap-center shrink-0 w-[85vw] md:w-auto p-8 sm:p-10 bg-black/40 backdrop-blur-md">
              <div className="text-5xl sm:text-6xl font-black text-[#FFD700] mb-3">+267%</div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Crecimiento</p>
            </SpotlightCard>
          </div>
        </div>

        {/* --- CASE STUDY 2: NODUM CRM (REDESIGNED) --- */}
        <div className="relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">
                Producto Propio • SaaS
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-2 leading-none">
                Nodum<span className="text-[#FFD700]">CRM</span>
              </h2>
              <p className="text-gray-400 mt-6 max-w-xl text-lg leading-relaxed font-light">
                Tu base de datos PostgreSQL, <span className="text-white font-medium">convertida mágicamente</span> en un CRM estilo Notion.
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#FFD700] text-black rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#FFD700]/90 transition-colors shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            >
              Quiero Early Access
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {/* Hero Image Card */}
            <SpotlightCard
              spotlightColor="rgba(255, 215, 0, 0.15)"
              className="lg:col-span-3 aspect-[21/9] overflow-hidden bg-[#0A0A0A] border-[#FFD700]/20 relative group"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/nodum-crm-v2.png"
                  alt="NodumCRM Concept"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 sm:p-12 z-10 max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">La belleza de Notion. La potencia de SQL.</h3>
                <p className="text-base text-gray-300">
                  Olvídate de construir paneles administrativos internos (Internal Tools) que toman meses.
                  Conecta tu DB y ten un CRM listo en segundos.
                </p>
              </div>
            </SpotlightCard>

            {/* Feature 1 */}
            <SpotlightCard spotlightColor="rgba(255, 215, 0, 0.1)" className="p-8 bg-[#0A0A0A] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#FFD700]/10 flex items-center justify-center mb-6 text-[#FFD700]">
                  <Database size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Zero-Schema-Touch</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Leemos tu base de datos pero <strong>nunca la tocamos</strong>. No agregamos tablas basura. Tu estructura sagrada de producción se mantiene intacta.
                </p>
              </div>
            </SpotlightCard>

            {/* Feature 2 */}
            <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.1)" className="p-8 bg-[#0A0A0A] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                  <Layout size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Virtual Layer</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Toda la magia (vistas, fórmulas, pipelines) vive en una capa virtual. Agrega lógica de negocio compleja sin pedirle queries a tus devs.
                </p>
              </div>
            </SpotlightCard>

            {/* Feature 3 */}
            <SpotlightCard spotlightColor="rgba(16, 185, 129, 0.1)" className="p-8 bg-[#0A0A0A] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center mb-6 text-green-400">
                  <PartyPopper size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Bye, Internal Tools</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  ¿Gastar meses construyendo un admin panel feo? No gracias. Nodum es tus datos, pero bonitos y listos para usar ya.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>

      </div>
    </section>
  );
}