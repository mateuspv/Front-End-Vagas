import React from 'react'
import styled from 'styled-components';

const Container = styled.ul`
  display: flex;
  align-content: center;
`

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export default ({ technologies }) => {
  const Itens = technologies
    .map((name, i) => {
      const icon = require(`../../assets/techlogos/${name}.svg`);

      return (<Item key={i}>
        <img src={icon} alt={name} />
      </Item>)
    })

  return <Container >{Itens}</Container>

}