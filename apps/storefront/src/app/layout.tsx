import type { Metadata } from 'next';
import {
  Cormorant_Garamond,
  Noto_Naskh_Arabic,
  Vazirmatn,
} from 'next/font/google';
import './global.css';

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600'],
  variable: '--font-naskh',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Solera | Jewelry for a Brighter You',
  description: 'جواهراتی برای روشن‌ترین نسخه‌ی تو',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${cormorant.variable} ${notoNaskh.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}