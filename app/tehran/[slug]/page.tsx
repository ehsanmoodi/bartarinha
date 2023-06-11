'use client'

import {
  Breadcrumb,
  PostExcerpt,
  PostTags,
  Slider,
  AdCard,
  Title,
  CommentForm,
  Reply,
  SidebarAdCard,
  SharePost,
  PostMeta,
  Banner,
  ButtonLink,
} from '@/components'
import Image from 'next/image'

export default function TehranPost() {
  return (
    <main>
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
        <div className="flex flex-col gap-5">
          <Breadcrumb
            items={[
              {
                title: 'صفحه اصلی',
                link: '/',
              },
              {
                title: 'مقالات',
              },
            ]}
          />
          <h1 className="text-xl font-extrabold lg:text-2xl">
            جاذبه های گردشگری پایتخت ایران را بشناسیم
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-14 lg:col-span-9 lg:gap-20">
            <div className="flex flex-col gap-8">
              <div className="max-h-[500px] w-full rounded-2xl">
                <Image
                  src="https://picsum.photos/822/486"
                  alt="feature iagme"
                  width={822}
                  height={486}
                  className="h-full w-full rounded-[inherit] object-cover object-center"
                />
              </div>

              <PostExcerpt>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </PostExcerpt>

              <div className="content">
                <h1>1. لورم ایپسوم متن ساختگی با تولید سادگی</h1>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
                  ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
                  و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                  و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                  جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                  برای فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
                  امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                  سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                  دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                  اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
                  با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                  سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                  طلبد
                </p>
                <h2>2. لورم ایپسوم متن ساختگی با تولید سادگی</h2>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد.
                </p>
              </div>

              <PostTags />
            </div>

            <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
              <Banner
                imageSrc="https://picsum.photos/350/500?random=3"
                imageClasses="w-full h-52"
                vertical
              >
                <h2 className="text-xl font-light lg:text-[22px]">
                  <strong className="font-black">عنوان تستی </strong>
                  بنر برترین ها
                </h2>
                <p className="text-base font-normal leading-7">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافی
                </p>
                <ButtonLink
                  href="#"
                  label="آرشیو آگهی ها"
                  color="white"
                  classes="w-full"
                />
              </Banner>
              <Banner
                imageSrc="https://picsum.photos/350/500?random=5"
                imageClasses="w-full h-52"
                vertical
              >
                <h2 className="text-xl font-light lg:text-[22px]">
                  <strong className="font-black">عنوان تستی </strong>
                  بنر برترین ها
                </h2>
                <p className="text-base font-normal leading-7">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافی
                </p>
                <ButtonLink
                  href="#"
                  label="آرشیو آگهی ها"
                  color="white"
                  classes="w-full"
                />
              </Banner>
            </div>

            <div className="flex flex-col gap-8">
              <Title align="start">
                دیدگاه‌های
                <strong className="font-black"> مطلب</strong>
              </Title>
              <div className="flex flex-col gap-8 lg:gap-16">
                <div className="flex flex-col gap-7">
                  <Reply score={3} />
                  <Reply score={5} indent />
                </div>
                <CommentForm
                  actionLabel="ارسال دیدگاه"
                  title="نظرتان را در این مطلب با ما به اشتراک بگذارید"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-3">
            <PostMeta />

            <SharePost />

            <div>
              <SidebarAdCard
                image="https://picsum.photos/200/300?random=200"
                title="عنوان اصلی آگهی مورد نظر تا دو خط در این قسمت قرار میگیرد"
                location="دولت آباد"
                price="۶,۰۰,۰۰۰"
                discountedPrice="۵,۰۰,۰۰۰"
                slug="ad-200"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
