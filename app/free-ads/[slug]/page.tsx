'use client'

import { AdCard, Breadcrumb, Button, ShareAndScore, Slider } from '@/components'
import { AddSquare, Clock, Location, MinusSquare } from 'iconsax-react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'

export default function FreeAdsDetail() {
  const [openCollapse, setOpenCollapse] = useState<boolean>(false)

  return (
    <main>
      <section className="mx-auto flex max-w-6xl flex-col gap-14 px-4 lg:gap-20">
        <div className="flex flex-col gap-8">
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
          <Slider
            alignActions="end"
            breakpoints={{
              768: {
                spaceBetween: 32,
                slidesPerView: 2,
              },
              1024: {
                spaceBetween: 32,
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <AdCard
                image="https://picsum.photos/200/300?random=1"
                title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
                location="دولت آباد"
                score="۵.۰"
                slug="ad-1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdCard
                image="https://picsum.photos/200/300?random=2"
                title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
                location="دولت آباد"
                score="۵.۰"
                discount="۳۰"
                slug="ad-2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdCard
                image="https://picsum.photos/200/300?random=3"
                title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
                location="دولت آباد"
                score="۵.۰"
                slug="ad-3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdCard
                image="https://picsum.photos/200/300?random=4"
                title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
                location="دولت آباد"
                discount="۴۰"
                score="۵.۰"
                slug="ad-4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdCard
                image="https://picsum.photos/200/300?random=5"
                title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
                location="دولت آباد"
                score="۵.۰"
                slug="ad-5"
              />
            </SwiperSlide>
          </Slider>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row flex-wrap justify-between gap-4">
            <h1 className="text-xl font-extrabold lg:text-2xl">
              سالن زیبایی و سولاریوم سمیرا
            </h1>
            <ShareAndScore score="۵.۰" />
          </div>
          <div className="flex flex-col gap-10 rounded-2xl border border-neutral-200 border-opacity-80 bg-white p-5 lg:gap-14">
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="relative h-[300px] w-full shrink-0 rounded-[14px] lg:w-[420px]">
                <Image
                  src="https://picsum.photos/420/300"
                  alt="test"
                  className="h-full w-full rounded-[inherit] object-cover object-center"
                  fill
                />
              </div>
              <div className="flex grow flex-col gap-5">
                <h1 className="text-base font-bold lg:text-lg">اطلاعات تماس</h1>

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
                    شنبه تا پنجشنبه از ساعت ۹:۰۰ صبح تا ۲۱:۰۰ شب پذیرای شما
                    هستیم. به استثنا جمعه ها که تعطیل میباشد.
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
              </div>
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
        </div>
      </section>
    </main>
  )
}
