'use client'

import {
  Button,
  Input,
  PackageItem,
  Select,
  SelectItem,
  TextArea,
  Title,
} from '@/components'
import {
  CloseSquare,
  Crown1,
  Mobile,
  Star1,
  TickSquare,
  User,
} from 'iconsax-react'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

export default function Pricing() {
  const [modalOpen, setModalOpen] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const tickSquare = (
    <TickSquare
      size={28}
      className="shrink-0 text-[#4C956C] group-hover:text-white"
    />
  )

  const closeSquare = (
    <CloseSquare
      size={28}
      className="shrink-0 text-[#DD1C1D] group-hover:text-white"
    />
  )

  const normalItems = [
    {
      text: 'تبلیغات نیتیو',
      icon: undefined,
      stared: true,
      number: '۵',
    },
    {
      text: 'امکان ایجاد ویترین آنلاین از خدمات و محصولات',
      icon: closeSquare,
      stared: true,
      number: undefined,
    },
    {
      text: '۵۰۰۰ بازدید بیشتر',
      icon: closeSquare,
      number: undefined,
      stared: true,
    },
    {
      text: 'سئو لوکیشن محلی',
      icon: undefined,
      stared: true,
      number: '۶',
    },
  ]

  const exclusiveItems = [
    {
      text: 'تبلیغات نیتیو',
      icon: undefined,
      stared: true,
      number: '۱۵',
    },
    {
      text: 'امکان ایجاد ویترین آنلاین از خدمات و محصولات',
      icon: tickSquare,
      stared: true,
      number: undefined,
    },
    {
      text: '۵۰۰۰ بازدید بیشتر',
      icon: tickSquare,
      stared: true,
      number: undefined,
    },
    {
      text: 'سئو لوکیشن محلی',
      icon: undefined,
      stared: true,
      number: '۱۶',
    },
  ]
  const commonItems = [
    {
      text: 'ایجاد صفحه اختصاصی برای آگهی دهنده (با فرم تماس پیامکی)',
      icon: tickSquare,
      stared: false,
      number: undefined,
    },
    {
      text: 'طراحی اختصاصی آگهی در آتلیه طراحی',
      icon: tickSquare,
      stared: false,
      number: undefined,
    },
    {
      text: 'ارائه آمار دقیق بازدید توسط پل پیشرفته تحلیل آگهی',
      icon: tickSquare,
      stared: false,
      number: undefined,
    },
    {
      text: 'اولویت بالاتر نمایش آگهی در سایت و اپلیکیشن موبایل برترینها',
      icon: tickSquare,
      stared: false,
      number: undefined,
    },
    {
      text: 'نمایش در دیگر آگهی ها و دسته بندی مشاغل هم صنف',
      icon: tickSquare,
      stared: false,
      number: undefined,
    },
    {
      text: 'نمایش آگهی ها به تفکیک محله های تهران',
      icon: tickSquare,
      stared: false,
      number: undefined,
    },
    {
      text: 'تولید محتوا و درج دو مقاله برندینگ',
      icon: tickSquare,
      stared: true,
      number: undefined,
    },
    {
      text: 'عکاسی (۱۵ فریم) و فیلمبرداری محیطی یک دقیقه ای',
      icon: tickSquare,
      stared: true,
      number: undefined,
    },
    {
      text: '۱۰۰۰۰ پیامک منطقه ای',
      icon: tickSquare,
      stared: true,
      number: undefined,
    },
    {
      text: 'لینک لندینگ راه ارتباط سریع در قسمت بایو اینستاگرام',
      icon: tickSquare,
      stared: true,
      number: undefined,
    },
    {
      text: 'اپلیکیشن اندروید',
      icon: tickSquare,
      stared: true,
      number: undefined,
    },
  ]

  return (
    <main className="relative">
      <div className="mx-auto my-16 flex max-w-6xl flex-col gap-6 px-4 lg:my-20 lg:gap-8">
        <Title>
          تعرفه های <strong className="font-black">آگهی</strong>
        </Title>
        <div className="text-center text-base font-normal leading-8">
          <p>
            در انتخاب بسته تبلیغاتی خود دقت بفرمایید زیرا امکان تبدیل و کنسل
            کردن آگهی وجود ندارد
          </p>
          <p className="font-bold">
            موارد <span className="text-[#DD1C1D]">ستاره دار *</span> طبق قالب و
            در طول مدت قرار داد انجام میشود
          </p>
        </div>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
          {/* Normal Package */}
          <div className="group flex flex-col items-center gap-6 rounded-[20px] border border-neutral-200 border-opacity-80 bg-white p-6 transition-all hover:bg-primary hover:text-white hover:shadow-package-item lg:gap-8 lg:p-8">
            <span className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary bg-opacity-10 transition-all group-hover:bg-white group-hover:bg-opacity-10">
              <Star1
                size={38}
                className="text-primary transition-all group-hover:text-white"
              />
            </span>
            <p className="text-xl font-bold">پکیچ عادی</p>
            <ul className="flex w-full flex-col gap-6 lg:gap-8">
              {commonItems.map((item) => (
                <PackageItem
                  key={item.text}
                  text={item.text}
                  stared={item.stared}
                  number={item.number}
                  icon={item.icon}
                />
              ))}
              {normalItems.map((item) => (
                <PackageItem
                  key={item.text}
                  text={item.text}
                  stared={item.stared}
                  number={item.number}
                  icon={item.icon}
                />
              ))}
            </ul>
            <Button
              onClick={() => {
                setShowMessage(false)
                setModalOpen(true)
              }}
              color="primary"
              type="button"
              classes="w-full group-hover:bg-white group-hover:text-primary"
            >
              تکمیل فرم درخواست آگهی
            </Button>
          </div>

          {/* Exclusive Package */}
          <div className="group flex flex-col items-center gap-6 rounded-[20px] border border-neutral-200 border-opacity-80 bg-white p-6 transition-all hover:bg-primary hover:text-white hover:shadow-package-item lg:gap-8 lg:p-8">
            <span className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary bg-opacity-10 transition-all group-hover:bg-white group-hover:bg-opacity-10">
              <Crown1
                size={38}
                className="text-primary transition-all group-hover:text-white"
              />
            </span>
            <p className="text-xl font-bold">پکیچ اختصاصی</p>
            <ul className="flex w-full flex-col gap-6 lg:gap-8">
              {commonItems.map((item) => (
                <PackageItem
                  key={item.text}
                  text={item.text}
                  stared={item.stared}
                  number={item.number}
                  icon={item.icon}
                />
              ))}
              {exclusiveItems.map((item) => (
                <PackageItem
                  key={item.text}
                  text={item.text}
                  stared={item.stared}
                  number={item.number}
                  icon={item.icon}
                />
              ))}
            </ul>
            <Button
              onClick={() => {
                setShowMessage(false)
                setModalOpen(true)
              }}
              color="primary"
              type="button"
              classes="w-full group-hover:bg-white group-hover:text-primary"
            >
              تکمیل فرم درخواست آگهی
            </Button>
          </div>
        </div>
      </div>

      <Dialog.Root open={modalOpen} onOpenChange={setModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-40 bg-secondary bg-opacity-50 data-[state=open]:animate-overlayShow" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 flex max-h-[85vh] w-[90vw] max-w-[350px] translate-x-[-50%] translate-y-[-50%] flex-col gap-6 rounded-2xl bg-white p-5 data-[state=open]:animate-contentShow">
            {!showMessage ? (
              <>
                <Dialog.Title className="flex items-center justify-between text-base font-semibold">
                  خرید پکیج تبلیغاتی
                  <Dialog.Close>
                    <CloseSquare
                      size={24}
                      className="text-secondary duration-300 hover:rotate-180 hover:text-primary"
                    />
                  </Dialog.Close>
                </Dialog.Title>

                <form action="" className="flex flex-col gap-6">
                  <Input
                    type="text"
                    placeholder="نام م نام‌خانوادگی"
                    icon={<User size={20} className="text-secondary" />}
                  />
                  <Input
                    type="number"
                    placeholder="شماره تلفن"
                    icon={<Mobile size={20} className="text-secondary" />}
                  />
                  <Select defaultValue="" placeholder="نوع پکیج">
                    <SelectItem value="1">انتخاب یک</SelectItem>
                    <SelectItem value="2">انتخاب دو</SelectItem>
                    <SelectItem value="3">انتخاب سه</SelectItem>
                  </Select>
                  <TextArea rows={4} placeholder="توضیحات" />
                  <Button
                    color="primary"
                    type="button"
                    onClick={() => setShowMessage(true)}
                  >
                    ارسال درخواست
                  </Button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center gap-4 text-center text-base font-normal">
                <svg
                  width="87"
                  height="70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity=".4"
                    d="M53.428 12.5H34.573c-8.19 0-13.073 4.883-13.073 13.073v18.832c0 8.212 4.883 13.095 13.072 13.095h18.833c8.19 0 13.073-4.883 13.073-13.072V25.573c.022-8.19-4.86-13.073-13.05-13.073Z"
                    fill="#4C956C"
                  />
                  <path
                    d="M51.874 30.793a4.23 4.23 0 1 0 0-8.46 4.23 4.23 0 0 0 0 8.46ZM36.124 30.793a4.23 4.23 0 1 0 0-8.46 4.23 4.23 0 0 0 0 8.46ZM52.1 37.07H35.9a2.866 2.866 0 0 0-2.857 2.88c0 6.052 4.928 10.98 10.98 10.98 6.052 0 10.98-4.928 10.98-10.98-.023-1.575-1.328-2.88-2.903-2.88ZM74.929 62.571a4.648 4.648 0 0 0 4.642-4.642.929.929 0 0 1 1.858 0 4.648 4.648 0 0 0 4.642 4.642.929.929 0 0 1 0 1.858 4.648 4.648 0 0 0-4.642 4.642.929.929 0 0 1-1.858 0 4.648 4.648 0 0 0-4.642-4.642.929.929 0 0 1 0-1.858Zm5.571 3.157a6.55 6.55 0 0 1 2.228-2.228 6.55 6.55 0 0 1-2.228-2.227 6.549 6.549 0 0 1-2.228 2.227 6.55 6.55 0 0 1 2.228 2.228ZM1.5 35a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM13 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                    fill="#4C956C"
                  />
                </svg>
                <p>
                  درخواست شما با موفقیت ثبت شد تیم پشتیبانی به زودی با شما تماس
                  خواهند گرفت
                </p>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  )
}
