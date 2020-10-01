import React from 'react'
import { Row, Col, Image } from 'antd'
import Layout from '../components/Layout/Layout'
import PageTitle from '../components/PageTitle/PageTitle'
import QuoteForm from '../components/QuoteForm/QuoteForm'

export default () => (
  <Layout>
    <PageTitle>Request a Free Quote</PageTitle>
    <Row>
      <Col md={16}>
        <QuoteForm />
      </Col>
      <Col md={8}>
        <Image src="/postman.svg" />
      </Col>
    </Row>
  </Layout>
)
