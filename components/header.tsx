'use client'

import Image from 'next/image'
import Link from 'next/link'

import logo from '../public/images/logo.png'
import {
  Bag,
  Broom,
  Building,
  CloseSquare,
  HambergerMenu,
  Hospital,
  Notepad2,
  Reserve,
  Scissor,
  Setting2,
  Teacher,
  Truck,
  Weight,
} from 'iconsax-react'
import { ReactNode, useEffect, useState } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { AuthModal } from './auth-modal'
import { SearchModal } from './search-modal'

export function Header() {
  const headerHeightThreshold = 100
  const [open, setOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const scrollHandler = () => {
      setScrolled(window.scrollY > headerHeightThreshold)
    }

    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  const MenuLink = ({
    href,
    label,
    icon,
  }: {
    href: string
    label: string
    icon?: ReactNode
  }) => {
    return (
      <Link
        href={href}
        className={`group flex flex-col items-center gap-3 whitespace-nowrap text-base font-medium transition-all hover:text-primary`}
      >
        {icon && (
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-full bg-[#F6F6F6] group-hover:bg-primary lg:h-20 lg:w-20`}
          >
            {icon}
          </span>
        )}
        {label}
      </Link>
    )
  }

  return (
    <header
      className={`sticky top-0 z-30 mb-4 bg-white py-4  transition-all duration-300 lg:mb-8 lg:py-6 ${
        scrolled ? '!py-2 shadow-header' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-4">
        <Link href="/" className="inline-block shrink-0">
          <Image src={logo} alt="logo" className="h-[38px] w-[60px]" />
        </Link>

        <NavigationMenu.Root
          className={`bg-white ${'fixed top-0 z-40 h-screen min-h-screen w-full grow overflow-y-auto p-4 transition-all'} ${
            open ? 'left-0' : '-left-[100vw]'
          } ${'lg:relative lg:left-[unset] lg:top-[unset] lg:h-[unset] lg:min-h-[unset] lg:w-[unset] lg:overflow-y-visible lg:p-0'} ${'flex flex-col justify-center gap-8 lg:flex-row lg:items-center'}`}
          dir="rtl"
        >
          <NavigationMenu.List className="relative flex flex-col gap-6 text-center lg:flex-row">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-base font-medium transition-all hover:text-primary data-[state=open]:text-primary">
                کسب و کارها
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="top-full mt-6 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-auto lg:absolute">
                <ul className="grid min-w-[240px] grid-cols-2 gap-6 rounded-[14px] border border-neutral-200 bg-white p-5 shadow-submenu lg:grid-flow-col lg:grid-cols-none lg:grid-rows-2 lg:p-6">
                  <MenuLink
                    href="#"
                    label="غذا و خوراکی"
                    icon={
                      <Reserve
                        size={30}
                        className="text-primary group-hover:text-white"
                      />
                    }
                  />
                  <MenuLink
                    href="#"
                    label="فروشگاه"
                    icon={
                      <Bag
                        size={30}
                        className="text-primary group-hover:text-white"
                      />
                    }
                  />
                  <MenuLink
                    href="#"
                    label="آرایشگاه و سالن زیبایی"
                    icon={
                      <Scissor
                        size={30}
                        className="text-primary group-hover:text-white"
                      />
                    }
                  />
                  <MenuLink
                    href="#"
                    label="آموزشگاه"
                    icon={
                      <Teacher
                        size={30}
                        className="text-primary group-hover:text-white"
                      />
                    }
                  />
                  <MenuLink
                    href="#"
                    label="پزشکی و سلامت"
                    icon={
                      <Hospital
                        size={30}
                        className="text-primary group-hover:text-white"
                      />
                    }
                  />
                  <MenuLink
                    href="#"
                    label="ورزش و سرگرمی"
                    icon={
                      <Weight
                        size={30}
                        className="text-primary group-hover:text-white"
                      />
                    }
                  />
                  <MenuLink
                    href="#"
                    label="بیمه, املاک و حقوقی"
                    icon={
                      <Building
                        size={30}
                        className="text-primary group-hover:text-white"
                      />
                    }
                  />
                  <MenuLink
                    href="#"
                    label="حمل و نقل"
                    icon={
                      <Truck
                        size={30}
                        className="text-primary group-hover:text-white"
                      />
                    }
                  />
                  <MenuLink
                    href="#"
                    label="نظافت و اختمان"
                    icon={
                      <Broom
                        size={30}
                        className="text-primary group-hover:text-white"
                      />
                    }
                  />
                  <MenuLink
                    href="#"
                    label="تعمیرات و سایر خدمات"
                    icon={
                      <Setting2
                        size={30}
                        className="text-primary group-hover:text-white"
                      />
                    }
                  />
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <MenuLink href="/product-categories" label="محصولات" />
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-base font-medium transition-all hover:text-primary data-[state=open]:text-primary">
                خواندنی ها
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="top-full mt-6 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-auto lg:absolute">
                <ul className="grid min-w-[240px] grid-cols-2 gap-6 rounded-[14px] border border-neutral-200 bg-white p-5 shadow-submenu lg:grid-flow-col lg:grid-cols-none lg:grid-rows-2 lg:p-6">
                  <MenuLink
                    href="/tehran"
                    label="تهرانگردی"
                    icon={
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M31.531 29.096h-12.73a.469.469 0 1 1 0-.938h1.571l-1.175-6.783c-.365-2.081-1.738-3.65-3.197-3.65s-2.83 1.567-3.197 3.647l-.913 5.235a.469.469 0 0 1-.924-.16l.91-5.215.001-.005.003-.016.617-3.563.004-.02c.175-1.014.307-2.14.405-3.55-.539 1.58-1.288 2.827-2.298 3.953L1.52 28.158h9.158l.31-1.79a.468.468 0 1 1 .924.16l-.283 1.63h1.57a.469.469 0 1 1 0 .938H.468a.469.469 0 0 1-.348-.782l8.651-9.64c.455-2.715.617-6.506.617-14.364 0-.259.21-.468.469-.468h1.764l1.776-.888a.47.47 0 0 1 .277-.045L16 3.247l2.318-.337a.472.472 0 0 1 .293.048l1.768.884h1.764c.26 0 .469.21.469.468 0 7.858.162 11.649.617 14.364l3.564 3.926a.469.469 0 1 1-.698.626l-4.703-5.195c-1.01-1.125-1.76-2.373-2.297-3.952a34.68 34.68 0 0 0 .408 3.569l.618 3.566.002.014v.003l1.2 6.927h9.158l-4.298-4.788a.469.469 0 0 1 .698-.626l5 5.57a.469.469 0 0 1-.35.782ZM16 16.787c.938 0 1.866.448 2.621 1.264l-.026-.153c-.202-.29-.96-1.339-1.97-2.219-.162-.14-.382-.335-.625-.55-.243.215-.463.41-.624.55-1.015.883-1.77 1.929-1.97 2.219l-.027.153c.755-.816 1.683-1.264 2.621-1.264ZM10.325 4.78c-.005 6.372-.124 10.027-.43 12.644l.015-.018c.378-.42.716-.862 1.018-1.337.16-1.614.252-3.6.298-6.423a.469.469 0 0 1 .938.015c-.026 1.58-.067 2.902-.125 4.046.75-2.238 1.065-5.206 1.096-9.573L12.2 4.6c0 1.224-.005 2.31-.014 3.311a.469.469 0 0 1-.469.465h-.004a.469.469 0 0 1-.465-.473c.01-.95.014-1.975.015-3.124h-.938Zm10.747 11.29c.302.474.64.915 1.018 1.336l.016.018c-.307-2.616-.426-6.272-.431-12.644h-.938c.005 5.645.104 8.945.335 11.29Zm-4.368-1.57c.208.185.395.35.536.473.38.331.725.68 1.023 1.01l-.114-.657a3.938 3.938 0 0 0-.626-1.56l-.819.735Zm-2.227-.734a3.936 3.936 0 0 0-.626 1.56l-.114.656c.298-.329.643-.678 1.023-1.01.142-.122.328-.287.536-.471l-.819-.735Zm.604-.718.919.825.92-.825-.92-1.024-.92 1.024Zm3.784-8.914c.032 4.369.346 7.338 1.097 9.576-.11-2.18-.16-5.052-.162-9.109l-.935-.467ZM16 10.853c.133 0 .26.056.349.155l1.58 1.761c.056.062.109.124.16.188-.073-1.449-.12-3.17-.143-5.295l-1.879.273a.47.47 0 0 1-.135 0l-1.877-.273c-.025 2.124-.07 3.846-.144 5.295.052-.064.105-.127.16-.188l1.58-1.761a.469.469 0 0 1 .349-.156Zm-1.937-4.137L16 6.997l1.936-.281-.006-.927-1.863.271a.47.47 0 0 1-.135 0l-1.862-.271-.007.927Zm.01-1.874 1.927.28 1.927-.28-.002-.927-1.858.27a.47.47 0 0 1-.135 0l-1.857-.27c0 .316 0 .625-.002.927Z"
                          fill="#27A3CB"
                          className="fill-primary group-hover:fill-white"
                        />
                      </svg>
                    }
                  />
                  <MenuLink
                    href="/blog"
                    label="مقالات"
                    icon={
                      <Notepad2
                        size={30}
                        className={`text-primary group-hover:text-white`}
                      />
                    }
                  />
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <MenuLink href="/pricing" label="تعرفه ها" />
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <MenuLink href="/vitrin" label="ویترین" />
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <MenuLink href="/discounts" label="تخفیفات" />
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <MenuLink href="/ad-registration" label="ثبت رایگان آگهی" />
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <MenuLink href="/about" label="درباره ما" />
            </NavigationMenu.Item>
          </NavigationMenu.List>

          <div className="mx-auto flex shrink-0 gap-4 text-base font-medium lg:me-0 lg:ms-auto">
            <SearchModal />
            <AuthModal />
          </div>

          <button
            onClick={() => setOpen(false)}
            className="absolute left-4 top-4 lg:hidden"
          >
            <CloseSquare
              variant="TwoTone"
              size={48}
              className="text-secondary"
            />
          </button>
        </NavigationMenu.Root>

        <button
          onClick={() => setOpen(true)}
          className="ms-auto flex h-12 w-12 items-center justify-center rounded-lg border border-neutral-200 border-opacity-60 lg:hidden"
        >
          <HambergerMenu size={24} className="text-secondary" />
        </button>
      </div>
    </header>
  )
}
