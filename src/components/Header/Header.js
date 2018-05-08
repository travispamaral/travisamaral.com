import React from 'react';
import Link from 'gatsby-link'

import Logo from '../Logo/Logo'
import './Header.scss'

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <Logo />
        <nav>
          <Link to="/about" activeClassName="active">About</Link>
          <Link to="/work" activeClassName="active">Work</Link>
          <Link to="/contact" activeClassName="active">Contact</Link>
        </nav>
      </header>
    )
  }
}
