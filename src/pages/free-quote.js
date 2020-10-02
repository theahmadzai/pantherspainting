import React from 'react'
import { Row, Col } from 'antd'
import Layout from '../components/Layout/Layout'
import PageTitle from '../components/PageTitle/PageTitle'
import QuoteInfo from '../components/QuoteInfo/QuoteInfo'
import QuoteForm from '../components/QuoteForm/QuoteForm'

export default () => (
  <Layout>
    <PageTitle>Get a Free Quote</PageTitle>
    <Row style={{ paddingTop: '2rem' }}>
      <Col span={24} md={10}>
        <QuoteInfo />
      </Col>
      <Col span={24} md={14}>
        <QuoteForm />
      </Col>
    </Row>
  </Layout>
)
