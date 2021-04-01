module.exports = {
  siteMetadata: {
    title: "gymnastics-network",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "KhKMyvcsLsLPHkb7EdddjKR1FgJ5FEkGZe77t1BkJkc",
        spaceId: "bvdghcc7jm44",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
  ],
};
