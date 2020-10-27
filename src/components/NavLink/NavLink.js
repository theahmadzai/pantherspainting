import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import styles from './NavLink.module.css'

const NavLink = ({ href, children, bordered }) => {
  return (
    <Link to={href} activeClassName={styles.active}>
      <Button
        type="text"
        size="large"
        className={`${bordered ? styles.bordered : ''} ${styles.link}`}
      >
        {children}
      </Button>
    </Link>
  )
}

export default NavLink
