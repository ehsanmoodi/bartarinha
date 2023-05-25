import { ButtonLink } from './button-link'
import { SpecItem } from './spec-item'
import { Title } from './title'

export function IndexSpecials() {
  return (
    <section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 lg:gap-10">
        <Title>
          تخفیفات
          <strong className="font-black"> ویژه</strong>
        </Title>
        <div className="flex w-full flex-col gap-8 md:grid md:grid-cols-2">
          <SpecItem />
          <SpecItem />
          <SpecItem />
          <SpecItem />
        </div>
        <ButtonLink color="transparent" href="#" label="مشاهده همه تخفیفات" />
      </div>
    </section>
  )
}
