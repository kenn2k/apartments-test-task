import { configureStore } from "@reduxjs/toolkit";
import { apartmentsSlice } from "./slices/apartmentsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      apartments: apartmentsSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
