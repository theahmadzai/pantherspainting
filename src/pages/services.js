import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Row, Col, Button, Typography } from 'antd'
import Layout from '../components/Layout/Layout'
import ServicePreview from '../components/ServicePreview/ServicePreview'

const { Title, Paragraph } = Typography

export default () => {
  const services = useStaticQuery(graphql`
    query {
      allContentfulService {
        totalCount
        edges {
          node {
            title
            caption
            body {
              json
            }
            image {
              fixed(quality: 70, height: 250, width: 400) {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Title style={{ fontWeight: 300, textAlign: 'center' }}>Services</Title>
      <Paragraph style={{ fontSize: '1rem', textAlign: 'center' }}>
        We have different experienced teams that can take care of variety of
        services besides painting. We do carpentry, gutter, interior and
        exterior painting, fencing, pressure washing etc. you can ask for a free
        quote anytime our estimators can give you same day quote.
      </Paragraph>
      <Link to="/free-quote">
        <Button
          type="ghost"
          style={{ display: 'block', margin: '0 auto 3rem' }}
        >
          Ask For a Free Quote
        </Button>
      </Link>
      <Row gutter={32}>
        {services.allContentfulService.edges.map(({ node: service }, i) => (
          <Col
            span={24}
            sm={12}
            md={8}
            style={{ marginBottom: '2rem' }}
            key={i}
          >
            <ServicePreview {...service} />
          </Col>
        ))}
      </Row>
    </Layout>
  )
}
