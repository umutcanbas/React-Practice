import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { Link } from "react-router";

export type User = {
  id: string;
  name: string;
};

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    supabase
      .from("USERS")
      .select("*")
      .then((res) => setUsers(res.data as User[]));
  }, []);

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>
          <Link to={"/users/" + user.id}>
            {user.id} {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
