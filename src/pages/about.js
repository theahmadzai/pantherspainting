import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import { Row, Col, Typography, Steps } from 'antd'
import Layout from '../components/layout/layout'
import styles from './about.module.less'

const { Title, Paragraph } = Typography
const { Step } = Steps

export default () => {
  const { about, aboutPainter } = useStaticQuery(graphql`
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

      <Paragraph align="justify" style={{ marginBottom: '2rem' }}>
        Panthers Painting is a Georgia State certified company its main goal is
        to provide the best services for a reasonable price. Our crew have years
        of experience in their fields of profession. They have served all over
        Atlanta area and have accomplished tons of projects with customer
        satisfaction. Panthers Painting is always considering experienced crew
        for its projects.
      </Paragraph>

      <Row gutter={32}>
        <Col span={24} md={12}>
          <Img fluid={aboutPainter.sharp.fluid} />
        </Col>

        <Col span={24} md={12}>
          <Title level={2} className={styles.subheading}>
            Residential
          </Title>

          <Paragraph align="justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus quidem inventore laborum impedit rerum minima eveniet
            qui nihil atque illum, recusandae iste. Labore, dolorum. Magni vitae
            fugiat voluptatem unde fuga.
          </Paragraph>
        </Col>
      </Row>

      <Title level={2} className={styles.myHeading}>
        How it works?
      </Title>

      <Steps current={1} style={{ margin: '4rem 0' }}>
        <Step title="Finished" description="This is a description." />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </Layout>
  )
}
