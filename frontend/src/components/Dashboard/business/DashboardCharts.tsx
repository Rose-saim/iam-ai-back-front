import React from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DashboardChartsProps {
  missionData: {
    labels: string[];
    datasets: any[];
  };
  trainingData: {
    labels: string[];
    datasets: any[];
  };
  performanceData: {
    labels: string[];
    datasets: any[];
  };
}

export default function DashboardCharts({ missionData, trainingData, performanceData }: DashboardChartsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Mission Status</h3>
        <div className="h-64">
          <Doughnut data={missionData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Training Progress</h3>
        <div className="h-64">
          <Line data={trainingData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Team Performance</h3>
        <div className="h-64">
          <Bar data={performanceData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
}