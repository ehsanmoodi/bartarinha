'use client'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { TickSquare } from 'iconsax-react'
import { useId, useState } from 'react'

interface CheckboxProps {
  name: string
  label: string
  classes?: string
}

export function Checkbox({ name, label, classes = '' }: CheckboxProps) {
  const id = useId()
  const [checked, setChecked] = useState(false)

  return (
    <div className={`flex items-center justify-between gap-2 ${classes}`}>
      <label
        className={`text-sm font-normal ${checked ? 'text-primary' : ''}`}
        htmlFor={id}
      >
        {label}
      </label>
      <RadixCheckbox.Root
        name={name}
        id={id}
        checked={checked}
        onCheckedChange={() => setChecked(!checked)}
        className={`flex h-6 w-6 items-center justify-center rounded-md border border-white bg-white ${
          checked ? '!border-primary !bg-primary !bg-opacity-[0.08]' : ''
        }`}
      >
        <RadixCheckbox.Indicator>
          <TickSquare variant="Bulk" className="text-primary" size={20} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </div>
  )
}
