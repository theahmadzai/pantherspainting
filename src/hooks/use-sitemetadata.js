import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          title
          description
          url
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
