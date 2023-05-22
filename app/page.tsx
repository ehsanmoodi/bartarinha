import { LatestPosts } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col gap-16 lg:gap-32">
      <LatestPosts />
    </main>
  )
}
