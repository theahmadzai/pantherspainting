import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Row, Col, Typography, Image } from 'antd'
import Layout from '../components/Layout/Layout'
import QuoteForm from '../components/QuoteForm/QuoteForm'
import styles from './free-estimate.module.less'

const { Title, Paragraph } = Typography

export default () => {
  const { quote } = useStaticQuery(graphql`
    query {
      quote: file(relativePath: { eq: "quote.jpg" }) {
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
        fluid={quote.sharp.fluid}
        className="pageTitleBackground"
      >
        <Title className="pageTitle">Ask For a Free Estimate</Title>
      </BackgroundImage>

      <QuoteForm />
    </Layout>
  )
}
