import React from 'react'
import styled from 'styled-components'
import ResumeSection from '../components/resume-section'

const Resume = () => (
  <TimeLine>
    <ResumeSection
      date="June 2018 - August 2018"
      company="LG Electronics"
      title="Product Management Consultant"
      skills={['Product Management', 'Java', 'Android Development', 'Agile']}
      tasks={[
        `Implemented Agile ideation plan, collecting and implementing 30% more ideas from employees than historical best`,
        `Automated troubleshooting process by proposing and developing 3 self-service Android applications for the B2B department to handle service requests, minimizing travel time and expenditure`,
        `Led 3 cross-functional teams from product conception through launch and multiple iterations, being implemented at most B2B departments nationwide and HQ in Korea`,
      ]}
    />
    <ResumeSection
      date="Jan 2018 - Jun 2018"
      company="Hyperbole News"
      title="Co-Founder"
      skills={[
        'JavaScript',
        'NodeJS/ExpressJS',
        'MongoDB/Mongoose',
        'HTML5/CSS3',
      ]}
      tasks={[
        `Under USC’s exclusive incubator, LavaLab, created Chrome extension called Hyperbole to eliminate fake news by targeting authors and journalists`,
        `Defined key personas, use cases, and success metrics to validate opportunity hypothesis via customer development, and wrote a press release and product review before developing MVP`,
        `Developed frontend and backend of application from scratch using JavaScript, NodeJS/ExpressJS, MongoDB/Mongoose, and HTML5/CSS3, assigning scores based on Hyperbole’s algorithm`,
        `Won two of three awards, Crowd’s Favorite and Venture Capitalist’s Favorite, at demo night`,
      ]}
    />
    <ResumeSection
      date="Jan 2018 - May 2018"
      company="Zwift"
      title="Technological Functional Consultant"
      skills={['UI/UX', 'Product Management', 'Roadmap']}
      tasks={[
        `Laid out short-term and long-term strategic user experience product roadmap for Engineering`,
        `Identified, planned, and oversaw broad initiatives to enhance the experience for riders and runners to help them achieve their fitness goals faster`,
        `Raised UX measures by 25% through increased user feedback collection, synthesis of solutions, and more frequent iteration to customer needs`,
      ]}
    />
    <ResumeSection
      date="Jun 2017 - Aug 2017"
      company="American Express"
      title="Product Management Consultant"
      skills={['Digital Marketing', 'Web Development', 'JavaScript']}
      tasks={[
        `Spearheaded the project titled, “Analysis of Competitor Creative Strategy on Display Media” to completely revamp the web portal for acquisitions and activations of credit cards worldwide`,
        `Worked with key business stakeholders to define product scope and goals, develop prototypes, requirements, and business plans, improving visitor to sale conversions from 64% to 75%`,
        `Founded the internal, award-winning (Best Team) coalition, “People Team,” focused on maintaining and boosting culture and morale`,
      ]}
    />
    <ResumeSection
      date="Jun 2016 - Aug 2016"
      company="IBM"
      title="UI/UX Developer"
      skills={[
        'JavaScript',
        'Web Development',
        'HTML5/CSS3',
        'AJAX',
        'XML',
        'JSON',
        'jQuery',
      ]}
      tasks={[
        `Collaborated with business, technology, and cross-organizational departments to define, design, and implement end-to-end user interfaces and experiences for B2B payments and corporate travel`,
        `Translated business requirements into elegant user experiences for desktop, mobiles, and ATMs`,
        `Developed user flows, navigation systems, detailed wireframes, user interface specifications, prototypes, and other artifacts to support user goals and business objectives`,
        `Developed GUI from scratch employing JavaScript, HTML5/CSS3, AJAX, XML, JSON, and jQuery`,
      ]}
    />
  </TimeLine>
)

export default Resume

const TimeLine = styled.div`
  margin-top: 120px;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  justify-content: center;
  align-items: center;
`
