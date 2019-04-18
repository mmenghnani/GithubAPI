import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key ={post.id}>
        <h3>{post.name}</h3>
        <p>{post.description}</p>
      </div>
    ));
    return (
      <div>
        {postItems}
      </div>
    )
  }
}

Posts.prototypes = {
  fetchPosts : PropTypes.func.isRequired,
  posts : PropTypes.array.isRequired,
  item : PropTypes.object
}

const mapStateToProps = state => ({
  posts : state.posts.items,
  newPost : state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);