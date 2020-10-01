import React from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'
import styles from './ContactForm.module.css'

const { Item } = Form
const { TextArea } = Input

const ContactForm = () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleFinish = values => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
  }

  return (
    <Form
      className={styles.form}
      layout="vertical"
      size="large"
      method="post"
      scrollToFirstError
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onFinish={handleFinish}
      noValidate
    >
      <Item
        label="Full Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please type your full name!',
          },
        ]}
        required
      >
        <Input
          type="text"
          name="name"
          placeholder="John Doe"
          prefix={<UserOutlined className={styles.icon} />}
        />
      </Item>

      <Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please type your email!',
          },
          {
            type: 'email',
            message: 'Please type a valid email!',
          },
        ]}
        required
      >
        <Input
          type="email"
          name="email"
          placeholder="john@example.com"
          prefix={<MailOutlined className={styles.icon} />}
        />
      </Item>

      <Item label="Phone" name="phone">
        <Input
          type="tel"
          name="phone"
          placeholder="+123********"
          prefix={<PhoneOutlined className={styles.icon} />}
        />
      </Item>

      <Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please type a brief message!' }]}
        required
      >
        <TextArea name="message" aplaceholder="Your message..." rows={5} />
      </Item>

      <Item>
        <Button type="ghost" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  )
}

export default ContactForm
