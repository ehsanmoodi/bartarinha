'use client'

import { ReactNode } from 'react'
import * as RadinSelect from '@radix-ui/react-select'
import { ArrowDown2, ArrowUp2, TickCircle } from 'iconsax-react'

interface SelectProps extends RadinSelect.SelectProps {
  classes?: string
  icon?: ReactNode
}

export function Select({ children, icon, classes, ...props }: SelectProps) {
  return (
    <RadinSelect.Root {...props}>
      <RadinSelect.Trigger
        className={`flex flex-row-reverse items-center gap-2 rounded-lg border border-transparent bg-neutral-100 p-[14px] outline-0 transition-all focus:border-primary ${classes}`}
      >
        {icon}
        <RadinSelect.Value />
        <RadinSelect.Icon className="me-auto">
          <ArrowDown2 size={16} className="text-neutral-300" />
        </RadinSelect.Icon>
      </RadinSelect.Trigger>
      <RadinSelect.Portal>
        <RadinSelect.Content
          position="popper"
          align="center"
          sideOffset={10}
          className="w-full overflow-hidden rounded-lg border border-[red] bg-white p-1 shadow-md"
        >
          <RadinSelect.Viewport>{children}</RadinSelect.Viewport>
        </RadinSelect.Content>
      </RadinSelect.Portal>
    </RadinSelect.Root>
  )
}

interface SelectItemProps extends RadinSelect.SelectItemProps {}

export function SelectItem({ children, ...props }: SelectItemProps) {
  return (
    <RadinSelect.Item
      {...props}
      className="flex w-full flex-row-reverse items-center justify-between"
    >
      <RadinSelect.ItemText>{children}</RadinSelect.ItemText>
      <RadinSelect.ItemIndicator>
        <TickCircle size={20} className="text-primary" />
      </RadinSelect.ItemIndicator>
    </RadinSelect.Item>
  )
}
