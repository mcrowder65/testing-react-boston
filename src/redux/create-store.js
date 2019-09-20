import rootReducer from "./reducers";
import { createStore, compose } from "redux";
import { initialState } from "./initial-state";

const composeEnhancers =
  (process.env.NODE_ENV !== "prod" &&
    process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const createPersistedStore = () => {
  const persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : initialState;

  const store = createStore(rootReducer, persistedState, composeEnhancers());
  store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  });
  return {
    store
  };
};
