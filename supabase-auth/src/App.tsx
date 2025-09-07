import { useState } from "react";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import ProductAdd from "./components/ProductAdd";
import Register from "./components/Register";
import UserStatus from "./components/UserStatus";

const App = () => {
  const [sessionUserId, setSessionUserId] = useState<string | null>(null);

  return (
    <div className="h-screen bg-slate-400">
      <LogIn />
      <Register />
      <LogOut />
      <UserStatus
        setSessionUserId={setSessionUserId}
        sessionUserId={sessionUserId}
      />
      <ProductAdd sessionUserId={sessionUserId} />
    </div>
  );
};

export default App;
