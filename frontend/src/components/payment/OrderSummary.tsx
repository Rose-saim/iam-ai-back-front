import React from 'react';

interface OrderSummaryProps {
  course: {
    title: string;
    price: number;
  };
  platformFee: number;
}

export default function OrderSummary({ course, platformFee }: OrderSummaryProps) {
  const total = course.price + platformFee;

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">{course.title}</span>
          <span className="font-medium">${course.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Platform Fee</span>
          <span className="font-medium">${platformFee.toFixed(2)}</span>
        </div>
        <div className="border-t pt-4 flex justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}