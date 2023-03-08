import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { STORAGE_FIELDS } from "constants/storage.constants";
import { mapLocale } from "utils";
import { DEFAULT_LOCALE } from "constants/app.constants";

type InitialState = {
  locale: string;
};

const initialState: InitialState = {
  locale: mapLocale(localStorage.getItem(STORAGE_FIELDS.language)) || DEFAULT_LOCALE,
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    resetAppStore: () => initialState,
    setLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
    },
  },
});

export const { resetAppStore, setLocale } = app.actions;

export default app.reducer;
