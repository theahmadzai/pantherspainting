import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col, Rate, Typography, Input, Button, Divider } from 'antd'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useRatings } from '../contexts/ratings'
import Layout from '../components/layout/layout'
import styles from './service.module.less'

const { Title, Paragraph } = Typography
const { TextArea } = Input

export const query = graphql`
  query($slug: String!) {
    contentfulService(slug: { eq: $slug }) {
      title
      caption
      image {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      body {
        json
      }
    }
  }
`

const ServiceTemplate = ({
  data: { contentfulService: service },
  pageContext: { slug },
}) => {
  const [rating, setRating] = useState(5)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const { ratings } = useRatings()

  const submitReview = useCallback(() => {
    fetch('/.netlify/functions/create-rating', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug, rating, name, description }),
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(console.log)
  }, [slug, rating, name, description])

  return (
    <Layout>
      <Row gutter={32}>
        <Col span={24} md={12}>
          <Img
            className={styles.image}
            fluid={service.image.fluid}
            alt={service.title}
          />
        </Col>
        <Col span={24} md={12}>
          <Title>{service.title}</Title>
          <Rate
            allowHalf
            value={ratings[slug].rating}
            defaultValue={5}
            disabled
          />

          <Paragraph type="secondary">{service.caption}</Paragraph>
          <Paragraph>{documentToReactComponents(service.body.json)}</Paragraph>
          <div>
            <Divider />
            <Rate
              allowHalf
              defaultValue={5}
              value={rating}
              onChange={setRating}
              style={{ marginBottom: '1rem' }}
            />
            <Input
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{ marginBottom: '1rem' }}
            />
            <TextArea
              placeholder="Description..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              style={{ marginBottom: '1rem' }}
            />
            <Button type="primary" onClick={submitReview}>
              Rate
            </Button>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default ServiceTemplate
