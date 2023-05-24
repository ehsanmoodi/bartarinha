import { AdItem } from './ad-item'
import { Title } from './title'

export function LatestAds() {
  return (
    <section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 lg:gap-10">
        <Title>
          جدیدترین
          <strong className="font-black"> آگهی‌ها</strong>
        </Title>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          <AdItem />
        </div>
      </div>
    </section>
  )
}
