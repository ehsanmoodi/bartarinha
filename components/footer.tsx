import { Briefcase, CallOutgoing, Location, Sms } from 'iconsax-react'
import Link from 'next/link'
import { ButtonLink } from './button-link'

export function Footer() {
  const socials = [
    {
      link: 'https://linkedin.com',
      icon: (
        <svg
          width="18"
          height="19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fff"
          className="transition-all group-hover:fill-primary group-hover:stroke-primary"
        >
          <path
            d="M12 6.81a4.5 4.5 0 0 1 4.5 4.5v5.25h-3v-5.25a1.5 1.5 0 1 0-3 0v5.25h-3v-5.25a4.5 4.5 0 0 1 4.5-4.5v0ZM4.5 7.56h-3v9h3v-9ZM3 5.31a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      link: 'https://instagram.com',
      icon: (
        <svg
          width="18"
          height="19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fff"
          className="transition-all group-hover:stroke-primary"
        >
          <path
            d="M12.75 2.31h-7.5A3.75 3.75 0 0 0 1.5 6.06v7.5a3.75 3.75 0 0 0 3.75 3.75h7.5a3.75 3.75 0 0 0 3.75-3.75v-7.5a3.75 3.75 0 0 0-3.75-3.75Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 9.338a3 3 0 1 1-5.933.88A3 3 0 0 1 12 9.338ZM13.125 5.686h.008"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      link: 'https://twitter.com',
      icon: (
        <svg
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fff"
          fill="#fff"
          className="transition-all group-hover:fill-primary group-hover:stroke-primary"
        >
          <path
            d="M17.25 2.25a8.174 8.174 0 0 1-2.355 1.147A3.36 3.36 0 0 0 9 5.647v.75A7.995 7.995 0 0 1 2.25 3s-3 6.75 3.75 9.75a8.73 8.73 0 0 1-5.25 1.5c6.75 3.75 15 0 15-8.625 0-.209-.02-.417-.06-.623a5.79 5.79 0 0 0 1.56-2.752v0Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-secondary py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-white lg:gap-8">
        <div className="flex flex-col gap-6 rounded-[10px] bg-primary p-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:p-[18px]">
          <p className="flex flex-col items-center gap-7 text-lg font-medium md:flex-row">
            <div className="relative inline-block">
              <Briefcase color="white" size={42} />
              <span className="absolute -right-2 -top-1 inline-block h-2 w-2 rounded-full border border-white"></span>
              <span className="absolute -left-2 top-1 inline-block h-[3px] w-[3px] rounded-full bg-white"></span>
              <span className="absolute -bottom-3 left-0 inline-block h-[5px] w-[5px] rounded-full bg-white"></span>
            </div>
            برای همکاری با برترین ها آماده اید؟
          </p>
          <ButtonLink
            href="/ad-registration"
            label="همین حالا شروع کنید"
            color="white"
          />
        </div>

        <p className="text-center text-base font-light leading-7 lg:text-justify">
          بانک اطلاعات تجاری شهر تهران در قالب پایگاه اینترنتی برترین‌ها در سال
          ۱۳۸۶ آغاز به کار کرد و در سال ۱۳۹۸ مجوز دانش بنیان از معاونت علمی و
          فناوری را دریافت نمود. در طی این ۱۶ سال برترین ها با بیش از ۱۰ هزار
          کسب و کار همکاری داشته است. سایت برترین‌ها با بیش از ۱۰۰ کلمه کلیدی
          مربوط به اصناف و مشاغل مختلف، در صفحه اول نتایج موتور جستجوی google
          قرار دارد و با ۵۰۰ هزار بازدید روزانه، که بالای ۸۵ درصد مخاطبین آن از
          شر تهران هستند.
        </p>

        <hr className="my-0 bg-white opacity-30" />

        <div className="flex flex-col gap-3 lg:flex-row lg:gap-x-16">
          <span className="text-base font-bold">لینک‌های مفید: </span>
          <ul className="flex flex-wrap gap-3 gap-x-6 text-base font-normal lg:gap-x-8">
            <li>
              <Link href="#" className="underline-offset-8 hover:underline">
                عنوان تستی لینک
              </Link>
            </li>
            <li>
              <Link href="#" className="underline-offset-8 hover:underline">
                عنوان تستی لینک
              </Link>
            </li>
            <li>
              <Link href="#" className="underline-offset-8 hover:underline">
                عنوان تستی لینک
              </Link>
            </li>
            <li>
              <Link href="#" className="underline-offset-8 hover:underline">
                عنوان تستی لینک
              </Link>
            </li>
            <li>
              <Link href="#" className="underline-offset-8 hover:underline">
                عنوان تستی لینک
              </Link>
            </li>
            <li>
              <Link href="#" className="underline-offset-8 hover:underline">
                عنوان تستی لینک
              </Link>
            </li>
            <li>
              <Link href="#" className="underline-offset-8 hover:underline">
                عنوان تستی لینک
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:gap-x-16">
          <span className="text-base font-bold">دسترسی سریع:</span>
          <ul className="flex flex-wrap gap-3 gap-x-6 text-base font-normal lg:gap-x-8">
            <li>
              <Link href="#" className="underline-offset-8 hover:underline">
                دسته‌بندی کسب و کارها
              </Link>
            </li>
            <li>
              <Link href="#" className="underline-offset-8 hover:underline">
                دسته‌بندی محصولات
              </Link>
            </li>
            <li>
              <Link href="#" className="underline-offset-8 hover:underline">
                تخفیفات
              </Link>
            </li>
            <li>
              <Link href="#" className="underline-offset-8 hover:underline">
                خواندنی‌ها
              </Link>
            </li>
            <li>
              <Link href="#" className="underline-offset-8 hover:underline">
                تعرفه‌ها و ثبت آگهی
              </Link>
            </li>
            <li>
              <Link href="#" className="underline-offset-8 hover:underline">
                درباره ما
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:gap-x-16">
          <span className="text-base font-bold">راه‌های ارتباطی: </span>
          <ul className="flex flex-wrap gap-3 gap-x-6 text-base font-normal lg:gap-x-8">
            <li>
              <Link
                href="tel:۰۲۱-۲۳۰۵۱۲۴۰"
                className="group flex items-center gap-2 underline-offset-8 hover:underline"
              >
                <CallOutgoing
                  color="white"
                  size={24}
                  className="group-hover:animate-bounce"
                />
                ۰۲۱-۲۳۰۵۱۲۴۰
              </Link>
            </li>
            <li>
              <Link
                href="mailto:info@bartarinha.com"
                className="group flex items-center gap-2 underline-offset-8 hover:underline"
              >
                <Sms
                  color="white"
                  size={24}
                  className="group-hover:animate-bounce"
                />
                info@bartarinha.com
              </Link>
            </li>
            <li>
              <span className="group flex items-center gap-2 underline-offset-8 hover:underline">
                <Location
                  color="white"
                  size={24}
                  className="group-hover:animate-bounce"
                />
                تهران، خیابان شریعتی ، پایین تر از میرداماد، بن بست هدیه، پلاک
                ۱۴ طبقه همکف
              </span>
            </li>
          </ul>
        </div>

        <hr className="my-0 bg-white opacity-30" />

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <p className="text-center text-base font-normal lg:text-justify">
            کلیه حقوق مادی و معنوی این سایت محفوظ و هرگونه کپی برداری از آن
            پیگرد قانونی دارد.
          </p>
          <ul className="flex gap-2">
            {socials.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  target="_blank"
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-opacity-10 transition-all hover:bg-white"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
