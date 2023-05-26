import {
  Banner,
  CategoryFilters,
  Checkbox,
  Pagination,
  TehranCard,
  Title,
} from '@/components'
import { Breadcrumb } from '@/components/breadcrumb'

export default function Tehran() {
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
                title: 'تهرانگردی',
              },
            ]}
          />
          <Title align="start">
            <strong className="font-black">تهرانگردی</strong>
          </Title>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-9">
            <TehranCard
              image="https://picsum.photos/200/300?random=1"
              title="عنوان مطلب در این قسمت قرار می‌گیرد"
              excerpt="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان ... "
              slug="tehran-1"
              date="۱۴۰۱/۱۲/۱۳"
            />
            <TehranCard
              image="https://picsum.photos/200/300?random=2"
              title="عنوان مطلب در این قسمت قرار می‌گیرد"
              excerpt="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان ... "
              slug="tehran-2"
              date="۱۴۰۱/۱۲/۱۳"
            />

            <Banner
              imageSrc="https://picsum.photos/350/500"
              imageClasses="w-full h-44 lg:w-[350px]"
              showPattern={false}
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

            <TehranCard
              image="https://picsum.photos/200/300?random=3"
              title="عنوان مطلب در این قسمت قرار می‌گیرد"
              excerpt="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان ... "
              slug="tehran-3"
              date="۱۴۰۱/۱۲/۱۳"
            />

            <TehranCard
              image="https://picsum.photos/200/300?random=4"
              title="عنوان مطلب در این قسمت قرار می‌گیرد"
              excerpt="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان ... "
              slug="tehran-4"
              date="۱۴۰۱/۱۲/۱۳"
            />

            <Pagination />
          </div>

          <div className="lg:col-span-3">
            <CategoryFilters>
              <form className="flex flex-col gap-5">
                <Checkbox name="filter[]" label="کافی شاپ ها" />
                <Checkbox name="filter[]" label="مکان های تفریحی" />
                <Checkbox name="filter[]" label="مکان های تاریخی" />
                <Checkbox name="filter[]" label="مکان های زیارتی" />
                <Checkbox name="filter[]" label="رستوران ها" />
              </form>
            </CategoryFilters>
          </div>
        </div>
      </section>
    </main>
  )
}
