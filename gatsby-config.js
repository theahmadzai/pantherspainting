require('dotenv').config()

module.exports = {
  siteMetadata: {
    name: 'Panthers Painting',
    title: 'Panthers Painting Atlanta',
    siteUrl: 'https://pantherspainting.com',
    description: 'Panthers Painting Atlanta LLC',
    logoUrl: 'static/logo.png',
    address: 'Office Address, Atlanta, Georgia',
    contacts: {
      phone: '(470)-539-3711',
      email: 'info@pantherspainting.com',
    },
    social: {
      facebook: 'https://www.facebook.com/pantherspainting',
      twitter: 'https://www.twitter.com/@pantherspainting',
      instagram: 'https://www.instagram.com/pantherspainting',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: 'mx3s8y7n6py9',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-import',
      options: {
        libraryName: 'antd',
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': '#29b0fa',
            '@font-size-base': '18px',
            '@font-family': 'Work Sans',
          },
        },
      },
    },
    'gatsby-plugin-minify-classnames',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Panthers Painting Atlanta',
        short_name: 'Panthers Painting',
        start_url: '/',
        background_color: '#29b0fa',
        theme_color: '#29b0fa',
        display: 'standalone',
        icon: 'static/logo.png',
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
}
