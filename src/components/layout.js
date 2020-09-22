import React from "react"
import Helmet from "react-helmet"
import { ChakraProvider, Box } from "@chakra-ui/core"
import defaultTheme from "../themes/default-theme"
import useSiteMetadata from "../hooks/use-sitemetadata"
import Topbar from "./topbar"
import Header from "./header"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <ChakraProvider resetCSS theme={defaultTheme}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Topbar />
      <Header />
      <Box as="main" mx="auto" mt="4" mb="8" w="900px" maxW="90vw">
        {children}
      </Box>
    </ChakraProvider>
  )
}

export default Layout
