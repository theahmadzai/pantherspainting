import React from 'react'
import { Typography, Row, Col, Image } from 'antd'
import Layout from '../components/Layout/Layout'
import PageTitle from '../components/PageTitle/PageTitle'

const { Title, Paragraph } = Typography

export default () => {
  return (
    <Layout>
      <PageTitle>About Us</PageTitle>

      <Paragraph style={{ fontSize: '1rem', textAlign: 'center' }}>
        Panthers Painting is a growing company registered in 2020, but our crew
        have years of experience in their fields of profession. They have served
        all over Atlanta area and have accomplished tons of projects with
        customer satisfaction. P.Painting is always considering seasoned and
        experienced crew for its projects.
      </Paragraph>

      <Row gutter={24} style={{ marginBottom: '2rem', marginTop: '5rem' }}>
        <Col span={24} sm={6}>
          <Image src="/johndoe.jpg" height="220px" />
        </Col>
        <Col span={24} sm={18}>
          <Title level={3} style={{ fontWeight: '400' }}>
            John Doe
          </Title>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            error cupiditate iusto quo maiores quasi repudiandae eum, voluptate
            vitae earum quisquam! Sapiente est dolor nihil? Officiis pariatur
            eius praesentium! Nemo?
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={24} sm={6}>
          <Image src="/johnwick.jpg" height="220px" />
        </Col>
        <Col span={24} sm={18}>
          <Title level={3} style={{ fontWeight: '400' }}>
            John Wick
          </Title>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            error cupiditate iusto quo maiores quasi repudiandae eum, voluptate
            vitae earum quisquam! Sapiente est dolor nihil? Officiis pariatur
            eius praesentium! Nemo?
          </Paragraph>
        </Col>
      </Row>
    </Layout>
  )
}
