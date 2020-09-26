import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col, Typography } from "antd"
import Layout from "../components/Layout/Layout"
import ServicePreview from "../components/ServicePreview/ServicePreview"

const { Title, Paragraph } = Typography

export default () => {
  const services = useStaticQuery(graphql`
    query {
      allContentfulService {
        totalCount
        edges {
          node {
            title
            caption
            body {
              json
            }
            image {
              fixed(quality: 70, height: 500, width: 400) {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Title>Services</Title>
      <Paragraph style={{ fontSize: "1rem", marginBottom: "3rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque
        consequatur soluta possimus obcaecati error ut iste voluptatem. Ullam
        quo sunt animi voluptate vitae expedita, consequatur molestias adipisci
        doloremque autem.
      </Paragraph>
      <Row gutter={32}>
        {services.allContentfulService.edges.map(({ node: service }, i) => (
          <Col span={24} sm={12} md={8} style={{ marginBottom: "2rem" }}>
            <ServicePreview {...service} key={i} />
          </Col>
        ))}
      </Row>
    </Layout>
  )
}
