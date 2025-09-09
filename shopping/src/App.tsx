import BottomNavigation from "./components/BottomNavigation";
import BreadCrumb from "./components/BreadCrumb";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";
import Prodcuts from "./components/Prodcuts";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <SearchBar />
      <BreadCrumb />
      <Categories />
      <Prodcuts />
      <BottomNavigation />
    </div>
  );
};

export default App;
