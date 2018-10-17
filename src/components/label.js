import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border-radius: var(--radius);
  font-size: var(--f-small);
  font-style: italic;
  text-align: center;
`

export default ({ label }) => (
  <Container style={{ 'background': `#${label.color}` }}>
    {label.name}
  </Container>
);