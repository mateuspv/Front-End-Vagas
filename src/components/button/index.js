import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  text-align: center;
  border-radius: var(--radius);
  padding: 10px 15px;
  margin-top: 20px;
  background-color: var(--blue);
  color: var(--white);
`;

export default (props) => (<Button onClick={props.onClick}>{props.text}</Button>)