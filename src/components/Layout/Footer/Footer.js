import React from 'react'
import { Row, Col, Typography } from 'antd'
import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons'
import useSiteMetadata from '../../../hooks/use-sitemetadata'
import FooterCurve from '../../Svgs/FooterCurve'
import styles from './Footer.module.css'

const { Title, Paragraph } = Typography

const Footer = () => {
  const { name, address, contacts, social, copyrights } = useSiteMetadata()

  return (
    <footer className={styles.footer}>
      <Row gutter={24} className={styles.footerItems}>
        <Col span={24} md={8} className={styles.footerItem}>
          <Title level={3} className={styles.footerItemTitle}>
            Address
          </Title>
          <Paragraph>{address}</Paragraph>
        </Col>

        <Col span={24} md={8} className={styles.footerItem}>
          <Title level={3} className={styles.footerItemTitle}>
            Contact Info
          </Title>
          <Paragraph>
            <PhoneOutlined title="Phone" />
            {contacts.phone}
          </Paragraph>
          <Paragraph>
            <MailOutlined title="Email" />
            {contacts.email}
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
          <div className={styles.icons}>
            <a href={social.facebook} rel="noreferrer" target="_blank">
              <FacebookOutlined title={`${name} Facebook`} />
            </a>
            <a href={social.twitter} rel="noreferrer" target="_blank">
              <TwitterOutlined title={`${name} Twitter`} />
            </a>
            <a href={social.instagram} rel="noreferrer" target="_blank">
              <InstagramOutlined title={`${name} Instagram`} />
            </a>
          </div>
        </Col>
      </Row>

      <div className={styles.copyrights}>
        <span>&copy; {copyrights}</span>
      </div>

      <FooterCurve />
    </footer>
  )
}

export default Footer
