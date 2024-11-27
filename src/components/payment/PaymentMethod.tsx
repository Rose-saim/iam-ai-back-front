import React from 'react';
import { CreditCard, Lock } from 'lucide-react';

interface PaymentMethodProps {
  onSelect: () => void;
  selected: boolean;
  type: 'card' | 'paypal';
  last4?: string;
}

export default function PaymentMethod({ onSelect, selected, type, last4 }: PaymentMethodProps) {
  return (
    <button
      onClick={onSelect}
      className={`w-full p-4 rounded-lg border-2 transition-all ${
        selected
          ? 'border-blue-600 bg-blue-50'
          : 'border-gray-200 hover:border-blue-300'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <CreditCard className={`w-6 h-6 ${selected ? 'text-blue-600' : 'text-gray-400'}`} />
          <div className="ml-3 text-left">
            <p className="font-medium">
              {type === 'card' ? (
                <>Credit Card {last4 && <span className="text-gray-500">(**** {last4})</span>}</>
              ) : (
                'PayPal'
              )}
            </p>
          </div>
        </div>
        <div className="flex items-center text-sm text-green-600">
          <Lock className="w-4 h-4 mr-1" />
          Secure
        </div>
      </div>
    </button>
  );
}