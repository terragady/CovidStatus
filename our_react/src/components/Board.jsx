import React, { Component } from 'react';
import Graph from './Graph';
import CountryForm from './CountryForm';
import './styles/Board.css'

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      country: 'Italy',
      countryName: 'Italy',
    };
    this.updateGraph = this.updateGraph.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.fetchData();
  }

  fetchData() {
    const { country } = this.state;
    fetch(`https://api.covid19api.com/total/country/${country}/status/deaths?from=2020-02-01T00:00:00Z&to=${new Date(Date.now()).toISOString()}`)
      .then((response) => response.json())
      .then((result) => this.setState({ data: result }))
      // eslint-disable-next-line no-console
      .catch((error) => console.log('error', error));
  }

  updateGraph(countryS) {
    const viar = (countryS.target.value).split('@');
    const slug = viar[0];
    const countryName = viar[1];
    this.setState({ country: slug, countryName });
  }

  render() {
    const { data, countryName } = this.state;
    return (
      <section className="Board">
      <CountryForm func={this.updateGraph} />
        {
          data === null
            ? <h3>Loading...</h3>
            : <Graph data={data} country={countryName} />
        }
      </section>

    );
  }
}
