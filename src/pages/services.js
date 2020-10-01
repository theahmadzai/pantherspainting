import React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Button, Typography } from 'antd'
import useServices from '../hooks/use-services'
import Layout from '../components/Layout/Layout'
import PageTitle from '../components/PageTitle/PageTitle'
import ServicePreview from '../components/ServicePreview/ServicePreview'

const { Paragraph } = Typography

export default () => {
  const services = useServices()

  return (
    <Layout>
      <PageTitle>Services</PageTitle>
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
        {services.map((service, i) => (
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
