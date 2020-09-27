import React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Typography, Image, Button } from 'antd'

const { Title } = Typography

const PainterIntro = () => {
  return (
    <Row>
      <Col md={12} style={{ padding: '4rem 0' }}>
        <Title>Panthers Painting Atlanta</Title>
        <Title level={3} style={{ fontWeight: '300' }}>
          Panthers Painting is dedicated to deliver the best services possible
          using the right product and assigning experienced crew to bring
          hundred percent customer satisfactions and make Atlanta more
          beautiful.
        </Title>
        <Link to="/contact">
          <Button type="default" size="large">
            Contact Us
          </Button>
        </Link>
      </Col>
      <Col md={12}>
        <Image src="/painter.svg" alt="painter" />
      </Col>
    </Row>
  )
}

export default PainterIntro
