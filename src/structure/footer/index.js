import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const Link = styled.a`
  color: var(--white)
`

const Love = styled.span`
  color: red
`

export default () => (
  <Footer>
    <Link href="https://github.com/mateuspv" target="_blank" rel="noopener noreferrer">
      <span>Made with <Love>❤</Love> by mateus.vahl</span>
    </Link>
  </Footer>
)