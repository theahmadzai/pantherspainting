const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  siteMetadata: {
    title: 'Panthers Painting',
    description: 'Panthers Painting Atlanta website description',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'mx3s8y7n6py9',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
