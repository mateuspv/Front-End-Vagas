import React from 'react';
import octodex from './icon-octodex.svg'
import style from 'styled-components';

const Link = style.a`
  position: absolute;
  right: 0;
`

const title = "forke me on github";

const Forkme = () => (
  <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
    <img src={octodex} alt={title} title={title} />
  </Link>
)

export default Forkme