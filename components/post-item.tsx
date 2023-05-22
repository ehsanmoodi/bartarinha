import { ArrowLeft, Calendar2 } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'

interface PostItemProps {
  image: string
  title: string
  date: string
  slug: string
}

export function PostItem({ image, title, date, slug }: PostItemProps) {
  return (
    <article className="group rounded-2xl bg-[#F6F6F6]">
      <div className="relative h-52 w-full overflow-hidden rounded-t-2xl bg-black">
        <Image
          src={image}
          alt={title}
          fill
          className="h-full w-full rounded-[inherit] object-cover object-center"
        />
        <div className="absolute -bottom-52 left-0 h-full w-full rounded-[inherit] bg-post-item-layer transition-all duration-300 group-hover:bottom-0"></div>
      </div>
      <div className="relative m-3 -mt-14 flex flex-col gap-4 rounded-xl border border-neutral-200 border-opacity-80 bg-white p-3">
        <Link href={`/blog/${slug}`} className="text-base font-semibold">
          {title}
        </Link>
        <div className="flex flex-row items-center justify-between gap-4 text-sm font-medium">
          <span className="flex items-end text-neutral-300">
            <Calendar2 color="#A9A9A9" size={22} />
            {date}
          </span>
          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-1 transition group-hover:text-primary"
          >
            ادامه مطلب
            <ArrowLeft size={22} className="group-hover:text-primary" />
          </Link>
        </div>
      </div>
    </article>
  )
}
