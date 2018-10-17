import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import Card from '../../components/card/index'

import { renderMarkdown } from '../../api';

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3%;
  grid-row-gap: 25px;
  padding-top: 100px;

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const JobList = ({ jobs, onDetailClick }) => {
  const Cards = jobs.map((_, i) => (<Card card={_} key={i} onDetailClick={onDetailClick}></Card>))

  return (
    <div className="container">
      <List>
        {Cards}
      </List>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  jobs: state.jobsList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDetailClick(card) {
    renderMarkdown(card.body).then(_ => {
      dispatch({ type: 'MODAL_DISPLAY', card: { ...card, bodyRendered: _ }, })
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobList);