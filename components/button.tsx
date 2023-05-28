'use client'

import { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'white' | 'primary' | 'transparent' | 'orange'
  children: ReactNode
  classes?: string
}

export function Button({
  color,
  children,
  classes = '',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-lg p-3 text-center text-base font-medium !transition-all ${
        color == 'white'
          ? 'border border-white bg-white text-primary hover:bg-primary hover:text-white ' +
            classes
          : ''
      } ${
        color === 'transparent'
          ? 'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white ' +
            classes
          : ''
      } ${
        color === 'primary'
          ? 'border border-primary bg-primary text-white hover:bg-white hover:text-primary ' +
            classes
          : ''
      } ${
        color === 'orange'
          ? 'border border-orange bg-orange text-white hover:bg-opacity-[0.08] hover:text-orange ' +
            classes
          : ''
      }`}
    >
      {children}
    </button>
  )
}
