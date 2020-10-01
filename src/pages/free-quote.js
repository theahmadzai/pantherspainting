import React from 'react'
import { Form, Input, Row, Col, Button, Typography, Image } from 'antd'
import Layout from '../components/Layout/Layout'

const { Title } = Typography
const { Item } = Form
const { TextArea } = Input

export default () => {
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
            name="quote"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="quote" />

            <Row>
              <Col span={24} md={12}>
                <Item label="First Name">
                  <Input placeholder="John" name="firstname" />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item label="Last Name">
                  <Input placeholder="Doe" name="lastname" />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col span={24} md={12}>
                <Item label="Phone">
                  <Input placeholder="+1322******" name="phone" />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item label="Email">
                  <Input placeholder="john@example.com" name="email" />
                </Item>
              </Col>
            </Row>
            <Item
              label="Address"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <Input placeholder="House # 3.." name="address" />
            </Item>
            <Row>
              <Col span={24} md={12}>
                <Item label="Street">
                  <Input placeholder="Wall Street" />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item label="City">
                  <Input placeholder="New york" name="city" />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col span={24} md={12}>
                <Item label="Zip Code">
                  <Input placeholder="340222" name="zipcode" />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item label="State">
                  <Input placeholder="Georgia" name="state" />
                </Item>
              </Col>
            </Row>
            <Item
              label="Description"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <TextArea
                rows={6}
                placeholder="I want to get my home...."
                name="description"
              />
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
