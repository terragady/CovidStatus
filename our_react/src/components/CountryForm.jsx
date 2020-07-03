import React, { Component } from 'react';
import './styles/CountryForm.css'

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    fetch('https://api.covid19api.com/countries')
      .then((response) => response.json())
      .then((result) => {
        const countries = result.map((e) => {
          return { country: e.Country, slug: e.Slug };
        });
        const sorted = countries.sort((a, b) => {
          if (a.country < b.country) { return -1; }
          if (a.country > b.country) { return 1; }
          return 0;
        });
        this.setState({ countries: sorted });
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log('error', error));
  }

  render() {
    const { countries } = this.state;
    return (
      <section>
        <select className="CountryForm__dropdown" onChange={this.props.func} id="cars" name="cars">
          {countries.map((e, i) => <option key={i} value={`${e.slug}@${e.country}`}>{e.country}</option>)}
        </select>
      </section>

    );
  }
}
