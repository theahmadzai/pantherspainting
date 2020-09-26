import React from "react"
import { Typography } from "antd"
import Layout from "../components/Layout/Layout"

const { Title, Paragraph } = Typography

export default () => {
  return (
    <Layout>
      <Title>About Panthers Painting</Title>

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusantium
        ut corporis sint! Temporibus, rerum, dolor doloremque asperiores quaerat
        necessitatibus enim natus error blanditiis quam id cum iste harum quia?
      </Paragraph>

      <Title>John Doe</Title>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore error
        cupiditate iusto quo maiores quasi repudiandae eum, voluptate vitae
        earum quisquam! Sapiente est dolor nihil? Officiis pariatur eius
        praesentium! Nemo?
      </Paragraph>

      <Title>John Wick</Title>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore error
        cupiditate iusto quo maiores quasi repudiandae eum, voluptate vitae
        earum quisquam! Sapiente est dolor nihil? Officiis pariatur eius
        praesentium! Nemo?
      </Paragraph>
    </Layout>
  )
}
