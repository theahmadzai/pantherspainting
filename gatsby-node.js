exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allContentfulService {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create services', result.errors)
  }

  result.data.allContentfulService.nodes.forEach(({ slug }) => {
    actions.createPage({
      path: `/services/${slug}`,
      component: require.resolve('./src/templates/Service/Service.js'),
      context: {
        slug: slug,
      },
    })
  })
}
