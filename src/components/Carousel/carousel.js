import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Carousel as AntdCarousel } from 'antd'

const Carousel = props => {
  const data = useStaticQuery(graphql`
    query {
      contentfulCarousel(name: { eq: "Home" }) {
        images {
          fixed(height: 400) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    }
  `)

  const images = data.contentfulCarousel.images.map(image => image.fixed)

  return (
    <AntdCarousel autoplay effect="fade" {...props}>
      {images.map((image, i) => (
        <Img key={i} fixed={image} />
      ))}
    </AntdCarousel>
  )
}

export default Carousel
