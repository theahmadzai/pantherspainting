import React from "react"
import { Layout, Row, Col, Typography, Image } from "antd"
import {
  CompassOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons"

const { Title, Paragraph } = Typography

const Footer = () => {
  return (
    <Layout.Footer
      style={{
        width: "1000px",
        margin: "0 auto",
        padding: "0",
        backgroundColor: "#fff",
        borderTop: "2px solid #f1dbfb",
        fontSize: "1rem",
      }}
    >
      <Row gutter={24} className="dropbg" style={{ padding: "2rem 0" }}>
        <Col md={8}>
          <Title level={3} className="backpaint">
            About Us
          </Title>
          <Paragraph ellipsis={{ rows: 2, expandable: true }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            cumque, asperiores consectetur consequuntur distinctio saepe
            nesciunt temporibus quasi vel odit praesentium ad aut. Nemo error
            adipisci eius! Molestiae, obcaecati non.
          </Paragraph>
        </Col>
        <Col md={8}>
          <Title level={3} className="backpaint">
            Contact Info
          </Title>
          <Paragraph>
            <CompassOutlined title="Office Address" /> Some Fake Address,
            Atlanta, Georgia
          </Paragraph>
          <Paragraph>
            <PhoneOutlined title="Contact" /> +1 (0) 222X3214
          </Paragraph>
          <Paragraph>
            <MailOutlined title="Email" /> info@pantherspainting.com
          </Paragraph>
        </Col>
        <Col md={8}>
          <Title level={3} className="backpaint">
            Get in Touch
          </Title>
          <Paragraph>
            Subscribe to our RSS feed or follow us on Facebook and Twitter for
            the latest content
          </Paragraph>
          <div style={{ fontSize: "2rem" }}>
            <FacebookOutlined
              title="Panthers Painting Facebook"
              style={{ marginRight: "1rem" }}
            />
            <TwitterOutlined
              title="Panthers Painting Twitter"
              style={{ marginRight: "1rem" }}
            />
            <InstagramOutlined title="Panthers Painting Instagram" />
          </div>
        </Col>
      </Row>
      <Row justify="left" style={{ padding: "0.25rem 0" }}>
        <Col>
          <Paragraph style={{ borderBottom: "2px solid pink" }}>
            &copy; Copyright 2020 - Panthers Painting Atlanta
          </Paragraph>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ overflow: "hidden" }}>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "#f1dbfb",
              width: "100%",
              height: 50,
              transform: "rotate(180deg) scaleX(-1)",
            }}
          >
            <path
              d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
              opacity=".25"
            />
            <path
              d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
              opacity=".5"
            />
            <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
          </svg>
        </Col>
      </Row>
    </Layout.Footer>
  )
}

export default Footer
