import { ReactNode } from 'react'

interface SidebarCardProps {
  children: ReactNode
}

export function SidebarCard({ children }: SidebarCardProps) {
  return (
    <aside className="rounded-[14px] bg-primary bg-opacity-[0.08] p-5">
      {children}
    </aside>
  )
}
