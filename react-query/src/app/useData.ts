import { useQuery } from "@tanstack/react-query";

type User = {
  id: string;
  name: string;
};

type Movie = {
  id: string;
  title: string;
};

type Tweet = {
  id: string;
  content: string;
};

const API_URL = "http://localhost:3001";


/* USERS */
export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["usersData"],
    queryFn: () => fetch(`${API_URL}/users`).then((res) => res.json()),
  });
};

/* MOVIES */
export const useMovies = () => {
  return useQuery<Movie[]>({
    queryKey: ["moviesData"],
    queryFn: () => fetch(`${API_URL}/movies`).then((res) => res.json()),
  });
};

/* TWEETS */
export const useTweets = () => {
  return useQuery<Tweet[]>({
    queryKey: ["tweetsData"],
    queryFn: () => fetch(`${API_URL}/tweets`).then((res) => res.json()),
  });
};  
