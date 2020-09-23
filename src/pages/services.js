import React from "react"
import { Grid } from "@chakra-ui/core"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ServicePreview from "../components/service-preview"

const services = [
  {
    image: "/images/johndoe.jpg",
    title: "Painting",
    caption: "Interior, Exterior, Residential, Commercial",
    body: "some long content",
  },
  {
    image: "/images/johndoe.jpg",
    title: "Pressure Wash",
    caption: "Residential and Commercial",
    body: "some long content",
  },
  {
    image: "/images/johndoe.jpg",
    title: "Drywall",
    caption: "Residential and Commercial",
    body: "some long content",
  },
  {
    image: "/images/johndoe.jpg",
    title: "Carpentry",
    caption: "Interior, Exterior, Residential, Commercial",
    body: "some long content",
  },
  {
    image: "/images/johndoe.jpg",
    title: "Siding",
    caption: "Residential and Commercial",
    body: "some long content",
  },
  {
    image: "/images/johndoe.jpg",
    title: "Gutters",
    caption: "Residential and Commercial",
    body: "some long content",
  },
  {
    image: "/images/johndoe.jpg",
    title: "Decks",
    caption: "Residential and Commercial",
    body: "some long content",
  },
  {
    image: "/images/johndoe.jpg",
    title: "Fences",
    caption: "Residential and Commercial",
    body: "some long content",
  },
  {
    image: "/images/johndoe.jpg",
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

      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {services.map(service => (
          <ServicePreview {...service} />
        ))}
      </Grid>
    </Layout>
  )
}
