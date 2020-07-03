import React, { Component } from 'react';

class GlobalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then((response) => response.json())
      .then((result) => this.setState({ data: result.Global }))
      // eslint-disable-next-line no-console
      .catch((error) => console.log('error', error));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="summary-card">
        <h1>Global Summary</h1>
        <p>
          <strong>Total Confirmed: </strong>
          {new Intl.NumberFormat('de-DE').format(data.TotalConfirmed)}
        </p>
        <p>
          <strong>Total Deaths: </strong>
          {new Intl.NumberFormat('de-DE').format(data.TotalDeaths)}
        </p>
        <p>
          <strong>Total Recovered: </strong>
          {new Intl.NumberFormat('de-DE').format(data.TotalRecovered)}
        </p>
      </div>
    );
  }
}

export default GlobalCard;
