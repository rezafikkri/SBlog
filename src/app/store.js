import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../features/services/posts";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (gDM) => [ ...gDM(), postsApi.middleware ],
});
