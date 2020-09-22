import React from "react"
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
  Stack,
  Box,
  ButtonGroup,
} from "@chakra-ui/core"
import { InfoIcon, PhoneIcon, EmailIcon } from "@chakra-ui/icons"

const ContactForm = props => {
  return (
    <Box p={8} shadow="xl" rounded="md" as="form" {...props}>
      <Stack spacing={4}>
        <FormControl id="your-name">
          <FormLabel>Your Name</FormLabel>
          <InputGroup>
            <InputLeftElement children={<InfoIcon color="gray.300" />} />
            <Input type="text" placeholder="John Doe" variant="filled" />
          </InputGroup>
        </FormControl>

        <FormControl id="phone">
          <FormLabel>Phone</FormLabel>
          <InputGroup>
            <InputLeftElement children={<PhoneIcon color="gray.300" />} />
            <Input type="phone" placeholder="+123********" variant="filled" />
          </InputGroup>
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftElement children={<EmailIcon color="gray.300" />} />
            <Input
              type="email"
              placeholder="john@example.com"
              variant="filled"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your message..." variant="filled" />
        </FormControl>

        <ButtonGroup>
          <Button boxShadow="sm" colorScheme="teal" type="submit">
            Submit
          </Button>
        </ButtonGroup>
      </Stack>
    </Box>
  )
}

export default ContactForm
