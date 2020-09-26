import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '../../hooks/use-sitemetadata'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import styles from './Layout.module.css'
import 'antd/dist/antd.css'
import '../../styles/global.css'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
