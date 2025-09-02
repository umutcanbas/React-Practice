import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { User } from "./Home";
import { supabase } from "./supabase";

const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    supabase
      .from("USERS")
      .select()
      .eq("id", id)
      .single()
      .then((res) => setUser(res.data as User));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");

    supabase
      .from("USERS")
      .update({ name: name })
      .eq("id", id)
      .then(() => {
        navigate("/");
      });
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" defaultValue={user?.name} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserEdit;
