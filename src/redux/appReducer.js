import { 
  HIDE_LOADER, 
  SHOW_LOADER, 
  ADD_ALERT,
  DELETE_ALERT,
} from "./types";
import { AlertType, AlertMessages } from '../Types/AlertTypes';


const alertInitial = {
  id: 'test',
  text: 'Test alert',
  type: AlertType.Test,
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
      if (state.alerts.filter(alert => alert.type === action.payload.type && alert.type !== AlertType.Custom).length > 0)
        return state;

      const newAlert = {
        id: action.payload.id,
        text: AlertMessages[action.payload.type],
        type: action.payload.type,
      }

      if (action.payload.type === AlertType.Custom) {
        newAlert.text = action.payload.text;
      }
      
      return {
        ...state,
        alerts: [
          ...state.alerts,
          newAlert,
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