import React, { Fragment } from "react"
import Helmet from "react-helmet"
import { ChakraProvider, Box } from "@chakra-ui/core"
import defaultTheme from "../themes/default-theme"
import useSiteMetadata from "../hooks/use-sitemetadata"
import Header from "./header"
import Footer from "./footer"
import "antd/dist/antd.css"
import "../styles/global.css"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header />

      <Box as="main" mx="auto" w="1000px" maxW="90vw">
        {children}
      </Box>

      <Footer />
    </Fragment>
  )
}

export default Layout
