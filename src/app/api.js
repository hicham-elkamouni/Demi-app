import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.0.156:4000",
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
});
