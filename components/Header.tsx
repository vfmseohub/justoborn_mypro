
import React, { useState } from 'react';
import Icon from './Icon';

interface HeaderProps {
  setSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b-2 border-gray-200 shadow-sm">
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-500 focus:outline-none md:hidden"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="relative mx-4 md:mx-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
             <Icon name="search" className="w-5 h-5 text-gray-400" />
          </span>
          <input className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 placeholder-gray-400 bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:outline-none focus:ring" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="flex items-center">
        <button className="flex mx-4 text-gray-600 focus:outline-none">
            <Icon name="bell" className="w-6 h-6" />
        </button>
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!isProfileOpen)}
            className="relative z-10 block w-10 h-10 overflow-hidden rounded-full shadow focus:outline-none"
          >
            <img className="object-cover w-full h-full" src="https://picsum.photos/100" alt="Your avatar" />
          </button>
          {isProfileOpen && (
            <div
              onClick={() => setProfileOpen(false)}
              className="fixed inset-0 z-10 w-full h-full"
            ></div>
          )}
          {isProfileOpen && (
            <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Log out</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
