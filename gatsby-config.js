require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "audioC0RE",
    siteUrl: "https://audioc0re.devx.pl",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "@chakra-ui/gatsby-plugin",
    {
      resolve: `gatsby-source-formium`,
      options: {
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        accessToken: process.env.FORMIUM_TOKEN,
      },
    },
    "gatsby-plugin-preact",
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `audioC0RE`,
        short_name: `audioC0RE`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#dc9393`,
        display: `standalone`,
        icon: './src/images/ico.svg',
      },
    },
    "gatsby-plugin-offline"
  ],
};
