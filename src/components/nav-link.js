import React from "react"
import { Link } from "gatsby"
import { Button } from "@chakra-ui/core"

const NavLink = ({ href, children, ...props }) => {
  return (
    <Link to={href}>
      <Button
        as="a"
        size="sm"
        p="4"
        variant="ghost"
        borderRadius="0"
        {...props}
      >
        {children}
      </Button>
    </Link>
  )
}
export default NavLink
