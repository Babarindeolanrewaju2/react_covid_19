
import React, { Component } from "react";
// import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }

  state = {
    confirmed: "loading",
    recovered: "loading",
    deaths: "loading",
    countries: []
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const defaultRes = await Axios.get("https://covid19.mathdro.id/api");
    const countriesRes = await Axios.get(
      "https://covid19.mathdro.id/api/countries"
    );

    console.log(countriesRes);
    const countries = Object.entries(countries.countries).map(([country, code]) => (
      countries.iso3[code]
    )
    console.log(countries);

    this.setState({
      confirmed: defaultRes.data.confirmed.value,
      recovered: defaultRes.data.recovered.value,
      deaths: defaultRes.data.deaths.value,
      countries: countries
    });
  }

  render() {
    return (
      <div className="container">
      </div>
    );
  }
}