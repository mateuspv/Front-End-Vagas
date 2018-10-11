import React, { Component } from 'react'
import Card from '../components/card/index'

// <Card card={cardData}></Card>

class JobList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: []
    };
  }
  componentDidMount() {
    return window.fetch('https://api.github.com/repos/frontendbr/vagas/issues')
      .then(_ => _.json())
      .then(jobs => {
        this.setState({ jobs })
      })
  }

  render() {
    const jobs = this.state.jobs.map((_, i) => (<Card card={_} key={i}></Card>))

    return (
      <div className="container">
        {jobs}
      </div>
    )
  }
}

export default JobList;