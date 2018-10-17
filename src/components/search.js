import React from 'react'
import style from 'styled-components';

import SearchIcon from '../assets/icon-search.svg';

const Label = style.label`
  display: block;
  border-radius: var(--radius);
  padding: 15px;
  background: url(${SearchIcon}) no-repeat 97% center var(--white);
  background-size: 20px;

  :focus,
  :active {
    outline: none;
    box-shadow: var(--highlight-circle);
    transition: 0.8s all;
  }
`

const Input = style.input`
  display: block;
  width: 100%;
  font-size: var(--f-small);

  :focus,
  :active {
    outline: none;
  }

  ::-webkit-input-placeholder {
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`

export default (props) => {
  return <Label >
    <Input placeholder={props.placeholder} value={props.value} onChange={e => props.onChange(e.target.value)} />
  </Label>

}
