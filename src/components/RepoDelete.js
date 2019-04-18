import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RepoDeletion } from "../actions/postActions";
import { Button, Input, Element1, Element2 } from "../styles";

class RepoDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoName: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ repoName: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.repoName(this.state.username);
  }


  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Delete Github Repositories</h1>
          <form onSubmit={this.onSubmit}>
            <div>
              <label> Enter the repository name</label>
              <Input
                type="text"
                value={this.state.username}
                onChange={this.onChange}
              />
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

RepoDelete.prototypes = {
  RepoDeletion: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  repos: state.posts.repos
});

export default connect(
  mapStateToProps,
  { RepoDeletion }
)(RepoDelete);
