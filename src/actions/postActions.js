import { FETCH_POSTS, NEW_POST,LIST_REPOS } from './types';

const bearer = 'Bearer d4974dfc372eda64735dec9d4883c5079101d5e4';

export const fetchPosts = () => dispatch => {
        fetch('https://api.github.com/users/mmenghnani/starred', {
            headers : {
                'Authorization': bearer,
            }
        })
        .then(res => res.json())
        .then(posts => dispatch({
            type : FETCH_POSTS,
            payload : posts
        }))
    }

export const createPost = postData => dispatch => {
    fetch('https://api.github.com/user/repos', {
      method: 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(postData => dispatch({
          type : NEW_POST,
          payload : postData
      }))
}    

export const fetchUserRepos = (userName) => dispatch => {
    fetch(`https://api.github.com/users/${userName}/repos?page=1&per_page=100`, {
            headers : {
                'Authorization': bearer,
            }
        })
        .then(res => res.json())
        .then(repos => dispatch({
            type : LIST_REPOS,
            payload : repos
        }));
}

export const fetchUserFollowing = (userName) => dispatch => {
    fetch(`https://api.github.com/users/${userName}/repos?page=1&per_page=100`, {
            headers : {
                'Authorization': bearer,
            }
        })
        .then(res => res.json())
        .then(repos => dispatch({
            type : LIST_REPOS,
            payload : repos
        }));
}
