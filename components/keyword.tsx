import Link from 'next/link'

interface KeywordProps {
  label: string
  href: string
}

export function Keyword({ label, href }: KeywordProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center rounded-lg bg-neutral-100 p-3 text-center text-sm font-normal transition-all hover:bg-primary hover:text-white"
    >
      {label}
    </Link>
  )
}
