import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createPersistedStore } from "../src/redux/create-store";
import Providers from "../src/providers";

export const render = component => {
  const { store } = createPersistedStore();
  const { rerender: rtlRerender, ...others } = rtlRender(
    <Providers store={store}>{component}</Providers>
  );

  // If you just call react-testing-library rerender straight up, it will rerender but without
  // the original providers
  const rerender = ui => {
    const { store: rerenderedStore } = createPersistedStore();
    return rtlRerender(<Providers store={rerenderedStore}>{ui}</Providers>);
  };
  return { rerender, ...others };
};
