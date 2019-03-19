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
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://pranav.tech',
        sitemap: 'https://pranav.tech/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
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
