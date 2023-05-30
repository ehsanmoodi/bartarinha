'use client'

import { useState } from 'react'

import * as Collapsible from '@radix-ui/react-collapsible'
import { Calendar2 } from 'iconsax-react'

interface QuestionProps {
  question: string
  answer?: string
  date: string
}

export function Question({ question, answer, date }: QuestionProps) {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className="rounded-[10px] bg-primary bg-opacity-[0.08] p-4"
    >
      <Collapsible.Trigger className="flex w-full flex-wrap items-center justify-between gap-4 text-start text-base font-medium">
        <p className={`${open ? 'text-primary' : ''}`}>{question}</p>

        <span className="ms-auto flex items-center gap-1 text-secondary">
          <Calendar2 />
          {date}
        </span>
        {answer && (
          <button
            className={`rounded-md border border-primary p-2 text-sm text-primary transition-all ${
              open ? 'bg-primary text-white' : ''
            }`}
          >
            پاسخ مدیریت
          </button>
        )}
      </Collapsible.Trigger>
      <Collapsible.Content className="mt-5 border-t border-white pt-5">
        {answer}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
