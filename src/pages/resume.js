import React from 'react'
import styled from 'styled-components'
import resumeSvg from '../images/Resume.svg'
import SEO from '../components/seo'
import Wave from '../components/wave'

const Resume = () => (
  <ResumeContainer>
    <SEO title="Pranav | Résumé" image={resumeSvg} />
    <img src={resumeSvg} />
  </ResumeContainer>
)

export default Resume

const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;

  @media only screen and (max-width: 400px) {
    transform: scale(0.55);
    margin-top: -100px;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    transform: scale(0.6);
    margin-top: -100px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    transform: scale(0.8);
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    transform: scale(0.85);
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    transform: scale(0.9);
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    transform: scale(1);
  }

  /* @media (max-width: 680px) {
    margin-top: 20px;
    transform: scale(0.9);
  }

  @media (max-width: 600px) {
    margin-top: -150px;
    transform: scale(0.6);
  } */
`
