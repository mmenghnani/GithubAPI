import { FETCH_POSTS, NEW_POST, LIST_REPOS } from "../actions/types";

const initialState = {
  items: [],
  item: {},
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
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case LIST_REPOS:
      return {
        ...state,
        repos: action.payload
      };
  }
}
