import React from 'react'
import { Link } from 'gatsby'
import { Image } from 'antd'
import useSiteMetadata from '../../../hooks/use-sitemetadata'
import Navbar from './Navbar/Navbar'
import styles from './Header.module.css'

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header className={styles.header}>
      <Link to="/">
        <Image height={92} src="/logo.svg" alt={title} />
      </Link>

      <Navbar />
    </header>
  )
}

export default Header
