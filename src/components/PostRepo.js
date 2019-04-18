import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createNewRepo } from '../actions/postActions'

class PostRepo extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : '',
      description : ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(e){
    this.setState({[e.target.name] : e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
   
    const repoData = {
      name : this.state.name,
      description : this.state.description
    }
    
    this.props.createNewRepo(repoData);
 
  }

  render() {
    const newRepoData = this.props.newRepo.html_url ? <h4> New Repo has been created with name <a href={this.props.newRepo.html_url}>{this.props.newRepo.name}</a></h4> : ''
    return (
      <React.Fragment>
        <div>
        <h1>Create new Repo </h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>
              Name : 
            </label><br />
            <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
          </div><br />
          <div>
            <label>
              Description : 
            </label><br />
            <input type="text" name="description" value={this.state.description} onChange={this.onChange}/>
          </div><br />
          <button type="submit">Submit</button>
        </form>     
      </div>
      {newRepoData}
      </React.Fragment>
    )
  }
}

// Postform.PropTypes = {

// }

const mapStateToProps = state => ({
    newRepo: state.posts.newRepo
  });

export default connect(mapStateToProps,{ createNewRepo })(PostRepo);