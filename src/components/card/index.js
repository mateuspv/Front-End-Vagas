import React from 'react'
import styled from 'styled-components';

import prettyDate from '../../helpers/prettyDate/index'
import Label from '../label';
import Techlogo from '../techlogo/index'
import User from './user'
import Button from '../button'

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 30px;
  background-color: var(--white);
  border-radius: var(--radius);
  box-shadow: 0 1px 10px #00000085;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: fadeInUp;
`

const Content = styled.div`
  flex-grow: 1;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: var(--gray);
`

const LabelsContainer = styled.div`
  margin-top: 10px;

  > div {
    margin-right: 10px;
  }
`

const Time = styled.time`
  font-size: 12px;
  font-style: italic;
`

const Logos = styled.div`
  ul {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

export default (props) => {
  const { card } = props;
  const date = prettyDate(new Date(card.created_at));
  const Labels = card.labels.map((_, i) => (<Label label={_} key={i}></Label>))

  return (
    <Container>
      <Content>
        <Header>
          <User user={card.user} />
          <Time>{date}</Time>
        </Header>

        <h1>{card.title}</h1>
      </Content>

      <Logos>
        <Techlogo text={`${card.title} ${card.body}`}></Techlogo>
      </Logos>

      <LabelsContainer>
        {Labels}
      </LabelsContainer>

      <Button text="Detalhes" onClick={() => props.onDetailClick(props.card)} />

    </Container>
  )
}