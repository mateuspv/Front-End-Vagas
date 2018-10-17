import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Search from '../../components/search';

const Container = styled.div`
  max-width: 768px;
  margin: 50px auto 0 auto;
`

const Filters = ({ onChange }) => (
  <div className="container">
    <Container>
      <Search onChange={value => onChange(value)} placeholder='Pesquisar' />
    </Container>
  </div>
)

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange(query) {
    dispatch({ type: 'JOBS_FILTER', query })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);