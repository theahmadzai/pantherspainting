import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col, Rate, Typography, Input, Button, Divider } from 'antd'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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

const ServiceTemplate = ({ data: { contentfulService: service } }) => (
  <Layout>
    <Row gutter={24}>
      <Col span={24} md={12}>
        <Img
          className={styles.image}
          fluid={service.image.fluid}
          alt={service.title}
        />
      </Col>
      <Col span={24} md={12}>
        <Title>{service.title}</Title>
        <Rate allowHalf defaultValue={2.5} />

        <Paragraph type="secondary">{service.caption}</Paragraph>
        <Paragraph>{documentToReactComponents(service.body.json)}</Paragraph>
        <div>
          <Divider />
          <Rate allowHalf defaultValue={5} style={{ marginBottom: '1rem' }} />
          <Input placeholder="Your Name" style={{ marginBottom: '1rem' }} />
          <TextArea
            placeholder="Description..."
            style={{ marginBottom: '1rem' }}
          />
          <Button type="primary">Rate</Button>
        </div>
      </Col>
    </Row>
  </Layout>
)

export default ServiceTemplate
