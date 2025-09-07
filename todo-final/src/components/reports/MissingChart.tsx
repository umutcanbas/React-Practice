import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      min: 140,
      max: 600,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
      border: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [25, 75],
      backgroundColor: ["white", "#FFFFFF22"],
      borderWidth: 0,

      cutout: "90%",
    },
  ],
};

const MissingChart = () => {
  return (
    <div className="bg-[#F784B8] rounded-xl p-4 px-8 pb-6 h-44 gap-0 relative ">
      <span className="text-2xl text-white">Missing</span>
      <Doughnut className="p-4" options={options} data={data}></Doughnut>
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold top-12 left-4 text-white">
        <div className="flex flex-col items-center">
          <div className="flex justify-start">
            <span className="text-lg">25</span>
            <span className="text-xs text-[#FFFFFF99]">%</span>
          </div>
          <span className="text-xs text-[#FFFFFF99] -ml-4">10/35</span>
        </div>
      </div>
    </div>
  );
};

export default MissingChart;
