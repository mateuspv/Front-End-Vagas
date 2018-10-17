import React from 'react'
import styled from 'styled-components';

import LoaderIcon from '../assets/icon-loader.svg'

const Loader = styled.img`
  width: 100px;
  margin-top: 50px;
  margin-bottom: 50px;
`

export default () => (<Loader src={LoaderIcon} alt="Carregando" />)