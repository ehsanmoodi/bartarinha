import {
  AdCard,
  Banner,
  Breadcrumb,
  Button,
  CategoryFilters,
  Checkbox,
  Title,
} from '@/components'
import { Refresh } from 'iconsax-react'

export default function Ads() {
  return (
    <main>
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
        <div className="flex flex-col gap-5">
          <Breadcrumb
            items={[
              {
                title: 'صفحه اصلی',
                link: '/',
              },
              {
                title: 'کسب و کارها',
                link: '/business-categories',
              },
              {
                title: 'آرایشگاه و سالن زیبایی در تهران',
              },
            ]}
          />
          <Title align="start">
            آرایشگاه و سالن زیبایی
            <strong className="font-black"> در تهران</strong>
          </Title>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-14 lg:col-span-9 lg:gap-20 ">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
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
              </div>
              <Button
                color="transparent"
                classes="self-start flex items-center gap-2 group"
              >
                بارگذاری آگهی های بیشتر
                <Refresh
                  size={22}
                  className="text-primary group-hover:text-white"
                />
              </Button>
            </div>

            <Banner
              imageSrc="https://picsum.photos/350/500"
              imageClasses="w-full h-44 lg:w-[350px]"
            >
              <h2 className="text-xl font-light lg:text-[22px]">
                <strong className="font-black">عنوان تستی </strong>
                بنر برترین ها
              </h2>
              <p className="text-base font-normal leading-7">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با
                استفاده از طراحان گرافی
              </p>
            </Banner>
          </div>

          <div className="lg:col-span-3">
            <CategoryFilters>
              <form className="flex flex-col gap-5">
                <Checkbox name="filter[]" label="خدمات ناخن" />
                <Checkbox name="filter[]" label="خدمات مژه" />
                <Checkbox name="filter[]" label="خدمات ابرو" />
                <Checkbox name="filter[]" label="خدمات زیبایی مو" />
                <Checkbox name="filter[]" label="جوان سازی پوست" />
                <Checkbox name="filter[]" label="جوان سازی پوست" />
                <Checkbox name="filter[]" label="جوان سازی پوست" />
              </form>
            </CategoryFilters>
          </div>
        </div>
      </section>
    </main>
  )
}
