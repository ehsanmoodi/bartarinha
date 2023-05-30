import {
  AdsTabs,
  Breadcrumb,
  Button,
  DiscountCard,
  GallerySlider,
  Keyword,
  LatestPosts,
  ShareAndScore,
  Title,
  VitrinSlider,
} from '@/components'
import { Clock, Refresh } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AdsDetail() {
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

          <DiscountCard
            amount="۱۰٪"
            duration="۳۰ روز"
            services="میکاپ عروس-کاشت ناخن-اکستنشن مژه"
          />

          <div className="flex flex-col gap-5 rounded-2xl border border-neutral-200 border-opacity-80 bg-white p-5 md:flex-row">
            <div className="relative h-[300px] w-full shrink-0 rounded-[14px] lg:w-[420px]">
              <Image
                src="https://picsum.photos/420/300"
                alt="test"
                className="h-full w-full rounded-[inherit] object-cover object-center"
                fill
              />
            </div>

            <div className="flex grow flex-col gap-5">
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
                <ul className="flex gap-3">
                  <li>
                    <Link
                      href="#"
                      className="group flex h-12 w-12 items-center justify-center rounded-lg bg-primary bg-opacity-10 transition-all hover:bg-opacity-100"
                    >
                      <svg
                        width="22"
                        height="22"
                        fill="none"
                        className="stroke-primary group-hover:stroke-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.584 1.833H6.417a4.583 4.583 0 0 0-4.583 4.584v9.166a4.583 4.583 0 0 0 4.583 4.584h9.166a4.583 4.583 0 0 0 4.584-4.584V6.417a4.583 4.583 0 0 0-4.584-4.584Z"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.667 10.422a3.666 3.666 0 1 1-7.253 1.076 3.666 3.666 0 0 1 7.253-1.075ZM16.041 5.958h.01"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex h-12 w-12 items-center justify-center rounded-lg bg-primary bg-opacity-10 transition-all hover:bg-opacity-100"
                    >
                      <svg
                        width="23"
                        height="22"
                        fill="none"
                        className="stroke-primary group-hover:stroke-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.923 8.525v2.658h2.4c.185 0 .277.184.277.367l-.37 1.742c0 .091-.184.183-.276.183h-2.031v6.692h-2.77v-6.6H8.586c-.185 0-.277-.092-.277-.275V11.55c0-.183.092-.275.277-.275h1.569V8.25c0-1.558 1.2-2.75 2.769-2.75h2.492c.185 0 .277.092.277.275v2.2c0 .183-.092.275-.277.275H13.2c-.185 0-.277.092-.277.275Z"
                          strokeWidth="1.2"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13.846 20.167H8.308c-4.616 0-6.462-1.834-6.462-6.417v-5.5c0-4.583 1.846-6.417 6.462-6.417h5.538c4.616 0 6.462 1.834 6.462 6.417v5.5c0 4.583-1.846 6.417-6.462 6.417Z"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex h-12 w-12 items-center justify-center rounded-lg bg-primary bg-opacity-10 transition-all hover:bg-opacity-100"
                    >
                      <svg
                        width="23"
                        height="22"
                        fill="none"
                        className="stroke-primary group-hover:stroke-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.37 18.883a9.297 9.297 0 0 0 4.707 1.284c5.077 0 9.23-4.125 9.23-9.167s-4.153-9.167-9.23-9.167C6 1.833 1.847 5.958 1.847 11c0 1.65.46 3.208 1.2 4.583l-.758 2.89a1 1 0 0 0 1.24 1.216l2.84-.806Z"
                          strokeWidth="1.2"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.23 13.611c0 .149-.033.301-.104.45a1.876 1.876 0 0 1-.965.908c-.25.102-.52.156-.81.156-.425 0-.879-.099-1.357-.301a7.323 7.323 0 0 1-1.431-.817c-.479-.346-.932-.73-1.365-1.155a11.751 11.751 0 0 1-1.16-1.349 7.338 7.338 0 0 1-.816-1.406c-.2-.47-.3-.92-.3-1.35 0-.28.05-.548.15-.795.1-.252.259-.483.479-.69.266-.26.557-.387.865-.387.117 0 .233.025.337.074.108.05.204.124.279.231l.965 1.35c.075.102.13.197.167.288a.648.648 0 0 1 .058.252c0 .098-.03.197-.088.292a1.402 1.402 0 0 1-.233.293l-.316.326a.22.22 0 0 0-.066.165c0 .033.004.062.012.095l.034.082c.074.137.203.314.386.528.188.215.387.434.604.652.224.219.44.421.661.607.216.181.395.305.537.38.02.007.046.02.075.032a.29.29 0 0 0 .104.017.23.23 0 0 0 .17-.07l.316-.31c.104-.103.204-.181.3-.23a.557.557 0 0 1 .295-.088c.08 0 .162.017.254.054.091.037.187.09.291.161l1.377.97c.108.074.183.16.229.263a.84.84 0 0 1 .066.322Z"
                          strokeWidth="1.2"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex h-12 w-12 items-center justify-center rounded-lg bg-primary bg-opacity-10 transition-all hover:bg-opacity-100"
                    >
                      <svg
                        width="22"
                        height="22"
                        fill="none"
                        className="stroke-primary group-hover:stroke-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.666 7.333a5.5 5.5 0 0 1 5.5 5.5v6.417H16.5v-6.417a1.833 1.833 0 1 0-3.667 0v6.417H9.166v-6.417a5.5 5.5 0 0 1 5.5-5.5v0ZM5.5 8.25H1.833v11H5.5v-11ZM3.667 5.5a1.833 1.833 0 1 0 0-3.667 1.833 1.833 0 0 0 0 3.667Z"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
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
        </div>

        <AdsTabs />

        <GallerySlider />

        <VitrinSlider
          title={
            <Title>
              ویترین
              <strong className="font-black"> سالن زیبایی سمیرا</strong>
            </Title>
          }
        />
        <LatestPosts
          title={
            <Title>
              مقالات
              <strong className="font-black"> مرتبط</strong>
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
