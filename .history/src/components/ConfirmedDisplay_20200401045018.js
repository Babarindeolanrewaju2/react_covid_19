import React, { Component } from "react";

export default class ConfirmedDisplay extends Component {
  render() {
    const { value } = this.props
    return (
      <div>
        <h3>Confirmed cases</h3>
        <span className="value">{value}</span>
      </div>
    );
  }
}