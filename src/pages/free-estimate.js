import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Typography } from 'antd'
import Layout from '../components/layout/layout'
import QuoteForm from '../components/quote-form'

const { Title } = Typography

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
