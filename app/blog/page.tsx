import {
  Breadcrumb,
  CategoryFilters,
  Checkbox,
  HotPosts,
  Pagination,
  Title,
  PostCard,
  FeaturedPost,
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
            <div className="mb-6 flex flex-col gap-7 md:grid md:grid-cols-2 lg:mb-12">
              <FeaturedPost
                image="https://picsum.photos/200/300?random=7"
                title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت"
                slug="featured-post-1"
              />
              <FeaturedPost
                image="https://picsum.photos/200/300?random=8"
                title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت"
                slug="featured-post-2"
              />
            </div>

            <Title align="start">
              آرشیو
              <strong className="font-black"> مقالات</strong>
            </Title>

            <div className="flex flex-col gap-7 md:grid md:grid-cols-2 lg:grid-cols-3">
              <PostCard
                image="https://picsum.photos/200/300?random=1"
                title="عنوان مطلب در این قسمت قرار میگیرد"
                slug="first-blog-post"
                date="1402/02/28"
              />
              <PostCard
                image="https://picsum.photos/200/300?random=2"
                title="عنوان مطلب در این قسمت قرار میگیرد"
                slug="second blog post"
                date="1402/02/28"
              />
              <PostCard
                image="https://picsum.photos/200/300?random=3"
                title="عنوان مطلب در این قسمت قرار میگیرد"
                slug="third blog post"
                date="1402/02/28"
              />
              <PostCard
                image="https://picsum.photos/200/300?random=4"
                title="عنوان مطلب در این قسمت قرار میگیرد"
                slug="first-blog-post"
                date="1402/02/28"
              />
              <PostCard
                image="https://picsum.photos/200/300?random=5"
                title="عنوان مطلب در این قسمت قرار میگیرد"
                slug="second blog post"
                date="1402/02/28"
              />
              <PostCard
                image="https://picsum.photos/200/300?random=6"
                title="عنوان مطلب در این قسمت قرار میگیرد"
                slug="third blog post"
                date="1402/02/28"
              />
            </div>

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
