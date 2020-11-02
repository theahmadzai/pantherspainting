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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
                unde quam cum reprehenderit in commodi deserunt consectetur
                eligendi quas quo earum veniam minima officia laboriosam itaque
                incidunt quasi doloremque nihil.
              </Paragraph>
              <Paragraph align="justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia, quia quam dolores qui voluptates explicabo. Aliquid
                illo blanditiis eius alias quis. Reprehenderit exercitationem
                laborum, facere temporibus vel quibusdam accusantium aliquid!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis vero dolores libero. Dolorum vitae blanditiis eligendi
                necessitatibus doloribus. Similique vitae earum beatae est
                magnam ad architecto, nihil vel? Pariatur, dignissimos!
              </Paragraph>
              <Paragraph align="justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, consequuntur ab a doloribus delectus nihil adipisci rem
                iure error ex, quia iste tempora fugit culpa aperiam facilis
                incidunt ipsam perspiciatis!
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
              <Paragraph align="justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                deserunt sint iure veritatis consequuntur iusto aspernatur
                exercitationem, nisi, architecto pariatur nobis, libero ducimus
                optio fuga unde aut. Distinctio, repudiandae laudantium!
              </Paragraph>
              <Paragraph align="justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, consequuntur ab a doloribus delectus nihil adipisci rem
                iure error ex, quia iste tempora fugit culpa aperiam facilis
                incidunt ipsam perspiciatis!
              </Paragraph>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            aliquid et accusantium tempore nisi doloribus asperiores atque
            quisquam omnis, necessitatibus dolore in ab, cupiditate est ex
            blanditiis alias minus veniam.
          </Paragraph>
        </Col>

        <Col span={24} md={12}>
          <Img fluid={aboutPainter.sharp.fluid} />
        </Col>
      </Row>
    </Layout>
  )
}
