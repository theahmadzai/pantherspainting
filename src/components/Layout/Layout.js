import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '../../hooks/use-sitemetadata'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import styles from './Layout.module.css'

const Layout = ({ children, ...props }) => {
  const { title, description } = useSiteMetadata()

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main className={styles.main} {...props}>
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout
