import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const products = [
  { name: 'انگشتر سولرا', price: '۷۴,۹۶۰,۰۰۰ تومان', image: '/images/home/product-ring.webp', href: '/products/solera-ring' },
  { name: 'گردنبند آفتاب', price: '۲۶,۵۰۰,۰۰۰ تومان', image: '/images/home/product-necklace.webp', href: '/products/sun-necklace' },
  { name: 'گوشواره لیا', price: '۲۹,۶۰۰,۰۰۰ تومان', image: '/images/home/product-earrings.webp', href: '/products/lia-earrings' },
  { name: 'دستبند اورا', price: '۲۲,۹۰۰,۰۰۰ تومان', image: '/images/home/product-bracelet.webp', href: '/products/aura-bracelet' },
];

export function SignatureCollection() {
  return (
    <section aria-labelledby="signature-heading" className="solera-paper bg-solera-ivory">
      <div dir="ltr" className="grid lg:h-[216px] lg:grid-cols-[19%_62%_19%] xl:h-[260px] 2xl:h-[298px]">
        <div className="flex flex-col justify-center px-7 py-9 sm:px-10 lg:pl-[23%] lg:pr-[15%] lg:py-4">
          <p className="text-[9px] leading-[2] tracking-[0.38em] text-solera-blue">
            THE<br />SIGNATURE<br />COLLECTION
          </p>
          <h2 id="signature-heading" dir="rtl" className="mt-3 whitespace-nowrap text-right font-fa-display text-[30px] text-solera-ink lg:text-[25px] xl:text-[31px]">
            مجموعه امضا
          </h2>
          <span className="mt-3 h-px w-7 bg-solera-ink/60" />
          <Link href="/collections" dir="rtl" className="mt-4 inline-flex w-fit items-center gap-2 text-[12px] text-solera-ink hover:text-solera-burgundy">
            مشاهده همه
            <ArrowLeft aria-hidden="true" size={17} strokeWidth={1.1} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2 pb-7 sm:grid-cols-4 lg:min-h-0 lg:gap-2 lg:pb-0 lg:pt-2">
          {products.map((product) => (
            <Link key={product.href} href={product.href} className="group min-w-0 text-center lg:flex lg:min-h-0 lg:flex-col">
              <div className="relative aspect-square overflow-hidden bg-solera-cream lg:aspect-auto lg:max-h-[14.4vw] lg:min-h-0 lg:flex-1">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 639px) 50vw, (max-width: 1023px) 25vw, 15vw"
                  className="object-cover brightness-[0.86] saturate-[0.84] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-1 text-[12px] text-solera-ink lg:mt-3 lg:text-[13px]">{product.name}</p>
              <p className="mt-0.5 text-[10px] text-solera-ink/75 lg:text-[11px]">{product.price}</p>
            </Link>
          ))}
        </div>

        <Link href="/gifts" aria-label="مشاهده هدیه‌های ماندگار" className="group relative isolate grid min-h-[240px] place-items-center overflow-hidden text-center sm:min-h-[280px] lg:ml-[0.45vw] lg:mt-2 lg:min-h-0">
          <Image src="/images/home/gift-fabric.png" alt="" fill sizes="(max-width: 1023px) 100vw, 19vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#210c11]/35 via-[#210c11]/15 to-[#210c11]/40" />
          <div className="relative flex w-full max-w-[220px] flex-col items-center justify-center px-4 py-5 text-center text-solera-white">
            <span dir="ltr" className="text-[9px] leading-[1.9] tracking-[0.4em] text-white/85 2xl:text-[12px]">A<br />TIMELESS<br />GIFT</span>
            <span dir="rtl" className="mt-3 block w-full text-center font-fa-display text-[30px] leading-[1.2] lg:text-[clamp(28px,2.8vw,42px)]">هدیه‌ای<br />ماندگار</span>
            <span className="mt-4 flex size-9 items-center justify-center rounded-full border border-white/70 transition-colors group-hover:border-solera-gold group-hover:bg-white/15 2xl:size-[3vw]">
              <ArrowRight aria-hidden="true" size={17} strokeWidth={1.1} />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
