import { 
  HIDE_LOADER, 
  SHOW_LOADER, 
  ADD_ALERT,
  DELETE_ALERT,
} from "./types";
import { AlertType } from '../Types/AlertType';

const alertInitial = {
  text: 'Test alert',
  type: AlertType.Test,
}

const initialState = {
  loading: false,
  alerts: [alertInitial],
}

const AlertMessages = {
  [AlertType.TitleEmpty]: "Please fill the title",
  [AlertType.BodyEmpty]: "Please fill the body",
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
      if (state.alerts.filter(alert => alert.type === action.payload).length > 0)
        return state;
      
      return {
        ...state,
        alerts: [
          ...state.alerts,
          {
            id: Date.now().toString(),
            text: AlertMessages[action.payload],
            type: action.payload,
          }
        ],
      }
    case DELETE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(alert => alert.type !== action.payload),
    }

    default: return state;
  }
}