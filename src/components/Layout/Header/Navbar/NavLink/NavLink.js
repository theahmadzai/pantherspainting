import React from "react"
import { Link } from "gatsby"
import { Button } from "antd"
import styles from "./NavLink.module.css"

const NavLink = ({ href, children, ...props }) => {
  return (
    <Link to={href} activeClassName={styles.active}>
      <Button type="text" size="large" {...props}>
        {children}
      </Button>
    </Link>
  )
}

export default NavLink
