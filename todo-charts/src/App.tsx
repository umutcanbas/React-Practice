import BottomNavigation from "./components/BottomNavigation";
import GridChart from "./components/GridChart";
import Header from "./components/Header";
import ResultChart from "./components/ResultChart";

const App = () => {
  return (
    <div className="h-screen bg-orange-100 flex flex-col gap-4">
      <Header />
      <GridChart />
      <ResultChart />
      <BottomNavigation />
    </div>
  );
};

export default App;
