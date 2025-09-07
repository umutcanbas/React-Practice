import { Plus } from "lucide-react";

const categories = [
  {
    name: "Study",
    bg: "bg-pink-200",
    text: "text-pink-500",
  },
  {
    name: "Productive",
    bg: "bg-red-200",
    text: "text-red-500",
  },
  {
    name: "Life",
    bg: "bg-blue-200",
    text: "text-blue-500",
  },
];

const Categories = () => {
  return (
    <div className="flex flex-col gap-4 px-8 mt-4  ">
      <span className="text-grey-400">Categories</span>
      <div className="flex gap-4">
        {categories.map((item) => (
          <div
            className={`${item.bg} px-4 py-2 rounded-xl flex flex-1 justify-center`}
          >
            <span className={`${item.text}`}>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="flex bg-orange-200 p-1 pr-6 rounded-full self-end items-center gap-4">
        <div className="bg-orange-400 rounded-full text-white p-2">
          <Plus />
        </div>
        <span className="text-orange-900 font-semibold">Add Tag</span>
      </div>
    </div>
  );
};

export default Categories;
