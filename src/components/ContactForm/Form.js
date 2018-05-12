import React, { Component } from 'react'

import './Form.scss'

export default ({ data }) => {
  return (
    <div className="contact-card">
      <form
        name="contact-form"
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div className="row">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            required />
        </div>
        <div className="row">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="john.doe@gmail.com"
            required />
        </div>
        <div className="row">
          <label className="align-top">Message</label>
          <textarea
            name="message"
            placeholder="What would you like to say?"
            required></textarea>
        </div>
        <input type="hidden" name="bot-field" />
        <div className="submit-row">
          <button>SEND</button>
        </div>
      </form>
    </div>
  )
}
