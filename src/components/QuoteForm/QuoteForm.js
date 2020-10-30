import React, { useState } from 'react'
import { Row, Col, Form, Input, Button, InputNumber } from 'antd'
import Success from '../Results/Success'
import Error from '../Results/Error'
import styles from './QuoteForm.module.css'

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
      className={styles.form}
      layout="vertical"
      size="large"
      colon={false}
      onFinish={handleFinish}
      scrollToFirstError
      noValidate
    >
      <Row gutter={32}>
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
          >
            <Input placeholder="Doe" />
          </Item>
        </Col>
      </Row>

      <Row gutter={32}>
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
          >
            <Input placeholder="+1322******" />
          </Item>
        </Col>
        <Col span={24} md={12}>
          <Item
            label="Email"
            name="email"
            rules={[
              { required: false },
              {
                type: 'email',
                message: 'Please type a valid email!',
              },
            ]}
          >
            <Input placeholder="john@example.com" />
          </Item>
        </Col>
      </Row>

      <Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please type your address!',
          },
        ]}
      >
        <Input placeholder="House # 3.." />
      </Item>

      <Row gutter={32}>
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
          >
            <Input placeholder="New york" />
          </Item>
        </Col>
      </Row>

      <Row gutter={32}>
        <Col span={24} md={12}>
          <Item
            label="Zip Code"
            name="zipcode"
            rules={[
              {
                required: true,
                message: 'Please type your zipcode!',
              },
              {
                len: 5,
                message: 'Please type a valid zipcode!',
              },
            ]}
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
          >
            <Input placeholder="Georgia" />
          </Item>
        </Col>
      </Row>

      <Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Please type some message!',
          },
        ]}
      >
        <TextArea rows={6} placeholder="I want to get my home...." />
      </Item>

      <Item>
        <Button type="ghost" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  )
}

export default QuoteForm
