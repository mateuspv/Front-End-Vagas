import React from 'react';
import icon from './icon.svg'
import './index.scss';

const Forkme = () => (
  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
    <img src={icon} className="forkme" alt="Forke me on github" />
  </a>
)

export default Forkme