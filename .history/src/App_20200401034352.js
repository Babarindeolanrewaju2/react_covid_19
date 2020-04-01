
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
    // const country = Object.entries(countriesRes.data.countries).map(([country, code]) => (
    //   code.iso3
    // ))

    const country = Object.entries(countriesRes.data.countries).map(([country, code]) => (
      code.iso3
    ))
    console.log(country);

    this.setState({
      confirmed: defaultRes.data.confirmed.value,
      recovered: defaultRes.data.recovered.value,
      deaths: defaultRes.data.deaths.value,
      countries: country
    });
  }

  render() {
    return (
      <div className="container">
      </div>
    );
  }
}