import { Link, SmsTracking } from 'iconsax-react'
import { SidebarCard } from './sidebar-card'

export function SharePost() {
  return (
    <SidebarCard>
      <div className="flex w-full items-center gap-2 text-base font-medium">
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"
            stroke="#303842"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        اشتراک گذاری محتوا
      </div>
      <div className="mt-5 flex flex-row gap-[6px] border-t border-white pt-5">
        <button className="group inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-primary text-primary transition-all hover:bg-primary">
          <Link size={17} className="group-hover:text-white" />
        </button>
        <button className="group inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-primary text-primary transition-all hover:bg-primary">
          <SmsTracking size={17} className="group-hover:text-white" />
        </button>
        <button className="group inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-primary text-primary transition-all hover:bg-primary">
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="#27A3CB"
            className="group-hover:stroke-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#a)">
              <path
                d="M16.741 2.575a7.72 7.72 0 0 1-2.224 1.084A3.174 3.174 0 0 0 8.95 5.784v.708a7.55 7.55 0 0 1-6.375-3.209s-2.833 6.375 3.542 9.209a8.245 8.245 0 0 1-4.959 1.416c6.375 3.542 14.167 0 14.167-8.146 0-.197-.02-.394-.057-.587a5.468 5.468 0 0 0 1.473-2.6v0Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path
                  fill="#fff"
                  transform="translate(.45 .45)"
                  d="M0 0h17v17H0z"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="group inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-primary text-primary transition-all hover:bg-primary">
          <svg
            width="18"
            height="18"
            fill="none"
            className="group-hover:stroke-white"
            stroke="#27A3CB"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.336 15.042a7.097 7.097 0 0 0 3.613.991c3.895 0 7.083-3.187 7.083-7.083 0-3.896-3.188-7.083-7.083-7.083-3.896 0-7.084 3.187-7.084 7.083 0 1.275.354 2.48.921 3.542l-.48 1.847a1 1 0 0 0 1.242 1.213l1.788-.51Z"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.137 10.968a.81.81 0 0 1-.08.347 1.44 1.44 0 0 1-.74.701c-.192.08-.4.121-.623.121-.326 0-.674-.076-1.04-.232a5.608 5.608 0 0 1-1.099-.631 9.16 9.16 0 0 1-1.047-.893 9.06 9.06 0 0 1-.89-1.042 5.68 5.68 0 0 1-.626-1.087 2.681 2.681 0 0 1-.23-1.042c0-.217.038-.424.115-.616.076-.194.198-.373.367-.532.204-.2.428-.3.664-.3a.6.6 0 0 1 .258.058.52.52 0 0 1 .214.178l.74 1.043c.058.08.1.153.129.223a.503.503 0 0 1 .044.194.432.432 0 0 1-.067.227c-.041.073-.102.15-.179.226l-.242.252a.17.17 0 0 0-.051.127.29.29 0 0 0 .01.073c.009.026.018.045.025.064.057.105.156.242.297.408.143.166.297.335.463.504a9.6 9.6 0 0 0 .507.468c.166.14.303.236.412.294l.057.025a.22.22 0 0 0 .08.013c.054 0 .096-.02.131-.054l.243-.24c.08-.08.156-.14.23-.178a.425.425 0 0 1 .226-.067.51.51 0 0 1 .195.042c.07.028.144.07.223.124l1.057.749c.083.057.14.124.176.204.032.08.05.16.05.249Z"
              strokeMiterlimit="10"
            />
          </svg>
        </button>
        <button className="group inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-primary text-primary transition-all hover:bg-primary">
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="#27A3CB"
            className="group-hover:stroke-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.366 7.037v2.055h1.842c.141 0 .212.141.212.283l-.283 1.346c0 .07-.142.142-.213.142h-1.558v5.17H8.24v-5.1H7.037c-.142 0-.213-.07-.213-.212V9.375c0-.142.071-.213.213-.213H8.24V6.825c0-1.204.92-2.125 2.125-2.125h1.912c.142 0 .213.07.213.212v1.7c0 .142-.07.213-.213.213h-1.7c-.141 0-.212.07-.212.212Z"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M11.074 16.033h-4.25c-3.542 0-4.959-1.416-4.959-4.958v-4.25c0-3.542 1.417-4.958 4.959-4.958h4.25c3.541 0 4.958 1.416 4.958 4.958v4.25c0 3.542-1.417 4.958-4.958 4.958Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </SidebarCard>
  )
}
