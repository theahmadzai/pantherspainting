exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const { data, errors } = await graphql(`
    query {
      allContentfulService {
        nodes {
          slug
        }
      }
    }
  `)

  if (errors) {
    reporter.panic('failed to create services', errors)
    return
  }

  data.allContentfulService.nodes.forEach(({ slug }) => {
    createPage({
      path: `/service/${slug}`,
      component: require.resolve('./src/templates/Service/Service.js'),
      context: {
        slug,
      },
    })
  })
}
