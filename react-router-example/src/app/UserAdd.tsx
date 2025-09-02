import { useNavigate } from "react-router";

const userAdd = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const API_URL = "http://localhost:3001";

    fetch(API_URL + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/users");
      });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label>
        Isım:
        <input type="text" name="name" />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default userAdd;
