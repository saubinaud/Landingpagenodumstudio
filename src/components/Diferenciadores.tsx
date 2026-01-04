import { motion } from "framer-motion";

export function Diferenciadores() {
    return (
        <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16 sm:mb-24"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white italic leading-tight">
                        Lo que nos diferencia
                        <br />
                        <span className="not-italic text-gray-500">frente a otras agencias web</span>
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Card 1 - Code/Development */}
                    <motion.div
                        initial={{ opacity: 0, y: 60, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group relative overflow-hidden rounded-3xl bg-[#111] border border-white/10"
                    >
                        {/* Image Container */}
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src="/images/mockup-code.png"
                                alt="Desarrollo web profesional"
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                        </div>
                        {/* Text Content */}
                        <div className="p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                                Expertos en conversión desde 2018
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Realizamos webs a medida desde hace 6 años enfocadas a aumentar la tasa de conversión y el ticket medio.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2 - Calendar/Dedication */}
                    <motion.div
                        initial={{ opacity: 0, y: 60, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group relative overflow-hidden rounded-3xl bg-[#111] border border-white/10"
                    >
                        {/* Image Container */}
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src="/images/mockup-calendar.png"
                                alt="Dedicación exclusiva"
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                        </div>
                        {/* Text Content */}
                        <div className="p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                                Pocos proyectos. Máxima dedicación.
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Solo aceptamos 3 proyectos al mes para brindar el mejor servicio.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
