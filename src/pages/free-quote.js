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
          >
            <Row>
              <Col span={24} md={12}>
                <Item label="First Name">
                  <Input placeholder="John" />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item label="Last Name">
                  <Input placeholder="Doe" />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col span={24} md={12}>
                <Item label="Phone">
                  <Input placeholder="+1322******" />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item label="Email">
                  <Input placeholder="john@example.com" />
                </Item>
              </Col>
            </Row>
            <Item
              label="Address"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <Input placeholder="House # 3.." />
            </Item>
            <Row>
              <Col span={24} md={12}>
                <Item label="Street">
                  <Input placeholder="Wall Street" />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item label="City">
                  <Input placeholder="New york" />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col span={24} md={12}>
                <Item label="Zip Code">
                  <Input placeholder="340222" />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item label="State">
                  <Input placeholder="Georgia" />
                </Item>
              </Col>
            </Row>
            <Item
              label="Description"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <TextArea rows={6} placeholder="I want to get my home...." />
            </Item>
            <Item wrapperCol={{ offset: 4 }}>
              <Button type="ghost">Submit</Button>
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
