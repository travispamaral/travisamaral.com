import React from 'react';
import Link from 'gatsby-link'

import Logo from '../Logo/Logo'
import './Header.scss'

export default class Header extends React.Component {
  
  constructor() {
    super()
    this.state = {
      menuOpen: false
    }
  }
  
  openMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    return (
      <header>
        <Logo />
        <nav className={this.state.menuOpen ? 'open' : ''}>
          <Link to="/about" activeClassName="active">About</Link>
          <Link to="/work" activeClassName="active">Work</Link>
          <Link to="/contact" activeClassName="active">Contact</Link>
        </nav>
        <div className={"mobile-trigger" + (this.state.menuOpen ? " open" : "")} onClick={this.openMenu.bind(this)}>
          <div className="bar bar-top"></div>
          <div className="bar bar-bottom"></div>
        </div>
      </header>
    )
  }
}
