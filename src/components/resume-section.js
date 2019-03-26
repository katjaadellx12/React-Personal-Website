import React from 'react'
import styled from 'styled-components'

export default function ResumeSection(props) {
  return (
    <TimelineItem>
      <Date>{props.date}</Date>
      <Company>{props.company}</Company>
      <Title>{props.title}</Title>
      {props.skills.map(skill => {
        return <Skills>{skill}</Skills>
      })}
      <ul>
        {props.tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {task}
          </li>
        ))}
      </ul>
    </TimelineItem>
  )
}

const Skills = styled.div`
  background-color: #eceff5;
  display: inline-block;
  padding: 4px 8px;
  margin: 2px 3px;
`

const TimelineItem = styled.div`
  border: 1px solid #eaeaea;
  border-top: 4px solid rgba(255, 0, 0, 0.7);
  color: #222;
  font-size: 15px;
  padding: 20px;
  margin: 20px;
`

const Date = styled.h3`
  margin-top: 2px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  font-size: 400;
  font-size: 15px;
  color: gray;
  border-bottom: 1px solid #eaeaea;
`

const Company = styled.h2`
  font-size: 22px;
  color: rgba(255, 0, 0, 0.7);
  font-weight: 800;
`

const Title = styled.h2`
  font-size: 20px;
  margin: 10px;
`
