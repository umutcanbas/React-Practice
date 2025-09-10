import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import Products from "./components/Products";
import BottomNavigation from "./components/BottomNavigation";

const App = () => {
  return (
    <div className="min-h-screen mx-auto relative">
      <Navigation />
      <SearchBar />
      <Categories />
      <Products />
      <BottomNavigation />
    </div>
  );
};

export default App;
