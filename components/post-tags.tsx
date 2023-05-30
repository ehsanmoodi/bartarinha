import Link from 'next/link'

export function PostTags() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2 whitespace-nowrap text-lg font-semibold">
        <svg
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="m13.608 21.737-6.92 3.79a1.153 1.153 0 0 1-1.537-.458 1.217 1.217 0 0 1-.14-.545V7.726c0-3.203 2.19-4.485 5.34-4.485h7.4c3.055 0 5.34 1.196 5.34 4.272v17.011a1.143 1.143 0 0 1-1.143 1.143 1.26 1.26 0 0 1-.555-.14l-6.963-3.79a.865.865 0 0 0-.822 0Z"
            stroke="#242A32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.764 10.876h8.51"
            stroke="#242A32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        برچسب‌ها
        <span className="bg-opacity-[0.08 h-[1px] w-full grow bg-neutral-200"></span>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link href="#" className="rounded-lg bg-[#F6F6F6] p-3">
          تهرانگردی
        </Link>
        <Link href="#" className="rounded-lg bg-[#F6F6F6] p-3">
          تفرجگاه
        </Link>
        <Link href="#" className="rounded-lg bg-[#F6F6F6] p-3">
          مکان تفریحی
        </Link>
        <Link href="#" className="rounded-lg bg-[#F6F6F6] p-3">
          جاذبه های گردشگردی
        </Link>
      </div>
    </div>
  )
}
