module.exports = {
  siteMetadata: {
    title: `Oswaldo TC`,
    author: `dev-oswld`,
    description: `Portfolio with Gatsby`,
    social: {
      twitter: `dev_oswld`,
      gitHub: `dev-oswld`,
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-transformer-json',
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      }
    },
    {
      resolve: "gatsby-remark-embed-youtube",
      options: {
        width: 800,
        height: 400
      }
    }
  ],
}