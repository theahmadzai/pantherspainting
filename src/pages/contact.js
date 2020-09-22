import React from "react"
import { Grid } from "@chakra-ui/core"
import Layout from "../components/layout"
import ContactForm from "../components/contact-form"
import ContactInfo from "../components/contact-info"
import Hero from "../components/hero"

export default () => {
  return (
    <Layout>
      <Hero>Send Us a Message</Hero>
      <Grid templateColumns="1fr 1fr" gap="8">
        <ContactForm />
        <ContactInfo />
      </Grid>
    </Layout>
  )
}
