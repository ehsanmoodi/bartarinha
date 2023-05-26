import Link from 'next/link'
import { LayeredImage } from './layared-image'
import { ArrowSquareLeft, Location } from 'iconsax-react'

interface SmallAdCardProps {
  image: string
  title: string
  location: string
  slug: string
}

export function SmallAdCard({
  image,
  title,
  location,
  slug,
}: SmallAdCardProps) {
  return (
    <article className="group flex gap-3 rounded-[10px] border border-neutral-200 p-3 transition-all hover:shadow-item lg:gap-4 lg:p-4">
      <LayeredImage
        src={image}
        classes="shrink-0 rounded-lg w-[80px] h-[90px]"
        layerOffset="-bottom-[90px]"
        alt={title}
      />
      <div className="flex grow flex-col justify-around gap-3 group-hover:text-primary">
        <Link href={`/ads/${slug}`} className="text-sm font-semibold">
          {title}
        </Link>
        <div className="flex items-center justify-between gap-3 text-sm font-medium group-hover:text-primary">
          <span className="flex items-center gap-1">
            <Location
              size={22}
              className="text-secondary group-hover:text-primary"
            />
            {location}
          </span>
          <Link href={`/ads/${slug}`}>
            <ArrowSquareLeft
              size={22}
              className="text-secondary group-hover:text-primary"
            />
          </Link>
        </div>
      </div>
    </article>
  )
}
