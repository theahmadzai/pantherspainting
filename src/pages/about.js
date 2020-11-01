import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import { Typography } from 'antd'
import Layout from '../components/layout/layout'
import styles from './about.module.less'

const { Title, Paragraph } = Typography

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

      <Paragraph className={styles.about}>
        Panthers Painting is a Georgia State certified company its main goal is
        to provide the best services for a reasonable price. Our crew have years
        of experience in their fields of profession. They have served all over
        Atlanta area and have accomplished tons of projects with customer
        satisfaction. Panthers Painting is always considering experienced crew
        for its projects.
      </Paragraph>

      <Img fluid={aboutPainter.sharp.fluid} className={styles.aboutPainter} />
    </Layout>
  )
}
