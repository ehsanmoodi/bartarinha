import { Framer } from 'iconsax-react'
import { useId } from 'react'

interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  guide?: string
}

export function FileUpload({ label, guide, ...props }: FileUploadProps) {
  const id = useId()

  return (
    <label
      htmlFor={id}
      className="group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-primary p-4 text-center"
    >
      <div className="text-sm font-medium text-primary">
        {label}
        {guide && <span className="text-xs font-normal">({guide})</span>}
      </div>
      <svg
        width="20"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:animate-bounce"
      >
        <path
          d="M13.7 7.417c3 .258 4.225 1.8 4.225 5.175v.108c0 3.725-1.492 5.217-5.217 5.217H7.283c-3.725 0-5.217-1.492-5.217-5.217v-.108c0-3.35 1.209-4.892 4.159-5.167M10 1.667V12.4"
          stroke="#27A3CB"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m12.792 10.542-2.791 2.791-2.792-2.791"
          stroke="#27A3CB"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input {...props} id={id} type="file" hidden />
    </label>
  )
}
