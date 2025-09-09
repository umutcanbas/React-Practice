import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="bg-blue-50 px-4 py-2">
      <div className="flex rounded-full border border-gray-200 bg-white px-4 py-1 pr-1">
        <input
          className="flex-1 px-1 outline-0"
          placeholder="Search for prodcuts"
        />
        <button className="cursor-pointer rounded-full bg-blue-500 p-2">
          <Search color="white" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
