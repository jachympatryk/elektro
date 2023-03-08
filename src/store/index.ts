import { combineReducers, configureStore } from "@reduxjs/toolkit";

import app from "./app/app.redux";

const reducer = combineReducers({
  app,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

export { store };

export * from "./app";
