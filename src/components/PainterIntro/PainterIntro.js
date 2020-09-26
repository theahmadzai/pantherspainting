import React from "react"
import { Row, Col, Typography, Image, Button } from "antd"

const { Title } = Typography

const PainterIntro = () => {
  return (
    <Row>
      <Col md={12} style={{ padding: "4rem 0" }}>
        <Title>Residential and Commercial Painting Service</Title>
        <Title level={3} style={{ fontWeight: "300" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maxime
          vitae quod? Excepturi eius quisquam provident.
        </Title>
        <Button type="default" size="large">
          Contact Us
        </Button>
      </Col>
      <Col md={12}>
        <Image src="/painter.svg" alt="painter" />
      </Col>
    </Row>
  )
}

export default PainterIntro
