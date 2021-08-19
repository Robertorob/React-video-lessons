import { AlertType } from "../Types/AlertTypes";
import { 
  CREATE_POST, 
  FETCH_POSTS, 
  HIDE_LOADER, 
  SHOW_LOADER, 
  ADD_ALERT,
  DELETE_ALERT,
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
  return dispatch => {
    dispatch({
      type: ADD_ALERT,
      payload: alert,
    })

    setTimeout(() => {
      dispatch(deleteAlert(alert.id));
    }, 5000);
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

    try {
      dispatch(showLoader());
  
      const response = await fetch('https://jsonplaceholder.typicode.co/posts?_limit=5')
      const json = await response.json();
      console.log('json ' + json);
      
      setTimeout(() => {
        dispatch({type: FETCH_POSTS, payload: json});
        dispatch(hideLoader());
      }, 2000);
    }
    catch (error) {
      console.log(error);
      dispatch(addAlert({type: AlertType.Custom, text: error.message}));
      dispatch(hideLoader());
    }
  }
}