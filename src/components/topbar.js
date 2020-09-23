import React from "react"
import { Box, Text } from "@chakra-ui/core"

const Topbar = () => (
  <Box background="black" px="calc((100vw - 900px - 0.5rem) / 2)" py="2">
    <Text color="white" fontSize="xs">
      Contact us on +0300-322X023
    </Text>
  </Box>
)

export default Topbar
