import { 
  CREATE_POST, 
  REQUEST_POSTS,
  HIDE_LOADER, 
  SHOW_LOADER, 
  ADD_ALERT,
  DELETE_ALERT,
  REQUEST_POSTS_WITH_ERROR,
} from "./types";
import { v4 as uuidv4 } from 'uuid';

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

export function addAlert(alert) {
  alert.id = uuidv4();
  // Это благодаря tnunk
  return dispatch => {
    dispatch({
      type: ADD_ALERT,
      payload: alert,
    })

    setTimeout(() => {
      dispatch(deleteAlert(alert.id));
    }, 7000);
  }
}

export function deleteAlert(id) {
  return {
    type: DELETE_ALERT,
    payload: id,
  }
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS,
  }
}

export function fetchPostsWithError() {
  return {
    type: REQUEST_POSTS_WITH_ERROR,
  }
}