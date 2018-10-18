import React from 'react'
import styled from 'styled-components';

import LoaderIcon from '../assets/icon-loader.svg'

const Loader = styled.img`
  display: block;
  width: 100px;
  margin: 50px auto;
`

export default (props) => (<Loader src={LoaderIcon} alt="Carregando" style={{ display: props.visible ? 'block' : 'none' }} />)