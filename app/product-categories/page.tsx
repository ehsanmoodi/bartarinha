import { ButtonLink } from '@/components/button-link'
import { CatItem } from '@/components/cat-item'
import { Title } from '@/components/title'
import { Airplane, Blur, Book, Building4, Car, Devices } from 'iconsax-react'

export default function AdRegistration() {
  const data = [
    {
      title: 'کالای دیجیتال',
      text: 'گوشی موبایل و تبلت...',
      href: '#',
      icon: <Devices size={38} />,
    },
    {
      title: 'زیبایی و سلامت',
      text: 'آرایش و زیبایی, بهداشتی و ...',
      href: '#',
      icon: <Blur size={38} />,
    },
    {
      title: 'خودرو ابزار و تجهیزات صنعتی',
      text: 'خودرو,ابزار برقی و ...',
      href: '#',
      icon: <Car size={38} />,
    },
    {
      title: 'خانه و آشپزخانه',
      text: 'صوتی و تصویری, دکوراتیو و ...',
      href: '#',
      icon: (
        <svg
          width="38"
          height="38"
          stroke="#27A3CB"
          strokeWidth="1.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M28.567 0H10.11A2.113 2.113 0 0 0 8 2.111v31.78a2.114 2.114 0 0 0 2.111 2.112h.215v1.293a.704.704 0 0 0 .704.704h2.297a.701.701 0 0 0 .704-.704v-1.293h10.616v1.293a.705.705 0 0 0 .704.704h2.296a.702.702 0 0 0 .704-.704v-1.293h.216a2.114 2.114 0 0 0 2.111-2.111V2.112A2.113 2.113 0 0 0 28.567 0ZM10.11 1.407h18.456a.705.705 0 0 1 .703.704v9.01H9.407v-9.01a.705.705 0 0 1 .704-.704Zm2.513 35.186h-.89v-.59h.89v.59Zm14.32 0h-.89v-.59h.89v.59Zm1.623-1.997H10.11a.705.705 0 0 1-.704-.704V12.529h19.864v21.363a.705.705 0 0 1-.704.704Z" />
          <path d="M12.923 10.414a.593.593 0 0 0 .594-.594V6.69a.594.594 0 0 0-1.187 0V9.82a.592.592 0 0 0 .593.594ZM12.923 15.48a.593.593 0 0 0-.593.593v3.131a.593.593 0 1 0 1.187 0v-3.131a.595.595 0 0 0-.594-.594Z" />
        </svg>
      ),
    },
    {
      title: 'مد و پوشاک',
      text: 'پوشاک زنانه, اکسسوری و ...',
      href: '#',
      icon: (
        <svg
          width="38"
          height="38"
          stroke="#27A3CB"
          strokeWidth="1.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M36.781 27.998 19.717 16.885v-2.581a4.558 4.558 0 0 0 3.8-4.517A4.498 4.498 0 0 0 19 5.27a4.498 4.498 0 0 0-4.517 4.517c0 .43.287.717.717.717s.717-.287.717-.717A3.06 3.06 0 0 1 19 6.704a3.06 3.06 0 0 1 3.083 3.083A3.06 3.06 0 0 1 19 12.87c-.43 0-.717.287-.717.717v3.298L1.147 28.07C.43 28.572 0 29.36 0 30.22c0 1.363 1.004 2.438 2.294 2.51h33.34A2.515 2.515 0 0 0 38 30.22c0-.931-.502-1.72-1.219-2.222Zm-1.362 3.37H2.58a1.133 1.133 0 0 1-1.147-1.147c0-.359.215-.717.502-.932L19 18.104l16.992 11.041c.359.215.646.574.646 1.004-.072.717-.574 1.219-1.22 1.219Z" />
        </svg>
      ),
    },
    {
      title: 'کتاب لوازم التحریر هنر',
      text: 'کتاب صوتی, مجلات و ...',
      href: '#',
      icon: <Book size={38} />,
    },
    {
      title: 'اسباب بازی کودک و نوزاد',
      text: 'غذاخوری,خواب کودک و ...',
      href: '#',
      icon: (
        <svg
          width="38"
          height="38"
          fill="#27A3CB"
          className="!stroke-none group-hover:!fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.764 4.924a.594.594 0 0 0-.84 0L3.143 6.705a.594.594 0 0 0 0 .84l5.517 5.518H7.125a.594.594 0 0 0-.594.593v2.375a.594.594 0 0 0 .594.594v2.969a5.35 5.35 0 0 0 5.344 5.343h3.316l-2.106 2.106a5.338 5.338 0 1 0 2.176 3.066l4.102-4.101c.539.156 1.11.156 1.649 0l5.329 5.329a4.16 4.16 0 1 0 2.62-2.621l-3.778-3.779h3.317a5.35 5.35 0 0 0 5.343-5.343v-2.969a.594.594 0 0 0 .594-.594v-2.375a.594.594 0 0 0-.593-.594h-.286c-1.389-2.084-.918-4.608-.913-4.633a.594.594 0 0 0-.439-.693c-4.221-1.055-4.299-4.618-4.3-4.767a.594.594 0 0 0-.802-.556c-4.385 1.644-8.314-1.088-8.353-1.115a.593.593 0 0 0-.489-.091v-.002l-2.375.594a.594.594 0 0 0-.43.727l2.773 10.537h-4.922l-8.138-8.14Zm12.753 16.315L6.777 9.5l.942-.942 11.877 11.877a2.984 2.984 0 0 0-1.08.805ZM5.344 6.184 6.879 7.72l-.941.941-1.536-1.535.942-.942Zm2.375 8.067h2.129l1.187 1.188H7.72V14.25Zm4.75 9.5a4.161 4.161 0 0 1-4.156-4.156v-2.969h3.91l5.707 5.707a2.953 2.953 0 0 0-.106.567l-.851.851h-4.504Zm-1.781 11.875a4.156 4.156 0 1 1 0-8.312 4.156 4.156 0 0 1 0 8.312Zm4.689-6.716a5.374 5.374 0 0 0-.793-1.091l3.476-3.476c.183.416.458.785.805 1.078l-3.488 3.488ZM19 23.155a1.781 1.781 0 1 1 3.563 0 1.781 1.781 0 0 1-3.563 0Zm14.844 9.5a2.968 2.968 0 1 1-5.937 0 2.968 2.968 0 0 1 5.937 0Zm-6.338-2.428-4.808-4.807c.347-.294.622-.663.805-1.08l4.944 4.945c-.362.262-.68.58-.941.942Zm5.744-10.634a4.16 4.16 0 0 1-4.156 4.156H24.59l-.852-.852A2.972 2.972 0 0 0 21.04 20.2l-3.574-3.574H33.25v2.969Zm-.474-6.532h-8.292l7.484-3.742c-.021.948.102 2.364.808 3.742Zm-1.65-4.648-7.706 3.853 4.22-7.596c.092.27.202.534.329.79.483.966 1.408 2.173 3.156 2.953Zm-4.437-4.477-4.509 8.116-2.267-9.068c1.425.691 3.92 1.544 6.776.952Zm-9.337-1.132 1.216-.304 2.64 10.562h-1.156l-2.7-10.258ZM33.844 14.25v1.188H16.277L15.09 14.25h18.754Z" />
          <path d="M30.875 34.438a1.781 1.781 0 1 0 0-3.563 1.781 1.781 0 0 0 0 3.563Zm0-2.376a.594.594 0 1 1 0 1.188.594.594 0 0 1 0-1.188ZM10.688 28.5a2.969 2.969 0 1 0 0 5.937 2.969 2.969 0 0 0 0-5.937Zm0 4.75a1.781 1.781 0 1 1 0-3.563 1.781 1.781 0 0 1 0 3.563Z" />
        </svg>
      ),
    },
    {
      title: 'ورزش و سرگرمی',
      text: 'ورزش های فکری, کوهنوردی و ...',
      href: '#',
      icon: <Airplane size={38} />,
    },
    {
      title: 'کالاهای سوپر مارکتی',
      text: 'تنقلات, صبحانه و ...',
      href: '#',
      icon: (
        <svg
          width="38"
          height="38"
          fill="#27A3CB"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38.002 11.738a2.47 2.47 0 0 0-.729-1.759L28.021.729a2.488 2.488 0 0 0-3.518 0l-7.218 7.218-.161-.16a.563.563 0 0 0-.794 0L2.802 21.309.315 22.527a.561.561 0 0 0-.15.902L14.57 37.835a.563.563 0 0 0 .902-.15l1.218-2.487 7.623-7.623.055.128a.562.562 0 0 0 .957.13l4.917-6.189a.562.562 0 0 0-.026-.767l-.162-.163 7.217-7.217a2.473 2.473 0 0 0 .73-1.76ZM14.809 36.484 1.517 23.191l1.506-.738 12.526 12.526-.739 1.505Zm1.42-2.413-12.3-12.3 12.604-12.6 7.308 17.286-7.613 7.614Zm8.806-7.679-6.671-15.776.438.437.002.003.004.003 3.343 3.343.006.006.006.006 1.421 1.421.008.008.008.007 5.248 5.248c.005.004.008.01.013.015l.015.012.193.193-4.034 5.074ZM19.996 10.66l1.177-1.179 2.558 2.56-1.177 1.176-2.558-2.557Zm4.788 4.786 1.177-1.176 2.56 2.558-1.177 1.177-2.56-2.559Zm11.693-2.743-7.217 7.217-1.121-1.12 1.573-1.574a.562.562 0 0 0 0-.794l-3.355-3.353a.56.56 0 0 0-.795 0l-1.573 1.574-.642-.642 1.573-1.574a.562.562 0 0 0 0-.794l-3.352-3.356a.578.578 0 0 0-.795 0L19.2 9.863l-1.12-1.121 7.218-7.22a1.365 1.365 0 0 1 1.927 0l9.25 9.252a1.365 1.365 0 0 1 0 1.928h.002Z" />
          <path d="M31.448 7.987a.562.562 0 0 0-.795 0L27.3 11.34a.563.563 0 0 0 0 .795l3.353 3.353a.562.562 0 0 0 .795 0l3.353-3.352a.56.56 0 0 0 0-.795l-3.353-3.354Zm-.398 6.31-2.558-2.56L31.05 9.18l2.559 2.559-2.559 2.558ZM30.013 6.552 26.659 3.2a.578.578 0 0 0-.794 0l-3.353 3.353a.562.562 0 0 0 0 .795l3.352 3.353a.562.562 0 0 0 .795 0l3.354-3.353a.562.562 0 0 0 0-.795Zm-3.75 2.954-2.56-2.558 2.56-2.557 2.558 2.558-2.559 2.557ZM9.77 17.066l-1.772 1.773a.562.562 0 1 0 .794.794l1.773-1.773a.562.562 0 0 0-.794-.794Z" />
        </svg>
      ),
    },
    {
      title: 'ساختمان و فضای عمومی',
      text: 'شیرآلات ساختمانی, لوازم الکتریکی و ...',
      href: '#',
      icon: <Building4 size={38} />,
    },
  ]

  return (
    <main className="relative">
      <div className="mx-auto my-16 flex max-w-6xl flex-col items-center gap-8 px-4 lg:my-20 lg:gap-11">
        <Title>
          دسته‌بندی <strong className="font-black">محصولات</strong>
        </Title>
        <div className="flex w-full flex-col gap-7 md:grid md:grid-cols-2">
          {data.map((item) => (
            <CatItem
              key={item.title}
              title={item.title}
              text={item.text}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </div>
        <ButtonLink
          label="مشاهده همه دسته بندیها"
          color="transparent"
          href="#"
        />
      </div>
    </main>
  )
}
