import { updateThemeColor } from "../actions";
import { UPDATE_PRIMARY_COLOR } from "../action-types";

test("that the shape doesn't change?", () => {
  expect(updateThemeColor("bananas")).toEqual({
    type: UPDATE_PRIMARY_COLOR,
    primaryColor: "bananas"
  });
});
