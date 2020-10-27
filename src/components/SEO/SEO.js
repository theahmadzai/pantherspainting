import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '../../hooks/use-sitemetadata'

const SEO = ({ title, description, pathname }) => {
  const {
    name,
    title: defaultTitle,
    description: defaultDescription,
    url,
  } = useSiteMetadata()

  title ??= name
  description ??= defaultDescription
  pathname ??= '/'

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      meta={[
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: `${url}${pathname}` },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'image' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: 'image' },
      ]}
    />
  )
}

export default SEO
