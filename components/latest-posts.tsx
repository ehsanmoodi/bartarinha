import { ButtonLink } from './button-link'
import { PostItem } from './post-item'
import { Title } from './title'

export function LatestPosts() {
  return (
    <section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 lg:gap-10">
        <Title>
          جدیدترین
          <strong className="font-black"> مقالات</strong>
        </Title>
        <div className="flex w-full flex-col gap-7 md:grid md:grid-cols-2 lg:grid-cols-4">
          <PostItem
            image="https://picsum.photos/200/300?random=1"
            title="عنوان مطلب در این قسمت قرار میگیرد"
            slug="first-blog-post"
            date="1402/02/28"
          />
          <PostItem
            image="https://picsum.photos/200/300?random=2"
            title="عنوان مطلب در این قسمت قرار میگیرد"
            slug="second blog post"
            date="1402/02/28"
          />
          <PostItem
            image="https://picsum.photos/200/300?random=3"
            title="عنوان مطلب در این قسمت قرار میگیرد"
            slug="third blog post"
            date="1402/02/28"
          />
          <PostItem
            image="https://picsum.photos/200/300?random=4"
            title="عنوان مطلب در این قسمت قرار میگیرد"
            slug="fourth blog post"
            date="1402/02/28"
          />
        </div>
        <ButtonLink href="/blog" color="transparent" label="مشاهده همه مطالب" />
      </div>
    </section>
  )
}
