import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './structure/header';
import JobList from './containers/joblist'

import Search from './components/search'

const app = (
  <div>
    <Header />
    <Search />
    <JobList />
  </div>
);

ReactDOM.render(app, document.getElementById('root'));