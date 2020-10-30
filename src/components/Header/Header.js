import React from 'react'
import { Link } from 'gatsby'
import { Image } from 'antd'
import Navbar from '../Navbar/Navbar'
import styles from './Header.module.css'
import useSiteMetadata from '../../hooks/use-sitemetadata'

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header className={styles.header}>
      <Link to="/">
        <Image height={92} width={92} src="/logo1.svg" alt={title} />
      </Link>

      <Navbar />
    </header>
  )
}

export default Header