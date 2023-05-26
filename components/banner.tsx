import Image from 'next/image'
import { ReactNode } from 'react'

interface BannerProps {
  imageSrc: string
  imageClasses: string
  showPattern?: boolean
  children: ReactNode
}

export function Banner({
  imageSrc,
  imageClasses,
  showPattern = true,
  children,
}: BannerProps) {
  return (
    <div className="relative rounded-2xl">
      <div className="flex flex-col rounded-[inherit] bg-primary bg-[url('/images/banner-pattern.png')] bg-right-bottom bg-no-repeat text-white lg:flex-row">
        <div className="relative order-2 flex grow flex-col items-center gap-5 px-5 py-6 text-center lg:order-1 lg:items-start lg:justify-center lg:px-8 lg:py-9 lg:text-start">
          {children}
        </div>
        <div
          className={`relative order-1 shrink-0 rounded-t-2xl lg:order-2 lg:rounded-l-2xl lg:rounded-tr-[unset] ${imageClasses}`}
        >
          <Image
            src={imageSrc}
            alt="Banner Image"
            fill
            className="h-full w-full rounded-[inherit] object-cover object-center"
          />
          <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-mobile-banner-layer lg:bg-desktop-banner-layer"></div>
        </div>
      </div>
      {showPattern && (
        <div className="absolute inset-0 -z-10 mx-auto h-full w-[94%] -rotate-[3.5deg] rounded-[inherit] border border-primary bg-white"></div>
      )}
    </div>
  )
}
