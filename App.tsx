
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

type Page = 'Dashboard' | 'Settings' | 'Media' | 'Users' | 'Analytics';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState<Page>('Dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Settings':
        return <Settings />;
      default:
        return (
          <div className="p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-700">{activePage}</h1>
            <p className="mt-2 text-gray-500">This page is under construction.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} activePage={activePage} setActivePage={setActivePage} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
