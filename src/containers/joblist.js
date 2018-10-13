import React from 'react'
import { connect } from 'react-redux';

import Card from '../components/card/index'

const JobList = ({ jobs }) => {
  const cards = jobs.map((_, i) => (<Card card={_} key={i}></Card>))

  return (
    <div className="container">
      {cards}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  jobs: state.jobsList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobList);