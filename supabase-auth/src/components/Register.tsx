import type React from "react";
import { supabase } from "../supabase";

const Register = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await supabase.auth.signUp({
      email: email as string,
      password: password as string,
    });
    console.log(data, error);
    alert("AAA");
  };

  return (
    <form onSubmit={handleSubmit} className=" p-4">
      <h1>Register</h1>

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
      <button>Sing Up</button>
    </form>
  );
};

export default Register;
