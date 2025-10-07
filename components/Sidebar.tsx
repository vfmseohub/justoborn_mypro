
import React from 'react';
import Icon from './Icon';
import type { Page, NavItemType } from '../types';

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const navItems: NavItemType[] = [
  { id: 'Dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'Settings', label: 'Settings', icon: 'settings' },
  { id: 'Media', label: 'Media', icon: 'media' },
  { id: 'Users', label: 'Users', icon: 'users' },
  { id: 'Analytics', label: 'Analytics', icon: 'analytics' },
];

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setSidebarOpen, activePage, setActivePage }) => {

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    if(window.innerWidth < 768) { // md breakpoint
        setSidebarOpen(false);
    }
  }

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside
        className={`fixed inset-y-0 left-0 bg-slate-800 text-slate-100 w-64 transform transition-transform duration-300 ease-in-out z-30 md:relative md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-center p-4 border-b border-slate-700">
          <svg className="w-8 h-8 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 16v-2m8-8h2M4 12H2m15.364 6.364l-1.414-1.414M6.05 6.05l-1.414-1.414m12.728 0l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414" />
          </svg>
          <h1 className="text-xl font-bold ml-2">Admin UI</h1>
        </div>
        <nav className="mt-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href="#"
              onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id)
                }}
              className={`flex items-center py-3 px-6 text-sm transition-colors duration-200 ${
                activePage === item.id
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Icon name={item.icon} className="w-5 h-5" />
              <span className="ml-4">{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-slate-700">
            <p className="text-xs text-slate-400">&copy; 2024 Admin Panel</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
