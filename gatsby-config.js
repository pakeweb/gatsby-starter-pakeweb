module.exports = {
  siteMetadata: {
    title: 'Pake Web',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pake Web',
        short_name: 'PakeWeb',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: 'teal',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
