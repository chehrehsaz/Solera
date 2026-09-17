type SoleraLogoProps = {
  className?: string;
};

export function SoleraLogo({ className = '' }: SoleraLogoProps) {
  return (
    <div
      dir="ltr"
      className={`inline-flex flex-col items-center text-white ${className}`}
    >
      <div className="flex items-center justify-center">
        <span className="font-display text-[36px] leading-none tracking-[0.18em] lg:text-[44px]">
          S
        </span>

        <SunMark />

        <span className="font-display text-[36px] leading-none tracking-[0.18em] lg:text-[44px]">
          LERA
        </span>
      </div>

      <span className="mt-[7px] text-[6px] tracking-[0.43em] text-white/65 lg:text-[7px]">
        JEWELRY FOR A BRIGHTER YOU
      </span>
    </div>
  );
}

function SunMark() {
  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="-mx-[3px] h-[39px] w-[39px] text-solera-gold lg:h-[46px] lg:w-[46px]"
      aria-hidden="true"
    >
      <circle
        cx="26"
        cy="26"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <circle cx="26" cy="26" r="2" fill="currentColor" />

      <g
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      >
        <path d="M26 2V15" />
        <path d="M26 37V50" />
        <path d="M2 26H15" />
        <path d="M37 26H50" />

        <path d="M9 9L18 18" />
        <path d="M34 34L43 43" />
        <path d="M43 9L34 18" />
        <path d="M18 34L9 43" />

        <path d="M17 4L21 16" />
        <path d="M31 36L35 48" />

        <path d="M35 4L31 16" />
        <path d="M21 36L17 48" />

        <path d="M48 17L36 21" />
        <path d="M16 31L4 35" />

        <path d="M48 35L36 31" />
        <path d="M16 21L4 17" />
      </g>
    </svg>
  );
}