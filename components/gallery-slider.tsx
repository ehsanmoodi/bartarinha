'use client'

import { SwiperSlide } from 'swiper/react'
import { Slider } from './slider'
import { Title } from './title'
import Image from 'next/image'

export function GallerySlider() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 lg:gap-10">
      <Title>
        گالری تصاویر و<strong className="font-black"> ویدیوها</strong>
      </Title>
      <Slider
        spaceBetween={32}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide className="relative h-80 w-full rounded-[14px]">
          <Image
            src="https://picsum.photos/200/300?random=1"
            alt="image1"
            className="h-full w-full rounded-[inherit] object-cover object-center"
            fill
          />
        </SwiperSlide>
        <SwiperSlide className="relative h-80 w-full rounded-[14px]">
          <Image
            src="https://picsum.photos/200/300?random=2"
            alt="image1"
            className="h-full w-full rounded-[inherit] object-cover object-center"
            fill
          />
        </SwiperSlide>
        <SwiperSlide className="relative h-80 w-full rounded-[14px]">
          <Image
            src="https://picsum.photos/200/300?random=3"
            alt="image1"
            className="h-full w-full rounded-[inherit] object-cover object-center"
            fill
          />
        </SwiperSlide>
        <SwiperSlide className="relative h-80 w-full rounded-[14px]">
          <Image
            src="https://picsum.photos/200/300?random=4"
            alt="image1"
            className="h-full w-full rounded-[inherit] object-cover object-center"
            fill
          />
        </SwiperSlide>
      </Slider>
    </div>
  )
}
