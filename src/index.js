import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './structure/header';
import JobList from './containers/joblist'

const app = (
  <div>
    <Header></Header>
    <JobList></JobList>
  </div>
);

ReactDOM.render(app, document.getElementById('root'));