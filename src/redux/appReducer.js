import { HIDE_LOADER, SHOW_ALERT, SHOW_LOADER, HIDE_ALERT } from "./types";

const alertInitial = {
  visible: true,
  text: 'asdfasdf asdfsadf',
}

const initialState = {
  loading: false,
  alert: alertInitial,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER: 
      return {
        ...state,
        loading: true
      }
    case HIDE_LOADER: 
      return {
        ...state,
        loading: false
      }
    case SHOW_ALERT:
      return {
        ...state,
        alert: {
          visible: true,
          text: action.payload
        },
      }
    case HIDE_ALERT:
      return {
        ...state,
        alert: {...alertInitial},
    }

    default: return state;
  }
}