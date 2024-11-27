import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft, HelpCircle } from 'lucide-react';

export default function PaymentCancel() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <XCircle className="w-10 h-10 text-red-600" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Payment Cancelled
        </h1>
        
        <p className="text-gray-600 mb-8">
          Your payment was cancelled. If you experienced any issues,
          please don't hesitate to contact our support team.
        </p>

        <div className="space-y-4">
          <Link
            to="/checkout"
            className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Try Again
          </Link>
          
          <div className="flex justify-between">
            <Link
              to="/courses"
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Courses
            </Link>
            
            <Link
              to="/contact-support"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <HelpCircle className="mr-2 w-4 h-4" />
              Need Help?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}