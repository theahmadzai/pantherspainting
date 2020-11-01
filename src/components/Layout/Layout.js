import React from 'react'
import Helmet from 'react-helmet'
import Header from './header'
import Footer from './footer'
import styles from './layout.module.less'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
