import React, { Component } from "react";
import "../App.css";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar">
        <h1>{this.props.name}'s ToDo List</h1>
      </div>
    );
  }
}
