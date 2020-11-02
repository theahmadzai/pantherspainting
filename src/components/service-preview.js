import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Rate, Typography } from 'antd'
import styles from './service-preview.module.less'

const { Paragraph } = Typography

const ServicePreview = ({ thumbnail, title, slug, caption }) => (
  <Link to={`/service/${slug}`}>
    <div className={styles.card}>
      <Img fluid={thumbnail} alt={title} className={styles.image} />
      <div className={styles.meta}>
        <div className={styles.rating}>
          <Rate count={1} allowHalf defaultValue={2.5} />
          &nbsp;2 Reviews
        </div>
        <Paragraph className={styles.title}>{title}</Paragraph>
        <Paragraph type="secondary">{caption}</Paragraph>
      </div>
    </div>
  </Link>
)

export default ServicePreview
