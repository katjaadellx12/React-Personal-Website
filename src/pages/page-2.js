import React from 'react'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'

const SecondPage = () => (
  <div>
    <Helmet>
      <link rel="canonical" href="https://pranav.tech" />
    </Helmet>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
