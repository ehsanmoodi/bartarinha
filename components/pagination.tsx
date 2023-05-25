import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import Link from 'next/link'

export function Pagination() {
  return (
    <ul className="flex flex-row-reverse items-center justify-center gap-3 lg:justify-start">
      <li>
        <Link
          href="#"
          className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary transition-all hover:bg-primary lg:h-12 lg:w-12"
        >
          <ArrowLeft2
            size={18}
            className="text-primary group-hover:text-white"
          />
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-base font-medium transition-all hover:bg-primary hover:text-white lg:h-12 lg:w-12"
        >
          ۱
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-base font-medium transition-all hover:bg-primary hover:text-white lg:h-12 lg:w-12"
        >
          ۲
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-base font-medium transition-all hover:bg-primary hover:text-white lg:h-12 lg:w-12"
        >
          ۳
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary transition-all hover:bg-primary lg:h-12 lg:w-12"
        >
          <ArrowRight2
            size={18}
            className="text-primary group-hover:text-white"
          />
        </Link>
      </li>
    </ul>
  )
}
