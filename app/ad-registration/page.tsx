import { Call, Mobile, Note, User } from 'iconsax-react'
import { Input, Title } from '@/components'

export default function AdRegistration() {
  return (
    <main className="relative">
      <div className="mx-auto my-16 flex max-w-6xl flex-col gap-6 px-4 lg:my-20 lg:gap-8">
        <Title>
          ثبت رایگان <strong className="font-black">آگهی</strong>
        </Title>
        <div className="flex flex-col gap-5 rounded-2xl border border-neutral-200 border-opacity-80 p-4 md:grid md:grid-cols-2 lg:grid-cols-3 lg:p-6">
          <Input
            placeholder="نام و نام‌خانوادگی"
            icon={<User color="#A9A9A9" size={20} />}
          />
          <Input
            placeholder="تلفن ثابت"
            type="number"
            icon={<Call color="#A9A9A9" size={20} />}
          />
          <Input
            placeholder="تلفن همراه"
            icon={<Mobile color="#A9A9A9" size={20} />}
          />
          <Input
            placeholder="عنوان آگهی"
            icon={<Note color="#A9A9A9" size={20} />}
          />
        </div>
      </div>
    </main>
  )
}
