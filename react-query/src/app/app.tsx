import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const API_URL = "http://localhost:3001/users";
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

export default App;
