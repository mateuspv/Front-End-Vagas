import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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

  img {
    max-width: 25px;
    margin-left: 15px
  }
`;

export default (props) => (
  <Button onClick={props.onClick}>
    <span>{props.text}</span>

    {props.icon &&
      <img className="svg" src={props.icon} alt={props.alt} />
    }
  </Button>
)