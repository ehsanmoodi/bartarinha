'use client'

import {
  Breadcrumb,
  Button,
  ButtonLink,
  Keyword,
  ShareAndScore,
  Title,
  VitrinSlider,
} from '@/components'
import {
  AddSquare,
  Clock,
  DocumentText,
  Location,
  MinusSquare,
  Refresh,
  WalletMoney,
} from 'iconsax-react'
import Image from 'next/image'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Thumbs } from 'swiper'
import type { Swiper as SwiperType } from 'swiper'

export default function AdsDetail() {
  const [openCollapse, setOpenCollapse] = useState<boolean>(false)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <main>
      <section className="flex flex-col gap-14 lg:gap-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
          <div className="flex flex-col gap-4">
            <Breadcrumb
              items={[
                {
                  title: 'صفحه اصلی',
                  link: '/',
                },
                {
                  title: 'کسب و کارها',
                  link: '/business-categories',
                },
                {
                  title: 'آرایشگاه و سالن زیبایی در تهران',
                },
              ]}
            />
            <div className="flex flex-row flex-wrap justify-between gap-4">
              <h1 className="text-xl font-extrabold lg:text-2xl">
                سالن زیبایی و سولاریوم سمیرا
              </h1>
              <ShareAndScore score="۵.۰" />
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-2xl border border-neutral-200 border-opacity-80 bg-white p-5 md:flex-row">
            <div className="relative w-full shrink-0 lg:w-[420px]">
              <Swiper
                dir="rtl"
                className="relative"
                modules={[Thumbs, FreeMode]}
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={32}
                slidesPerView={1}
              >
                <SwiperSlide className="!w-full">
                  <Image
                    src="https://picsum.photos/420/300?random=1"
                    alt="slider1"
                    width={420}
                    height={300}
                    className="rounded-[14px]"
                  />
                </SwiperSlide>
                <SwiperSlide className="!w-full">
                  <Image
                    src="https://picsum.photos/420/300?random=2"
                    alt="slider1"
                    width={420}
                    height={300}
                    className="rounded-[14px]"
                  />
                </SwiperSlide>
                <SwiperSlide className="!w-full">
                  <Image
                    src="https://picsum.photos/420/300?random=3"
                    alt="slider1"
                    width={420}
                    height={300}
                    className="rounded-[14px]"
                  />
                </SwiperSlide>
                <SwiperSlide className="!w-full">
                  <Image
                    src="https://picsum.photos/420/300?random=4"
                    alt="slider1"
                    width={420}
                    height={300}
                    className="rounded-[14px]"
                  />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                dir="rtl"
                spaceBetween={14}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mt-3"
              >
                <SwiperSlide className="!w-auto">
                  <Image
                    src="https://picsum.photos/420/300?random=1"
                    alt="slider1"
                    width={130}
                    height={82}
                    className="rounded-lg"
                  />
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                  <Image
                    src="https://picsum.photos/420/300?random=2"
                    alt="slider1"
                    width={130}
                    height={82}
                    className="rounded-lg"
                  />
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                  <Image
                    src="https://picsum.photos/420/300?random=3"
                    alt="slider1"
                    width={130}
                    height={82}
                    className="rounded-lg"
                  />
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                  <Image
                    src="https://picsum.photos/420/300?random=4"
                    alt="slider1"
                    width={130}
                    height={82}
                    className="rounded-lg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="flex grow flex-col justify-around gap-5">
              <h2 className="text-base font-bold lg:text-lg">اطلاعات تماس</h2>

              <div className="flex items-start gap-2">
                <Location size={30} className="text-secondary" />
                <span className="text-sm font-normal lg:text-base">
                  <strong className="font-medium">آدرس: </strong>
                  فلکه سوم تهرانپارس، رو به روی بیمارستان تهرانپارس، جنب شهر
                  قهوه،پلاک ۳۴۹، طبقه اول، واحد ۱
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Clock size={30} className="text-secondary" />
                <span className="text-sm font-normal lg:text-base">
                  <strong className="font-medium">ساعت کاری: </strong>
                  شنبه تا پنجشنبه از ساعت ۹:۰۰ صبح تا ۲۱:۰۰ شب پذیرای شما هستیم.
                  به استثنا جمعه ها که تعطیل میباشد.
                </span>
              </div>

              <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
                <Button color="transparent" classes="flex justify-between">
                  نمایش کامل تلفن همراه
                  <span dir="ltr">۰۹۱۵۳۶۱****</span>
                </Button>
                <Button color="transparent" classes="flex justify-between">
                  نمایش کامل تلفن همراه
                  <span dir="ltr">۰۹۱۵۳۶۱****</span>
                </Button>
                <Button color="transparent" classes="flex justify-between">
                  نمایش کامل تلفن همراه
                  <span dir="ltr">۰۹۱۵۳۶۱****</span>
                </Button>
                <Button color="transparent" classes="flex justify-between">
                  نمایش کامل تلفن همراه
                  <span dir="ltr">۰۹۱۵۳۶۱****</span>
                </Button>
              </div>

              <hr className="my-0 border border-neutral-200  border-opacity-60" />

              <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
                <div className="flex items-center justify-between gap-4 text-orange">
                  <span className="flex items-center gap-1 text-base font-normal">
                    <WalletMoney />
                    قیمت:
                  </span>
                  <span className="text-base font-light">
                    <strong className="text-xl font-extrabold">۵,۰۰,۰۰۰</strong>
                    تومان
                  </span>
                </div>
                <ButtonLink
                  color="orange-transparent"
                  href="#"
                  label="مشاهده پروفایل و ثبت سفارش"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4">
          <div className="flex items-center gap-1 border-b border-neutral-200 pb-6 text-lg font-normal">
            <DocumentText size={28} className="text-secondary" />
            توضیحات کسب و کار
          </div>
          <div className="text-base font-normal leading-7">
            <p>مرکز لیزر و زیبایی شایما</p>
            <p>-بزرگترین کلینیک لیزر و لاغری شرق تهران</p>
            <p>-مرکزتخصصی لاغری تحت نظر ۳ پزشک مجرب</p>
            <p>
              -اولین دستگاه لیزر موهای زائد با ۳ طول موج ۲۰۲۲بدون تماس با پوست
              بدون ژل، درد و سوختگی
            </p>
            <p>-تزریق ژل و بوتاکس</p>
            <Collapsible.Root
              open={openCollapse}
              onOpenChange={setOpenCollapse}
            >
              <Collapsible.Content>
                <p>-بزرگترین کلینیک لیزر و لاغری شرق تهران</p>
                <p>-مرکزتخصصی لاغری تحت نظر ۳ پزشک مجرب</p>
                <p>
                  -اولین دستگاه لیزر موهای زائد با ۳ طول موج ۲۰۲۲بدون تماس با
                  پوست بدون ژل، درد و سوختگی
                </p>
                <p>-تزریق ژل و بوتاکس</p>
              </Collapsible.Content>
              <Collapsible.Trigger className="mt-4 flex w-full items-center gap-2 text-base font-medium text-primary">
                {openCollapse ? 'نمایش کمتر' : 'نمایش بیشتر'}
                {openCollapse ? (
                  <MinusSquare size={22} className="text-primary" />
                ) : (
                  <AddSquare size={22} className="text-primary" />
                )}
              </Collapsible.Trigger>
            </Collapsible.Root>
          </div>
        </div>

        <VitrinSlider
          title={
            <Title>
              سایر
              <strong className="font-black"> محصولات</strong>
            </Title>
          }
        />

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
          <Title>
            کلیدواژه های
            <strong className="font-black"> پربازدید</strong>
          </Title>
          <div className="flex flex-wrap gap-4">
            <Keyword href="#" label="تزریق ژل و بوتاکس" />
            <Keyword href="#" label="تزریق ژل" />
            <Keyword href="#" label="مزوتراپی پوست ومو" />
            <Keyword href="#" label="کلینیک زیبایی" />
            <Keyword href="#" label="فیشیال" />
            <Button
              color="transparent"
              classes="self-start flex items-center gap-2 group"
            >
              بارگذاری آگهی های بیشتر
              <Refresh
                size={22}
                className="text-primary group-hover:text-white"
              />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
