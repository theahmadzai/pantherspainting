import React from 'react'
import { Carousel as AntdCarousel, Image } from 'antd'

const images = [
  '/carousel/1.jpg',
  '/carousel/2.jpg',
  '/carousel/3.jpg',
  '/carousel/4.jpg',
]

const Carousel = props => {
  return (
    <AntdCarousel autoplay effect="fade" {...props}>
      {images.map((image, i) => (
        <Image key={i} src={image} height={400} preview={false} />
      ))}
    </AntdCarousel>
  )
}

export default Carousel
