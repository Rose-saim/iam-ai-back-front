import React, { useState } from 'react';
import { Calculator, FileText, Send } from 'lucide-react';

export default function QuoteGenerator() {
  const [requirements, setRequirements] = useState({
    serviceType: '',
    teamSize: 0,
    duration: '',
    features: [] as string[]
  });

  const [quote, setQuote] = useState({
    generated: false,
    amount: 0,
    breakdown: [] as { item: string; cost: number }[]
  });

  const generateQuote = () => {
    // Example quote calculation
    const basePrice = 5000;
    const perPersonCost = 500;
    const durationMultiplier = requirements.duration === '3months' ? 1 : 
                              requirements.duration === '6months' ? 1.8 : 2.5;

    const totalCost = (basePrice + (requirements.teamSize * perPersonCost)) * durationMultiplier;
    
    const breakdown = [
      { item: 'Base Implementation', cost: basePrice },
      { item: 'Team Training', cost: requirements.teamSize * perPersonCost },
      { item: 'Duration Adjustment', cost: totalCost - basePrice - (requirements.teamSize * perPersonCost) }
    ];

    setQuote({
      generated: true,
      amount: totalCost,
      breakdown
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <Calculator className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-bold">Quote Generator</h2>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Type
          </label>
          <select
            value={requirements.serviceType}
            onChange={(e) => setRequirements(prev => ({ ...prev, serviceType: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a service</option>
            <option value="implementation">AI Implementation</option>
            <option value="training">Team Training</option>
            <option value="consulting">Consulting Services</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Team Size
          </label>
          <input
            type="number"
            value={requirements.teamSize}
            onChange={(e) => setRequirements(prev => ({ ...prev, teamSize: Number(e.target.value) }))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Duration
          </label>
          <select
            value={requirements.duration}
            onChange={(e) => setRequirements(prev => ({ ...prev, duration: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select duration</option>
            <option value="3months">3 months</option>
            <option value="6months">6 months</option>
            <option value="12months">12 months</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Features
          </label>
          <div className="space-y-2">
            {['Custom Training', 'Premium Support', 'Advanced Analytics'].map((feature) => (
              <label key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  checked={requirements.features.includes(feature)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequirements(prev => ({
                        ...prev,
                        features: [...prev.features, feature]
                      }));
                    } else {
                      setRequirements(prev => ({
                        ...prev,
                        features: prev.features.filter(f => f !== feature)
                      }));
                    }
                  }}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">{feature}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={generateQuote}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mb-8"
      >
        Generate Quote
      </button>

      {quote.generated && (
        <div className="border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quote Summary</h3>
          <div className="space-y-4">
            {quote.breakdown.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-600">{item.item}</span>
                <span className="font-medium">${item.cost.toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-4 flex justify-between items-center">
              <span className="font-bold">Total Amount</span>
              <span className="text-xl font-bold text-blue-600">
                ${quote.amount.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
              <FileText className="w-4 h-4 mr-2" />
              Download PDF
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Send className="w-4 h-4 mr-2" />
              Send Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}