import React from "react"
import { Carousel as AntdCarousel, Image } from "antd"

const images = [
  "/images/carousel/1.jpg",
  "/images/carousel/2.jpg",
  "/images/carousel/3.jpg",
  "/images/carousel/4.jpg",
]

const Carousel = () => {
  return (
    <AntdCarousel autoplay>
      {images.map(image => (
        <Image src={image} height={300} preview={false} />
      ))}
    </AntdCarousel>
  )
}

export default Carousel
