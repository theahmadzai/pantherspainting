import React from 'react'
import { Form, Input, Row, Col, Button, Typography, Image } from 'antd'
import Layout from '../components/Layout/Layout'

const { Title } = Typography
const { Item } = Form
const { TextArea } = Input

export default () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleFinish = values => {
    console.log(values)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'quote', ...values }),
    })
  }

  return (
    <Layout>
      <Title
        style={{ fontWeight: 300, textAlign: 'center', marginBottom: '3rem' }}
      >
        Request a Free Quote
      </Title>
      <Row>
        <Col md={16}>
          <Form
            layout="horizontal"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            size="large"
            scrollToFirstError
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onFinish={handleFinish}
            noValidate
          >
            <Row>
              <Col span={24} md={12}>
                <Item label="First Name" name="firstname">
                  <Input placeholder="John" />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item label="Last Name" name="lastname">
                  <Input placeholder="Doe" />
                </Item>
              </Col>
            </Row>

            <Row>
              <Col span={24} md={12}>
                <Item label="Phone" name="phone">
                  <Input placeholder="+1322******" />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item label="Email" name="email">
                  <Input placeholder="john@example.com" />
                </Item>
              </Col>
            </Row>

            <Item
              label="Address"
              name="address"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <Input placeholder="House # 3.." />
            </Item>

            <Row>
              <Col span={24} md={12}>
                <Item label="Street" name="street">
                  <Input placeholder="Wall Street" />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item label="City" name="city">
                  <Input placeholder="New york" />
                </Item>
              </Col>
            </Row>

            <Row>
              <Col span={24} md={12}>
                <Item label="Zip Code" name="zipcode">
                  <Input placeholder="340222" />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item label="State" name="state">
                  <Input placeholder="Georgia" />
                </Item>
              </Col>
            </Row>

            <Item
              label="Description"
              name="description"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <TextArea rows={6} placeholder="I want to get my home...." />
            </Item>

            <Item wrapperCol={{ offset: 4 }}>
              <Button type="ghost" htmlType="submit">
                Submit
              </Button>
            </Item>
          </Form>
        </Col>
        <Col md={8}>
          <Image src="/postman.svg" />
        </Col>
      </Row>
    </Layout>
  )
}
