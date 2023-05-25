import Link from 'next/link'

interface BreadcrumbItem {
  title: string
  link?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb">
      <ul className="flex flex-wrap items-center gap-1 text-base font-light">
        {items.map((item) => (
          <li
            className={`flex items-center gap-1 before:content-['>'] ${
              items.length !== 1 ? 'first:before:content-[unset]' : ''
            }`}
            key={item.title}
          >
            {item.link ? (
              <Link href={item.link}>{item.title}</Link>
            ) : (
              <span className="font-medium">{item.title}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
