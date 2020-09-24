import React from "react"
import { Box, Image, Heading } from "@chakra-ui/core"

const ServicePreview = ({ image, title }) => {
  return (
    <Box border="1px solid #eee" boxShadow="2xl">
      <Image src={image} height="400px" width="100%"/>
      <Heading
        as="h2"
        padding={2}
        fontWeight="normal"
        fontFamily="verdana"
        fontSize="2xl"
      >
        {title}
      </Heading>
    </Box>
  )
}

export default ServicePreview
