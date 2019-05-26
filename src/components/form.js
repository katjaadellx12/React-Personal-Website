import React, { Component } from 'react'
import './form.css'

const Form = () => {
  return (
    <form
      class="contact"
      action="https://getform.io/f/a12f4c75-8581-4a10-8019-8f801daf4c22"
      method="POST"
    >
      <label>
        <input id="name" type="text" name="name" placeholder="Name" required />
      </label>

      <label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </label>
      <label>
        <input id="phone" type="tel" name="tel" placeholder="Phone" required />
      </label>
      <label>
        <input
          id="message"
          type="text"
          name="text"
          placeholder="I wanted to get in touch regarding..."
          required
        />
      </label>
      <button type="submit" aria-label="Contact Pranav">
        Contact
      </button>
    </form>
  )
}

export default Form
