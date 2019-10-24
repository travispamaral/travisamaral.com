import React from 'react'
import Link from 'gatsby-link'

import RightSlice from '../components/Slice/RightSlice'
import Header from '../components/Header/Header'

import jeep from './jeep.jpg'

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gridGap: '20px',
  margin: '2rem 0'
}

const imageStyles = {
  boxShadow: '11px 8px 11px 0 rgba(0,0,0,.15)',
  width: '100%',
  borderRadius: '12px'
}

export default () => {
  return (
    <div className="about-page">
      <Header />
      <div className="content">
        <h1>A front end dev focused on UI/UX.</h1>
        <p>I have have built or worked on sites ranging from applications to high end fashion e-commerce to consumer packaged goods brands. I spent almost 5 years as dev lead at a Zooka Creative, a digital agency in San Jose. My work here consisted of managing large consumer facing websites, managing a team of front and back end engineers, maintaining and implementing best practices and staying up to date with the most recent trends.</p>

        <div style={gridStyles}>
          <img
            src={jeep}
            alt="Travis' sweet looking Jeep"
            style={imageStyles}/>
          <div>
            <p>I am a drummer that has been playing for almost 20 years, I currently play in the band at my <a href="https://venture.cc">Church</a>. I am also an avid Jeep owner, I love camping, off roading and generally any outdoor exploration. If im not drumming or writing code I try to be outside!</p>
            <p>Feel free to check out my <a href="https://drive.google.com/file/d/1hX4c1QcN17llOUUfGMFHqrz1UdzMu_7g/view?usp=sharing" target="_blank">resume</a>, <a href="https://www.linkedin.com/in/travis-amaral-42383222/" target="_blank">LinkedIn</a>, or some <Link to="/work">projects</Link> I've worked on.</p>
          </div>
        </div>
      </div>
      <RightSlice />
    </div>
  )
}
