import { Call, Location, Mobile, Note, User } from 'iconsax-react'
import {
  Input,
  Title,
  Select,
  SelectItem,
  Button,
  TextArea,
  FileUpload,
} from '@/components'

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
          <Select defaultValue="" placeholder="دسته بندی آگهی">
            <SelectItem value="1">دسته یک</SelectItem>
            <SelectItem value="2">دسته دو</SelectItem>
            <SelectItem value="3">دسته سه</SelectItem>
          </Select>
          <Select defaultValue="" placeholder="گروه آگهی">
            <SelectItem value="1">گروه یک</SelectItem>
            <SelectItem value="2">گروه دو</SelectItem>
            <SelectItem value="3">گروه سه</SelectItem>
          </Select>
          <Select defaultValue="" placeholder="محدوده کسب وکار">
            <SelectItem value="1">محدوده یک</SelectItem>
            <SelectItem value="2">محدوده دو</SelectItem>
            <SelectItem value="3">محدوده سه</SelectItem>
          </Select>
          <div className="lg:col-span-2">
            <Input
              placeholder="آدرس دقیق کسب و کار"
              icon={<Location color="#A9A9A9" size={20} />}
            />
          </div>
          <TextArea placeholder="توضیحات " rows={4} />
          <FileUpload label="آپلود مجوز کسب وکار" />
          <FileUpload
            label="آپلود تصویر آگهی"
            guide="ابعاد عکس ۴۱۸ در ۲۵۲ باید باشد"
          />
          <div className="lg:col-start-3">
            <Button color="primary" classes="w-full">
              ارسال درخواست
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
