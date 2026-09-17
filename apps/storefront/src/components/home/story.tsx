import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SoleraSun } from '../brand/solera-logo';

export function Story() {
  return (
    <section dir="ltr" aria-labelledby="story-heading" className="relative bg-solera-deep text-solera-white lg:h-[29.5vw] lg:min-h-[300px] lg:max-h-[440px]">
      <div className="relative aspect-[16/10] overflow-hidden lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src="/images/home/story-background.png"
          alt="زنی با جواهرات طلایی سولرا در نور آفتاب"
          fill
          sizes="100vw"
          className="object-cover object-[69%_center] lg:origin-left lg:scale-x-[1.017] lg:object-center"
        />
      </div>
      <div className="absolute inset-y-0 left-0 hidden w-[32.4%] bg-solera-deep lg:block" />

      <div dir="ltr" className="relative flex flex-col justify-center px-7 py-8 sm:px-10 lg:h-full lg:w-[32%] lg:pl-[4.5vw] lg:pr-[6vw] lg:py-4">
        <p className="text-left text-[9px] leading-[1.8] tracking-[0.35em] text-white/75">
          INSPIRED<br />BY NATURE<br />MADE FOR<br />GENERATIONS
        </p>
        <span className="my-3 h-px w-6 bg-solera-gold" />
        <h2 id="story-heading" dir="rtl" className="w-full text-right font-fa-display text-[34px] font-normal leading-[1.3] sm:text-[40px] lg:text-[31px] xl:text-[40px]">
          فراتر از یک جواهر
        </h2>
        <p dir="rtl" className="mt-2 w-full text-right text-[13px] leading-[1.8] text-white/75 lg:text-[13px] xl:text-[14px]">
          در سولرا، هر قطعه داستانی از نور، طبیعت و زنان الهام‌بخش است.
        </p>
        <Link href="/about" dir="rtl" className="mt-4 inline-flex min-h-10 w-fit items-center gap-5 border border-white/55 px-4 text-[12px] transition-colors hover:border-solera-gold hover:text-solera-gold lg:min-w-[158px] lg:justify-between">
          داستان سولرا
          <ArrowLeft aria-hidden="true" size={17} strokeWidth={1.2} />
        </Link>
      </div>

      <div className="absolute right-[3%] top-[10%] hidden flex-col items-center lg:flex">
        <SoleraSun className="h-[66px] w-[66px] text-solera-gold/80" />
        <p dir="ltr" className="mt-7 text-center text-[9px] leading-[2.2] tracking-[0.5em] text-solera-gold-soft">
          THE<br />LIGHT<br />LIVES<br />IN YOU
        </p>
      </div>
    </section>
  );
}
