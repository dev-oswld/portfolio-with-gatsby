module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-transformer-json',
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
      },
    },
    `gatsby-transformer-remark`,
  ],
}