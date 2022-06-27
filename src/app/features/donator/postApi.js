import { api } from "../../api";

const apiWithTags = api.enhanceEndpoints({ addTagTypes: ["Post"] });

const postApi = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: "/post",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetPostsQuery } = postApi;
