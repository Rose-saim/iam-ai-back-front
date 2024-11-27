import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-gray-600">Last updated: February 2024</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="prose max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Account registration information</li>
              <li>Profile information</li>
              <li>Course enrollment and progress data</li>
              <li>Payment information</li>
              <li>Communications with us</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and updates</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns and improve our services</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors</li>
              <li>Law enforcement when required by law</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>

            <h2>6. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our platform
              and hold certain information. You can instruct your browser to refuse all cookies
              or to indicate when a cookie is being sent.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 16. We do not
              knowingly collect personal information from children under 16.
            </p>

            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your
              country of residence. We ensure appropriate safeguards are in place for such
              transfers.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any
              changes by posting the new policy on this page and updating the "last updated" date.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@iamai.com" className="text-blue-600 hover:text-blue-700">
                privacy@iamai.com
              </a>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <Shield className="w-4 h-4 mr-2" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Lock className="w-4 h-4 mr-2" />
                <span>Data Protection</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Eye className="w-4 h-4 mr-2" />
                <span>Privacy First</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Questions about your privacy?{' '}
            <Link to="/contact-support" className="text-blue-600 hover:text-blue-700">
              Contact our Data Protection Officer
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}