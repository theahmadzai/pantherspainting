import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { Row, Col, Typography, Button } from 'antd'
import Layout from '../components/layout/layout'
import ContactForm from '../components/contact-form'
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
          <Title level={2} className={styles.heading}>
            Have a Query?
          </Title>

          <Paragraph>
            Please send us a message if you have any request or referrals.
          </Paragraph>

          <Paragraph>
            Want to know what services do we provide? Please have a look at the
            list of services we are currently providing.
          </Paragraph>

          <Link to="/services">
            <Button className={styles.button} type="primary">
              Services
            </Button>
          </Link>

          <Img fluid={sendMessage.sharp.fluid} />
        </Col>
        <Col span={24} md={12}>
          <ContactForm />
        </Col>
      </Row>
    </Layout>
  )
}
