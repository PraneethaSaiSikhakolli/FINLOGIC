import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const ChartCard = () => {
  const data = {
    labels: ["Food", "Rent", "Transport", "Utilities"],
    datasets: [
      {
        label: "Expenses",
        data: [300, 600, 150, 200],
        backgroundColor: "rgba(236, 72, 153, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Spending by Category
      </h2>
      <Bar data={data} />
    </div>
  );
};

export default ChartCard;
