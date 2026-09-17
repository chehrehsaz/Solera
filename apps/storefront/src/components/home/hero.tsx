import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[670px] overflow-hidden bg-solera-deep text-white sm:h-[700px] lg:h-[760px]">
      {/* HERO IMAGE */}
      <Image
        src="/images/home/hero.webp"
        alt="Solera jewelry"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[55%_center]"
      />

      {/* Much lighter overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061f2a]/65 via-[#061f2a]/10 to-transparent" />

      {/* MOBILE ONLY DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#061f2a]/95 via-[#061f2a]/10 to-[#061f2a]/20 lg:hidden" />

      {/* MAIN COPY */}
      <div
        dir="ltr"
        className="relative flex h-full items-end px-6 pb-28 sm:px-10 lg:items-center lg:px-[7.5vw] lg:pb-0"
      >
        <div
          dir="rtl"
          className="relative w-full max-w-[390px] text-right lg:-translate-y-1"
        >
          {/* tiny decorative sparkles like reference */}
          <div className="absolute -left-1 top-8 hidden items-center gap-2 text-solera-gold/80 lg:flex">
            <span className="text-[8px]">◆</span>
            <Sparkles size={12} strokeWidth={1} />
          </div>

          <h1 className="font-fa-display text-[43px] font-normal leading-[1.35] sm:text-[50px] lg:text-[56px]">
            زیبایی،
            <br />
            در روشن‌ترین
            <br />
            نسخه‌ی تو
          </h1>

          <div className="my-5 mr-0 h-px w-[36px] bg-solera-gold lg:my-6" />

          <p className="max-w-[330px] text-[14px] font-light leading-[2] text-white/80 lg:text-[15px]">
            جواهراتی الهام‌گرفته از نور
            <br />
            برای داستان‌های خاص زندگی شما.
          </p>

          <Link
            href="/collections"
            className="mt-6 inline-flex h-[50px] min-w-[205px] items-center justify-between border border-solera-gold/75 bg-solera-burgundy/95 px-6 text-[13px] transition duration-300 hover:bg-[#81403d]"
          >
            <span>مشاهده مجموعه‌ها</span>
            <ArrowLeft size={16} strokeWidth={1.3} />
          </Link>
        </div>
      </div>

      {/* RIGHT EDITORIAL COPY */}
      <div
        dir="ltr"
        className="absolute right-[4.2vw] top-[165px] hidden text-[9px] leading-[2] tracking-[0.46em] text-white/75 xl:block"
      >
        <div>MORE</div>
        <div>THAN</div>
        <div>GOLD</div>

        <div className="my-5 h-[62px] w-px bg-white/40" />

        <div>A</div>
        <div>BRIGHTER</div>
        <div>YOU</div>
      </div>

      {/* BOTTOM LEFT */}
      <div
        dir="ltr"
        className="absolute bottom-[31px] left-[3.2vw] hidden text-[8px] leading-[2] tracking-[0.45em] text-white/70 lg:block"
      >
        <div>BORN</div>
        <div>FROM</div>
        <div>SUNLIGHT</div>

        <div className="mt-4 h-px w-[50px] bg-solera-gold/90" />
      </div>

      {/* SLIDER */}
      <div
        dir="ltr"
        className="absolute bottom-[26px] right-[3.1vw] flex items-center gap-3"
      >
        <div className="mr-3 hidden items-center gap-4 text-[8px] text-white/40 sm:flex">
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
          className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/50 transition hover:border-solera-gold hover:text-solera-gold"
        >
          <ArrowLeft size={16} strokeWidth={1.2} />
        </button>

        <button
          type="button"
          aria-label="اسلاید بعدی"
          className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/50 transition hover:border-solera-gold hover:text-solera-gold"
        >
          <ArrowRight size={16} strokeWidth={1.2} />
        </button>
      </div>
    </section>
  );
}