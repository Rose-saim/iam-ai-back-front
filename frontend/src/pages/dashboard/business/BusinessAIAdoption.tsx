import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { TrendingUp, Users, Target, Download } from 'lucide-react';

export default function BusinessAIAdoption() {
  // Chart data for adoption trends
  const adoptionTrends = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'AI Tool Usage',
        data: [30, 45, 60, 70, 85, 92],
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.1,
      },
    ],
  };

  // Chart data for department adoption
  const departmentAdoption = {
    labels: ['IT', 'Operations', 'Customer Service', 'Marketing', 'Sales'],
    datasets: [
      {
        label: 'Adoption Rate',
        data: [95, 80, 75, 70, 65],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
    ],
  };

  const metrics = [
    {
      title: "Overall Adoption",
      value: "85%",
      change: "+15%",
      description: "Company-wide AI adoption rate"
    },
    {
      title: "Active Users",
      value: "245",
      change: "+12",
      description: "Regular AI tool users"
    },
    {
      title: "Tools Implemented",
      value: "8/10",
      change: "+2",
      description: "AI solutions deployed"
    },
    {
      title: "Success Rate",
      value: "92%",
      change: "+5%",
      description: "Implementation success"
    }
  ];

  const challenges = [
    {
      title: "Training Completion",
      current: 85,
      target: 100,
      status: "On Track"
    },
    {
      title: "Tool Integration",
      current: 75,
      target: 100,
      status: "In Progress"
    },
    {
      title: "Process Automation",
      current: 60,
      target: 100,
      status: "Needs Attention"
    }
  ];

  const handleExportReport = () => {
    // Préparer les données pour l'export
    const reportData = {
      date: new Date().toLocaleDateString(),
      metrics: metrics,
      challenges: challenges,
      adoptionByDepartment: departmentAdoption.datasets[0].data.map((value, index) => ({
        department: departmentAdoption.labels[index],
        adoptionRate: value
      }))
    };

    // Créer le contenu CSV
    const csvContent = `
AI Adoption Report - ${reportData.date}

OVERALL METRICS
--------------
${metrics.map(metric => `${metric.title},${metric.value},${metric.change}`).join('\n')}

IMPLEMENTATION CHALLENGES
-----------------------
${challenges.map(challenge => `${challenge.title},${challenge.current}%,${challenge.status}`).join('\n')}

DEPARTMENT ADOPTION RATES
-----------------------
${reportData.adoptionByDepartment.map(dept => `${dept.department},${dept.adoptionRate}%`).join('\n')}
    `.trim();

    // Créer un Blob avec les données
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // Créer un lien de téléchargement
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `ai_adoption_report_${new Date().toISOString().split('T')[0]}.csv`);
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
            <h1 className="text-3xl font-bold text-gray-900">AI Adoption Rate</h1>
            <p className="mt-1 text-sm text-gray-500">
              Track and analyze your organization's AI implementation progress
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

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-500">{metric.title}</h3>
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                <p className="ml-2 text-sm font-medium text-green-600">{metric.change}</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Adoption Trends</h2>
            <div className="h-64">
              <Line data={adoptionTrends} options={{ maintainAspectRatio: false }} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Department Adoption</h2>
            <div className="h-64">
              <Bar data={departmentAdoption} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        {/* Implementation Challenges */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Implementation Challenges</h2>
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="border-b last:border-b-0 pb-6 last:pb-0">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900">{challenge.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    challenge.status === 'On Track' ? 'bg-green-100 text-green-800' :
                    challenge.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {challenge.status}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          challenge.status === 'On Track' ? 'bg-green-600' :
                          challenge.status === 'In Progress' ? 'bg-yellow-600' :
                          'bg-red-600'
                        }`}
                        style={{ width: `${challenge.current}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="ml-4 text-sm text-gray-600">
                    {challenge.current}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}