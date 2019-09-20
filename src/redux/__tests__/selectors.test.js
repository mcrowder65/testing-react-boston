import { getPrimaryColor, getTheme } from "../selectors";

test("that it gets the theme correctly", () => {
  const theme = { hello: "React Boston!" };
  expect(getTheme({ theme })).toEqual(theme);
});

test("that it gets the primary color correctly", () => {
  const theme = {
    palette: {
      primary: {
        main: "purple"
      }
    }
  };
  expect(getPrimaryColor({ theme })).toEqual("purple");
});
