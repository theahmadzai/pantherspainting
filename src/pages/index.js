import React from "react"
import { Link } from "gatsby"
import { Button } from "@chakra-ui/core"
import Layout from "../components/layout"
import Hero from "../components/hero"

export default () => {
  return (
    <Layout>
      <Hero>Panthers Painting</Hero>

      <Button>
        <Link to="/about">About</Link>
      </Button>
    </Layout>
  )
}
