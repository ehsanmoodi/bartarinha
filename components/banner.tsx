import Image from 'next/image'
import { ReactNode } from 'react'

interface BannerProps {
  image: string
  showPattern?: boolean
  children: ReactNode
}

export function Banner({ image, showPattern = true, children }: BannerProps) {
  return (
    <div className="flex flex-col rounded-2xl bg-primary text-white lg:flex-row">
      <div className="relative order-2 flex grow flex-col items-center gap-5 px-5 py-6 text-center lg:order-1 lg:items-start lg:px-8 lg:py-9 lg:text-start">
        {children}
      </div>
      <div className="relative order-1 h-44 min-h-full w-full shrink-0 rounded-t-2xl lg:order-2 lg:h-44 lg:w-96 lg:rounded-l-2xl lg:rounded-t-[unset]">
        <Image
          src={image}
          alt="Banner Image"
          fill
          className="h-full w-full rounded-[inherit] object-cover object-center"
        />
      </div>
    </div>
  )
}
