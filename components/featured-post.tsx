import Image from 'next/image'
import Link from 'next/link'

interface FeaturePostProps {
  image: string
  title: string
  slug: string
}

export function FeaturedPost({ image, title, slug }: FeaturePostProps) {
  return (
    <Link href={`/blog/${slug}`} className="group relative flex rounded-[14px]">
      <div className="relative h-64 w-full rounded-[inherit]">
        <Image
          src={image}
          alt={title}
          fill
          className="h-full w-full rounded-[inherit] object-cover object-center"
        />
        <div className="absolute bottom-0 top-0 h-full w-full rounded-[inherit] bg-featured-layer transition-all group-hover:bg-item-layer"></div>
      </div>
      <div className="absolute inset-0 left-0 top-0 flex items-end p-4 text-base font-medium leading-7 text-white lg:p-5">
        {title.substring(0, 60) + '...'}
      </div>
    </Link>
  )
}
