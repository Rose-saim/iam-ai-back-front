import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function PaymentSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard after 5 seconds
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. You now have access to your course.
          You will be redirected to your dashboard shortly.
        </p>

        <div className="space-y-4">
          <Link
            to="/dashboard"
            className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </Link>
          
          <Link
            to="/courses"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            Browse More Courses
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          Order confirmation has been sent to your email.
        </div>
      </div>
    </div>
  );
}