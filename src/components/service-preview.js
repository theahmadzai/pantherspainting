import React from "react"
import { Box, Image, Heading } from "@chakra-ui/core"

const ServicePreview = ({ image, title }) => {
  return (
    <Box border="1px solid #eee">
      <Image src={image} />
      <Heading
        as="h2"
        padding={2}
        boxShadow="sm"
        rounded="sm"
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
