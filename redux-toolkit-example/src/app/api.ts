import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://jsonplaceholder.typicode.com";

export type User = {
  id: number;
  name: string;
};

export type Todos = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),
    getUser: builder.query<User, number>({
      query: (id) => `/users/${id}`,
    }),
    getTodos: builder.query<Todos[], void>({
      query: () => "/todos",
    }),
  }),
});

export const { useGetUsersQuery, useGetTodosQuery, useGetUserQuery } = usersApi;
