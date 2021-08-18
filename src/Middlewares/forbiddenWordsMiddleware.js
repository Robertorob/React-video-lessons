import { addAlert } from "../redux/actions";
import { CREATE_POST } from "../redux/types"
import { AlertType } from "../Types/AlertTypes";

const forbidden = ['fuck', 'dick'];

export const forbiddenWordsMiddleware = ({dispatch}) => {
  return (next) => {
    return (action) => {
      if (action.type === CREATE_POST) {
        if (forbidden.filter(word => action.payload.title.includes(word) || action.payload.body.includes(word)).length) {
          return dispatch(addAlert(AlertType.ForbiddenWords));
        }
      }

      return next(action);
    }
  }
}