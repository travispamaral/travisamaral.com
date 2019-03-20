import React from 'react'
import Link from 'gatsby-link'
import '../../assets/scss/pages/home.scss'

import SocialIcons from '../components/SocialIcons/SocialIcons'
import LeftSlice from '../components/Slice/LeftSlice'
import RightSlice from '../components/Slice/RightSlice'
import Header from '../components/Header/Header'
export default () => {

  return (
    <div className="home-page">
      <Header />
      <div className="content">
        <h1>I build product UI as a Software Engineer building at <a href="https://konghq.com" target="_blank">Kong</a>.</h1>
        <div className="whois">
          <Link to="/about">Who am I</Link>
          <Link to="/work">What have I done</Link>
        </div>
        <SocialIcons />
      </div>
      <LeftSlice />
      <RightSlice />
    </div>
  )
}
