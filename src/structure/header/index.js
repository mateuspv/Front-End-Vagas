import React, { Component } from 'react';
import './index.scss';
import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="front-end-brasil-logo"></img>
      </header>
    )
  }
}

export default Header;