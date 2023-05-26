'use client'

import { forwardRef, ForwardedRef, ReactNode } from 'react'
import * as RadinSelect from '@radix-ui/react-select'
import { ArrowDown2, ArrowUp2, Check } from 'iconsax-react'

interface SelectProps extends RadinSelect.SelectProps {
  classes?: string
  icon?: ReactNode
}

export const Select = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RadinSelect.Root>
>(function Select(
  { children, icon, classes, ...props }: SelectProps,
  forwardedRef
) {
  return (
    <RadinSelect.Root {...props}>
      <RadinSelect.Trigger
        ref={forwardedRef as ForwardedRef<HTMLButtonElement>}
        className={`border border-[red]`}
      >
        {icon}
        <RadinSelect.Value />
        <RadinSelect.Icon>
          <ArrowDown2 size={16} className="text-neutral-300" />
        </RadinSelect.Icon>
      </RadinSelect.Trigger>
      <RadinSelect.Portal>
        <RadinSelect.Content>
          <RadinSelect.ScrollUpButton>
            <ArrowUp2 />
          </RadinSelect.ScrollUpButton>
          <RadinSelect.Viewport>{children}</RadinSelect.Viewport>
          <RadinSelect.ScrollDownButton>
            <ArrowDown2 />
          </RadinSelect.ScrollDownButton>
        </RadinSelect.Content>
      </RadinSelect.Portal>
    </RadinSelect.Root>
  )
})

Select.displayName = 'Select'

export const SelectItem = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RadinSelect.Item>
>(function SelectItem({ children, ...props }, forwardedRef) {
  return (
    <RadinSelect.Item {...props} ref={forwardedRef}>
      <RadinSelect.ItemText>{children}</RadinSelect.ItemText>
      <RadinSelect.ItemIndicator>
        <Check />
      </RadinSelect.ItemIndicator>
    </RadinSelect.Item>
  )
})

SelectItem.displayName = 'SelectItem'
