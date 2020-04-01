import React, { Component } from "react";

export default class DeathsDisplay extends Component {
    render() {
        const { value } = this.props
        return (
            <div className="box deaths">
                <h3>Deaths</h3>
                <span className="value">{value}</span>
            </div>
        );
    }
}