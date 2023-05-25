import { ArrowLeft, Calendar2 } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'

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
    <article className="">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          fill
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div>
        <Link href={`/tehran/${slug}`}>{title}</Link>
        <p>{excerpt.substring(0, 25) + '...'}</p>
        <hr />
        <div>
          <span>
            <Calendar2 size={22} color="#A9A9A9" />
            {date}
          </span>
          <Link href={`/tehran/${slug}`}>
            ادامه مطلب
            <ArrowLeft size={22} className="text-secondary" />
          </Link>
        </div>
      </div>
    </article>
  )
}
