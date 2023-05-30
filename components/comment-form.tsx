'use client'

import { useState } from 'react'
import { Mobile, User } from 'iconsax-react'
import { Input } from './input'
import { TextArea } from './text-area'
import { Button } from './button'
import { StarRating } from './star-rating'

interface CommentFormProps {
  actionLabel: string
  title: string
  showRating?: boolean
}

export function CommentForm({
  actionLabel,
  title,
  showRating = true,
}: CommentFormProps) {
  const [rating, setRating] = useState(0)

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4 text-base font-normal">
        {title}
        {showRating && (
          <div className="flex gap-3 font-medium">
            امتیاز شما :
            <StarRating rating={rating} onChange={setRating} />
          </div>
        )}
      </div>

      <form className="">
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-6">
          <div className="flex flex-col gap-5 lg:col-span-2">
            <Input
              wrapperClasses="bg-white !border-neutral-200 !border-opacity-80"
              placeholder="نام و نام‌خانوادگی"
              icon={<User size={20} className="text-secondary" />}
            />
            <Input
              wrapperClasses="bg-white !border-neutral-200 !border-opacity-80"
              placeholder="موبایل"
              icon={<Mobile size={20} className="text-secondary" />}
            />
          </div>
          <div className="col-span-4">
            <TextArea
              wrapperClasses="bg-white !border-neutral-200 !border-opacity-80"
              placeholder="پیام شما"
              rows={5}
            />
          </div>
        </div>
        <div className="mt-5 lg:text-end">
          <Button color="transparent" classes="w-full lg:w-auto px-10">
            {actionLabel}
          </Button>
        </div>
      </form>
    </div>
  )
}
