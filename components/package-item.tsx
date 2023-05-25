import { ReactNode } from 'react'

interface PackageItemProps {
  text: string
  stared?: boolean
  icon?: ReactNode
  number?: string
}
export function PackageItem({
  text,
  stared = false,
  icon,
  number,
}: PackageItemProps) {
  return (
    <div className="flex items-center justify-between gap-2 text-base font-normal">
      <p>
        {stared && (
          <span className="font-bold text-[#DD1C1D] group-hover:text-white">
            {'* '}
          </span>
        )}
        {text}
      </p>
      {icon}
      {number !== undefined && (
        <span className="h-7 w-7 text-center font-bold">{number}</span>
      )}
    </div>
  )
}
