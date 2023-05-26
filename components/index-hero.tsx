import Image from 'next/image'
import heroImage from '../public/images/index-hero/image.png'
import { IndexHeroSearch } from './index-hero-search'

export function IndexHero() {
  return (
    <section className="overflow-hidden border border-black bg-[url('/images/index-hero/bg.png')] bg-contain bg-[center_top] bg-no-repeat pb-16 pt-8 lg:pb-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-around px-4 lg:flex-row lg:items-stretch">
        <div className="order-2 flex grow flex-col items-center gap-3 text-center lg:order-1 lg:items-start lg:gap-6 lg:pb-12 lg:pt-8 lg:text-start">
          <h1 className="text-2xl font-black md:text-3xl lg:text-4xl">
            حضور موثر در فضای مجازی با{' '}
            <span className="text-primary">برترین ها</span>
          </h1>
          <p className="text-base font-normal">
            بانک اطلاعات تجاری شهر تهران در قالب پایگاه اینترنتی برترین‌ها در
            سال ۱۳۸۶ آغاز به کار کرد و در سال ۱۳۹۸ مجوز دانش بنیان از معاونت
            علمی و فناوری را دریافت نمود.
          </p>
          <IndexHeroSearch />
        </div>
        <div className="shrik-0 order-1 lg:order-2">
          <Image
            src={heroImage}
            alt="hero image"
            className="lg:origin-right lg:scale-[1.3]"
          />
        </div>
      </div>
    </section>
  )
}
