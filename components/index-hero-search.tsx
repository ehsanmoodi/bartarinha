import { SearchNormal } from 'iconsax-react'
import { Select, SelectItem } from './select'

export function IndexHeroSearch() {
  return (
    <div className="mt-auto flex w-full flex-col gap-4 rounded-[14px] border border-neutral-200 border-opacity-60 bg-white p-4 shadow-lg lg:gap-6 lg:p-5">
      <p className="text-base font-normal">
        بهترین کسب و کار و خدمات مورد نیازتان را پیدا کنید
      </p>
      <div className="flex flex-col gap-4 lg:flex-row">
        <Select defaultValue="">
          <SelectItem value="">محدوده فعالیت</SelectItem>
          <SelectItem value="1">انتخاب یک</SelectItem>
          <SelectItem value="2">انتخاب دو</SelectItem>
          <SelectItem value="3">انتخاب سه</SelectItem>
        </Select>
        <Select defaultValue="">
          <SelectItem value="">نوع فعالیت</SelectItem>
          <SelectItem value="1">انتخاب یک</SelectItem>
          <SelectItem value="2">انتخاب دو</SelectItem>
          <SelectItem value="3">انتخاب سه</SelectItem>
        </Select>
        <button className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-lg border border-primary bg-primary transition-all">
          <SearchNormal size={22} className="text-white" />
        </button>
      </div>
    </div>
  )
}
