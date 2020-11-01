import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Row, Col, Typography } from 'antd'
import Img from 'gatsby-image'
import Layout from '../components/layout/layout'

const { Title, Paragraph } = Typography

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
          style={{ height: '300px', marginBottom: '1rem' }}
          fluid={service.image.fluid}
          alt={service.title}
        />
      </Col>
      <Col span={24} md={12}>
        <Title>{service.title}</Title>
        <Paragraph style={{ fontSize: '1rem', color: '#777' }}>
          {service.caption}
        </Paragraph>
        <Paragraph>{documentToReactComponents(service.body.json)}</Paragraph>
      </Col>
    </Row>
  </Layout>
)

export default ServiceTemplate
