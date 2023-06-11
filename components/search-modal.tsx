'use client'

import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseSquare,
  FilterSearch,
  Location,
  SearchNormal1,
} from 'iconsax-react'
import { Button } from './button'
import { Select, SelectItem } from './select'

export function SearchModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex h-12 w-12 items-center justify-center rounded-lg border border-neutral-200 border-opacity-60">
          <SearchNormal1 size={22} className="text-secondary" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-secondary bg-opacity-50 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 flex max-h-[85vh] w-[90vw] max-w-[350px] translate-x-[-50%] translate-y-[-50%] flex-col gap-6 rounded-2xl bg-white p-5 data-[state=open]:animate-contentShow">
          <>
            <Dialog.Title className="flex items-center justify-between text-base font-semibold">
              جستجو کنید
              <Dialog.Close>
                <CloseSquare
                  size={24}
                  className="text-secondary duration-300 hover:rotate-180 hover:text-primary"
                />
              </Dialog.Close>
            </Dialog.Title>
            <form action="" className="flex flex-col gap-6">
              <Select
                defaultValue=""
                classes="grow w-full"
                placeholder="محدوده فعالیت"
                icon={<Location size={20} className="text-neutral-300" />}
              >
                <SelectItem value="1">انتخاب یک</SelectItem>
                <SelectItem value="2">انتخاب دو</SelectItem>
                <SelectItem value="3">انتخاب سه</SelectItem>
              </Select>
              <Select
                defaultValue=""
                classes="grow w-full"
                placeholder="نوع فعالیت"
                icon={<FilterSearch size={20} className="text-neutral-300" />}
              >
                <SelectItem value="1">انتخاب یک</SelectItem>
                <SelectItem value="2">انتخاب دو</SelectItem>
                <SelectItem value="3">انتخاب سه</SelectItem>
              </Select>
              <Button color="primary" type="button">
                جستجو
              </Button>
            </form>
          </>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
