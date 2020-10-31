import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { Row, Col, Typography } from 'antd'
import Layout from '../components/Layout/Layout'
import ContactForm from '../components/ContactForm/ContactForm'
import styles from './contact.module.less'

const { Title, Paragraph } = Typography

export default () => {
  const { contact, sendMessage } = useStaticQuery(graphql`
    query {
      contact: file(relativePath: { eq: "contact.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sendMessage: file(relativePath: { eq: "send-message.png" }) {
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
        fluid={contact.sharp.fluid}
        className="pageTitleBackground"
      >
        <Title className="pageTitle">Send Us a Message</Title>
      </BackgroundImage>
      <Row gutter={32}>
        <Col span={24} md={12}>
          <Paragraph className={styles.contact}>
            Please send us a message if you have any request or referrals.
          </Paragraph>

          <Img fluid={sendMessage.sharp.fluid} />
        </Col>
        <Col span={24} md={12}>
          <ContactForm />
        </Col>
      </Row>
    </Layout>
  )
}
