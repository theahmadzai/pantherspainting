import React from 'react'
import { Row, Col, Typography } from 'antd'
import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons'
import useSiteMetadata from '../../hooks/use-sitemetadata'
import FooterCurve from '../svgs/footer-curve'
import styles from './footer.module.less'
import config from '../../../config'

const { Title, Paragraph } = Typography

const Footer = () => {
  const { name, title } = useSiteMetadata()
  const {
    siteMetadata: { description },
    contacts,
    social,
  } = config

  return (
    <footer className={styles.footer}>
      <Row gutter={24} className={styles.footerItems}>
        <Col span={24} md={8} className={styles.footerItem}>
          <Title level={3} className={styles.footerItemTitle}>
            Company
          </Title>
          <Paragraph>{description}</Paragraph>
        </Col>

        <Col span={24} md={8} className={styles.footerItem}>
          <Title level={3} className={styles.footerItemTitle}>
            Contact Info
          </Title>
          <Paragraph>
            <PhoneOutlined title="Phone" />
            &nbsp;&nbsp;
            {contacts.phone}
          </Paragraph>
          <Paragraph>
            <MailOutlined title="Email" />
            &nbsp;&nbsp;
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
        <span>
          &copy; Copyright {new Date().getFullYear()} - {title}
        </span>
      </div>

      <FooterCurve />
    </footer>
  )
}

export default Footer
