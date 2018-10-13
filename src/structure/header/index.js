import React, { Component } from 'react';
import './index.scss';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a className="header__logo" href="https://github.com/frontendbr" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="front-end-brasil-logo" />
        </a>
      </header>
    )
  }
}

export default Header;