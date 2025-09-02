import { useNavigate } from "react-router";
import { supabase } from "./supabase";

const UserAdd = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");

    supabase
      .from("USERS")
      .insert({ name: name })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default UserAdd;
