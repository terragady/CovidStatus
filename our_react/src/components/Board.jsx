import React, { Component } from 'react';
import Graph from './Graph';

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(`https://api.covid19api.com/total/country/italy/status/deaths?from=2020-02-01T00:00:00Z&to=${new Date(Date.now()).toISOString()}`)
      .then((response) => response.json())
      .then((result) => this.setState({ data: result }))
      // eslint-disable-next-line no-console
      .catch((error) => console.log('error', error));
  }

  render() {
    return (
      <section className="Board">
      {
        this.state.data === null
          ? <h3>Loading...</h3>
          : <Graph data={this.state.data} />
      }
      </section>

    )
  }
}
