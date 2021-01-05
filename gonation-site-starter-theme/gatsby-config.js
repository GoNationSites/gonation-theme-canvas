module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token:
          'IGQVJYQ2pTTENiYzlMbm1JTUl1QnE0TDdaSXJ4a2tIUnB4UHliWlpfOXlHamFYVjJ5LVZAoeDAzU1ZAqNUNrdi1YOWw1Tng0bU9tanJCb0NrcERCMk1naEY5dEpvYnhMLVBZAU2FuYkVMWkVteW1rWDl4SwZDZD',
      },
    },
  ],
};
