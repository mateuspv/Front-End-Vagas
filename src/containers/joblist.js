import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Card from "../components/card";
import Loader from "../components/loader";

import { SHOW_JOB_MODAL } from "../state/actions";
import hasTextQuery from "../helpers/hasTextQuery/index";

const filterByText = (jobs, query) =>
  query === "" ? jobs : jobs.filter(_ => hasTextQuery(_.title, query));

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
`;

const JobList = ({ jobs, isLoading, onDetailClick }) => {
  const Cards = jobs.map((_, i) => (
    <Card card={_} key={i} onDetailClick={onDetailClick} />
  ));

  return (
    <>
      <div className="container">
        <List>{Cards}</List>
      </div>

      <div className="container">
        <Loader visible={isLoading} />
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  jobs: filterByText(state.jobs, state.query),
  isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDetailClick(card) {
    SHOW_JOB_MODAL(card);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobList);
