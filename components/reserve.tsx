import { CalendarSearch, Clock, Mobile, User } from 'iconsax-react'
import { Button } from './button'
import { Input } from './input'
import DatePicker from 'react-multi-date-picker'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'

export function Reserve() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <p className="text-base font-normal">
        برای درخواست تعیین وقت، لطفاً نام و شماره تماس خود را وارد کنید. در
        اولین فرصت با شما تماس می‌گیریم.
      </p>
      <form className="flex grid-cols-2 flex-col gap-5 md:grid">
        <Input
          wrapperClasses="bg-white !border-neutral-200 !border-opacity-80"
          placeholder="نام و نام‌خانوادگی"
          icon={<User size={20} className="text-secondary" />}
        />
        <div className="flex items-center gap-2 rounded-lg border border-neutral-200 border-opacity-80 p-[14px] transition-all focus-within:!border-primary">
          <DatePicker
            portal
            placeholder="برای چه تاریخی وقت میخواهید؟"
            className="rmdp-mobile"
            inputClass="grow bg-transparent text-sm font-normal outline-0 placeholder:text-neutral-300 w-full"
            format="DD MMMM YYYY"
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-center"
          />
          <CalendarSearch size={20} className="text-secondary" />
        </div>
        <Input
          wrapperClasses="bg-white !border-neutral-200 !border-opacity-80"
          placeholder="موبایل"
          icon={<Mobile size={20} className="text-secondary" />}
        />
        <div className="flex items-center gap-2 rounded-lg border border-neutral-200 border-opacity-80 p-[14px] transition-all focus-within:!border-primary">
          <DatePicker
            disableDayPicker
            inputClass="grow bg-transparent text-sm font-normal outline-0 placeholder:text-neutral-300 w-full"
            format="hh:mm A"
            placeholder="چه ساعتی با شما تماس بگیریم؟"
            plugins={[<TimePicker key="time-picker" />]}
          />
          <Clock size={20} className="text-secondary" />
        </div>
      </form>
      <div className="lg:text-end">
        <Button color="transparent" classes="w-full lg:w-auto px-10">
          ارسال درخواست
        </Button>
      </div>
    </div>
  )
}
