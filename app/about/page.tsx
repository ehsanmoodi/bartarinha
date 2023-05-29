import Image from 'next/image'
import { Button, Input, TextArea, Title } from '@/components'

import heroImage from '../../public/images/about/image.png'
import map from '../../public/images/map.png'
import { CallOutgoing, Location, Mobile, Sms, User } from 'iconsax-react'
import Link from 'next/link'

export default function About() {
  return (
    <main className="">
      <section className="overflow-hidden bg-[url('/images/about/bg.png')] bg-contain bg-[center_top] bg-no-repeat pb-16 pt-8 lg:pb-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 lg:flex-row">
          <div className="order-2 flex w-full flex-col items-center gap-3 lg:order-1 lg:items-start lg:gap-6 lg:pb-12 lg:pt-8">
            <Title align="start">
              با <strong>برترینها </strong> بیشتر آشنا شوید
            </Title>
            <p className="text-justify text-base font-normal leading-7">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className="shrik-0 order-1 w-full grow lg:order-2">
            <Image
              src={heroImage}
              alt="hero image"
              className="mx-auto lg:origin-right lg:scale-[1]"
              quality={100}
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-16 lg:gap-28">
        <section>
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 lg:gap-10">
            <Title align="center">
              چرا
              <strong className="font-black"> برترین ها</strong>
            </Title>
            <div className="flex w-full flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center">
                <div className="relative -mb-[33px] flex h-[66px] w-[66px] items-center justify-center rounded-full bg-[#F6F6F6]">
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.666 29.333h10.666c5.36 0 6.32-2.146 6.6-4.76l1-10.666C29.293 10.653 28.36 8 22.666 8H9.332c-5.693 0-6.626 2.653-6.266 5.907l1 10.666c.28 2.614 1.24 4.76 6.6 4.76ZM10.666 8V6.933c0-2.36 0-4.266 4.267-4.266h2.133c4.267 0 4.267 1.906 4.267 4.266V8"
                      stroke="#303842"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.866 14.667a21.782 21.782 0 0 1-7.52 3.52M3.494 15.027a21.913 21.913 0 0 0 7.174 3.213"
                      stroke="#303842"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 24.267A5.333 5.333 0 1 0 16 13.6a5.333 5.333 0 0 0 0 10.667Z"
                      stroke="#27A3CB"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.333 17.267v1.24c0 .466-.24.906-.654 1.146l-1.013.614"
                      stroke="#27A3CB"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="absolute bottom-[-10px] left-[-10px] -z-10 h-[43px] w-[86px] rounded-b-full border border-neutral-200 border-t-white bg-white"></div>
                </div>
                <div className="-z-20 w-full rounded-[14px] border border-neutral-200 bg-white p-4 pt-14 text-center">
                  <strong className="text-xl font-extrabold">۱۶+</strong>
                  <p className="text-base font-light">
                    سال سابقه و تجربه تبلیغات
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative -mb-[33px] flex h-[66px] w-[66px] items-center justify-center rounded-full bg-[#F6F6F6]">
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.586 2.667h14.813c4.747 0 5.934 1.186 5.934 5.92v8.44c0 4.746-1.187 5.92-5.92 5.92H8.586c-4.733.013-5.92-1.174-5.92-5.907V8.587c0-4.734 1.187-5.92 5.92-5.92Z"
                      stroke="#303842"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 22.96v6.373M2.666 17.333h26.667"
                      stroke="#27A3CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 29.333h12"
                      stroke="#303842"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="absolute bottom-[-10px] left-[-10px] -z-10 h-[43px] w-[86px] rounded-b-full border border-neutral-200 border-t-white bg-white"></div>
                </div>
                <div className="-z-20 w-full rounded-[14px] border border-neutral-200 bg-white p-4 pt-14 text-center">
                  <strong className="text-xl font-extrabold">۵۰۰۰۰+</strong>
                  <p className="text-base font-light">بازدید روزانه از سایت</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative -mb-[33px] flex h-[66px] w-[66px] items-center justify-center rounded-full bg-[#F6F6F6]">
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.014 14.96v5.987c0 5.986 2.4 8.386 8.386 8.386h7.187c5.987 0 8.387-2.4 8.387-8.386V14.96"
                      stroke="#303842"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.413 16c2.693 0 4.667-2.187 4.4-4.867l-.373-3.666c-.48-3.467-1.814-4.8-5.307-4.8h-4.067L20 12.013c.226 2.2 2.213 3.987 4.413 3.987ZM7.52 16c2.2 0 4.187-1.787 4.4-3.987l.293-2.946.64-6.4H8.787C5.293 2.667 3.96 4 3.48 7.467l-.36 3.666C2.853 13.813 4.827 16 7.52 16Z"
                      stroke="#303842"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 22.667c-2.227 0-3.334 1.106-3.334 3.333v3.333h6.667V26c0-2.227-1.107-3.333-3.334-3.333ZM16 16c2.44 0 4.24-1.987 4-4.427l-.88-8.906h-6.227L12 11.573C11.76 14.013 13.56 16 16 16Z"
                      stroke="#27A3CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="absolute bottom-[-10px] left-[-10px] -z-10 h-[43px] w-[86px] rounded-b-full border border-neutral-200 border-t-white bg-white"></div>
                </div>
                <div className="-z-20 w-full rounded-[14px] border border-neutral-200 bg-white p-4 pt-14 text-center">
                  <strong className="text-xl font-extrabold">۱۰۰۰۰+</strong>
                  <p className="text-base font-light">همکاری با کسب و کارها</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative -mb-[33px] flex h-[66px] w-[66px] items-center justify-center rounded-full bg-[#F6F6F6]">
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.333 16c0-7.36-5.974-13.333-13.334-13.333C8.64 2.667 2.666 8.64 2.666 16s5.973 13.333 13.333 13.333"
                      stroke="#303842"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.665 4H12a37.898 37.898 0 0 0 0 24h-1.334M20 4a38.074 38.074 0 0 1 1.947 12"
                      stroke="#303842"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 21.333V20a38.074 38.074 0 0 0 12 1.947M4 12a37.898 37.898 0 0 1 24 0"
                      stroke="#303842"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.267 28.533a4.267 4.267 0 1 0 0-8.533 4.267 4.267 0 0 0 0 8.533ZM29.333 29.333 28 28"
                      stroke="#27A3CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="absolute bottom-[-10px] left-[-10px] -z-10 h-[43px] w-[86px] rounded-b-full border border-neutral-200 border-t-white bg-white"></div>
                </div>
                <div className="-z-20 w-full rounded-[14px] border border-neutral-200 bg-white p-4 pt-14 text-center">
                  <strong className="text-xl font-extrabold">۱</strong>
                  <p className="text-base font-light">صفحه اول جستجوی گوگل</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 lg:gap-10">
            <Title align="center">
              اطلاعات
              <strong className="font-black"> تماس</strong>
            </Title>
            <div className="flex w-full flex-col gap-8 md:grid md:grid-cols-2">
              <div className="relative rounded-[14px]">
                <Image
                  src={map}
                  alt="map"
                  quality={100}
                  className="h-full w-full rounded-[inherit]"
                />
              </div>
              <div className="flex flex-col justify-between gap-5 rounded-[14px] border border-neutral-200 p-5 lg:gap-7 lg:p-6">
                <div className="group flex items-start justify-between gap-10 text-base font-normal lg:gap-20">
                  <span className="flex items-center gap-1 font-medium text-primary">
                    <Location size={24} className="text-primary" />
                    آدرس:
                  </span>
                  <span className="text-end">
                    خیابان شریعتی ، پایین تر از میرداماد، بن بست هدیه، پلاک ۱۴
                    ‌‌طبقه همکف{' '}
                  </span>
                </div>
                <div className="group flex items-start justify-between gap-10 text-base font-normal lg:gap-20">
                  <span className="flex items-center gap-1 whitespace-nowrap font-medium text-primary">
                    <CallOutgoing size={24} className="text-primary" />
                    سفارش آگهی:
                  </span>
                  <span className="flex flex-wrap items-end text-end" dir="ltr">
                    <Link
                      href="tel:(۰۲۱)۲۳۰۵۱۲۲۶"
                      className="underline-offset-8 hover:text-primary hover:underline"
                    >
                      (۰۲۱)۲۳۰۵۱۲۲۶
                    </Link>
                    -
                    <Link
                      href="tel:(۰۲۱)۲۳۰۵۱۳۳۰"
                      className="underline-offset-8 hover:text-primary hover:underline"
                    >
                      (۰۲۱)۲۳۰۵۱۳۳۰
                    </Link>
                  </span>
                </div>
                <div className="group flex items-start justify-between gap-10 text-base font-normal lg:gap-20">
                  <span className="flex items-center gap-1 whitespace-nowrap font-medium text-primary">
                    <CallOutgoing size={24} className="text-primary" />
                    واحد پشتیبانی :
                  </span>
                  <span className="text-end" dir="ltr">
                    <Link
                      href="tel:(۰۲۱)۲۳۰۵۱۲۳۲"
                      className="underline-offset-8 hover:text-primary hover:underline"
                    >
                      (۰۲۱)۲۳۰۵۱۲۳۲
                    </Link>
                  </span>
                </div>
                <div className="group flex items-start justify-between gap-10 text-base font-normal lg:gap-20">
                  <span className="flex items-center gap-1 whitespace-nowrap font-medium text-primary">
                    <CallOutgoing size={24} className="text-primary" />
                    مدیریت:
                  </span>
                  <span className="text-end" dir="ltr">
                    <Link
                      href="tel:(۰۲۱)۲۱۰۵۱۱۱۲"
                      className="underline-offset-8 hover:text-primary hover:underline"
                    >
                      (۰۲۱)۲۱۰۵۱۱۱۲
                    </Link>
                  </span>
                </div>
                <div className="group flex items-start justify-between gap-10 text-base font-normal lg:gap-20">
                  <span className="flex items-center gap-1 whitespace-nowrap font-medium text-primary">
                    <Sms size={24} className="text-primary" />
                    ایمیل:
                  </span>
                  <span className="text-end">
                    <Link
                      href="mailto:info@bartarinha.com"
                      className="underline-offset-8 hover:text-primary hover:underline"
                    >
                      info@bartarinha.com
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 lg:gap-10">
            <Title align="center">
              فرم
              <strong className="font-black"> تماس</strong>
            </Title>
            <form className="w-full rounded-2xl border border-neutral-200 border-opacity-80 p-4 lg:p-6">
              <div className="flex flex-col gap-5 lg:grid lg:grid-cols-6">
                <div className="flex flex-col gap-5 lg:col-span-2">
                  <Input
                    placeholder="نام و نام‌خانوادگی"
                    icon={<User color="#A9A9A9" size={20} />}
                  />
                  <Input
                    placeholder="ایمیل"
                    icon={<Sms color="#A9A9A9" size={20} />}
                  />
                  <Input
                    placeholder="تلفن "
                    icon={<Mobile color="#A9A9A9" size={20} />}
                  />
                </div>
                <div className="col-span-4">
                  <TextArea placeholder="توضیحات " rows={8} />
                </div>
              </div>
              <div className="mt-5 lg:text-end">
                <Button color="primary" classes="w-full lg:w-auto px-20">
                  ارسال درخواست
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}
