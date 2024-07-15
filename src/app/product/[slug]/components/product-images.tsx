'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface ProductImagesProps {
  name: string
  imagesUrls: string[]
}

const ProductImages = ({ imagesUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imagesUrls[0])

  function handleImageClick(image: string) {
    setCurrentImage(image)
  }

  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-3 px-5">
        {imagesUrls.map((image) => (
          <button
            key={image}
            className={`relative flex h-[100px] items-center justify-center rounded-lg bg-accent`}
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image}
              width={0}
              height={0}
              sizes="100vw"
              alt={name}
              quality={100}
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
            {image === currentImage && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-px left-0 right-0 z-10 h-[100%] rounded-lg border-2 border-solid border-primary"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
