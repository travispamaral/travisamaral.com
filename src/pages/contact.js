import React, { Component } from 'react'

import '../../assets/scss/pages/contact.scss'

import Header from '../components/Header/Header'
import RightSlice from '../components/Slice/RightSlice'
import Form from '../components/ContactForm/Form'

export default ({ data }) => {
  return (
    <div className="contact-page">
      <Header />  
      <div className="content">
        <h1>Contact</h1>
        <p>Want to work together? Ask me a question or just say hi? Shoot me a message!</p>
        <div className="form-wrapper">
          <Form />
        </div>
      </div>
      <RightSlice />
    </div>
  )
}
