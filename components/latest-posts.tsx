import { ReactNode } from 'react'
import { ButtonLink } from './button-link'
import { PostCard } from './post-card'

interface LatestPostsProps {
  title: ReactNode
  action?: {
    label: string
    href: string
  }
}

export function LatestPosts({ title, action }: LatestPostsProps) {
  return (
    <section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 lg:gap-10">
        {title}
        <div className="flex w-full flex-col gap-7 md:grid md:grid-cols-2 lg:grid-cols-4">
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
            slug="fourth blog post"
            date="1402/02/28"
          />
        </div>
        {action && (
          <ButtonLink
            href={action.href}
            color="transparent"
            label={action.label}
          />
        )}
      </div>
    </section>
  )
}
