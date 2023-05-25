import { Bill } from 'iconsax-react'
import { SidebarCard } from './sidebar-card'
import { LayeredImage } from './layared-image'
import Link from 'next/link'

export function HotPosts() {
  const posts = [
    {
      title: 'مطلب در این قسمت قرار می‌گیرد',
      image: 'https://picsum.photos/200/300?random=1',
    },
    {
      title: 'مطلب در این قسمت قرار می‌گیرد',
      image: 'https://picsum.photos/200/300?random=2',
    },
    {
      title: 'مطلب در این قسمت قرار می‌گیرد',
      image: 'https://picsum.photos/200/300?random=3',
    },
  ]

  return (
    <SidebarCard>
      <div className="flex w-full items-center gap-2 text-base font-medium">
        <Bill size={24} className="text-secondary" />
        محبوبترین عناوین
      </div>
      <div className="mt-5 flex flex-col gap-5 border-t border-white pt-5">
        {posts.map((item, index) => (
          <div key={index} className="group flex items-center gap-3">
            <LayeredImage
              src={item.image}
              alt={item.title}
              classes="w-[60px] h-[60px] rounded-full"
              layerOffset="-bottom-[60px]"
            />
            <Link
              href="#"
              className="text-sm font-normal leading-6 transition-all group-hover:text-primary"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </SidebarCard>
  )
}
