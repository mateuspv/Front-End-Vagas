import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../../components/search';
import i18n from '../../i18n';

import './index.scss';

class Filters extends Component {
  render() {
    const { placeholder } = i18n.filters.search;

    return (
      <div className="filters">
        <Search onChange={value => this.props.onChange(value)} placeholder={placeholder} />
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