import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col, Typography, Button } from 'antd'
import Layout from '../components/layout/layout'
import Carousel from '../components/carousel'
import HomeCurve from '../components/svgs/home-curve'
import styles from './index.module.less'

const { Title, Paragraph } = Typography

export default function IndexPage() {
  const { painter } = useStaticQuery(graphql`
    query {
      painter: file(relativePath: { eq: "painter.png" }) {
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
      <Carousel className={styles.carousel} />

      <HomeCurve />

      <Row>
        <Col span={24} md={12}>
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
        <Col span={24} md={12}>
          <Img fluid={painter.sharp.fluid} />
        </Col>
      </Row>
    </Layout>
  )
}
