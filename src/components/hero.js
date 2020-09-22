import React from "react"
import { Heading } from "@chakra-ui/core"

const Hero = ({ children, ...props }) => {
  return (
    <Heading as="h1" pb="8" fontWeight="600" textAlign="center" {...props}>
      {children}
    </Heading>
  )
}

export default Hero
