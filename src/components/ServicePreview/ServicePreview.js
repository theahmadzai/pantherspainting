import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Card } from 'antd'

const { Meta } = Card

const ServicePreview = ({ thumbnail, title, slug, caption }) => (
  <Link to={`/service/${slug}`}>
    <Card
      hoverable
      bordered={false}
      cover={<Img fluid={thumbnail} alt={title} />}
    >
      <Meta title={title} description={caption} />
    </Card>
  </Link>
)

export default ServicePreview
