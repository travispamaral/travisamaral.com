import React from 'react'
import Link from 'gatsby-link'

import RightSlice from '../components/Slice/RightSlice' 
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

class About extends React.Component {

  render() {
    return (
      <div className="about-page">
        <Header />  
        <div className="content">
          <h1>About Me</h1>
          <h2>I am a web developer focused on UI in the SF bay area.</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

          <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
        </div> 
        <RightSlice />
        <Footer/>
      </div>
    )
  }
}

export default About
