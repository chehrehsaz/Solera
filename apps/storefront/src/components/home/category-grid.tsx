import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  { title: 'دستبندها', english: 'BRACELETS', image: '/images/home/category-bracelets.webp', href: '/collections/bracelets' },
  { title: 'گوشواره‌ها', english: 'EARRINGS', image: '/images/home/category-earrings.webp', href: '/collections/earrings' },
  { title: 'گردنبندها', english: 'NECKLACES', image: '/images/home/category-necklaces.webp', href: '/collections/necklaces' },
  { title: 'انگشترها', english: 'RINGS', image: '/images/home/category-rings.webp', href: '/collections/rings' },
];

export function CategoryGrid() {
  return (
    <section dir="rtl" aria-label="دسته‌بندی جواهرات" className="w-full bg-solera-ivory lg:px-[3.1vw] lg:pb-[0.5vw]">
      <div className="grid grid-cols-2 gap-1 md:grid-cols-4 lg:gap-[0.45vw]">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            aria-label={`مشاهده ${category.title}`}
            className="group relative isolate block aspect-square overflow-hidden bg-solera-cream"
          >
            <Image
              src={category.image}
              alt={`جواهرات ${category.title} سولرا`}
              fill
              sizes="(max-width: 767px) 50vw, 25vw"
              className="object-cover brightness-[0.82] saturate-[0.82] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 text-left text-white sm:p-5 lg:px-[2.3vw] lg:pb-[1.3vw] lg:pt-6 2xl:pb-[1.6vw]">
              <h2 className="font-fa-display text-[24px] leading-tight sm:text-[29px] lg:text-[clamp(24px,2.2vw,42px)]">
                {category.title}
              </h2>
              <div dir="ltr" className="mt-1 flex items-center justify-start gap-4 text-[9px] tracking-[0.13em] sm:text-[11px] lg:text-[clamp(11px,0.9vw,17px)]">
                <span>{category.english}</span>
                <ArrowRight aria-hidden="true" size={22} strokeWidth={1} className="lg:h-[2vw] lg:w-[2vw]" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
