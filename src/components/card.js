import React from 'react'
import './card.css'

const Card = props => (
  <div className="Card">
    <img src={props.image} alt="Background image for blog post" />
    <h3>{props.title}</h3>
    <p>{props.date}</p>
  </div>
)

export default Card
