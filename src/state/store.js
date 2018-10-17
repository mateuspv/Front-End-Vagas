import { createStore } from 'redux';

import hasTextQuery from '../helpers/hasTextQuery/index'

const defaultData = {
  jobs: [],
  jobsList: [],
  modal: {
    isVisible: false,
    card: {}
  }
}

const filterByText = (jobs, query) =>
  query === "" ? jobs : jobs.filter(_ => hasTextQuery(_.title, query))

const reducer = (state, action) => {
  switch (action.type) {
    case 'JOBS_ADD':
      return { ...state, jobsList: action.jobs, jobs: action.jobs }

    case 'JOBS_FILTER':
      return { ...state, jobsList: filterByText(state.jobs, action.query) }

    case 'MODAL_DISPLAY':
      return { ...state, modal: { isVisible: true, card: action.card } }

    case 'MODAL_CLOSE':
      return {
        ...state, modal: { isVisible: false, card: {} }
      }

    default:
      return state;
  }
}

let store = createStore(reducer, defaultData);

export default store;