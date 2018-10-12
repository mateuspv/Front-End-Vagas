import React, { Component } from 'react';
import Search from '../../components/search';
import './index.scss';

export default class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <Search />
      </div>
    )
  }
}
