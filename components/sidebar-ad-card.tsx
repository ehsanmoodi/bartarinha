'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { Location, WalletMoney } from 'iconsax-react'
import { ButtonLink } from './button-link'
import { Slider } from './slider'

interface SidebarAdCardProps {
  image: string
  title: string
  location: string
  price: string
  discountedPrice: string
  slug: string
}

export function SidebarAdCard({
  image,
  title,
  location,
  price,
  discountedPrice,
  slug,
}: SidebarAdCardProps) {
  return (
    <Slider renderSmallActions>
      <SwiperSlide>
        <article className="flex flex-col gap-4 rounded-[14px] bg-primary p-4 text-white">
          <div className="relative h-36 w-full rounded-xl">
            <Image
              src={image}
              alt={title}
              fill
              className="h-full w-full rounded-[inherit] object-cover object-center"
            />
          </div>
          <Link href={`/ads/${slug}`} className="text-sm font-semibold">
            {title}
          </Link>
          <div className="flex items-center justify-between gap-2 text-sm font-normal">
            <span className="flex gap-1">
              <Location size={22} color="white" />
              مکان:
            </span>
            <span className="font-medium">{location}</span>
          </div>
          <div className="flex items-center justify-between gap-2 text-sm font-normal">
            <span className="flex items-center gap-1">
              <WalletMoney size={22} color="white" />
              قیمت:
            </span>
            <span className="flex items-center gap-1 font-medium">
              <span className="font-medium line-through	opacity-70">
                {price}
              </span>
              <span className="font-extrabold">{discountedPrice}</span>
              <span className="font-light">تومان</span>
            </span>
          </div>
          <ButtonLink color="white" label="جزییات آگهی" href={`/ads/${slug}`} />
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className="flex flex-col gap-4 rounded-[14px] bg-primary p-4 text-white">
          <div className="relative h-36 w-full rounded-xl">
            <Image
              src={image}
              alt={title}
              fill
              className="h-full w-full rounded-[inherit] object-cover object-center"
            />
          </div>
          <Link href={`/ads/${slug}`} className="text-sm font-semibold">
            {title}
          </Link>
          <div className="flex items-center justify-between gap-2 text-sm font-normal">
            <span className="flex gap-1">
              <Location size={22} color="white" />
              مکان:
            </span>
            <span className="font-medium">{location}</span>
          </div>
          <div className="flex items-center justify-between gap-2 text-sm font-normal">
            <span className="flex items-center gap-1">
              <WalletMoney size={22} color="white" />
              قیمت:
            </span>
            <span className="flex items-center gap-1 font-medium">
              <span className="font-medium line-through	opacity-70">
                {price}
              </span>
              <span className="font-extrabold">{discountedPrice}</span>
              <span className="font-light">تومان</span>
            </span>
          </div>
          <ButtonLink color="white" label="جزییات آگهی" href={`/ads/${slug}`} />
        </article>
      </SwiperSlide>
    </Slider>
  )
}
