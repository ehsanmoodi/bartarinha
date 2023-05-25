import Image from 'next/image'

interface LayeredImagePorps {
  src: string
  alt: string
  classes?: string
  layerOffset?: string
}

export function LayeredImage({
  src,
  alt,
  classes,
  layerOffset,
}: LayeredImagePorps) {
  return (
    <div className={`relative shrink-0 overflow-hidden ${classes}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="h-full w-full rounded-[inherit] object-cover object-center"
      />
      <div
        className={`${layerOffset} absolute left-0 h-full w-full rounded-[inherit] bg-item-layer transition-all duration-300 group-hover:bottom-0`}
      ></div>
    </div>
  )
}
