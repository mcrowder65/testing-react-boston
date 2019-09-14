import "../index";
import ReactDOM from "react-dom";
jest.mock("react-dom", () => {
  return {
    render: jest.fn()
  };
});

test("that render got called", () => {
  // This is not a good example of a test, I just wanted to see if you could do it
  expect(ReactDOM.render).toHaveBeenCalled();
});
