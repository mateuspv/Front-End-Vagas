import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './structure/header';
import JobList from './containers/joblist'
import Filters from './containers/filters/index'

const APP = (
  <div>
    <Header />
    <Filters />
    <JobList />
  </div>
);

ReactDOM.render(APP, document.getElementById('root'));