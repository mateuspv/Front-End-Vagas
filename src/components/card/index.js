import React, { Component } from 'react'
import Label from '../label';
import './index.scss';

class Card extends Component {

  render() {
    const { card } = this.props;
    const hasLabels = Boolean(card.labels.length);
    const labels = card.labels.map((_, i) => {
      return (<Label label={_} key={i}></Label>)
    })

    return (<div className="card">
      <div className="card__content">
        <a className="card__user" href={card.user.html_url} target="_blank" rel="noopener noreferrer">
          <img className="card__user__photo" src={card.user.avatar_url} alt={card.user.login} />
          <p className="card__user__name">{card.user.login}</p>
        </a>

        <h1>{card.title}</h1>

        {hasLabels &&
          (<div className="card__labels">
            {labels}
          </div>)
        }

      </div>

      <a className="card__btn" href={card.html_url} target="_blank" rel="noopener noreferrer">visualizar</a>


    </div>)
  }
}

export default Card;