import { ArrowLeft, Location, Star1 } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'

export function AdItem() {
  return (
    <article className="group rounded-2xl border border-neutral-200 border-opacity-80 bg-white p-4 transition-all hover:border-opacity-60 hover:shadow-item lg:p-5">
      <div className="relative h-48 overflow-hidden rounded-xl ">
        <Image
          src="https://picsum.photos/200/300?random=1"
          alt=""
          className="h-full w-full rounded-[inherit] object-cover object-center"
          fill
          quality={100}
        />
        <span
          className="absolute left-5 top-0 rounded-b-full bg-primary px-2 py-4 text-xl font-bold text-white"
          style={{ writingMode: 'vertical-rl' }}
        >
          ۳۰ ٪
        </span>
        <Link
          href="#"
          className="absolute -bottom-48 left-0 flex h-full w-full items-center justify-center rounded-[inherit] bg-item-layer transition-all group-hover:bottom-0"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
            <ArrowLeft size={21} color="#27A3CB" />
          </span>
        </Link>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <Link href="#" className="text-base font-semibold">
          عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد
        </Link>
        <div className="flex items-center justify-between gap-2 text-base font-medium">
          <span className="flex items-center gap-2">
            <Location size={24} />
            دولت آباد
          </span>
          <span className="flex items-center gap-2">
            ۴.۶
            <Star1 color="#FBBF24" size={24} variant="Bold" className="mb-2" />
          </span>
        </div>
      </div>
    </article>
  )
}
