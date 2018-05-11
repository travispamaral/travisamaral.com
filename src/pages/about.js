import React from 'react'
import Link from 'gatsby-link'

import RightSlice from '../components/Slice/RightSlice' 
import Header from '../components/Header/Header'

export default ({ data }) => {

  return (
    <div className="about-page">
      <Header />  
      <div className="content">
        <h1>About Me</h1>
        <h2>A front end dev focusing on UI/UX in the SF bay area.</h2>
        <p>I have have built or worked on sites ranging from applications to high end fashion e-commerce to consumer packaged goods brands. I spent almost 5 years as dev lead at a Zooka Creative, a digital agency in San Jose. My work here consisted of managing large consumer facing websites, managing a team of front and back end engineers, maintaining and implementing best practices and staying up to date with the most recent trends.</p>

        <p>I am also a co-founder &amp; UI/UX Engineer at <a href="http://weareanchor.co">Anchor Studios</a>. A small collaborative design firm also based in the Bay Area. We conceptualize and develop state of the art marketing sites, produce 2D, 3D &amp; live action videos, as well as do custom photography.</p>

        <p>Feel free to check out my <a href="https://drive.google.com/file/d/0B9pg74rTKuUBbDFiVmJ4djBmeHc/view">resume</a>, <a href="https://www.linkedin.com/in/travis-amaral-42383222/">LinkedIn</a>, or some <Link to="/work">projects</Link> I've worked on.</p>
      </div> 
      <RightSlice />
    </div>
  )
}
