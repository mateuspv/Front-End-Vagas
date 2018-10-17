import React from 'react'
import styled from 'styled-components';

import prettyDate from '../../helpers/prettyDate/index'
import identifyTechnologies from '../../helpers/identifyTechnologies/index';

import Label from '../label';
import Logos from '../techlogo/index'
import User from './user'
import Button from '../button'
import HR from '../hr'

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 30px;
  background-color: var(--white);
  border-radius: 4px;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: fadeInUp;

  &:hover {
    box-shadow: var(--highlight-circle);
    transition: .5s all;
  }
`

const Content = styled.div`
  flex-grow: 1;
`

const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  color: var(--gray);
`

const LabelsContainer = styled.div`
  display: grid;
  grid-gap: 5%;
  grid-row-gap: 10px;
  grid-template-columns: auto auto auto;

`

const Time = styled.time`
  font-size: var(--f-small);
  font-style: italic;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const LogosContainer = styled.div`
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  li {
    display: flex;
    align-items: center;
  }
`

const Title = styled.h1`
  font-size: var(--f-big)
`

export default (props) => {
  const { card } = props;
  const date = prettyDate(new Date(card.created_at));
  const technologies = identifyTechnologies(`${card.title} ${card.body}`)
  const Labels = card.labels.map((_, i) => (<Label label={_} key={i}></Label>))


  return (
    <Container>
      <Content>
        <Header>
          <User user={card.user} />
          <Time>{date}</Time>
        </Header>

        <Title>{card.title}</Title>
      </Content>

      {technologies.length > 0 &&
        <LogosContainer>
          <HR />
          <Logos technologies={technologies}></Logos>
        </LogosContainer>
      }

      {card.labels.length > 0 &&
        <>
          <HR />
          <LabelsContainer>
            {Labels}
          </LabelsContainer>
        </>
      }

      <HR />

      <Footer>
        <Button text="Detalhes" onClick={() => props.onDetailClick(props.card)} />
      </Footer>

    </Container>
  )
}