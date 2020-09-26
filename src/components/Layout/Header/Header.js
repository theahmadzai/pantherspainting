import React from "react"
import { Link } from "gatsby"
import { Image } from "antd"
import Navbar from "./Navbar/Navbar"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Image height={92} src="/logo.svg" alt="Panthers Painting" />
      </Link>

      <Navbar />
    </header>
  )
}

export default Header
