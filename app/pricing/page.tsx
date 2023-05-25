import { PackageItem, Title } from '@/components'
import { ButtonLink } from '@/components/button-link'
import { CloseSquare, Crown1, Star1, TickSquare } from 'iconsax-react'

export default function Pricing() {
  const tickSquare = (
    <TickSquare
      size={28}
      className="shrink-0 text-[#4C956C] group-hover:text-white"
    />
  )

  const closeSquare = (
    <CloseSquare
      size={28}
      className="shrink-0 text-[#DD1C1D] group-hover:text-white"
    />
  )

  const normalItems = [
    {
      text: 'تبلیغات نیتیو',
      icon: undefined,
      stared: true,
      number: '۵',
    },
    {
      text: 'امکان ایجاد ویترین آنلاین از خدمات و محصولات',
      icon: closeSquare,
      stared: true,
      number: undefined,
    },
    {
      text: '۵۰۰۰ بازدید بیشتر',
      icon: closeSquare,
      number: undefined,
      stared: true,
    },
    {
      text: 'سئو لوکیشن محلی',
      icon: undefined,
      stared: true,
      number: '۶',
    },
  ]

  const exclusiveItems = [
    {
      text: 'تبلیغات نیتیو',
      icon: undefined,
      stared: true,
      number: '۱۵',
    },
    {
      text: 'امکان ایجاد ویترین آنلاین از خدمات و محصولات',
      icon: tickSquare,
      stared: true,
      number: undefined,
    },
    {
      text: '۵۰۰۰ بازدید بیشتر',
      icon: tickSquare,
      stared: true,
      number: undefined,
    },
    {
      text: 'سئو لوکیشن محلی',
      icon: undefined,
      stared: true,
      number: '۱۶',
    },
  ]
  const commonItems = [
    {
      text: 'ایجاد صفحه اختصاصی برای آگهی دهنده (با فرم تماس پیامکی)',
      icon: tickSquare,
      stared: false,
      number: undefined,
    },
    {
      text: 'طراحی اختصاصی آگهی در آتلیه طراحی',
      icon: tickSquare,
      stared: false,
      number: undefined,
    },
    {
      text: 'ارائه آمار دقیق بازدید توسط پل پیشرفته تحلیل آگهی',
      icon: tickSquare,
      stared: false,
      number: undefined,
    },
    {
      text: 'اولویت بالاتر نمایش آگهی در سایت و اپلیکیشن موبایل برترینها',
      icon: tickSquare,
      stared: false,
      number: undefined,
    },
    {
      text: 'نمایش در دیگر آگهی ها و دسته بندی مشاغل هم صنف',
      icon: tickSquare,
      stared: false,
      number: undefined,
    },
    {
      text: 'نمایش آگهی ها به تفکیک محله های تهران',
      icon: tickSquare,
      stared: false,
      number: undefined,
    },
    {
      text: 'تولید محتوا و درج دو مقاله برندینگ',
      icon: tickSquare,
      stared: true,
      number: undefined,
    },
    {
      text: 'عکاسی (۱۵ فریم) و فیلمبرداری محیطی یک دقیقه ای',
      icon: tickSquare,
      stared: true,
      number: undefined,
    },
    {
      text: '۱۰۰۰۰ پیامک منطقه ای',
      icon: tickSquare,
      stared: true,
      number: undefined,
    },
    {
      text: 'لینک لندینگ راه ارتباط سریع در قسمت بایو اینستاگرام',
      icon: tickSquare,
      stared: true,
      number: undefined,
    },
    {
      text: 'اپلیکیشن اندروید',
      icon: tickSquare,
      stared: true,
      number: undefined,
    },
  ]

  return (
    <main className="relative">
      <div className="mx-auto my-16 flex max-w-6xl flex-col gap-6 px-4 lg:my-20 lg:gap-8">
        <Title>
          تعرفه های <strong className="font-black">آگهی</strong>
        </Title>
        <div className="text-center text-base font-normal leading-8">
          <p>
            در انتخاب بسته تبلیغاتی خود دقت بفرمایید زیرا امکان تبدیل و کنسل
            کردن آگهی وجود ندارد
          </p>
          <p className="font-bold">
            موارد <span className="text-[#DD1C1D]">ستاره دار *</span> طبق قالب و
            در طول مدت قرار داد انجام میشود
          </p>
        </div>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
          {/* Normal Package */}
          <div className="group flex flex-col items-center gap-6 rounded-[20px] border border-neutral-200 border-opacity-80 bg-white p-6 transition-all hover:bg-primary hover:text-white hover:shadow-package-item lg:gap-8 lg:p-8">
            <span className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary bg-opacity-10 transition-all group-hover:bg-white group-hover:bg-opacity-10">
              <Star1
                size={38}
                className="text-primary transition-all group-hover:text-white"
              />
            </span>
            <p className="text-xl font-bold">پکیچ عادی</p>
            <ul className="flex w-full flex-col gap-6 lg:gap-8">
              {commonItems.map((item) => (
                <PackageItem
                  key={item.text}
                  text={item.text}
                  stared={item.stared}
                  number={item.number}
                  icon={item.icon}
                />
              ))}
              {normalItems.map((item) => (
                <PackageItem
                  key={item.text}
                  text={item.text}
                  stared={item.stared}
                  number={item.number}
                  icon={item.icon}
                />
              ))}
            </ul>
            <ButtonLink
              href=""
              label="تکمیل فرم درخواست آگهی"
              color="primary"
              classes="w-full group-hover:bg-white group-hover:text-primary"
            />
          </div>

          {/* Exclusive Package */}
          <div className="group flex flex-col items-center gap-6 rounded-[20px] border border-neutral-200 border-opacity-80 bg-white p-6 transition-all hover:bg-primary hover:text-white hover:shadow-package-item lg:gap-8 lg:p-8">
            <span className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary bg-opacity-10 transition-all group-hover:bg-white group-hover:bg-opacity-10">
              <Crown1
                size={38}
                className="text-primary transition-all group-hover:text-white"
              />
            </span>
            <p className="text-xl font-bold">پکیچ اختصاصی</p>
            <ul className="flex w-full flex-col gap-6 lg:gap-8">
              {commonItems.map((item) => (
                <PackageItem
                  key={item.text}
                  text={item.text}
                  stared={item.stared}
                  number={item.number}
                  icon={item.icon}
                />
              ))}
              {exclusiveItems.map((item) => (
                <PackageItem
                  key={item.text}
                  text={item.text}
                  stared={item.stared}
                  number={item.number}
                  icon={item.icon}
                />
              ))}
            </ul>
            <ButtonLink
              href=""
              label="تکمیل فرم درخواست آگهی"
              color="primary"
              classes="w-full group-hover:bg-white group-hover:text-primary"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
