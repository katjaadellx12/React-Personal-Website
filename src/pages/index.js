import React from 'react'
import { FaHeart, FaRegEnvelope, FaLinkedin, FaSpotify } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'
import Wave from '../components/wave'
import ReactTyped from '../components/typed'
import SEO from '../components/seo'
import { Helmet } from 'react-helmet'

const IndexPage = () => (
  <div>
    <SEO
      title="Pranav | Home"
      description="Check out the website that I coded from scratch leveraging several frameworks to ensure a simple, yet elegant design."
      keywords="pranav, ambwani, pranav ambwani, Pranav Ambwani, Pranav, Ambwani, LG Electronics, LavaLab,USC, American Express, IBM, Product Management, Program Management, Technical Product Management, Product, product, management, software developer, software, developer, javascript, c++"
      image="https://i.imgur.com/A29myzy.png"
    />
    <Helmet>
      <link rel="canonical" href="https://pranav.tech" />
    </Helmet>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Pranav Ambwani</h1>
        <ReactTyped
          strings={[
            'I am a leader.',
            'I am an innovator.',
            'I am a developer.',
          ]}
        />
        <p>
          Made with <FaHeart className="HeartIcon" /> at USC
        </p>
        <a
          href="https://drive.google.com/file/d/17iAVf-lmc6H3tzY6yJGCnmaKpoTBRpBV/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          alt="link-to-email"
        >
          <button>Résumé</button>
        </a>
        <div className="Logos">
          <a href="mailto:ambwani@usc.edu?Subject=Hi%20Pranav!">
            <FaRegEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/pranavambwani"
            target="_blank"
            rel="noreferrer"
            alt="link-to-linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.github.com/ambwani"
            target="_blank"
            rel="noreferrer"
            alt="link-to-github"
          >
            <GoMarkGithub />
          </a>
        </div>
      </div>
    </div>
    <Wave />
  </div>
)

export default IndexPage
