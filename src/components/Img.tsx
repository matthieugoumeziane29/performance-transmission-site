'use client'

import Image, { type ImageProps } from 'next/image'

// Les photos Unsplash sont redimensionnées directement par le CDN d'Unsplash
// (pas de traitement côté serveur). Les images du CMS passent par Next.
const unsplashLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) =>
  `${src}${src.includes('?') ? '&' : '?'}w=${width}&q=${quality || 75}`

export function Img(props: ImageProps) {
  const src = typeof props.src === 'string' ? props.src : ''
  const isUnsplash = src.startsWith('https://images.unsplash.com/')
  return <Image {...props} loader={isUnsplash ? unsplashLoader : undefined} alt={props.alt} />
}
