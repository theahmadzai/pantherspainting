import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import { Row, Col, Typography } from 'antd'
import Layout from '../components/layout/layout'
import styles from './about.module.less'

import { Tabs } from 'antd'

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

const { Title, Paragraph } = Typography

export default () => {
  const {
    about,
    aboutPainter,
    interior,
    exterior,
    fenceAndGate,
  } = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      aboutPainter: file(relativePath: { eq: "about-painter.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      interior: file(relativePath: { eq: "interior.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      exterior: file(relativePath: { eq: "exterior.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fenceAndGate: file(relativePath: { eq: "fence-and-gate.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <BackgroundImage
        fluid={about.sharp.fluid}
        className="pageTitleBackground"
      >
        <Title className="pageTitle">About Us</Title>
      </BackgroundImage>

      <Title level={2} className={styles.heading}>
        Panthers Painting Atlanta
      </Title>

      <Paragraph align="justify">
        Panthers Painting is a Georgia State certified company its main goal is
        to provide the best services for a reasonable price. Our crew have years
        of experience in their fields of profession. They have served all over
        Atlanta area and have accomplished tons of projects with customer
        satisfaction. Panthers Painting is always considering experienced crew
        for its projects.
      </Paragraph>

      <Tabs onChange={callback} type="card" className={styles.tabs}>
        <TabPane tab="Interior" key="1">
          <Row gutter={[32, 12]}>
            <Col span={24} sm={12} md={8}>
              <Img fluid={interior.sharp.fluid} />
            </Col>
            <Col span={24} sm={12} md={16}>
              <Paragraph align="justify">
                On interior painting we will consider the best quality paint and
                will be done by professional painters. Our rates will be
                competitive.
              </Paragraph>
            </Col>
          </Row>
        </TabPane>

        <TabPane tab="Exterior" key="2">
          <Row gutter={[32, 12]}>
            <Col span={24} sm={12} md={8}>
              <Img fluid={exterior.sharp.fluid} />
            </Col>
            <Col span={24} sm={12} md={16}>
              <Paragraph align="justify">
                On the Exterior painting the prep work will be done by pressure
                washing and scraping to remove the old pealing paint, the gaps
                and cracks will be caulked and will make sure all of the rotted
                woods are replaced.
              </Paragraph>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Fence &amp; Gate" key="3">
          <Row gutter={[32, 12]}>
            <Col span={24} sm={12} md={8}>
              <Img fluid={fenceAndGate.sharp.fluid} />
            </Col>
            <Col span={24} sm={12} md={16}>
              <Paragraph align="justify"></Paragraph>
            </Col>
          </Row>
        </TabPane>
      </Tabs>

      <Row gutter={32}>
        <Col span={24} md={12}>
          <Title level={2} className={styles.normalWeight}>
            Why Us?
          </Title>
          <Paragraph align="justify">
            We use the best quality materials and all of our workers are
            professionals. our customers are 100% satisfied with the work.
          </Paragraph>
        </Col>

        <Col span={24} md={12}>
          <Img fluid={aboutPainter.sharp.fluid} />
        </Col>
      </Row>
    </Layout>
  )
}
