import { api } from "../../api";

const apiWithTags = api.enhanceEndpoints({ addTagTypes: ["Donator"] });

const donatorApi = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/donator/login",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/donator",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useLoginMutation, useRegisterMutation } = donatorApi;
