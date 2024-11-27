import React from 'react';
import { useParams } from 'react-router-dom';
import { Download, FileText, Video, Link as LinkIcon } from 'lucide-react';

export default function ResourceDetails() {
  const { id } = useParams();

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-4">Complete AI Implementation Playbook</h1>
              <p className="text-gray-600 mb-6">
                A comprehensive guide to implementing AI solutions in your organization, from strategy to execution.
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="mb-4">
                  This playbook provides a step-by-step approach to successfully integrate AI solutions
                  into your business operations. It covers everything from initial assessment to
                  deployment and maintenance.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">What's Inside</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">✓</span>
                    Strategic planning templates and frameworks
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">✓</span>
                    Implementation checklists and timelines
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">✓</span>
                    Best practices and case studies
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">✓</span>
                    ROI calculation tools and metrics
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                <div className="mb-6">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    Premium Resource
                  </span>
                </div>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mb-4">
                  Download Now
                </button>
                <button className="w-full border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                  Preview Sample
                </button>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-4">Resource Details:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <FileText className="w-5 h-5 text-blue-600 mr-2" />
                      PDF Format, 85 pages
                    </li>
                    <li className="flex items-center">
                      <Download className="w-5 h-5 text-blue-600 mr-2" />
                      Includes editable templates
                    </li>
                    <li className="flex items-center">
                      <Video className="w-5 h-5 text-blue-600 mr-2" />
                      Supplementary video content
                    </li>
                    <li className="flex items-center">
                      <LinkIcon className="w-5 h-5 text-blue-600 mr-2" />
                      Lifetime updates
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}