import React, { Component } from "react";

export default class RecoveredDisplay extends Component {
    render() {
        const { value } = this.props
        return (
            <div className="box recovered">
                <h3>Recovered cases</h3>
                <span className="value">{value}</span>
            </div>
        );
    }
}