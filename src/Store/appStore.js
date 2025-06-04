import { configureStore } from "@reduxjs/toolkit";

import DnDReducer from "./DnDSlice"

const appStore = configureStore({
  reducer: {
    dnd: DnDReducer,
  }
})

export default appStore
