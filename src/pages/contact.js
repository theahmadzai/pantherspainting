import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Row, Col, Typography } from 'antd'
import Layout from '../components/Layout/Layout'
import PageTitle from '../components/PageTitle/PageTitle'
import ContactForm from '../components/ContactForm/ContactForm'
import ContactInfo from '../components/ContactInfo/ContactInfo'

import { Collapse } from 'antd'

const { Panel } = Collapse

const { Title } = Typography

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
        {/* <PageTitle>Contact Us</PageTitle> */}
      </BackgroundImage>
      <Row style={{ paddingTop: '2rem' }} gutter={48}>
        <Col span={24} md={12}>
          <ContactInfo />
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
