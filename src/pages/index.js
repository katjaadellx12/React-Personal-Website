import React from 'react'
import { FaHeart } from 'react-icons/fa'
import Wave from '../components/wave'
import ReactTyped from '../components/typed'
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <div>
    <Helmet>
      <link rel="icon" type="image/jpg" href="icon.jpg"/>
      <title>Pranav | Home</title>
      <meta name="description" content="Welcome to my world"/>
      <meta name="author" content="Pranav Ambwani"/>
      <meta name="keywords" content="pranav, ambwani, pranav ambwani, Pranav Ambwani, Pranav, Ambwani, LG Electronics, LavaLab,USC, American Express, IBM, Product Management, Program Management, Technical Product Management, Product, product, management, software developer, software, developer, javascript, c++"/>
      <meta name="robots" content="index, follow"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://pranav.tech"/>
      <meta property="og:site_name" content="https://pranav.tech"/>
      <meta property="og:title" content="Welcome to my world" />
      <meta property="og:image" content="https://i.imgur.com/zI5yBin.jpg"/>
      <meta property="og:description" content="Check out the website that I coded from scratch leveraging several frameworks to ensure a simple, yet elegant design." />
    </Helmet>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Pranav Ambwani</h1>
        <ReactTyped
          strings={[
            'I am a leader.',
            'I am an innovator.',
            'I am a developer.'
          ]}
        />
        
        <p>Made with <FaHeart className="HeartIcon"/> at USC</p>
        <a href="https://drive.google.com/file/d/17iAVf-lmc6H3tzY6yJGCnmaKpoTBRpBV/view?usp=sharing" target="_blank"><button>Resume</button></a>
        <div className="Logos">
          <a href="mailto:ambwani@usc.edu?Subject=Hi%20Pranav!"><img src={require('../images/linkedin.svg')} width="50" /></a>
          <a href="https://www.linkedin.com/in/pranavambwani" target="_blank"><img src={require('../images/gmail.svg')} width="50" /></a>
          <a href="https://www.github.com/ambwani" target="_blank"><img src={require('../images/github.svg')} width="50" /></a>
        </div>
        <Wave/>
      </div>
    </div>
  </div>
)

export default IndexPage
