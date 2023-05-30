import { Dislike, Like, Like1 } from 'iconsax-react'
import Image from 'next/image'
import { StarRating } from './star-rating'

interface ReplyProps {
  showReplyBtn?: boolean
  score: 1 | 2 | 3 | 4 | 5
  indent?: boolean
}

export function Reply({
  showReplyBtn = true,
  score,
  indent = false,
}: ReplyProps) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-[14px] border-neutral-200 border-opacity-60 bg-[#F9F9F9] p-4 lg:p-5 ${
        indent ? 'ms-10 lg:ms-20' : ''
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full border-[3px] border-white lg:h-12 lg:w-12">
            <Image
              src="https://picsum.photos/60"
              alt="avatar"
              width={48}
              height={48}
              className="rounded-[inherit]"
            />
          </div>
          <p className="text-base font-normal">
            <span className="font-semibold">کاربر برترین ها</span>
            {' - '}
            <span>۱۴۰۱/۱۲/۱۲</span>
          </p>
        </div>
        <StarRating rating={score} />
      </div>
      <p className="text-base font-light">
        متن با تولید سادگی نامفهوم از صنعت چاپ و با استفاده ی با تولید سادگی از
        طراحان گرافیکساختگی با تولید سادگی از طراحان گرافیک در ستون سطرآنچنان که
        لازم است.
      </p>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          className={`flex items-center gap-4 text-sm font-bold ${
            !showReplyBtn ? 'ms-auto' : ''
          }`}
        >
          <button className="flex items-end gap-1 text-[#4C956C]">
            <Like1 />
            (۰)
          </button>
          <button className="flex items-end gap-1 text-[#DD1C1D]">
            <Dislike />
            (۰)
          </button>
        </div>

        {showReplyBtn && (
          <button className="group inline-flex h-8 w-8 items-center justify-center rounded-lg border border-primary transition-all hover:bg-primary lg:h-10 lg:w-10">
            <svg
              width="22"
              height="23"
              className="fill-primary group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.898 3.882a.917.917 0 0 1 0 1.296L5.879 8.197H11a7.334 7.334 0 0 1 7.334 7.333v3.667a.916.916 0 1 1-1.833 0V15.53a5.5 5.5 0 0 0-5.5-5.5H5.88l3.018 3.019a.917.917 0 0 1-1.296 1.296L3.018 9.76a.917.917 0 0 1 0-1.296l4.584-4.583a.917.917 0 0 1 1.296 0Z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
