import React from 'react';
import styled from 'styled-components'

import IconLogo from './logo.svg';


const Header = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 1vw;
  padding-bottom: 1vw;
  background-color: var(--white);
  border-bottom: 5px solid var(--yellow);
`

const Logo = styled.a`
  display: block;
  width: 300px;
  height: 119px;
`

export default () => (<Header>
  <Logo href="https://github.com/frontendbr" target="_blank" rel="noopener noreferrer">
    <img src={IconLogo} alt="front-end-brasil-logo" />
  </Logo>
</Header>)