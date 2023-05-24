import { ArrowLeft, Reserve } from 'iconsax-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface CatItemProps {
  title: string
  text: string
  href: string
  icon: ReactNode
  hrefLabel?: string
}

export function CatItem({
  title,
  text,
  href,
  icon,
  hrefLabel = 'آگهی ها',
}: CatItemProps) {
  return (
    <div className="group flex gap-5 rounded-xl border border-neutral-200 border-opacity-80 bg-white p-4 transition-all hover:bg-primary hover:shadow-cat-item lg:gap-7 lg:p-5">
      <div className="relative my-auto flex h-16 w-16 shrink-0 items-center justify-center svg:relative svg:text-primary svg:transition-all svg:group-hover:stroke-white svg:group-hover:text-white lg:h-20 lg:w-20">
        <span className="absolute right-0 top-0 h-full w-1/2 rounded-[10px_100px_100px_10px] bg-[#F6F6F6] transition-all group-hover:bg-white group-hover:bg-opacity-10"></span>
        <span className="absolute left-2 top-1 h-[6px] w-[6px] rounded-full bg-primary group-hover:bg-white"></span>
        <span className="absolute -left-3 top-1/2 h-[10px] w-[10px] rounded-full border border-primary group-hover:border-white"></span>
        <span className="absolute bottom-1 left-4 h-[3px] w-[3px] rounded-full bg-primary group-hover:bg-white"></span>
        {icon}
      </div>
      <div className="flex grow flex-col justify-around gap-1 transition-all group-hover:text-white">
        <Link href={href} className="text-lg font-semibold">
          {title}
        </Link>
        <div className="flex items-center justify-between gap-2 text-base">
          <span className="font-light">{text}</span>
          <Link
            href={href}
            className="flex items-center gap-2 whitespace-nowrap font-medium text-primary transition-all group-hover:text-white"
          >
            {hrefLabel}
            <ArrowLeft
              size={24}
              className="mb-1 text-primary transition-all group-hover:text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
