import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  padding: 15px 40px;
  border-radius: var(--radius);
  background-color: var(--blue);
  color: var(--white);
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;

  :hover,
  :focus,
  :active {
    outline: none;
    box-shadow: var(--highlight-circle);
    transition: 0.8s all;
  }
`;

export default (props) => (<Button onClick={props.onClick}>{props.text}</Button>)