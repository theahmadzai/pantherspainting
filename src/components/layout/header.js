import React from 'react'
import { Link } from 'gatsby'
import { Image } from 'antd'
import Navbar from './navbar'
import styles from './header.module.less'
import useSiteMetadata from '../../hooks/use-sitemetadata'

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header className={styles.header}>
      <Link to="/">
        <Image src="/logo.svg" alt={title} />
      </Link>

      <Navbar />
    </header>
  )
}

export default Header
