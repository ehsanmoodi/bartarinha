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
              slug="1"
              date="۱۴۰۱/۱۲/۱۳"
            />
            <TehranCard
              image="https://picsum.photos/200/300?random=1"
              title="عنوان مطلب در این قسمت قرار می‌گیرد"
              excerpt="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان ... "
              slug="1"
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
