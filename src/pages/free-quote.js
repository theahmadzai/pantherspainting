import React from 'react'
import { Row, Col } from 'antd'
import Layout from '../components/Layout/Layout'
import QuoteInfo from '../components/QuoteInfo/QuoteInfo'
import QuoteForm from '../components/QuoteForm/QuoteForm'

export default () => (
  <Layout>
    <Row>
      <Col span={24} md={10}>
        <QuoteInfo />
      </Col>
      <Col span={24} md={14}>
        <QuoteForm />
      </Col>
    </Row>
  </Layout>
)
