import React from 'react'
import Helmet from 'react-helmet'

function SEO({ description, lang, keywords, title, image }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `google-site-verification`,
          content: `yYiC-PlzGnCf6X0kj0ukm-uazDmWwu-GNdRHBhAMKqQ`,
        },
        {
          name: `author`,
          content: `Pranav Ambwani`,
        },
        {
          name: `description`,
          content: description,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: `https://pranav.tech`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
}

export default SEO
