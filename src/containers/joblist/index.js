import React from 'react'
import { connect } from 'react-redux';
import Card from '../../components/card/index'

import styled from 'styled-components';

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3%;
  grid-row-gap: 25px;
  padding: 100px 0;

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
    dispatch({ type: 'MODAL_DISPLAY', card })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobList);