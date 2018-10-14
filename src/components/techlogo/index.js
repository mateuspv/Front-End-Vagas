import React, { Component } from 'react'
import identifyTechnologies from './identifyTechnologies/index';
import './index.scss';

class Techlogo extends Component {
  render() {
    const technologies = identifyTechnologies(this.props.text)
      .map((_, i) => {
        const path = require(`./icons/${_}.svg`);

        return (
          <li className="techlogos__item">
            <img src={path} alt={_} key={i} />
          </li>
        )
      })

    return (<ul class="techlogos">{technologies}</ul>)
  }
}

export default Techlogo;