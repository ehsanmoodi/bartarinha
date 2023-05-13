import { Footer, Header } from '@/components'
import './globals.css'
import localFont from 'next/font/local'

const peyda = localFont({
  src: [
    {
      path: '../public/fonts/PeydaWeb-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/peydaWeb-extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/peydaWeb-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/PeydaWeb-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/PeydaWeb-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/PeydaWeb-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/PeydaWeb-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/PeydaWeb-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/PeydaWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-peyda',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${peyda.variable} font-peyda`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
