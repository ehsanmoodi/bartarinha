'use client'

import { ReactNode } from 'react'
import { SwiperSlide } from 'swiper/react'
import { Slider } from './slider'
import { VitrinCard } from './vitrin-card'

interface VitrinSliderProps {
  title: ReactNode
}

export function VitrinSlider({ title }: VitrinSliderProps) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 lg:gap-10">
      {title}
      <Slider>
        <SwiperSlide className="flex flex-col gap-7 lg:grid lg:grid-cols-2">
          <VitrinCard
            image="https://picsum.photos/200/300?random=1"
            title="عنوان تستی خدمات"
            score="۲.۵"
            showPriceTag
            slug="vitrin-1"
            price="۶,۰۰,۰۰۰"
            discountedPrice="۵,۰۰,۰۰۰"
          />
          <VitrinCard
            image="https://picsum.photos/200/300?random=2"
            title="عنوان تستی خدمات"
            score="۲.۵"
            showPriceTag
            slug="vitrin-2"
            price="۶,۰۰,۰۰۰"
            discountedPrice="۵,۰۰,۰۰۰"
          />
          <VitrinCard
            image="https://picsum.photos/200/300?random=3"
            title="عنوان تستی خدمات"
            score="۲.۵"
            showPriceTag
            slug="vitrin-3"
            price="۶,۰۰,۰۰۰"
          />
          <VitrinCard
            image="https://picsum.photos/200/300?random=4"
            title="عنوان تستی خدمات"
            score="۲.۵"
            showPriceTag
            slug="vitrin-4"
            price="۶,۰۰,۰۰۰"
            discountedPrice="۵,۰۰,۰۰۰"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-7 lg:grid lg:grid-cols-2">
          <VitrinCard
            image="https://picsum.photos/200/300?random=1"
            title="عنوان تستی خدمات"
            score="۲.۵"
            showPriceTag
            slug="vitrin-1"
            price="۶,۰۰,۰۰۰"
            discountedPrice="۵,۰۰,۰۰۰"
          />
          <VitrinCard
            image="https://picsum.photos/200/300?random=2"
            title="عنوان تستی خدمات"
            score="۲.۵"
            showPriceTag
            slug="vitrin-2"
            price="۶,۰۰,۰۰۰"
            discountedPrice="۵,۰۰,۰۰۰"
          />
          <VitrinCard
            image="https://picsum.photos/200/300?random=3"
            title="عنوان تستی خدمات"
            score="۲.۵"
            showPriceTag
            slug="vitrin-3"
            price="۶,۰۰,۰۰۰"
          />
          <VitrinCard
            image="https://picsum.photos/200/300?random=4"
            title="عنوان تستی خدمات"
            score="۲.۵"
            showPriceTag
            slug="vitrin-4"
            price="۶,۰۰,۰۰۰"
            discountedPrice="۵,۰۰,۰۰۰"
          />
        </SwiperSlide>
      </Slider>
    </div>
  )
}
