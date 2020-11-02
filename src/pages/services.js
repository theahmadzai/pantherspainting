import React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Button, Typography } from 'antd'
import useServices from '../hooks/use-services'
import Layout from '../components/layout/layout'
import ServicePreview from '../components/service-preview'
import PaintBucket from '../components/svgs/paint-bucket'
import styles from './services.module.less'

const { Title, Paragraph } = Typography

export default () => {
  const services = useServices()

  return (
    <Layout>
      <Title className={styles.title}>
        <PaintBucket />
        <span className={styles.titleText}>Services</span>
      </Title>

      <Paragraph className={styles.servicesDescriptionText}>
        Panthers Painting Atlanta accepts residential construction painting and
        epairing services. We are trying to provide the best services with the
        most reasonable price. Our estimates are always free, we encourage you
        to provide us with the complete information for preparing an estimate
        report by clicking the free Estimate tab provided at the top right of
        the page and we will be able to provide you an estimate within 2 days.
      </Paragraph>

      <Link to="/free-estimate">
        <Button
          type="ghost"
          style={{ display: 'block', margin: '0 auto 3rem' }}
        >
          Ask For a Free Estimate
        </Button>
      </Link>

      <Row gutter={[32, 32]}>
        {services.map((service, i) => (
          <Col span={24} sm={12} md={8} key={i}>
            <ServicePreview {...service} />
          </Col>
        ))}
      </Row>
    </Layout>
  )
}
