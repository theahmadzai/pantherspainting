const dotenv = require('dotenv')
const lessToJson = require('less-to-json')

dotenv.config()

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: lessToJson('src/styles/vars.less'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'mx3s8y7n6py9',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
  siteMetadata: {
    name: 'Panthers Painting',
    title: 'Panthers Painting',
    description: 'Panthers Painting Atlanta website description',
    address: 'Some Fake Address, Atlanta, Georgia',
    contacts: {
      phone: '+1 (0) 222X3214',
      email: 'info@pantherspainting.com',
    },
    social: {
      facebook: 'https://www.facebook.com/pantherspainting',
      twitter: 'https://www.twitter.com/@pantherspainting',
      instagram: 'https://www.instagram.com/pantherspainting',
    },
    copyrights: 'Copyright 2020 - Panthers Painting Atlanta',
  },
}
