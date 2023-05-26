import { ArrowLeft, Calendar2 } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import { LayeredImage } from './layared-image'

interface TehranCardProps {
  image: string
  title: string
  excerpt: string
  slug: string
  date: string
}

export function TehranCard({
  image,
  title,
  excerpt,
  slug,
  date,
}: TehranCardProps) {
  return (
    <article className="group flex flex-col gap-4 rounded-2xl border border-neutral-200 border-opacity-80 bg-white p-4 transition-all hover:border-opacity-60 hover:shadow-item lg:flex-row">
      <LayeredImage
        src={image}
        alt={title}
        classes="h-44 w-full md:w-[180px] md:h-[135px] rounded-[14px_14px_2px_2px] md:rounded-[2px_14px_14px_2px]"
        layerOffset="-bottom-44 md:-bottom-[135px]"
      />
      <div className="flex grow flex-col justify-around gap-3">
        <Link href={`/tehran/${slug}`} className="text-base font-semibold">
          {title}
        </Link>
        <p className="text-sm font-normal">
          {excerpt.substring(0, 80) + '...'}
        </p>
        <hr className="border border-neutral-200 border-opacity-60" />
        <div className="flex items-center justify-between gap-3 text-sm font-medium">
          <span className="flex items-end gap-1 text-neutral-300">
            <Calendar2 size={22} color="#A9A9A9" />
            {date}
          </span>
          <Link
            href={`/tehran/${slug}`}
            className="flex items-center gap-1 transition-all group-hover:text-primary"
          >
            ادامه مطلب
            <ArrowLeft
              size={22}
              className="text-secondary group-hover:text-primary"
            />
          </Link>
        </div>
      </div>
    </article>
  )
}
