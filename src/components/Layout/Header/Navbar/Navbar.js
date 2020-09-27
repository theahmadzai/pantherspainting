import React, { Fragment, useState } from 'react'
import { Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import NavLink from './NavLink/NavLink'
import styles from './Navbar.module.css'

const NavLinks = props => (
  <nav {...props}>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/services">Services</NavLink>
    <NavLink href="/about">About</NavLink>
    <NavLink href="/contact">Contact</NavLink>
    <NavLink href="/free-quote" bordered>
      Free Quote
    </NavLink>
  </nav>
)

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <Fragment>
      <NavLinks className={styles.navDesktop} />

      <MenuOutlined
        className={styles.toggleNav}
        onClick={() => setVisible(true)}
      />

      <Drawer
        title="Panthers Painting"
        visible={visible}
        closeable={false}
        onClose={() => setVisible(false)}
      >
        <NavLinks className={styles.navMobile} />
      </Drawer>
    </Fragment>
  )
}

export default Navbar
