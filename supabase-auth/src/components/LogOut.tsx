import { type FormEvent } from "react";
import { supabase } from "../supabase";

const LogOut = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();
    console.log(error);
    alert("Success");
  };

  return (
    <form className="p-4 " onSubmit={handleSubmit}>
      <button>Log Out</button>
    </form>
  );
};

export default LogOut;
