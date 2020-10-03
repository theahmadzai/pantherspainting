import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          title
          description
          address
          contacts {
            phone
            email
          }
          social {
            facebook
            twitter
            instagram
          }
          copyrights
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
