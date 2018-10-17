import React from 'react'
import style from 'styled-components';

import SearchIcon from './icon-search.svg';

const Label = style.label`
  display: block;
  border-radius: var(--radius);
  padding: 15px;
  background: url(${SearchIcon}) no-repeat 97% center var(--white);
  background-size: 20px;
`

const Input = style.input`
  display: block;
  width: 100%;

  :focus {
    outline: none;
  }
`

export default (props) => {
  return <Label >
    <Input placeholder={props.placeholder} value={props.value} onChange={e => props.onChange(e.target.value)} />
  </Label>

}
