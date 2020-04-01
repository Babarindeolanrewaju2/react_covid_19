import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import ConfirmedDisplay from "./components/ConfirmedDisplay";
import RecoveredDisplay from "./components/RecoveredDisplay";
import DeathsDisplay from "./components/DeathsDisplay";
import CountrySearch from "./components/CountrySearch";
import CountryDisplay from "./components/CountryDisplay";
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmed: "loading",
      recovered: "loading",
      deaths: "loading",
      countries: []
    };

  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const Worldwide = await Axios.get("https://covid19.mathdro.id/api");
    const countriesRes = await Axios.get(
      "https://covid19.mathdro.id/api/countries"
    );

    console.log(countriesRes);

    const countries = Object.entries(countriesRes.data.countries).map(([country, code]) => (
      code.name
    ))

    console.log(countries);

    this.setState({
      confirmed: Worldwide.data.confirmed.value,
      recovered: Worldwide.data.recovered.value,
      deaths: Worldwide.data.deaths.value,
      lastdate: Worldwide.data.lastUpdate,
      countries: countries
    });
  }

  render() {
    const d = new Date(this.state.lastdate)
    return (
      <div className="container">
        <h1>Covid 19 infos</h1>
        <p>{d}</p>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/test">
              <div>test</div>}
            </Route>
            <Route
              exact
              path="/country/:id"
              render={props => <CountryDisplay {...props} />}
            />
            <Route
              exact
              path="/"
              render={props => {
                return (
                  <div>
                    <CountrySearch countries={this.state.countries} />
                    <div className="flex">
                      <ConfirmedDisplay value={this.state.confirmed} />
                      <RecoveredDisplay value={this.state.recovered} />
                      <DeathsDisplay value={this.state.deaths} />
                    </div>
                  </div>
                );
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}