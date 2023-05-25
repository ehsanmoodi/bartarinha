import {
  Breadcrumb,
  CategoryFilters,
  Checkbox,
  HotPosts,
  Pagination,
  Title,
} from '@/components'

export default function Blog() {
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
                title: 'مقالات',
              },
            ]}
          />
          <Title align="start">
            جدیدترین
            <strong className="font-black"> مقالات</strong>
          </Title>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-9">
            <Pagination />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-3">
            <CategoryFilters>
              <form className="flex flex-col gap-5">
                <Checkbox name="filter[]" label="عنوان تستی دسته بندی" />
                <Checkbox name="filter[]" label="عنوان تستی دسته بندی" />
                <Checkbox name="filter[]" label="عنوان تستی دسته بندی" />
                <Checkbox name="filter[]" label="عنوان تستی دسته بندی" />
              </form>
            </CategoryFilters>
            <HotPosts />
          </div>
        </div>
      </section>
    </main>
  )
}
