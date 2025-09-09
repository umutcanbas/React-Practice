import { Menu, User, Waves } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-2">
      <Menu />
      <div className="flex items-center gap-2">
        <Waves color="#1111ff" />
        <span className="text-2xl font-bold">WoodMart.</span>
      </div>
      <User />
    </div>
  );
};

export default NavBar;
