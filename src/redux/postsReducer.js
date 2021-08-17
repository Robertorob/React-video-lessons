import { CREATE_POST } from "./types";

const initialState = {
  syncPosts: [
    {title: 'post 1', id: 1},
    {title: 'post 2', id: 2},
    {title: 'post 3', id: 3},
  ],
  fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        syncPosts: [...state.syncPosts, action.payload]
      }
    default:
      return state;
  }
}