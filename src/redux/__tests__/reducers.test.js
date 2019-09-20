import rootReducer from "../reducers";
import { updateThemeColor } from "../actions";
import { getPrimaryColor } from "../selectors";

test("that calling updatePrimaryColor updates the primary color", () => {
  const oldState = {
    theme: {
      palette: {
        primary: {
          main: "orange"
        }
      }
    }
  };

  const newState = rootReducer(oldState, updateThemeColor("purple"));
  expect(getPrimaryColor(newState)).toEqual("purple");
});

test("that doing nothing will return current state", () => {
  const oldState = {
    theme: {
      palette: {
        primary: {
          main: "orange"
        }
      }
    }
  };

  const newState = rootReducer(oldState);
  expect(newState).toEqual(oldState);
});
