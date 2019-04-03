module.exports = {
  siteMetadata: {
    title: 'Pranav Ambwani',
    description:
      'Welcome to the website that I coded from scratch leveraging several frameworks like React to ensure a simple, yet elegant design.',
    url: 'https://pranav.tech', // No trailing slash allowed!
    siteUrl: 'https://pranav.tech',
    keywords:
      'pranav, ambwani, pranav ambwani, Pranav Ambwani, Pranav, Ambwani, LG Electronics, LavaLab, LavaLab USC, USC, American Express, IBM, Product Management, Program Management, Technical Product Management, Product, product, management, software developer, software, developer, javascript, c++, University of Southern California',
    image: 'icon.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-dark-mode',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            let path = edge.node.path
            let priority = 0.5
            if (path.match(/^\/$/) || path.match(/home/)) {
              priority = 0.9
            } else if (path.match(/resume/)) {
              priority = 0.8
            } else if (path.match(/blog/)) {
              priority = 0.6
            } else {
              priority = 0.2
            }
            console.log('priority: ', priority.toFixed(1), '    path: ', path)
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `monthly`,
              priority,
            }
          }),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://pranav.tech',
        sitemap: 'https://pranav.tech/sitemap.xml',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
  ],
}
