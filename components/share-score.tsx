'use client'

import { Star1 } from 'iconsax-react'

interface ShareAndScoreProps {
  score: string
}

export function ShareAndScore({ score }: ShareAndScoreProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={async () => {
          await window.navigator.clipboard.writeText(window.location.toString())
        }}
        className="border-l border-neutral-200 pl-4"
      >
        <svg
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 9.333a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM7 17.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM21 25.667a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM10.021 15.762l7.969 4.643M17.978 7.595l-7.957 4.643"
            stroke="#303842"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <span className="flex items-center gap-1 text-lg font-semibold">
        {score}
        <Star1 size={28} variant="Bold" color="#FBBF24" className="mb-1" />
      </span>
    </div>
  )
}
