import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          <p className="mt-2 text-gray-600">Last updated: February 2024</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="prose max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using I AM'AI's services, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these terms, you
              are prohibited from using or accessing our services.
            </p>

            <h2>2. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and current
              information. You are responsible for safeguarding your account credentials and for any
              activities or actions under your account.
            </p>

            <h2>3. Course Access and Licensing</h2>
            <p>
              Upon purchasing a course, you are granted a limited, non-exclusive, non-transferable
              license to access and view the course content for your personal, non-commercial use.
            </p>

            <h2>4. Payment Terms</h2>
            <p>
              All payments are processed securely through our payment providers. Course fees are
              non-refundable unless otherwise specified in our refund policy.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              All content provided through our platform, including but not limited to courses, videos,
              text, graphics, and code examples, is protected by intellectual property rights.
            </p>

            <h2>6. User Conduct</h2>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Share your account credentials with others</li>
              <li>Distribute or reproduce course content</li>
              <li>Engage in any activity that disrupts our services</li>
              <li>Use our platform for unauthorized commercial purposes</li>
            </ul>

            <h2>7. Privacy Policy</h2>
            <p>
              Your use of our services is also governed by our Privacy Policy. Please review our{' '}
              <Link to="/privacy" className="text-blue-600 hover:text-blue-700">
                Privacy Policy
              </Link>{' '}
              to understand how we collect and use your information.
            </p>

            <h2>8. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any
              material changes via email or through our platform.
            </p>

            <h2>9. Termination</h2>
            <p>
              We may terminate or suspend your account and access to our services at our sole
              discretion, without prior notice, for conduct that we believe violates these Terms
              or is harmful to other users, us, or third parties.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:support@iamai.com" className="text-blue-600 hover:text-blue-700">
                support@iamai.com
              </a>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <Shield className="w-4 h-4 mr-2" />
                <span>Protected by our Terms of Service</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Lock className="w-4 h-4 mr-2" />
                <span>Secure & Compliant</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help understanding our terms?{' '}
            <Link to="/contact-support" className="text-blue-600 hover:text-blue-700">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}