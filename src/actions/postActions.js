import { FETCH_POSTS, NEW_REPO, LIST_REPOS,DELETE_REPO } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("https://api.github.com/users/mmenghnani/starred", {
    headers: {
      Authorization: bearer
    }
  })
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createNewRepo = postData => dispatch => {
  fetch("https://api.github.com/user/repos", {
    method: "POST",
    headers: {
      Authorization: bearer,
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(postData =>
      dispatch({
        type: NEW_REPO,
        payload: postData
      })
    );
};

export const fetchUserRepos = userName => dispatch => {
  fetch(`https://api.github.com/users/${userName}/repos?page=1&per_page=100`, {
    headers: {
      Authorization: bearer
    }
  })
    .then(res => res.json())
    .then(repos =>
      dispatch({
        type: LIST_REPOS,
        payload: repos
      })
    );
};

export const fetchUserFollowing = userName => dispatch => {
  fetch(`https://api.github.com/users/${userName}/repos?page=1&per_page=100`, {
    headers: {
      Authorization: bearer
    }
  })
    .then(res => res.json())
    .then(repos =>
      dispatch({
        type: LIST_REPOS,
        payload: repos
      })
    );
};

export const RepoDeletion = repoName => dispatch => {
    fetch(`https://api.github.com/repos/mmenghnani/${repoName}`, {
      method: "DELETE",
      headers: {
        Authorization: bearer      
    }    
    })
      .then(res => res.json())
      .then(postData =>
        dispatch({
          type: DELETE_REPO,
          payload: postData
        })
      );
  };
