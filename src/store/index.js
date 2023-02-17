import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./apis/MoviesApi";

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(moviesApi.middleware);
  },
});

export default store;
export const { useFetchMoviesQuery } = moviesApi;
