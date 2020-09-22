import React from "react"
import { Box, Stack, Heading, Text } from "@chakra-ui/core"
import { InfoIcon, PhoneIcon, AtSignIcon } from "@chakra-ui/icons"

const ContactInfo = props => {
  return (
    <Box p={8} {...props}>
      <Heading fontWeight={400} pb={4}>
        Contact us.
      </Heading>
      <Text lineHeight={1.6}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        nobis totam earum voluptatibus dolore! Excepturi, necessitatibus, error
        ad accusantium dolores, ullam saepe iure voluptas ipsam voluptate beatae
        ipsa. Sed, pariatur!
      </Text>

      <Stack mt={8} spacing={4}>
        <Text>
          <InfoIcon /> 2153 Some Avenue, Some Road (TODO Change Icon)
        </Text>
        <Text>
          <PhoneIcon /> +312-512-3222 (TODO Change Icon)
        </Text>
        <Text>
          <AtSignIcon /> admin@pantherspainting.com
        </Text>
      </Stack>
    </Box>
  )
}

export default ContactInfo
