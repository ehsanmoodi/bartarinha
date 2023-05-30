interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode
  wrapperClasses?: string
}

export function Input({
  icon,
  wrapperClasses = 'bg-neutral-100',
  ...props
}: InputProps) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border border-transparent p-[14px] transition-all focus-within:!border-primary ${wrapperClasses}`}
    >
      <input
        {...props}
        className="grow bg-transparent text-sm font-normal outline-0 placeholder:text-neutral-300"
      />
      {icon}
    </div>
  )
}
