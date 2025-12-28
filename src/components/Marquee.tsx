export function Marquee() {
  const clients = [
    'AMAS Team Wolf',
    'Academia Elite',
    'Studio Pro',
    'Nodum Partners',
    'Elite Growth',
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-sm relative z-10 marquee-wrapper">
      <div className="marquee-content items-center">
        {[...clients, ...clients].map((client, index) => (
          <span
            key={index}
            className="text-2xl font-black text-white/20 uppercase tracking-tighter hover:text-[#FFD700] transition-colors cursor-default"
          >
            {client}
          </span>
        ))}
      </div>
    </div>
  );
}
