import { LatestPosts, IndexCategories, AdItem } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col gap-16 lg:gap-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-3 gap-8 px-4">
        <AdItem />
      </div>
      <IndexCategories />
      <LatestPosts />
    </main>
  )
}
