import { Gem, Gift, Headset, Sun, Truck } from 'lucide-react';

const features = [
  { icon: Headset, title: 'پشتیبانی اختصاصی', detail: '۷ روز هفته' },
  { icon: Gift, title: 'بسته‌بندی لوکس', detail: 'مناسب هدیه' },
  { icon: Truck, title: 'ارسال امن و بیمه‌شده', detail: 'به سراسر ایران' },
  { icon: Gem, title: 'طراحی اختصاصی', detail: 'ویژه شما' },
  { icon: Sun, title: 'طلای ۱۸ عیار', detail: 'با ضمانت اصالت' },
];

export function FeatureStrip() {
  return (
    <section dir="rtl" aria-label="ویژگی‌های سولرا" className="bg-solera-ivory">
      <div className="grid grid-cols-2 px-5 py-3 sm:px-8 md:grid-cols-5 md:px-5 md:py-5 lg:px-8">
        {features.map(({ icon: Icon, title, detail }, index) => (
          <div
            key={title}
            className={`flex min-h-16 items-center justify-center gap-3 px-2 py-2 text-center md:min-h-10 md:border-l md:border-solera-ink/15 md:py-0 lg:gap-4 ${
              index === features.length - 1 ? 'col-span-2 md:col-span-1 md:border-l-0' : ''
            }`}
          >
            <div className="text-right">
              <p className="text-[11px] leading-5 text-solera-ink lg:text-[13px]">{title}</p>
              <p className="text-[10px] leading-5 text-solera-ink lg:text-[12px]">{detail}</p>
            </div>
            <Icon
              aria-hidden="true"
              size={29}
              strokeWidth={1.15}
              className={`shrink-0 lg:size-8 ${index === features.length - 1 ? 'text-solera-gold' : 'text-solera-ink'}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
