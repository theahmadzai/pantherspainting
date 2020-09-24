import React from "react"
import { Grid, Text } from "@chakra-ui/core"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ServicePreview from "../components/service-preview"

const services = [
  {
    image: "/images/services/painting.jpg",
    title: "Painting",
    caption: "Interior, Exterior, Residential, Commercial",
    body: "some long content",
  },
  {
    image: "/images/services/pressure-wash.jpg",
    title: "Pressure Wash",
    caption: "Residential and Commercial",
    body: "some long content",
  },
  {
    image: "/images/services/drywall.jpg",
    title: "Drywall",
    caption: "Residential and Commercial",
    body: "some long content",
  },
  {
    image: "/images/services/carpentry.jpg",
    title: "Carpentry",
    caption: "Interior, Exterior, Residential, Commercial",
    body: "some long content",
  },
  {
    image: "/images/services/siding.jpg",
    title: "Siding",
    caption: "Residential and Commercial",
    body: "some long content",
  },
  {
    image: "/images/services/gutters.jpg",
    title: "Gutters",
    caption: "Residential and Commercial",
    body: "some long content",
  },
  {
    image: "/images/services/decks.jpg",
    title: "Decks",
    caption: "Residential and Commercial",
    body: "some long content",
  },
  {
    image: "/images/services/fences.jpg",
    title: "Fences",
    caption: "Residential and Commercial",
    body: "some long content",
  },
  {
    image: "/images/services/electrostatic-paint.jpg",
    title: "Electrostatic Paint",
    caption:
      "Appliances, Outdoor Furniture, Metal Fencing, Schools and gym lockers ,etc; Residential and Commercial",
    body: "some long content",
  },
]

export default () => {
  return (
    <Layout>
      <Hero>Services</Hero>
      <Text pb="8" textAlign="center" fontWeight="300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque consequatur soluta possimus obcaecati error ut iste voluptatem. Ullam quo sunt animi voluptate vitae expedita, consequatur molestias adipisci doloremque autem.</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {services.map(service => (
          <ServicePreview {...service} />
        ))}
      </Grid>
    </Layout>
  )
}
