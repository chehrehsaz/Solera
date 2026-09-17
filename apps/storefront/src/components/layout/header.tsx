'use client';

import Link from 'next/link';
import {
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { SoleraLogo } from '../brand/solera-logo';

const navItems = [
  { label: 'خانه', href: '/' },
  { label: 'مجموعه‌ها', href: '/collections' },
  { label: 'جواهرات', href: '/jewelry' },
  { label: 'درباره ما', href: '/about' },
  { label: 'مجله ما', href: '/journal' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      {/* NO MAX WIDTH HERE - intentional */}
      <div className="px-5 sm:px-8 lg:px-12 2xl:px-[4.5vw]">
        <div
          dir="ltr"
          className="grid h-[82px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center border-b border-white/[0.08] lg:h-[8.55vw] lg:min-h-[98px]"
        >
          {/* LEFT ACTIONS */}
          <div className="flex items-center justify-start gap-4 lg:gap-5 2xl:gap-[2.8vw] 2xl:-translate-y-[0.8vw]">
            <button
              type="button"
              aria-label="سبد خرید"
              className="text-white/90 transition hover:text-solera-gold"
            >
              <ShoppingBag size={20} strokeWidth={1.25} className="2xl:h-[1.6vw] 2xl:w-[1.6vw]" />
            </button>

            <button
              type="button"
              aria-label="حساب کاربری"
              className="hidden text-white/90 transition hover:text-solera-gold sm:block"
            >
              <UserRound size={20} strokeWidth={1.25} className="2xl:h-[1.6vw] 2xl:w-[1.6vw]" />
            </button>

            <button
              type="button"
              aria-label="جستجو"
              className="text-white/90 transition hover:text-solera-gold"
            >
              <Search size={20} strokeWidth={1.25} className="2xl:h-[1.6vw] 2xl:w-[1.6vw]" />
            </button>

            
          </div>

          {/* CENTER LOGO */}
          <Link href="/" className="flex justify-center">
            <SoleraLogo />
          </Link>

          {/* RIGHT DESKTOP NAV */}
          <nav
            dir="rtl"
            className="hidden items-center justify-start gap-[3.1vw] text-[13px] lg:flex lg:text-[clamp(13px,1vw,19px)] 2xl:-translate-y-[0.8vw]"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative whitespace-nowrap py-3 transition ${
                  index === 0
                    ? 'text-solera-gold'
                    : 'text-white/90 hover:text-solera-gold'
                }`}
              >
                {item.label}

                {index === 0 && (
                  <span className="absolute bottom-[3px] right-0 h-px w-full bg-solera-gold" />
                )}
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU */}
          <div className="flex justify-end lg:hidden">
            <button
              type="button"
              aria-label="باز کردن منو"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center"
            >
              <Menu size={23} strokeWidth={1.3} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[100] ${
          menuOpen ? 'visible' : 'invisible'
        }`}
      >
        <button
          type="button"
          aria-label="بستن منو"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <aside
          className={`absolute right-0 top-0 h-full w-[84%] max-w-[360px] bg-solera-deep px-7 py-7 shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-10 flex items-center justify-between">
            <SoleraLogo className="origin-left scale-[0.78]" />

            <button
              type="button"
              aria-label="بستن منو"
              onClick={() => setMenuOpen(false)}
            >
              <X size={22} strokeWidth={1.3} />
            </button>
          </div>

          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-5 text-base text-white/90"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}
