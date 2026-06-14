export function Banner() {
  return (
    <div className="w-full overflow-hidden bg-black text-white py-2">
      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 20s linear infinite;
        }
      `}</style>
      <div className="flex whitespace-nowrap animate-marquee-ltr">
        <span className="flex-shrink-0 pr-16 uppercase font-semibold tracking-wider text-sm">
          EOFY SALE - FREE INCLUSIONS + MORE
        </span>
        <span className="flex-shrink-0 pr-16 uppercase font-semibold tracking-wider text-sm">
          EOFY SALE - FREE INCLUSIONS + MORE
        </span>
      </div>
    </div>
  );
}
