import React from 'react'
import { Row, Col, Typography } from 'antd'
import Layout from '../components/Layout/Layout'
import Carousel from '../components/carousel'
import PainterIntro from '../components/PainterIntro/PainterIntro'
import HomeCurve from '../components/Svgs/HomeCurve'

const { Title, Paragraph } = Typography

export default () => {
  return (
    <Layout>
      <Carousel style={{ marginTop: '-3rem' }} />
      <HomeCurve />
      <PainterIntro />
      <Row style={{ marginBottom: '2rem' }}>
        <Col md={12} style={{ padding: '2rem', background: '#d18cf1' }}>
          <Title level={2} style={{ color: '#fff' }}>
            Residential and Commercial Painting Service
          </Title>
          <Paragraph
            style={{
              color: '#fff',
              fontSize: '1.1rem',
              textAlign: 'justify',
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            maxime vitae quod? Excepturi eius quisquam provident, deserunt eum,
            voluptate, magnam saepe voluptatem laudantium quam esse suscipit nam
            in necessitatibus earum?
          </Paragraph>
        </Col>
        <Col md={12}>
          <Carousel />
        </Col>
      </Row>
    </Layout>
  )
}
