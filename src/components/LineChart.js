import { Bar } from "react-chartjs-2";

const LineChart = () => {
  return (
    <div>
      <Bar
        data={{ labels: ["red", "blue", "green"] }}
        height={400}
        width={600}
      />
    </div>
  );
};

export default LineChart;
