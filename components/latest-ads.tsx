import { AdCard } from './ad-card'
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
          <AdCard
            image="https://picsum.photos/200/300?random=1"
            title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
            location="دولت آباد"
            score="۵.۰"
            slug="ad-1"
          />
          <AdCard
            image="https://picsum.photos/200/300?random=2"
            title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
            location="دولت آباد"
            score="۵.۰"
            discount="۳۰"
            slug="ad-2"
          />
          <AdCard
            image="https://picsum.photos/200/300?random=3"
            title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
            location="دولت آباد"
            score="۵.۰"
            slug="ad-3"
          />
          <AdCard
            image="https://picsum.photos/200/300?random=4"
            title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
            location="دولت آباد"
            discount="۴۰"
            score="۵.۰"
            slug="ad-4"
          />
          <AdCard
            image="https://picsum.photos/200/300?random=5"
            title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
            location="دولت آباد"
            score="۵.۰"
            slug="ad-5"
          />
          <AdCard
            image="https://picsum.photos/200/300?random=6"
            title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
            location="دولت آباد"
            score="۵.۰"
            slug="ad-6"
          />
        </div>
      </div>
    </section>
  )
}
