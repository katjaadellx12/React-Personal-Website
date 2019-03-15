import React from 'react'
import { FaHeart } from 'react-icons/fa'
import Wave from '../components/wave'
import ReactTyped from '../components/typed'

const IndexPage = () => (
  <div>
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
