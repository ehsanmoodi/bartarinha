import { Breadcrumb, DiscountCard, ShareAndScore } from '@/components'
import { Clock } from 'iconsax-react'
import Image from 'next/image'

export default function AdsDetail() {
  return (
    <main>
      <section className="mx-auto flex max-w-6xl flex-col gap-14 px-4 lg:gap-20">
        <div className="flex flex-col gap-8">
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
          <DiscountCard
            amount="۱۰٪"
            duration="۳۰ روز"
            services="میکاپ عروس-کاشت ناخن-اکستنشن مژه"
          />
          <div className="flex flex-col gap-5 rounded-2xl border border-neutral-200 border-opacity-80 bg-white p-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6 lg:p-6">
            <div className="border">
              <img src="https://picsum.photos/420/300" alt="test" />
            </div>
            <div className="flex flex-col gap-5 border lg:gap-6">
              <h2 className="text-base font-bold lg:text-lg">اطلاعات تماس</h2>
              <div className="flex items-start gap-2">
                <Clock size={30} className="text-secondary" />
                <span className="text-sm font-normal lg:text-base">
                  <strong className="font-medium">ساعت کاری: </strong>
                  شنبه تا پنجشنبه از ساعت ۹:۰۰ صبح تا ۲۱:۰۰ شب پذیرای شما هستیم.
                  به استثنا جمعه ها که تعطیل میباشد.
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 text-sm font-medium lg:text-base">
                <span>شبکه های اجتماعی:</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
