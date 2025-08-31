import { useGetUsersQuery, useGetTodosQuery, useGetUserQuery } from "./api";

const App = () => {
  const { data: users } = useGetUsersQuery();
  const { data: todos } = useGetTodosQuery();
  const { data: user } = useGetUserQuery(4);

  console.log(user);

  return <div>
    {users?.map((user) => <li key={user.id}>{user.name}</li>)}
    {user && <div>
      <h2>{user.name}</h2>
      <h3>Todos:</h3>
      <ul>
        {todos?.filter((todo) => todo.userId === user.id).map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>}
  </div>;
};

export default App;
