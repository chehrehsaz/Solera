import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[670px] overflow-hidden bg-solera-deep text-white sm:h-[700px] lg:h-[46.3vw] lg:min-h-[470px] 2xl:h-[45.3vw]">
      {/* HERO IMAGE */}
      <Image
        src="/images/home/hero.webp"
        alt="Solera jewelry"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[55%_center] lg:object-[center_25%]"
      />

      {/* Much lighter overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061f2a]/65 via-[#061f2a]/10 to-transparent lg:from-[#061f2a]/15 lg:via-transparent" />

      {/* MOBILE ONLY DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#061f2a]/95 via-[#061f2a]/10 to-[#061f2a]/20 lg:hidden" />

      {/* MAIN COPY */}
      <div
        dir="ltr"
        className="relative flex h-full items-end px-6 pb-28 sm:px-10 lg:items-center lg:px-[8.4vw] lg:pb-0 2xl:px-[7.9vw]"
      >
        <div
          dir="rtl"
          className="relative w-full max-w-[230px] text-right sm:max-w-[390px] lg:max-w-[20vw] lg:translate-y-[1.1vw]"
        >
          <h1 className="font-fa-display text-[43px] font-normal leading-[1.35] drop-shadow-[0_1px_5px_#061f2a] sm:text-[50px] lg:text-[clamp(42px,4.1vw,76px)] lg:leading-[1.15] lg:drop-shadow-none">
            <span className="block lg:pr-[3.9vw]">زیبایی،</span>
            <span className="block">در روشن‌ترین</span>
            <span className="block">نسخه‌ی تو</span>
          </h1>

          <div className="my-5 mr-0 h-px w-[36px] bg-solera-gold lg:my-[0.6vw] lg:w-[3.5vw]" />

          <p className="max-w-[330px] text-[14px] font-light leading-[2] text-white/80 lg:max-w-none lg:text-[clamp(15px,1.5vw,28px)] lg:leading-[1.65]">
            جواهراتی الهام‌گرفته از نور،
            <br />
            برای داستان‌های خاص زندگی شما.
          </p>

          <Link
            href="/collections"
            className="mt-6 inline-flex h-[50px] min-w-[205px] items-center justify-between border border-[#d6bca5]/75 bg-[#4d2928] px-6 text-[12px] transition duration-300 hover:bg-[#653734] lg:mt-[1.4vw] lg:h-[3.9vw] lg:min-w-[19.4vw] lg:px-[1.95vw] lg:text-[clamp(12px,1.1vw,21px)]"
          >
            <span>مشاهده مجموعه‌ها</span>
            <ArrowLeft size={16} strokeWidth={1.3} />
          </Link>
        </div>
      </div>

      {/* RIGHT EDITORIAL COPY */}
      <div
        dir="ltr"
        className="absolute right-[3.1vw] top-[11.7vw] hidden text-center text-[clamp(9px,0.9vw,17px)] leading-[2] tracking-[0.32em] text-white/75 lg:block 2xl:right-[3vw] 2xl:top-[10.7vw]"
      >
        <div>MORE</div>
        <div>THAN</div>
        <div>GOLD</div>

        <div className="mx-auto mb-[1.8vw] mt-[1vw] h-[6vw] w-px bg-white/40" />

        <div>A</div>
        <div>BRIGHTER</div>
        <div>YOU</div>
      </div>

      {/* BOTTOM LEFT */}
      <div
        dir="ltr"
        className="absolute bottom-[1.7vw] left-[3.2vw] hidden items-end gap-[2.4vw] text-[clamp(8px,0.8vw,15px)] leading-[2] tracking-[0.45em] text-white/70 lg:flex"
      >
        <div>
          <div>BORN</div>
          <div>FROM</div>
          <div>SUNLIGHT</div>
        </div>
        <div className="mb-[0.8vw] h-px w-[4vw] bg-solera-gold/90" />
      </div>

      {/* SLIDER */}
      <div
        dir="ltr"
        className="absolute bottom-[26px] right-[3.1vw] flex items-center gap-3 lg:bottom-[1.4vw] lg:gap-[1vw]"
      >
        <div className="mr-3 hidden items-center gap-4 text-[8px] text-white/40 sm:flex lg:text-[0.75vw]">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white">01</span>
            <span className="h-px w-5 bg-white" />
          </div>

          <span>02</span>
          <span>03</span>
        </div>

        <button
          type="button"
          aria-label="اسلاید قبلی"
          className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/50 transition hover:border-solera-gold hover:text-solera-gold lg:h-[3vw] lg:w-[3vw]"
        >
          <ArrowLeft size={16} strokeWidth={1.2} className="lg:h-[1.3vw] lg:w-[1.3vw]" />
        </button>

        <button
          type="button"
          aria-label="اسلاید بعدی"
          className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/50 transition hover:border-solera-gold hover:text-solera-gold lg:h-[3vw] lg:w-[3vw]"
        >
          <ArrowRight size={16} strokeWidth={1.2} className="lg:h-[1.3vw] lg:w-[1.3vw]" />
        </button>
      </div>
    </section>
  );
}
