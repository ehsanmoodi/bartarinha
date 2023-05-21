import Link from 'next/link'

interface ButtonLinkProps {
  href: string
  label: string
  color: 'white' | 'primary'
}

export function ButtonLink({ href, label, color }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`rounded-lg px-4 py-3 text-center text-base font-medium ${
        color == 'white'
          ? 'border border-white bg-white text-primary transition-all hover:bg-primary hover:text-white'
          : ''
      }`}
    >
      {label}
    </Link>
  )
}
