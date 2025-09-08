import { Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 pb-0">
      <img
        src="https://i.pravatar.cc/400?img=26"
        className="h-14 w-14 rounded-xl border-2 border-white shadow"
      />
      <div className="relative">
        <Bell />
        <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-yellow-400" />
      </div>
    </div>
  );
};

export default Header;
