import React, { Component } from 'react'

import '../../assets/scss/pages/contact.scss'

import Header from '../components/Header/Header'
import RightSlice from '../components/Slice/RightSlice'
import Form from '../components/ContactForm/Form'

const ButtonStyles = {
  height: '40px',
  lineHeight: '40px',
  padding: '0 14px',
  outline: 'none',
  fontSize: 'inherit',
  border: 'none',
  borderRadius: '4px',
  boxShadow: '0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08)',
  backgroundColor: '#5863EB',
  color: '#fff',
  cursor: 'pointer',
  transition: 'all .15s ease',
}

export default ({ data }) => {
  return (
    <div className="contact-page">
      <Header />  
      <div className="content">
        <h1>Contact</h1>
        <p>Want to work together? Ask me a question or just say hi? Shoot me a message!</p>
        <a style={ButtonStyles} href="mailto:travispamaral@gmail.com">Email Me</a>
      </div>
      <RightSlice />
    </div>
  )
}
