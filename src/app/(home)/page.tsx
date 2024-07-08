import Image from 'next/image'

import Categories from './components/categories'

export default function Home() {
  return (
    <>
      <div className="p-5">
        <Image
          src="/banner-home-01.png"
          width={0}
          height={0}
          quality={100}
          sizes="100vw"
          className="h-auto w-full"
          alt="até 55% de desconto em mouses"
        />
      </div>
      <Categories />
    </>
  )
}
