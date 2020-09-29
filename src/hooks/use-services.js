import { graphql, useStaticQuery } from 'gatsby'

const useServices = () => {
  const result = useStaticQuery(graphql`
    query {
      allContentfulService {
        nodes {
          title
          slug
          caption
          image {
            fluid(maxWidth: 350, maxHeight: 220) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return result.allContentfulService.nodes.map(service => ({
    title: service.title,
    slug: service.slug,
    caption: service.caption,
    thumbnail: service.image.fluid,
  }))
}

export default useServices
