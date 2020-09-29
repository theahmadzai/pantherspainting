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
    title: service.title,
    slug: service.slug,
    caption: service.caption,
    thumbnail: service.image.fluid,
  }))
}

export default useServices
