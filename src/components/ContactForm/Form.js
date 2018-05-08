import React, { Component } from 'react'

import './Form.scss'

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validationMessage: '',
      validationClass: ''
    }
  }

  encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    let state = this.state

    delete (state.validationMessage)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        document.querySelectorAll('input, textarea').forEach(item => {
          item.value = '';
        })
        this.setState({
          validationMessage: 'Thanks for your message!',
          validationClass: ''
        })
      })
      .catch(error => {
        this.setState({
          validationMessage: 'Uh oh! It looks like something went wrong. You can try again or just send me an email at <strong>travispamaral@gmail.com</strong>.',
          validationClass: 'has-error'
        })
      })
  }

  render() {
    return (
      <div className="contact-card">
        <form
          name="contact-form"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}>
          <input name="bot-field" hidden />
          <div className="row">
            <label for="name">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              onChange={this.handleChange}
              required />
		      </div>
          <div className="row">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john.doe@gmail.com"
              onChange={this.handleChange}
              required />
          </div>
          <div className="row">
            <label for="message" className="align-top">Message</label>
            <textarea
              type="text"
              name="message"
              placeholder="What would you like to say?"
              onChange={this.handleChange}
              required></textarea>
          </div>
          <div className="submit-row">
            <button type="submit">SEND</button>
          </div>

          {this.state.validationMessage &&
            <span className={"message " + this.state.validationClass}
            >{this.state.validationMessage}</span>
          }
          
	      </form>
      </div>
    )
  }
}

export default Form
