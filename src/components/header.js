import React from 'react'
import Link from 'gatsby-link'
import './header.css'
import ToggleDark from './toggle'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasUserScrolled: false,
    }
  }

  // As soon as the component loaded, listen to scroll events
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasUserScrolled: true })
    } else {
      this.setState({ hasUserScrolled: false })
    }
  }

  handlePurchase = token => {
    const amount = 50
    const description = 'My awesome services!'

    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount,
    }

    fetch('http://localhost:9000/stripe-payments', {
      method: 'POST',
      body: JSON.stringify(bodyObject),
    })
  }

  render() {
    return (
      <div
        className={
          this.state.hasUserScrolled ? 'Header HeaderScrolled' : 'Header'
        }
      >
        <div className="HeaderGroup">
          <ToggleDark />
          <Link to="/" rel="noreferrer">
            Home
          </Link>
          <Link to="/blog" rel="noreferrer">
            Blog
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
