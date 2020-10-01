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
          <Item
            label="First Name"
            name="firstname"
            rules={[
              {
                required: true,
                message: 'Please type your first name!',
              },
            ]}
            required
          >
            <Input placeholder="John" />
          </Item>
        </Col>
        <Col span={24} md={12}>
          <Item
            label="Last Name"
            name="lastname"
            rules={[
              {
                required: true,
                message: 'Please type your last name!',
              },
            ]}
            required
          >
            <Input placeholder="Doe" />
          </Item>
        </Col>
      </Row>

      <Row>
        <Col span={24} md={12}>
          <Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please type your phone no!',
              },
            ]}
            required
          >
            <Input placeholder="+1322******" />
          </Item>
        </Col>
        <Col span={24} md={12}>
          <Item
            label="Email"
            name="email"
            rules={{
              type: 'email',
              message: 'Please type a valid email!',
            }}
            required
          >
            <Input placeholder="john@example.com" />
          </Item>
        </Col>
      </Row>

      <Item
        label="Address"
        name="address"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        rules={[
          {
            required: true,
            message: 'Please type your address!',
          },
        ]}
        required
      >
        <Input placeholder="House # 3.." />
      </Item>

      <Row>
        <Col span={24} md={12}>
          <Item
            label="Street"
            name="street"
            rules={[
              {
                required: true,
                message: 'Please type your street address!',
              },
            ]}
            required
          >
            <Input placeholder="Wall Street" />
          </Item>
        </Col>
        <Col span={24} md={12}>
          <Item
            label="City"
            name="city"
            rules={[
              {
                required: true,
                message: 'Please type your city name!',
              },
            ]}
            required
          >
            <Input placeholder="New york" />
          </Item>
        </Col>
      </Row>

      <Row>
        <Col span={24} md={12}>
          <Item
            label="Zip Code"
            name="zipcode"
            rules={[
              {
                required: true,
                message: 'Please type your zipcode!',
              },
            ]}
            required
          >
            <Input placeholder="340222" />
          </Item>
        </Col>
        <Col span={24} md={12}>
          <Item
            label="State"
            name="state"
            rules={[
              {
                required: true,
                message: 'Please type your state name!',
              },
            ]}
            required
          >
            <Input placeholder="Georgia" />
          </Item>
        </Col>
      </Row>

      <Item
        label="Description"
        name="description"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        rules={[
          {
            required: true,
            message: 'Please type some message!',
          },
        ]}
        required
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
