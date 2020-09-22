import React from "react"
import { Heading, Text, Box } from "@chakra-ui/core"
import Layout from "../components/layout"
import Hero from "../components/hero"

export default () => {
  return (
    <Layout>
      <Hero>About Panthers Painting</Hero>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusantium
        ut corporis sint! Temporibus, rerum, dolor doloremque asperiores quaerat
        necessitatibus enim natus error blanditiis quam id cum iste harum quia?
      </Text>

      <Box borderBottom="1px solid #ccc" py={8}>
        <Heading fontSize="xl" fontWeight="400">
          John Doe
        </Heading>
        <Text mt={4}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore error
          cupiditate iusto quo maiores quasi repudiandae eum, voluptate vitae
          earum quisquam! Sapiente est dolor nihil? Officiis pariatur eius
          praesentium! Nemo?
        </Text>
      </Box>

      <Box borderBottom="1px solid #ccc" py={8}>
        <Heading fontSize="xl" fontWeight="400">
          John Wick
        </Heading>
        <Text mt={4}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore error
          cupiditate iusto quo maiores quasi repudiandae eum, voluptate vitae
          earum quisquam! Sapiente est dolor nihil? Officiis pariatur eius
          praesentium! Nemo?
        </Text>
      </Box>
    </Layout>
  )
}
