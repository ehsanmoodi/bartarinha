'use client'

import { useState } from 'react'
import Image from 'next/image'
import * as Tabs from '@radix-ui/react-tabs'
import * as Collapsible from '@radix-ui/react-collapsible'
import {
  AddSquare,
  CalendarEdit,
  DocumentText,
  Location,
  Map,
  MessageQuestion,
  Messages,
  MinusSquare,
} from 'iconsax-react'

import map from '../public/images/map.png'
import { Button } from './button'
import { CommentForm } from './comment-form'
import { Reply } from './reply'
import { Question } from './question'
import { Reserve } from './reserve'

export function AdsTabs() {
  const [activeTab, setActiveTab] = useState('tab5')
  const [openCollapse, setOpenCollapse] = useState<boolean>(false)

  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <Tabs.Root dir="rtl" value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List
          aria-label="tabs"
          className="flex flex-nowrap gap-5 overflow-auto whitespace-nowrap border-b border-neutral-200 text-base font-normal lg:justify-between lg:gap-16 lg:text-lg"
        >
          <Tabs.Trigger
            value="tab1"
            className="flex items-center gap-1 border-b-2 border-transparent pb-4 data-[state=active]:border-primary data-[state=active]:text-primary lg:pb-6"
          >
            <Map
              size={28}
              className={`text-secondary ${
                activeTab === 'tab1' ? '!text-primary' : ''
              }`}
            />
            مسیریابی و شبکه های اجتماعی
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab2"
            className="flex items-center gap-1 border-b-2 border-transparent pb-4 data-[state=active]:border-primary data-[state=active]:text-primary lg:pb-6"
          >
            <DocumentText
              size={28}
              className={`text-secondary ${
                activeTab === 'tab2' ? '!text-primary' : ''
              }`}
            />
            توضیحات کسب و کار
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab3"
            className="flex items-center gap-1 border-b-2 border-transparent pb-4 data-[state=active]:border-primary data-[state=active]:text-primary lg:pb-6"
          >
            <Messages
              size={28}
              className={`text-secondary ${
                activeTab === 'tab3' ? '!text-primary' : ''
              }`}
            />
            دیدگاه ها
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab4"
            className="flex items-center gap-1 border-b-2 border-transparent pb-4 data-[state=active]:border-primary data-[state=active]:text-primary lg:pb-6"
          >
            <MessageQuestion
              size={28}
              className={`text-secondary ${
                activeTab === 'tab4' ? '!text-primary' : ''
              }`}
            />
            پرسش وپاسخ
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab5"
            className="flex items-center gap-1 border-b-2 border-transparent pb-4 data-[state=active]:border-primary data-[state=active]:text-primary lg:pb-6"
          >
            <CalendarEdit
              size={28}
              className={`text-secondary ${
                activeTab === 'tab5' ? '!text-primary' : ''
              }`}
            />
            تعیین وقت آنلاین
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="tab1" className="mt-4 lg:mt-6">
          <div className="flex flex-col gap-7 md:grid md:grid-cols-3">
            <div className="relative h-[166px] rounded-xl">
              <Image
                src={map}
                alt="map"
                width={349}
                height={166}
                className="h-full w-full rounded-[inherit] object-cover object-center"
              />
            </div>
            <div className="col-span-2 flex flex-col justify-around gap-7">
              <div className="flex items-start gap-1 text-base font-normal">
                <Location size={30} className="text-secondary" />
                <p>
                  <span className="font-medium">
                    آدرس: <br />
                  </span>
                  فلکه سوم تهرانپارس، رو به روی بیمارستان تهرانپارس، جنب شهر
                  قهوه،پلاک ۳۴۹، طبقه اول، واحد ۱
                </p>
              </div>
              <div className="flex flex-col gap-7 md:flex-row">
                <Button color="transparent" classes="w-full">
                  مسیر یابی با waze
                </Button>
                <Button color="transparent" classes="w-full">
                  مسیر یابی با گوگل
                </Button>
              </div>
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="tab2" className="mt-4 lg:mt-6">
          <div className="text-base font-normal leading-7">
            <p>مرکز لیزر و زیبایی شایما</p>
            <p>-بزرگترین کلینیک لیزر و لاغری شرق تهران</p>
            <p>-مرکزتخصصی لاغری تحت نظر ۳ پزشک مجرب</p>
            <p>
              -اولین دستگاه لیزر موهای زائد با ۳ طول موج ۲۰۲۲بدون تماس با پوست
              بدون ژل، درد و سوختگی
            </p>
            <p>-تزریق ژل و بوتاکس</p>
            <Collapsible.Root
              open={openCollapse}
              onOpenChange={setOpenCollapse}
            >
              <Collapsible.Content>
                <p>-بزرگترین کلینیک لیزر و لاغری شرق تهران</p>
                <p>-مرکزتخصصی لاغری تحت نظر ۳ پزشک مجرب</p>
                <p>
                  -اولین دستگاه لیزر موهای زائد با ۳ طول موج ۲۰۲۲بدون تماس با
                  پوست بدون ژل، درد و سوختگی
                </p>
                <p>-تزریق ژل و بوتاکس</p>
              </Collapsible.Content>
              <Collapsible.Trigger className="mt-4 flex w-full items-center gap-2 text-base font-medium text-primary">
                {openCollapse ? 'نمایش کمتر' : 'نمایش بیشتر'}
                {openCollapse ? (
                  <MinusSquare size={22} className="text-primary" />
                ) : (
                  <AddSquare size={22} className="text-primary" />
                )}
              </Collapsible.Trigger>
            </Collapsible.Root>
          </div>
        </Tabs.Content>

        <Tabs.Content value="tab3" className="mt-4 lg:mt-6">
          <div className="flex flex-col gap-8 lg:gap-16">
            <CommentForm
              actionLabel="ارسال دیدگاه"
              title="نظرتان را در موردخدمات این آگهی با ما به اشتراک بگذارید"
            />
            <div className="flex flex-col gap-7">
              <Reply showReplyBtn={false} score={3} />
              <Reply showReplyBtn={false} score={5} />
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="tab4" className="mt-4 lg:mt-6">
          <div className="flex flex-col gap-8 lg:gap-16">
            <CommentForm
              actionLabel="ارسال پرسش"
              title="پرسش خود را در مورد خدمات این آگهی بیان کنید."
              showRating={false}
            />
            <div className="flex flex-col gap-7">
              <Question
                question="عنوان  سوال این قسمت قرار میگیردمتن با تولید سادگی نامفهوم از صنعت چاپ ؟"
                answer="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
                date="۱۴۰۱/۱۲/۱۳"
              />
              <Question
                question="عنوان  سوال این قسمت قرار میگیردمتن با تولید سادگی نامفهوم از صنعت چاپ ؟"
                answer="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
                date="۱۴۰۱/۱۲/۱۳"
              />
              <Question
                question="عنوان  سوال این قسمت قرار میگیردمتن با تولید سادگی نامفهوم از صنعت چاپ ؟"
                answer="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
                date="۱۴۰۱/۱۲/۱۳"
              />
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="tab5" className="mt-4 lg:mt-6">
          <Reserve />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}
