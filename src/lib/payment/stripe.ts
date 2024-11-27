import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// Create a checkout session
export const createCheckoutSession = async (courseId: string, priceId: string) => {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ courseId, priceId }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

// Verify payment status
export const verifyPayment = async (sessionId: string) => {
  try {
    const response = await fetch(`/api/verify-payment/${sessionId}`);
    if (!response.ok) {
      throw new Error('Failed to verify payment');
    }
    return await response.json();
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
};