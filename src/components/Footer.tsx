export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="capsule rounded-3xl p-8 sm:p-12 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                Nodum<span className="text-[#FFD700]">Studio</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                Growth Partner para negocios que quieren escalar con sistemas inteligentes.
              </p>
              <div className="flex items-center gap-2 text-[10px] text-gray-500">
                <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
                <span>AI-Powered Systems</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Navegación</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection('problem')}
                    className="hover:text-[#FFD700] transition-colors"
                  >
                    El Problema
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('solution')}
                    className="hover:text-[#FFD700] transition-colors"
                  >
                    Solución
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('case-study')}
                    className="hover:text-[#FFD700] transition-colors"
                  >
                    Caso de Éxito
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('faq')}
                    className="hover:text-[#FFD700] transition-colors"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Transformación Completa</li>
                <li>Asesoría Continua</li>
                <li>Análisis con IA</li>
                <li>Automatización</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contacto</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a
                    href="mailto:contact@nodumstudio.com"
                    className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/51981811185"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.406.836 2.964 1.277 4.56 1.278 5.177 0 9.385-4.207 9.387-9.388.001-2.507-.974-4.866-2.748-6.641-1.774-1.775-4.133-2.751-6.643-2.752-5.178 0-9.385 4.207-9.388 9.388-.001 1.666.438 3.284 1.271 4.69l-.454 1.654 1.715-.45zm9.584-5.458c-.299-.149-1.767-.872-2.041-.971-.274-.099-.474-.149-.673.149-.199.299-.772.971-.947 1.17-.174.199-.349.224-.648.075-.299-.149-1.265-.466-2.41-1.486-.891-.795-1.492-1.777-1.666-2.075-.174-.299-.018-.461.131-.61.134-.133.299-.348.448-.522.149-.174.199-.298.299-.497.099-.199.049-.373-.025-.522-.075-.149-.673-1.62-.922-2.217-.242-.583-.489-.504-.673-.514-.174-.009-.374-.01-.573-.01s-.524.075-.798.373c-.274.299-1.047 1.022-1.047 2.492s1.072 2.891 1.221 3.09c.149.199 2.112 3.225 5.114 4.522.714.309 1.271.494 1.706.633.717.228 1.369.196 1.884.119.575-.085 1.767-.721 2.016-1.417.25-.696.25-1.293.174-1.417-.075-.124-.274-.199-.573-.348z" />
                    </svg>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFD700] transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2025 NodumStudio. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="capsule inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
            <span>Comenzar ahora</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
