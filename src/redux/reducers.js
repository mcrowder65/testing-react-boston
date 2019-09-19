import { initialState } from "./initial-state";
import { UPDATE_PRIMARY_COLOR } from "./action-types";

const rootReducer = (state = initialState, action = {}) => {
  if (action.type === UPDATE_PRIMARY_COLOR) {
    return {
      ...state,
      theme: {
        ...state.theme,
        palette: {
          ...state.theme.palette,
          primary: {
            ...state.theme.palette.primary,
            main: action.primaryColor
          }
        }
      }
    };
  }
  return state;
};
export default rootReducer;
