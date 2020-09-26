const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: "Panthers Painting",
    description: "Panthers Painting Atlanta website description",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "mx3s8y7n6py9",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        // downloadLocal: true,
      },
    },
  ],
}
