import React, { Component } from 'react'
import './index.scss';

export default class Search extends Component {
  render() {
    return (
      <label className="search">
        <input placeholder="Search" />
      </label>
    )
  }
}
