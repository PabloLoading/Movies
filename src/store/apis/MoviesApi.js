import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "ea516cd8a2019ccccb0f2ec5d71759f7";

const moviesApi = createApi({
  reducerPath: "movies",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/search",
  }),
  endpoints: (builder) => {
    return {
      fetchMovies: builder.query({
        query: (term) => {
          return {
            url: `/movie`,
            method: "GET",
            params: { query: term, api_key: apiKey },
          };
        },
      }),
    };
  },
});

export { moviesApi };
