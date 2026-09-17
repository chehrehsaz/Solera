type SoleraLogoProps = {
  className?: string;
};

export function SoleraLogo({ className = '' }: SoleraLogoProps) {
  return (
    <div dir="ltr" className={`inline-flex flex-col items-center text-white ${className}`}>
      <div className="flex items-center justify-center gap-1 lg:gap-[0.4vw]">
        <span className="font-display text-[34px] font-normal leading-none tracking-[0.18em] lg:text-[3.7vw]">S</span>
        <SoleraSun />
        <span className="font-display text-[34px] font-normal leading-none tracking-[0.24em] lg:text-[3.7vw]">LERA</span>
      </div>
      <span className="mt-[5px] whitespace-nowrap text-[6px] tracking-[0.43em] text-white/75 lg:mt-[0.5vw] lg:text-[0.7vw] lg:tracking-[0.52em]">
        JEWELRY FOR A BRIGHTER YOU
      </span>
    </div>
  );
}

export function SoleraSun({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? 'h-[42px] w-[42px] text-solera-gold lg:h-[4.5vw] lg:w-[4.5vw]'}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeLinecap="round">
        {Array.from({ length: 24 }, (_, index) => (
          <line
            key={index}
            x1="26"
            y1={[1, 5, 3, 6][index % 4]}
            x2="26"
            y2={[17, 15, 16, 14][index % 4]}
            strokeWidth={index % 2 === 0 ? 0.8 : 0.5}
            transform={`rotate(${index * 15} 26 26)`}
          />
        ))}
      </g>
      <circle cx="26" cy="26" r="7.6" stroke="currentColor" strokeWidth="1" />
      <circle cx="26" cy="26" r="5.2" fill="currentColor" />
    </svg>
  );
}
