import { initialState } from "./initial-state";
import { UPDATE_PRIMARY_COLOR } from "./action-types";
import { setIn } from "immutable";

const rootReducer = (state = initialState, action = {}) => {
  if (action.type === UPDATE_PRIMARY_COLOR) {
    return setIn(
      state,
      ["theme", "palette", "primary", "main"],
      action.primaryColor
    );
  }
  return state;
};
export default rootReducer;
