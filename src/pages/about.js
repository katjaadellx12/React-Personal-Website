import React from 'react'
import styled from 'styled-components'
import profileImg from '../images/me.jpg'
import SEO from '../components/seo'

export default function About() {
  return (
    <div>
      <SEO title="Pranav | About" description="Welcome to my world." />
      <ImageContainer>
        <Image src={profileImg} alt="My very mediocre head shot" />
      </ImageContainer>

      <FAQContainer>
        <Header>My Journey So Far...</Header>
        <Separator />
        <Description>
          Hi! I'm Pranav Ambwani. I was born and raised in New Delhi, India, and
          moved to California in 2015. I studied Electrical Engineering at the
          Viterbi School of Engineering, at the University of Southern
          California, and am graduating{' '}
          <i>
            <b>Magna Cum Laude </b>
          </i>
          in May 2019.
        </Description>
        <Description>
          A few months back, Viterbi decided to publish my story from failure to
          success, in which I talk about my battles with depression, to motivate
          undergraduates. You can read about it{' '}
          <a
            href="https://minghsiehee.usc.edu/2018/10/how-thinking-like-an-electrical-engineer-changed-my-life/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </Description>
        <Header>What I Do...</Header>
        <Separator />
        <Description>
          I am an energetic product manager and a proficient full-stack
          developer with a track record of being scrappy and getting things
          done.
        </Description>
        <Description>
          I can really put myself into the mindset of a persona and get into
          his/her skin to understand the wants, needs, and emotional triggers of
          my users.
        </Description>
        <Description>
          I spend a lot of time working on innovative projects, polishing my
          website, and picking up new languages and skills. I would love to
          discuss how I can help you with your next project!
        </Description>
        <Header>What I'm Looking For...</Header>
        <Separator />
        <Description>
          I am fascinated by the limitless potential that both software and
          hardware have for the world. As a result, I am looking for an
          innovative product management/software development role to enable
          technology transformation and galvanize businesses.
        </Description>
      </FAQContainer>
    </div>
  )
}

const ImageContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  justify-content: center;
  margin-top: 120px;
`

const FAQContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  justify-content: center;
  margin-top: 30px;
`

const Separator = styled.hr`
  border: none;
  height: 3px;
  width: 100%;
  /* Set the hr color */
  color: rgba(255, 0, 0, 0.7); /* old IE */
  background-color: rgba(255, 0, 0, 0.7); /* Modern Browsers */
`

const Image = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 200px;
`

const Header = styled.h1`
  font-size: 40px;
  font-weight: 900;

  @media (max-width: 760px) {
    font-size: 30px;
  }
`

const Description = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  width: 700px;
  line-height: 1.5;

  @media (max-width: 760px) {
    width: 400px;
    font-size: 22px;
  }

  @media (max-width: 400px) {
    width: 300px;
    font-size: 20px;
  }
`
