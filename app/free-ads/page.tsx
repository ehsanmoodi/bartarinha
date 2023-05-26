import {
  Banner,
  Breadcrumb,
  Button,
  CategoryFilters,
  Checkbox,
  Keyword,
  SidebarAdCard,
  SmallAdCard,
  Title,
} from '@/components'
import { Location, Refresh } from 'iconsax-react'

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
                <SmallAdCard
                  image="https://picsum.photos/200/300?random=1"
                  title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
                  location="دولت آباد"
                  slug="ad-1"
                />
                <SmallAdCard
                  image="https://picsum.photos/200/300?random=2"
                  title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
                  location="دولت آباد"
                  slug="ad-2"
                />
                <SmallAdCard
                  image="https://picsum.photos/200/300?random=3"
                  title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
                  location="دولت آباد"
                  slug="ad-3"
                />
                <SmallAdCard
                  image="https://picsum.photos/200/300?random=4"
                  title="عنوان تستی آگهی تا دو خط در این قسمت قرار میگیرد"
                  location="دولت آباد"
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

            <div className="flex flex-col gap-8">
              <Title align="start">
                کلیدواژه های
                <strong className="font-black"> پربازدید</strong>
              </Title>
              <div className="flex flex-wrap gap-4">
                <Keyword href="#" label="تزریق ژل و بوتاکس" />
                <Keyword href="#" label="تزریق ژل" />
                <Keyword href="#" label="مزوتراپی پوست ومو" />
                <Keyword href="#" label="کلینیک زیبایی" />
                <Keyword href="#" label="فیشیال" />
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
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-3">
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

            <CategoryFilters
              title="محدوده فعالیت"
              icon={<Location size={24} className="text-secondary" />}
            >
              <form className="flex flex-col gap-5">
                <Checkbox name="filter[]" label="محدوده یک" />
                <Checkbox name="filter[]" label="محدوده دو" />
              </form>
            </CategoryFilters>

            <div>
              <SidebarAdCard
                image="https://picsum.photos/200/300?random=200"
                title="عنوان اصلی آگهی مورد نظر تا دو خط در این قسمت قرار میگیرد"
                location="دولت آباد"
                price="۶,۰۰,۰۰۰"
                discountedPrice="۵,۰۰,۰۰۰"
                slug="ad-200"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
