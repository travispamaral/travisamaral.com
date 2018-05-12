import React, { Component } from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/Header'
import LeftSlice from '../components/Slice/LeftSlice'
import RightSlice from '../components/Slice/RightSlice'

export default ({ data }) => {

  const TextStyles = {
    textAlign: 'center'
  }

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

  return (
    <div className="content">
      <Header />
      <div style={TextStyles}>
        <h1>Thanks for reaching out!</h1>
        <p>I will get back to you as soon as I can.</p>
        <Link style={ButtonStyles} to="/">Back to Home</Link>
      </div>
      <LeftSlice />
      <RightSlice />
    </div>
  )
}
