import { BagHappy, Shop } from 'iconsax-react'
import { CatItem } from './cat-item'
import { Title } from './title'

export function IndexCategories() {
  return (
    <section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 lg:gap-10">
        <Title>
          دسته بندی
          <strong className="font-black"> خدمات</strong>
        </Title>
        <div className="flex w-full flex-col gap-7 md:grid md:grid-cols-2">
          <CatItem
            title="کسب و کارها"
            text="غذا و خوراکی, سالن زیبایی و ..."
            icon={<Shop size={38} />}
            href="/business-categories"
            hrefLabel="دسته بندی ها"
          />
          <CatItem
            title="محصولات"
            text="کالای دیجیتال,  مد وپوشاک و ..."
            icon={<BagHappy size={38} />}
            href="/product-categories"
            hrefLabel="دسته بندی ها"
          />
        </div>
      </div>
    </section>
  )
}
