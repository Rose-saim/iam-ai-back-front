import React from 'react';
import { TrendingUp, Download } from 'lucide-react';
import BusinessMetrics from '../../../components/dashboard/business/BusinessMetrics';

export default function BusinessPerformance() {
  const handleExportReport = () => {
    // Préparer les données pour l'export
    const reportData = {
      date: new Date().toISOString(),
      metrics: {
        implementation: {
          progress: "85%",
          status: "On Track"
        },
        training: {
          completion: "78%",
          activeCourses: 12
        },
        performance: {
          efficiency: "+45%",
          costReduction: "30%"
        }
      }
    };

    // Convertir les données en format CSV
    const csvContent = `
AI Implementation Report - ${new Date().toLocaleDateString()}

Implementation Progress,${reportData.metrics.implementation.progress}
Implementation Status,${reportData.metrics.implementation.status}
Training Completion,${reportData.metrics.training.completion}
Active Courses,${reportData.metrics.training.activeCourses}
Efficiency Improvement,${reportData.metrics.performance.efficiency}
Cost Reduction,${reportData.metrics.performance.costReduction}
    `.trim();

    // Créer un Blob avec les données
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // Créer un lien de téléchargement
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `ai_implementation_report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    
    // Déclencher le téléchargement
    link.click();
    
    // Nettoyer
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Performance Analytics</h1>
            <p className="mt-1 text-sm text-gray-500">
              Track and analyze your AI implementation metrics
            </p>
          </div>
          <button 
            onClick={handleExportReport}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Download className="w-5 h-5 mr-2" />
            Export Report
          </button>
        </div>

        {/* Performance Metrics */}
        <BusinessMetrics />
      </div>
    </div>
  );
}