import { Calendar2, Clock, Eye, Folder2, Messages1 } from 'iconsax-react'
import { SidebarCard } from './sidebar-card'

export function PostMeta() {
  return (
    <SidebarCard>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2 text-sm font-normal text-secondary">
          <span className="flex items-center gap-[6px] font-medium">
            <Clock />
            زمان مطالعه
          </span>
          <span>۱۵ دقیقه</span>
        </div>
        <hr className="border-b border-white opacity-100" />
        <div className="flex items-center justify-between gap-2 text-sm font-normal text-secondary">
          <span className="flex items-center gap-[6px] font-medium">
            <Calendar2 />
            تاریخ انتشار
          </span>
          <span>۱۴۰۲/۱/۱۶</span>
        </div>
        <hr className="border-b border-white opacity-100" />
        <div className="flex items-center justify-between gap-2 text-sm font-normal text-secondary">
          <span className="flex items-center gap-[6px] font-medium">
            <Folder2 />
            دسته بندی
          </span>
          <span>مکانهای تفریحی</span>
        </div>
        <hr className="border-b border-white opacity-100" />
        <div className="flex items-center justify-between gap-2 text-sm font-normal text-secondary">
          <span className="flex items-center gap-[6px] font-medium">
            <Eye />
            بازدید مطلب
          </span>
          <span>۱۰۲۴</span>
        </div>
        <hr className="border-b border-white opacity-100" />
        <div className="flex items-center justify-between gap-2 text-sm font-normal text-secondary">
          <span className="flex items-center gap-[6px] font-medium">
            <Messages1 />
            دیدگاه
          </span>
          <span>۳</span>
        </div>
        <hr className="border-b border-white opacity-100" />
      </div>
    </SidebarCard>
  )
}
