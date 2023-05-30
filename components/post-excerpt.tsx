import { Note, Note1, Notepad2 } from 'iconsax-react'
import { ReactNode } from 'react'

interface PostExcerptProps {
  children: ReactNode
}

export function PostExcerpt({ children }: PostExcerptProps) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-primary bg-opacity-[0.08] p-6 pt-0 text-base font-normal leading-7">
      <span className="flex items-center gap-1 self-start rounded-b-[10px] bg-primary px-5 py-2 text-white">
        <Notepad2 size={28} />
        چکیده مقاله
      </span>
      {children}
    </div>
  )
}
