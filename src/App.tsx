import { useState } from 'react';
import { Home, User, FileText } from 'lucide-react';
import DashboardScreen from './components/DashboardScreen';
import BeneficiaryProfile from './components/BeneficiaryProfile';
import ReportScreen from './components/ReportScreen';

type TabType = 'dashboard' | 'profile' | 'report';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const renderScreen = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardScreen />;
      case 'profile':
        return <BeneficiaryProfile />;
      case 'report':
        return <ReportScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-blue-600">উপকারভোগী ব্যবস্থাপনা ড্যাশবোর্ড</h1>
          <p className="text-gray-600 text-sm mt-1">Beneficiary Management Dashboard</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-3 gap-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex flex-col items-center justify-center py-3 px-2 transition-colors ${
                activeTab === 'dashboard' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <Home className="w-5 h-5 mb-1" />
              <span className="text-xs">ড্যাশবোর্ড</span>
              <span className="text-xs opacity-70">Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center justify-center py-3 px-2 transition-colors ${
                activeTab === 'profile' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <User className="w-5 h-5 mb-1" />
              <span className="text-xs">প্রোফাইল</span>
              <span className="text-xs opacity-70">Profile</span>
            </button>

            <button
              onClick={() => setActiveTab('report')}
              className={`flex flex-col items-center justify-center py-3 px-2 transition-colors ${
                activeTab === 'report' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <FileText className="w-5 h-5 mb-1" />
              <span className="text-xs">রিপোর্ট</span>
              <span className="text-xs opacity-70">Report</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
