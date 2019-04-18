import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUserRepos } from "../actions/postActions";
import { Button, Input, Element1, Element2 } from "../styles";

class SearchRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.truncate = this.truncate.bind(this);
  }

  onChange(e) {
    this.setState({ username: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.fetchUserRepos(this.state.username);
  }

  truncate(string) {
    if (string.length > 50) return string.substring(0, 100) + "...";
    else return string;
  }

  render() {
    const repoItems =  Array.isArray(this.props.repos)
      ? this.props.repos.map(repo => (
          <div key={repo.id}>
            <Element1>
              <a href={repo.html_url}>
                <h3>{repo.name}</h3>
              </a>
            </Element1>
            <Element2>
              {repo.description
                ? this.truncate(repo.description)
                : "Repository description does not exist"}
            </Element2> 
          </div>
        ))
      : "Username does not exist";
    return (
      <React.Fragment>
        <div>
          <h1>Get Github Repositories</h1>
          <form onSubmit={this.onSubmit}>
            <div>
              <label> Enter the github username </label>
              <Input
                type="text"
                value={this.state.username}
                onChange={this.onChange}
              />
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
        {repoItems}
      </React.Fragment>
    );
  }
}

SearchRepos.prototypes = {
  fetchUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  repos: state.posts.repos
});

export default connect(
  mapStateToProps,
  { fetchUserRepos }
)(SearchRepos);
