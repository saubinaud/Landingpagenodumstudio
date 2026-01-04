import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { VideoSection } from './components/VideoSection';
import { Problem } from './components/Problem';
import { Diferenciadores } from './components/Diferenciadores';
import { Solution } from './components/Solution';
import { BeforeAfter } from './components/BeforeAfter';
import { CaseStudy } from './components/CaseStudy';
import { Process } from './components/Process';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animation classes
    const animatedElements = document.querySelectorAll(
      '.reveal, .slide-in-left, .slide-in-right, .scale-in, .fade-in'
    );
    animatedElements.forEach((el) => observer.observe(el));

    // Mouse spotlight effect
    const handleMouseMove = (e: MouseEvent) => {
      document.querySelectorAll('.premium-card, .capsule, .status-card').forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] selection:bg-[#FFD700] selection:text-black">
      <div className="noise-bg" />
      <div className="liquid-bg">
        <div className="blob blob-gold" />
        <div className="blob blob-dark" />
      </div>

      <Header />
      <Hero />
      <Marquee />
      <VideoSection />
      <Problem />
      <Solution />
      <BeforeAfter />
      <CaseStudy />
      <Process />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}