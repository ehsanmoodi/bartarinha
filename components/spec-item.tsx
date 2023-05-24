import { ArrowLeft, DiscountShape, Location, Star1 } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'

export function SpecItem() {
  return (
    <div>
      <div className="relative flex flex-col gap-4 rounded-xl border border-neutral-200 border-opacity-80 bg-white p-4 transition-all hover:shadow-item lg:flex-row lg:p-5">
        <div className="relative h-48 w-full shrink-0 rounded-xl lg:h-[130px] lg:w-[180px]">
          <Image
            src={`https://picsum.photos/200/300?random=${Math.floor(
              Math.random() * 10
            )}`}
            alt=""
            className="h-full w-full rounded-[inherit] object-cover object-center"
            fill
            quality={100}
          />
        </div>
        <div className="flex flex-col justify-around gap-3">
          <Link href="#" className="text-base font-semibold">
            عنوان اصلی آگهی مورد نظر تا دو خط در این قسمت قرار میگیرد
          </Link>
          <div className="flex items-center justify-between gap-2 text-base font-medium">
            <span className="flex items-center gap-2">
              <Location size={24} />
              دولت آباد
            </span>
            <span className="flex items-center gap-2">
              ۴.۶
              <Star1
                color="#FBBF24"
                size={24}
                variant="Bold"
                className="mb-2"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="mx-5 flex flex-col items-center justify-between gap-3 rounded-b-xl bg-[#F6F6F6] p-4 text-primary md:flex-row lg:p-5">
        <div className="flex items-center gap-[6px]">
          <DiscountShape size={40} color="#27A3CB" />
          <span className="text-lg font-extrabold">۱۰ ٪ تخفیف</span>
          <span className="text-base font-light">(۱۰ روز مانده)</span>
        </div>
        <Link
          href="#"
          className="flex items-center gap-1 text-base font-medium"
        >
          مشاهده آگهی
          <ArrowLeft size="24" color="#27A3CB" />
        </Link>
      </div>
    </div>
  )
}
