import Image from 'next/image'

import pattern from '../public/images/title-pattern.png'

interface TitleProps {
  level?: 'h1' | 'h2'
  children: React.ReactNode
  align?: 'center' | 'start'
}

export function Title({
  level = 'h1',
  children,
  align = 'center',
}: TitleProps) {
  const HeadingTag = level

  return (
    <div
      className={`flex flex-col gap-2 lg:gap-3 ${
        align === 'start' ? 'items-start' : 'items-center'
      }`}
    >
      <HeadingTag className={`text-xl font-light md:text-2xl lg:text-3xl`}>
        {children}
      </HeadingTag>
      <Image src={pattern} alt="title pattern" />
    </div>
  )
}
