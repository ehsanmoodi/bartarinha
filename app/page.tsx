import {
  LatestPosts,
  IndexCategories,
  LatestAds,
  IndexSpecials,
  Banner,
} from '@/components'
import { ButtonLink } from '@/components/button-link'

export default function Home() {
  return (
    <main className="flex flex-col gap-16 lg:gap-32">
      <IndexCategories />
      <LatestAds />
      <div className="mx-auto w-full max-w-6xl px-4">
        <Banner image="https://picsum.photos/350/500">
          <h2 className="text-xl font-light lg:text-2xl">
            برای <strong className="font-black">همکاری</strong> با برترین ها
            آماده اید؟
          </h2>
          <p className="text-base font-normal leading-7">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون{' '}
          </p>
          <ButtonLink
            href="#"
            label="شروع کنید"
            color="white"
            classes="px-10"
          />
        </Banner>
      </div>
      <IndexSpecials />
      <LatestPosts />
    </main>
  )
}
