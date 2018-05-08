import React, { Component } from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import RightSlice from '../components/Slice/RightSlice'
import Form from '../components/ContactForm/Form'

const styles = {
  width: '700px',
  minHeight: '420px',
  borderRadius: '4px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(50, 50, 93, .1), 0 15px 35px rgba(50, 50, 93, .15), 0 5px 15px rgba(0, 0, 0, .1)',
  padding: '1rem 2rem',
  marginTop: '4rem',
}

class Contact extends Component {
  render() {
    return (
      <div class="contact-page">
        <Header />  
        <div className="content">
          <h1>Contact</h1>
          <p>Want to work together? Ask me a question or just say hi? Shoot me a message!</p>
          <div style={styles}>
            <Form />
          </div>
        </div>
        <Footer />
        <RightSlice />
      </div>
    );
  }
}

export default Contact;
