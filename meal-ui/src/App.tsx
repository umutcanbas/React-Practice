import BottomNavigation from "./components/BottomNavigation";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PopularRecipes from "./components/PopularRecipes";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="flex h-screen flex-col gap-4">
      <Header />
      <Hero />
      <SearchBar />
      <Categories />
      <PopularRecipes />
      <BottomNavigation />
    </div>
  );
};

export default App;
