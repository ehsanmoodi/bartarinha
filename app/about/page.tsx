import Image from 'next/image'

import heroImage from '../../public/images/about/image.png'
import { Title } from '@/components'

export default function About() {
  return (
    <main className="">
      <section className="overflow-hidden bg-[url('/images/about/bg.png')] bg-contain bg-[center_top] bg-no-repeat pb-16 pt-8 lg:pb-32">
        <div className="mx-auto flex max-w-6xl flex-col px-4 lg:flex-row">
          <div className="order-2 flex flex-col gap-3 lg:order-1 lg:gap-6 lg:pb-12 lg:pt-8">
            <Title align="start">
              با <strong>برترینها </strong> بیشتر آشنا شوید
            </Title>
            <p className="text-base font-normal">
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
          <div className="shrik-0 order-1 grow lg:order-2  ">
            <Image
              src={heroImage}
              alt="hero image"
              className="lg:origin-right lg:scale-[1.3]"
            />
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-16 lg:gap-28"></div>
    </main>
  )
}
