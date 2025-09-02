import { useEffect, useState } from "react";
import { Link } from "react-router";

export type User = {
  id: string;
  name: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const API_URL = "http://localhost:3001";

    fetch(`${API_URL}/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={"/users/" + user.id}>{`${user.id}: ${user.name}`}</Link>
        </li>
      ))}
    </div>
  );
};

export default Users;
