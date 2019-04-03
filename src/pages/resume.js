import React from 'react'
import styled from 'styled-components'
import resumeSvg from '../images/Resume.svg'
import SEO from '../components/seo'
import Helmet from 'react-helmet'

const Resume = () => (
  <ResumeContainer>
    <SEO title="Pranav | Résumé" image={resumeSvg} />
    <img src={resumeSvg} />
    <Helmet>
      <link rel="icon" href={resumeSvg} type="image/svg+xml" />
    </Helmet>
  </ResumeContainer>
)

export default Resume

const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 680px) {
    margin-top: 20px;
    transform: scale(0.9);
  }

  @media (max-width: 600px) {
    margin-top: -150px;
    transform: scale(0.6);
  }
`
