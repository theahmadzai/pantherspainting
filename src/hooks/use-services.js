import { graphql, useStaticQuery } from 'gatsby'

const useServices = () => {
  const data = useStaticQuery(graphql`
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

  return data.allContentfulService.nodes.map(service => ({
    thumbnail: service.image.fluid,
    title: service.title,
    slug: service.slug,
    caption: service.caption,
    ratingCount: 3,
  }))
}

export default useServices
