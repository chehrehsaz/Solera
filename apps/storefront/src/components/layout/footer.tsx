import Link from 'next/link';
import { ArrowRight, Send } from 'lucide-react';
import { SoleraLogo } from '../brand/solera-logo';

const customerLinks = [
  { label: 'سوالات متداول', href: '/faq' },
  { label: 'شرایط خرید', href: '/terms' },
  { label: 'راهنمای سایز', href: '/size-guide' },
  { label: 'پیگیری سفارش', href: '/orders' },
];

const aboutLinks = [
  { label: 'داستان ما', href: '/about' },
  { label: 'ارزش‌ها', href: '/values' },
  { label: 'مجله سولرا', href: '/journal' },
  { label: 'همکاری با ما', href: '/careers' },
];

export function Footer() {
  return (
    <footer className="solera-stone bg-solera-deep text-solera-white">
      <div dir="ltr" className="grid gap-9 px-7 pb-9 pt-10 sm:grid-cols-2 sm:px-10 lg:min-h-[160px] lg:grid-cols-[29%_18%_18%_35%] lg:gap-0 lg:px-12 lg:pb-3 lg:pt-9 2xl:min-h-[260px] 2xl:pt-12">
        <div>
          <Link href="/" className="inline-block origin-left scale-[0.78] lg:-translate-x-1.5 lg:scale-[0.8]">
            <SoleraLogo />
          </Link>
          <div className="mt-3 flex items-center gap-5 text-white/85 lg:mt-1 2xl:mt-4 2xl:gap-7">
            <svg aria-label="اینستاگرام" role="img" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <Send aria-label="تلگرام" size={18} strokeWidth={1.4} />
            <span aria-label="پینترست" className="font-display text-[22px] leading-none">℗</span>
          </div>
        </div>

        <div dir="rtl" className="text-center text-[12px] 2xl:text-[17px]">
          <h2 className="mb-2 text-[13px] text-white 2xl:text-[19px]">خدمات مشتریان</h2>
          <ul className="space-y-1 text-white/70 2xl:space-y-2">
            {customerLinks.map((link) => <li key={link.href}><Link href={link.href} className="hover:text-solera-gold">{link.label}</Link></li>)}
          </ul>
        </div>

        <div dir="rtl" className="text-center text-[12px] 2xl:text-[17px]">
          <h2 className="mb-2 text-[13px] text-white 2xl:text-[19px]">درباره سولرا</h2>
          <ul className="space-y-1 text-white/70 2xl:space-y-2">
            {aboutLinks.map((link) => <li key={link.href}><Link href={link.href} className="hover:text-solera-gold">{link.label}</Link></li>)}
          </ul>
        </div>

        <div dir="rtl" className="text-right lg:pl-10">
          <h2 className="text-[14px] 2xl:text-[20px]">در جریان زیبایی باشید</h2>
          <p className="mt-2 text-[11px] leading-6 text-white/65 2xl:text-[16px]">جدیدترین مجموعه‌ها، داستان‌ها و پیشنهادهای ویژه</p>
          <div className="mt-3 flex h-10 border border-white/25 2xl:mt-5 2xl:h-14">
            <button type="button" aria-label="ثبت ایمیل" className="flex w-10 shrink-0 items-center justify-center bg-solera-ivory text-solera-deep hover:bg-solera-cream 2xl:w-14">
              <ArrowRight size={18} strokeWidth={1.2} />
            </button>
            <input type="email" aria-label="ایمیل شما" placeholder="ایمیل خود را وارد کنید ..." className="min-w-0 flex-1 bg-transparent px-3 text-[11px] text-white outline-none placeholder:text-white/45 2xl:text-[16px]" />
          </div>
        </div>
      </div>

      <div dir="ltr" className="flex flex-col gap-2 border-t border-white/10 px-7 py-4 text-[9px] text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12 lg:py-6">
        <span>© 2026 Solera. All rights reserved.</span>
        <span className="tracking-[0.3em]">A BRIGHTER YOU.</span>
      </div>
    </footer>
  );
}
