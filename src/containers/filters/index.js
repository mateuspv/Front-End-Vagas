import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../../components/search';

import './index.scss';

class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <Search onChange={value => this.props.onChange(value)} placeholder='Pesquisar' />
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange(query) {
    dispatch({ type: 'JOBS_FILTER', query })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);