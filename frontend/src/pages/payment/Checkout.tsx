import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Lock, Shield, ArrowLeft } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function Checkout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePayment = async () => {
    setLoading(true);
    setError('');

    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId: '123', // Replace with actual course ID
          priceId: 'price_123' // Replace with actual Stripe price ID
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const session = await response.json();

      // Redirect to Stripe checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
              <div className="flex items-center text-green-600">
                <Lock className="w-4 h-4 mr-1" />
                <span className="text-sm">Secure Checkout</span>
              </div>
            </div>

            {/* Course Details */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Fundamentals Course</span>
                  <span className="font-medium">$399.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">$399.00</span>
                </div>
              </div>
            </div>

            {/* Payment Button */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span>Processing...</span>
              ) : (
                <>
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pay Securely
                </>
              )}
            </button>

            {/* Security Notice */}
            <div className="mt-8 flex items-center justify-center text-sm text-gray-500">
              <Shield className="w-4 h-4 mr-2" />
              <span>
                Secure payment powered by Stripe. We never store your card details.
              </span>
            </div>

            {/* Terms */}
            <p className="text-sm text-gray-500 text-center mt-4">
              By completing this purchase you agree to our{' '}
              <a href="/terms" className="text-blue-600 hover:text-blue-700">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}