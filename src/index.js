import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Header from './structure/header';
import JobList from './containers/joblist/index'
import Modal from './containers/jobmodal/index';
import Filters from './containers/filters/index'
import Forkme from './components/forkme/index'
import store from './state/store';
import { fetchJobs } from './api';

import './scaffold.scss';

const APP = (
  <Provider store={store}>
    <>
      <Forkme />
      <Header />
      <Filters />
      <JobList />
      <Modal />
    </>
  </Provider>
);


fetchJobs().then(jobs => store.dispatch({ type: 'JOBS_ADD', jobs }))

ReactDOM.render(APP, document.getElementById('root'));