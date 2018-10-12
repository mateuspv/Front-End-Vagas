import React, { Component } from 'react'
import Label from '../label';
import './index.scss';

class Card extends Component {

  render() {
    const hasLabels = Boolean(this.props.card.labels.length)
    const labels = this.props.card.labels.map((_, i) => {
      return (<Label label={_} key={i}></Label>)
    })

    return (<div className="card">
      <div className="card__content">
        <a className="card__user" href={this.props.card.user.html_url} target="_blank" without rel="noopener noreferrer">
          <img className="card__user__photo" src={this.props.card.user.avatar_url} alt={this.props.card.user.login} />
          <p className="card__user__name">{this.props.card.user.login}</p>
        </a>

        <h1>{this.props.card.title}</h1>

        {hasLabels &&
          (<div className="card__labels">
            {labels}
          </div>)
        }

      </div>

      <a className="card__btn" href={this.props.card.html_url} target="_blank" without rel="noopener noreferrer">visualizar</a>


    </div>)
  }
}

export default Card;