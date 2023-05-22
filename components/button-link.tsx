import Link from 'next/link'

interface ButtonLinkProps {
  href: string
  label: string
  color: 'white' | 'primary' | 'transparent'
}

export function ButtonLink({ href, label, color }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`rounded-lg px-4 py-3 text-center text-base font-medium transition-all ${
        color == 'white'
          ? 'border border-white bg-white text-primary hover:bg-primary hover:text-white'
          : ''
      } ${
        color === 'transparent'
          ? 'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white'
          : ''
      }`}
    >
      {label}
    </Link>
  )
}
