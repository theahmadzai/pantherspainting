import React from "react"
import { Card, Image } from "antd"

const { Meta } = Card

const ServicePreview = ({ image, title, caption }) => (
  <Card
    hoverable
    bordered={false}
    cover={<Image src={image.fixed.src} alt={title} />}
  >
    <Meta title={title} description={caption} />
  </Card>
)

export default ServicePreview
