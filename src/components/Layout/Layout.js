import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '../../hooks/use-sitemetadata'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import styles from './Layout.module.css'
import '../../styles/global.css'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
