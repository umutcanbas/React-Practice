import type React from "react";
import { supabase } from "../supabase";

const LogIn = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email as string,
      password: password as string,
    });
    console.log(data, error);
    alert("Success");
  };

  return (
    <form onSubmit={handleSubmit} className=" p-4">
      <h1>Log In</h1>

      <input
        type="email"
        placeholder="Email"
        name="email"
        defaultValue={"test@mail.com"}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        defaultValue={"password123s"}
      />

      <br />
      <button>Log In</button>
    </form>
  );
};

export default LogIn;
