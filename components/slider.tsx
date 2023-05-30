'use client'
import { Swiper, useSwiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { ReactNode, useRef } from 'react'
import { ArrowLeft2 } from 'iconsax-react'

interface SliderProps {
  children: ReactNode
  renderSmallActions?: boolean
  alignActions?: 'center' | 'start' | 'end'
  spaceBetween?: number
  slidesPerView?: number
  breakpoints?: {
    [key: number]: {
      spaceBetween?: number
      slidesPerView: number
    }
  }
}

export function Slider({
  children,
  renderSmallActions = false,
  alignActions = 'center',
  spaceBetween = 50,
  slidesPerView = 1,
  breakpoints,
}: SliderProps) {
  const nextEl = useRef(null)
  const prevEl = useRef(null)

  function NextButton() {
    const swiper = useSwiper()

    return (
      <button
        ref={nextEl}
        onClick={() => swiper.slideNext()}
        className={`group relative z-20 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary outline-none transition-all hover:bg-primary ${
          renderSmallActions ? 'h-[42px] w-[42px]' : 'h-12 w-12'
        } `}
      >
        <ArrowLeft2 size={18} className="text-primary group-hover:text-white" />
      </button>
    )
  }

  function PrevButton() {
    const swiper = useSwiper()

    return (
      <button
        ref={prevEl}
        onClick={() => swiper.slidePrev()}
        className={`group relative z-20 flex shrink-0 items-center justify-center rounded-lg border border-primary outline-none transition-all hover:bg-primary ${
          renderSmallActions ? 'h-[42px] w-[42px]' : 'h-12 w-12'
        }`}
      >
        <ArrowLeft2
          size={18}
          className="rotate-180 text-primary group-hover:text-white"
        />
      </button>
    )
  }

  return (
    <Swiper
      className="relative w-full"
      modules={[Navigation, Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      navigation={{
        nextEl: nextEl.current,
        prevEl: prevEl.current,
      }}
      pagination={{
        clickable: true,
        el: '.pagination',
      }}
    >
      {children}
      <div
        className={`relative mt-6 flex items-center gap-3 lg:mt-8 ${
          alignActions === 'center' ? 'justify-center' : ''
        } ${alignActions === 'end' ? 'justify-end' : ''} ${
          alignActions === 'start' ? 'justify-start' : ''
        }`}
      >
        <PrevButton />
        <div className="pagination flex !w-auto items-center justify-center gap-[6px]"></div>
        <NextButton />
      </div>
    </Swiper>
  )
}
