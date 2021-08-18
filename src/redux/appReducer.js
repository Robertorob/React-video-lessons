import { 
  HIDE_LOADER, 
  SHOW_LOADER, 
  ADD_ALERT,
  DELETE_ALERT,
} from "./types";

const alertInitial = {
  id: Date.now().toString(),
  text: 'Test alert',
}

const initialState = {
  loading: false,
  alerts: [alertInitial],
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
    case ADD_ALERT:
      return {
        ...state,
        alerts: [
          ...state.alerts,
          {
            id: Date.now().toString(),
            text: action.payload
          }
        ],
      }
    case DELETE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(alert => alert.id !== action.payload),
    }

    default: return state;
  }
}