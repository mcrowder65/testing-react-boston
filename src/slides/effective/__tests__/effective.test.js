import React from "react";
import { render } from "test/utils";
import Effective from "src/slides/effective/effective";
import Contrived from "../contrived";

test("that it renders", () => {
  render(<Effective />);
});

test("that contrived renders", () => {
  render(<Contrived />);
});
