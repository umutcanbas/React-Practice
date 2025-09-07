import GridChart from "../components/reports/GridChart";
import Header from "../components/reports/Header";
import ResultChart from "../components/reports/ResultChart";

const Reports = () => {
  return (
    <div className="h-screen bg-orange-100 flex flex-col gap-4">
      <Header />
      <GridChart />
      <ResultChart />
    </div>
  );
};

export default Reports;
