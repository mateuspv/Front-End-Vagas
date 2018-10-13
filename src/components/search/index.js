import React, { Component } from 'react'
import './index.scss';

export default class Search extends Component {
  state = {
    value: ""
  };

  updateInputValue(event) {
    this.setState({
      value: event.target.value
    });

    this.props.onChange(this.state.value);
  }

  render() {
    return (
      <label className="search">
        <input placeholder={this.props.placeholder} value={this.state.value} onKeyPress={event => this.updateInputValue(event)} onChange={event => this.updateInputValue(event)} />
      </label>
    )
  }
}
