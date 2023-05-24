import { ButtonLink } from '@/components/button-link'
import { CatItem } from '@/components/cat-item'
import { Title } from '@/components/title'
import {
  Bag2,
  Broom,
  Building,
  Hospital,
  Reserve,
  Scissor,
  Setting2,
  Teacher,
  Truck,
  Weight,
} from 'iconsax-react'

export default function AdRegistration() {
  const data = [
    {
      title: 'غذا و خوراکی',
      text: 'رستوران, کافی‌شاپ و سوپرمارکت ...',
      href: '#',
      icon: <Reserve size={38} />,
    },
    {
      title: 'حمل و نقل',
      text: 'اتوبار, پیک موتوری و ...',
      href: '#',
      icon: <Truck size={38} />,
    },
    {
      title: 'آرایشگاه و سالن زیبایی',
      text: 'خدمات ناخن,خدمات مژه و ...',
      href: '#',
      icon: <Scissor size={38} />,
    },
    {
      title: 'فروشگاه',
      text: 'پوشاک, خانه وآشپزخانه و ...',
      href: '#',
      icon: <Bag2 size={38} />,
    },
    {
      title: 'پزشکی و سلامت',
      text: 'پزشک متخصص, دندانپزشک و ...',
      href: '#',
      icon: <Hospital size={38} />,
    },
    {
      title: 'آموزشگاه',
      text: 'زبان, ساز و موسیقی و ...',
      href: '#',
      icon: <Teacher size={38} />,
    },
    {
      title: 'بیمه, املاک و حقوقی',
      text: 'امور حقوقی,مشاور املاک و ...',
      href: '#',
      icon: <Building size={38} />,
    },
    {
      title: 'ورزش و سرگرمی',
      text: 'شهربازی, اتاق فرار و ...',
      href: '#',
      icon: <Weight size={38} />,
    },
    {
      title: 'نظافت و ساختمان',
      text: 'نظافت و ساختمان',
      href: '#',
      icon: <Broom size={38} />,
    },
    {
      title: 'تعمیرات و سایر خدمات',
      text: 'تعمیر لوازم خانگی, تعمیر موبایل و ...',
      href: '#',
      icon: <Setting2 size={38} />,
    },
  ]

  return (
    <main className="relative">
      <div className="mx-auto my-16 flex max-w-6xl flex-col items-center gap-8 px-4 lg:my-20 lg:gap-11">
        <Title>
          دسته‌بندی <strong className="font-black">کسب و کارها</strong>
        </Title>
        <div className="flex w-full flex-col gap-7 md:grid md:grid-cols-2">
          {data.map((item) => (
            <CatItem
              key={item.title}
              title={item.title}
              text={item.text}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </div>
        <ButtonLink
          label="مشاهده همه دسته بندیها"
          color="transparent"
          href="#"
        />
      </div>
    </main>
  )
}
