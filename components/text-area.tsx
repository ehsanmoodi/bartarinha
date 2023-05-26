interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  resizable?: boolean
}

export function TextArea({ resizable = false, ...props }: TextAreaProps) {
  return (
    <div className="flex rounded-lg border border-transparent bg-neutral-100 p-[14px] transition-all focus-within:border-primary">
      <textarea
        {...props}
        className="w-full bg-transparent text-sm font-normal outline-0 placeholder:text-neutral-300"
        style={{ resize: resizable ? 'both' : 'none' }}
      />
    </div>
  )
}
