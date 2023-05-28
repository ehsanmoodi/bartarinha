import { DiscountShape } from 'iconsax-react'
import { Button } from './button'

interface DiscountCardProps {
  amount: string
  duration: string
  services: string
}

export function DiscountCard({
  amount,
  duration,
  services,
}: DiscountCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl bg-[#F26F14] bg-opacity-[0.08] p-5 text-[#F26F14] lg:flex-row lg:gap-8">
      <div className="flex items-center gap-1">
        <DiscountShape size={40} color="#F26F14" />
        <span className="text-lg font-extrabold">{amount} ختفیف</span>
        <span className="text-base font-medium">(ویژه کاربران برترین‌ها)</span>
      </div>
      <div className="text-center text-base font-normal leading-7 lg:text-start">
        مدت اعتبار این کوپن {duration} دیگر است. <br />
        خدمات تخفیف شامل: {services}
      </div>
      <Button color="orange" classes="lg:ms-auto">
        دریافت کوپن تخفیف
      </Button>
    </div>
  )
}
