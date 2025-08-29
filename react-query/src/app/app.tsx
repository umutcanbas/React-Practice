import { useUsers, useMovies, useTweets } from "./useData";

const App = () => {
  const { data: users } = useUsers();
  const { data: movies } = useMovies();
  const { data: tweets } = useTweets();

  return (
    <div className="flex flex-row m-4  p-4 gap-60">
      <div className="flex flex-col w-full">
        <h2 className="text-3xl bg-slate-300 rounded-lg p-2 w-fit">Users</h2>
        <ul>{users?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
      </div>

      <div className="flex flex-col w-full">
        <h2 className="text-3xl bg-slate-300 rounded-lg p-2 w-fit">Movies</h2>
        <ul>{movies?.map((movie) => <li key={movie.id}>{movie.title}</li>)}</ul>
      </div>

      <div className="flex flex-col w-full">
        <h2 className="text-3xl bg-slate-300 rounded-lg p-2 w-fit">Tweets</h2>
        <ul>
          {tweets?.map((tweet) => <li key={tweet.id}>{tweet.content}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default App;
