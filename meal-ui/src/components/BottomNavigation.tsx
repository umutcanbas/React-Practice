import { Bookmark, Home, PlusCircle } from "lucide-react";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 flex w-full justify-around border-t border-slate-200 bg-white p-4 shadow-2xl">
      <button className="rounded-full bg-yellow-300 p-4">
        <Home />
      </button>
      <button>
        <PlusCircle color="grey" />
      </button>
      <button>
        <Bookmark color="grey" />
      </button>
    </div>
  );
};

export default BottomNavigation;
