import { 
  CREATE_POST, 
  FETCH_POSTS, 
  HIDE_LOADER, 
  SHOW_LOADER, 
  ADD_ALERT,
  DELETE_ALERT,
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function addAlert(text) {
  return {
    type: ADD_ALERT,
    payload: text,
  }
}

export function deleteAlert(id) {
  return {
    type: DELETE_ALERT,
    payload: id,
  }
}

export function fetchPosts() {
  return async dispatch => {
    dispatch(showLoader());

    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const json = await response.json();
    console.log('json ' + json);
    
    setTimeout(() => {
      dispatch({type: FETCH_POSTS, payload: json});
      dispatch(hideLoader());
    }, 2000);
  }
}