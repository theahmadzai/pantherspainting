import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Row, Col, Typography, Collapse } from 'antd'
import Layout from '../components/Layout/Layout'
import ContactForm from '../components/ContactForm/ContactForm'
import styles from './contact.module.less'

const { Panel } = Collapse
const { Title, Paragraph } = Typography

function callback(key) {
  console.log(key)
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

export default () => {
  const { contact } = useStaticQuery(graphql`
    query {
      contact: file(relativePath: { eq: "contact.jpg" }) {
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
          <Title level={5}>F.A.Q</Title>
          <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Col>
        <Col span={24} md={12}>
          <ContactForm />
        </Col>
      </Row>
    </Layout>
  )
}
