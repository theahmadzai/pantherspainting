import React from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'
import styles from './ContactForm.module.css'

const { Item } = Form
const { TextArea } = Input

const ContactForm = () => {
  return (
    <Form
      className={styles.form}
      layout="vertical"
      size="large"
      name="contact"
      netlify
    >
      <Item label="Your Name" required>
        <Input
          type="text"
          prefix={<UserOutlined className={styles.icon} />}
          placeholder="John Doe"
          name="name"
        />
      </Item>
      <Item label="Phone" required>
        <Input
          type="tel"
          prefix={<PhoneOutlined className={styles.icon} />}
          placeholder="+123********"
          name="phone"
        />
      </Item>
      <Item label="Email">
        <Input
          type="email"
          prefix={<MailOutlined className={styles.icon} />}
          placeholder="john@example.com"
          name="email"
        />
      </Item>
      <Item label="Message">
        <TextArea aplaceholder="Your message..." rows={5} name="message" />
      </Item>

      <Item>
        <Button>Submit</Button>
      </Item>
    </Form>
  )
}

export default ContactForm
