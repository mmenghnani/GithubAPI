import { FETCH_POSTS, NEW_REPO, LIST_REPOS } from "../actions/types";

const initialState = {
  items: [],
  newRepo: {},
  repos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_REPO:
      return {
        ...state,
        newRepo: action.payload
      };
    case LIST_REPOS:
      return {
        ...state,
        repos: action.payload
      };
  }
}
