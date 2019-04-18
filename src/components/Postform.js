import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createNewRepo } from "../actions/postActions";

class Postrepo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const repoData = {
      name: this.state.name,
      description: this.state.description
    };

    this.props.createNewRepo(repoData);
  }

  render() {
    return (
      <div>
        <h1>Add post </h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title :</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label>Second field :</label>
            <br />
            <input
              type="text"
              name="body"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// Postform.PropTypes = {

// }

export default connect(
  null,
  { createNewRepo }
)(Postrepo);
