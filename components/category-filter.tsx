'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { SidebarCard } from './sidebar-card'
import { ReactNode, useState } from 'react'
import { ArrowUp2, DocumentFilter } from 'iconsax-react'

interface CategoryFiltersProps {
  children: ReactNode
}

export function CategoryFilters({ children }: CategoryFiltersProps) {
  const [open, setOpen] = useState<boolean>(true)
  return (
    <SidebarCard>
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger className="flex w-full items-center gap-2 text-base font-medium">
          <DocumentFilter size={24} className="text-secondary" />
          دسته بندی ها
          <ArrowUp2
            size={16}
            className={`ms-auto text-secondary transition-all ${
              !open ? 'rotate-180' : ''
            }`}
          />
        </Collapsible.Trigger>
        <Collapsible.Content className="mt-5 border-t border-white pt-5">
          {children}
        </Collapsible.Content>
      </Collapsible.Root>
    </SidebarCard>
  )
}
