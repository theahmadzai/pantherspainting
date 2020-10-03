import React from 'react'
import { Row, Col, Typography } from 'antd'
import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons'
import FooterCurve from '../../Svgs/FooterCurve'
import styles from './Footer.module.css'

const { Title, Paragraph } = Typography

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Row gutter={24} className={styles.footerItems}>
        <Col span={24} md={8} className={styles.footerItem}>
          <Title level={3} className={styles.footerItemTitle}>
            Address
          </Title>
          <Paragraph>Some Fake Address, Atlanta, Georgia</Paragraph>
        </Col>
        <Col span={24} md={8} className={styles.footerItem}>
          <Title level={3} className={styles.footerItemTitle}>
            Contact Info
          </Title>
          <Paragraph>
            <PhoneOutlined title="Contact" /> +1 (0) 222X3214
          </Paragraph>
          <Paragraph>
            <MailOutlined title="Email" />
            &nbsp; info@pantherspainting.com
          </Paragraph>
        </Col>
        <Col span={24} md={8} className={styles.footerItem}>
          <Title level={3} className={styles.footerItemTitle}>
            Get in Touch
          </Title>
          <Paragraph>
            Subscribe to our RSS feed or follow us on Facebook and Twitter for
            the latest content
          </Paragraph>
          <div style={{ fontSize: '2rem' }}>
            <FacebookOutlined
              title="Panthers Painting Facebook"
              style={{ marginRight: '1rem' }}
            />
            <TwitterOutlined
              title="Panthers Painting Twitter"
              style={{ marginRight: '1rem' }}
            />
            <InstagramOutlined title="Panthers Painting Instagram" />
          </div>
        </Col>
      </Row>
      <div className={styles.copyright}>
        <span>&copy; Copyright 2020 - Panthers Painting Atlanta</span>
      </div>
      <FooterCurve />
    </footer>
  )
}

export default Footer
