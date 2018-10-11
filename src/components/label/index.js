import React, { Component } from 'react'
import './index.scss';

class Label extends Component {
  render() {

    return (
      <div className="label" style={{ 'background': `#${this.props.label.color}` }}>
        {this.props.label.name}
      </div>)
  }
}

export default Label;