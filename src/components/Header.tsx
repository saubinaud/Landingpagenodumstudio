export function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="capsule rounded-full px-6 sm:px-8 md:px-12 py-3 flex items-center justify-between gap-4 sm:gap-8 max-w-4xl w-full">
        <a href="#" className="text-base sm:text-lg font-bold tracking-tight text-white">
          Nodum<span className="text-[#FFD700]">Studio</span>
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[10px] lg:text-[11px] font-bold uppercase tracking-widest text-gray-400">
          <button
            onClick={() => scrollToSection('video')}
            className="hover:text-white transition-colors"
          >
            Método
          </button>
          <button
            onClick={() => scrollToSection('problem')}
            className="hover:text-white transition-colors"
          >
            Problema
          </button>
          <button
            onClick={() => scrollToSection('solution')}
            className="hover:text-white transition-colors"
          >
            Solución
          </button>
        </div>

        <button
          onClick={scrollToContact}
          className="bg-white text-black px-4 sm:px-6 py-2 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFD700] transition-colors"
        >
          Hablemos
        </button>
      </nav>
    </div>
  );
}