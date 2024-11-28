import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    employees: 50,
    avgSalary: 50000,
    trainingHours: 40,
    implementationCost: 100000
  });

  const [results, setResults] = useState({
    productivityGain: 0,
    costSavings: 0,
    roi: 0
  });

  const calculateROI = () => {
    // Simple ROI calculation example
    const hourlyRate = inputs.avgSalary / 2080; // 2080 = working hours per year
    const productivityGain = 0.2; // Assumed 20% productivity increase
    const annualSavings = inputs.employees * hourlyRate * inputs.trainingHours * productivityGain * 52;
    const totalCost = inputs.implementationCost;
    const roi = ((annualSavings - totalCost) / totalCost) * 100;

    setResults({
      productivityGain: productivityGain * 100,
      costSavings: annualSavings,
      roi: roi
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <Calculator className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-bold">ROI Calculator</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Employees
          </label>
          <input
            type="number"
            value={inputs.employees}
            onChange={(e) => setInputs(prev => ({ ...prev, employees: Number(e.target.value) }))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Average Annual Salary
          </label>
          <input
            type="number"
            value={inputs.avgSalary}
            onChange={(e) => setInputs(prev => ({ ...prev, avgSalary: Number(e.target.value) }))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Training Hours per Employee
          </label>
          <input
            type="number"
            value={inputs.trainingHours}
            onChange={(e) => setInputs(prev => ({ ...prev, trainingHours: Number(e.target.value) }))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Implementation Cost
          </label>
          <input
            type="number"
            value={inputs.implementationCost}
            onChange={(e) => setInputs(prev => ({ ...prev, implementationCost: Number(e.target.value) }))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <button
        onClick={calculateROI}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mb-8"
      >
        Calculate ROI
      </button>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm text-gray-600">Productivity Gain</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {results.productivityGain.toFixed(1)}%
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <DollarSign className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-sm text-gray-600">Annual Savings</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            ${results.costSavings.toFixed(0)}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Calculator className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-sm text-gray-600">ROI</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {results.roi.toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
}