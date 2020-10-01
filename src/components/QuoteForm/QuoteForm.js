import React, { useState } from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import Success from '../Results/Success'
import Error from '../Results/Error'

const { Item } = Form
const { TextArea } = Input

const QuoteForm = () => {
  const [formStatus, setFormStatus] = useState(0)

  const handleFinish = values => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': 'quote', ...values }).toString(),
    })
      .then(() => setFormStatus(1))
      .catch(() => setFormStatus(-1))
  }

  if (formStatus === 1) return <Success />
  else if (formStatus === -1) return <Error />

  return (
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
  )
}

export default QuoteForm
