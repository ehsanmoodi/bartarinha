import Link from 'next/link'
import { LayeredImage } from './layared-image'
import { Location, Star1 } from 'iconsax-react'

interface VitrinCardProps {
  image: string
  title: string
  score: string
  location: string
  price: string
  discountedPrice?: string
  slug: string
}

export function VitrinCard({
  image,
  title,
  score,
  location,
  price,
  discountedPrice,
  slug,
}: VitrinCardProps) {
  return (
    <article className="group flex flex-col gap-3 rounded-[10px] border border-neutral-200 p-3 transition-all hover:shadow-item lg:flex-row lg:gap-4 lg:p-4">
      <LayeredImage
        src={image}
        classes="shrink-0 rounded-lg w-full h-44 lg:w-[140px] lg:h-[100px]"
        layerOffset="-bottom-44 lg:-bottom-[100px]"
        alt={title}
      />
      <div className="flex grow flex-col justify-around gap-3 ">
        <div className="flex flex-wrap items-center justify-between gap-3 text-base">
          <Link
            href={`/ads/${slug}`}
            className="font-semibold group-hover:text-primary"
          >
            {title}
          </Link>
          <span className="flex items-center gap-1 font-medium">
            {score}
            <Star1
              size={24}
              variant="Bold"
              className="transition-all group-hover:rotate-[360deg]"
              color="#FBBF24"
            />
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="flex items-center gap-1 text-base font-medium">
            <Location size={24} className="text-secondary" />
            {location}
          </span>
          <span className="flex items-center gap-1 text-lg">
            {discountedPrice && (
              <span className="font-medium line-through	opacity-70">
                {price}
              </span>
            )}
            <span className="font-extrabold group-hover:text-primary">
              {discountedPrice ? discountedPrice : price}
            </span>
            <span className="text-sm font-light group-hover:text-primary">
              تومان
            </span>
          </span>
        </div>
      </div>
    </article>
  )
}
