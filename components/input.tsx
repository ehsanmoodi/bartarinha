interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode
}

export function Input({ icon, ...props }: InputProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-transparent bg-neutral-100 p-[14px] transition-all focus-within:border-primary">
      <input
        {...props}
        className="grow bg-transparent text-sm font-normal outline-0 placeholder:text-neutral-300"
      />
      {icon}
    </div>
  )
}
