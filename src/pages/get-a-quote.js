import React from 'react'
import { Row, Col } from 'antd'
import Layout from '../components/Layout/Layout'

export default () => {
  return (
    <Layout>
      <Row gutter={24}>
        <Col span={24} md={12}>
          A
        </Col>
        <Col span={24} md={12}>
          B
        </Col>
      </Row>
    </Layout>
  )
}
