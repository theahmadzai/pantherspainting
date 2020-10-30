import React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Typography, Button, Image } from 'antd'
import Layout from '../components/Layout/Layout'
import Carousel from '../components/carousel'
import HomeCurve from '../components/Svgs/HomeCurve'
import styles from './index.module.less'

const { Title, Paragraph } = Typography

export default () => {
  return (
    <Layout>
      <Carousel style={{ marginTop: '-3rem' }} />

      <HomeCurve />

      <Row>
        <Col md={12} className={styles.introBox}>
          <Title>Panthers Painting Atlanta</Title>
          <Paragraph>
            Panthers Painting is dedicated to deliver the best services possible
            using the right product and assigning experienced crew to bring
            hundred percent customer satisfactions.
          </Paragraph>
          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </Col>
        <Col md={12}>
          <Image src="/painter.svg" alt="painter" />
        </Col>
      </Row>
    </Layout>
  )
}
