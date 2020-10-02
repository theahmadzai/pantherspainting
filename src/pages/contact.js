import React from 'react'
import { Row, Col } from 'antd'
import Layout from '../components/Layout/Layout'
import PageTitle from '../components/PageTitle/PageTitle'
import ContactForm from '../components/ContactForm/ContactForm'
import ContactInfo from '../components/ContactInfo/ContactInfo'

export default () => {
  return (
    <Layout>
      <PageTitle>Contact Us</PageTitle>
      <Row style={{ paddingTop: '2rem' }}>
        <Col span={24} md={12}>
          <ContactInfo />
        </Col>
        <Col span={24} md={12}>
          <ContactForm />
        </Col>
      </Row>
    </Layout>
  )
}
