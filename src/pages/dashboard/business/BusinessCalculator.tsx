import React from 'react';
import ROICalculator from '../../../components/dashboard/business/ROICalculator';
import QuoteGenerator from '../../../components/dashboard/business/QuoteGenerator';

export default function BusinessCalculator() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Business Calculator</h1>
          <p className="mt-1 text-sm text-gray-500">
            Calculate ROI and generate quotes for AI implementation
          </p>
        </div>

        <div className="space-y-8">
          <ROICalculator />
          <QuoteGenerator />
        </div>
      </div>
    </div>
  );
}