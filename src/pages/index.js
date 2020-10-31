import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col, Typography, Button, Image } from 'antd'
import Layout from '../components/Layout/Layout'
import Carousel from '../components/Carousel/carousel'
import HomeCurve from '../components/Svgs/HomeCurve'
import styles from './index.module.less'

const { Title, Paragraph } = Typography

export default () => {
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
      <Carousel style={{ marginTop: '-3rem' }} />

      <HomeCurve />

      <Row>
        <Col md={12}>
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
        <Col md={12}>
          <Img fluid={painter.sharp.fluid} />
        </Col>
      </Row>
    </Layout>
  )
}
