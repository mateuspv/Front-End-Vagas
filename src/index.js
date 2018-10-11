import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './structure/header';
import Card from './components/card/index'

// <Card card={}></Card>

const app = (
  <div>
    <Header></Header>
    <div className="container">

    </div>
  </div>
);

ReactDOM.render(app, document.getElementById('root'));