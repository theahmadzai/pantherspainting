import React from "react"
import { Link } from "gatsby"
import {
  useColorMode,
  useColorModeValue,
  Flex,
  HStack,
  Image,
  IconButton,
} from "@chakra-ui/core"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import NavLink from "./nav-link"

const Header = () => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

  return (
    <Flex
      px="calc((100vw - 900px - 0.5rem) / 2)"
      justify="space-between"
      borderBottom="1px solid #eee"
    >
      <Link to="/">
        <Image h="64px" src="/images/logo.png" alt="Panthers Painting" />
      </Link>
      <HStack as="nav" spacing="4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <IconButton ml="4" onClick={toggleColorMode} icon={<SwitchIcon />} />
      </HStack>
    </Flex>
  )
}
export default Header
