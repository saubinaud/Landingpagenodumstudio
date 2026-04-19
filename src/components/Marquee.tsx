export function Marquee() {
  const clients = [
    'AMAS Team Wolf',
    'Academia Elite',
    'Studio Pro',
    'Nodum Partners',
    'Elite Growth',
    'Nexora',
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-sm relative z-10 marquee-wrapper">
      {[0, 1].map((copy) => (
        <div key={copy} className="marquee-content items-center" aria-hidden={copy === 1}>
          {clients.map((client, index) => (
            <span
              key={index}
              className="text-2xl font-black text-white/20 uppercase tracking-tighter hover:text-[#FFD700] transition-colors cursor-default whitespace-nowrap"
            >
              {client}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
