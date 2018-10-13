import timeStrFromDate from '../../helpers/timeStrFromDate'
import React, { Component } from 'react'
import Label from '../label';
import './index.scss';

class Card extends Component {

  date(d) {
    const date = new Date(d)
    return timeStrFromDate(date);
  }
  render() {
    const { card } = this.props;
    const date = this.date(card.created_at);
    const hasLabels = Boolean(card.labels.length);
    const labels = card.labels.map((_, i) => (<Label label={_} key={i}></Label>))

    return (<div className="card">
      <div className="card__content">


        <div className="card__header">
          <a className="card__user" href={card.user.html_url} target="_blank" rel="noopener noreferrer">
            <img className="card__user__photo" src={card.user.avatar_url} alt={card.user.login} />
            <p className="card__user__name">{card.user.login}</p>
          </a>

          <time className="card__time">{date}</time>
        </div>

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