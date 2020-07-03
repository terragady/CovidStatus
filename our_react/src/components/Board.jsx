import React, { Component } from 'react';
import Graph from './Graph';

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://api.covid19api.com/total/country/italy/status/deaths?from=2020-02-01T00:00:00Z&to=2020-07-01T00:00:00Z')
      .then((response) => response.json())
      .then((result) => this.setState({ data: result }))
      // eslint-disable-next-line no-console
      .catch((error) => console.log('error', error));
  }

  render() {
    return (
      <div>
        Hello
        {console.log(this.state.data[0].Country)}
        {/* <Graph data={this.state.data}/> */}
      </div>
    )
  }
}
