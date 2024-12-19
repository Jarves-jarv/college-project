"use client";

import React from 'react';
import { 
  Users, 
  MessageSquare, 
  Video, 
  Settings, 
  User, 
  BarChart, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const DashboardLayout = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogout = () => {
    router.push('/login');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart, path: '/dashboard' },
    { id: 'matches', label: 'Matches', icon: Users, path: '/matches' },
    { id: 'chat', label: 'Messages', icon: MessageSquare, path: '/chat' },
    { id: 'video', label: 'Video Calls', icon: Video, path: '/videoCall' },
    { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
  ];

  const handleMenuClick = (item) => {
    setActiveTab(item.id);
    router.push(item.path);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed lg:static lg:block top-0 left-0 z-30 h-full bg-white shadow-lg transform transition-transform duration-300 
        ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0 lg:w-20'}`}>
        
        {/* Logo Section */}
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <h1 className={`text-xl font-bold text-blue-600 ${!isSidebarOpen && 'lg:hidden'}`}>
            CodeBuddy
          </h1>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link href={item.path}>
                  <div
                    className={`flex items-center w-full p-3 rounded-lg transition-colors
                      ${activeTab === item.id 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <item.icon size={20} />
                    <span className={`ml-3 ${!isSidebarOpen && 'lg:hidden'}`}>
                      {item.label}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-full p-4 border-t">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full p-3 text-gray-600 rounded-lg hover:bg-gray-50"
          >
            <LogOut size={20} />
            <span className={`ml-3 ${!isSidebarOpen && 'lg:hidden'}`}>Logout</span>
          </button>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-md lg:hidden hover:bg-gray-100"
            >
              <Menu size={20} />
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Link href="/profile" className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <User size={18} />
                  </div>
                  <span className="hidden md:inline-block font-medium">
                    John Doe
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Active Matches</h3>
                  <p className="text-2xl font-semibold">24</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-50 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Messages</h3>
                  <p className="text-2xl font-semibold">142</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Video className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Video Calls</h3>
                  <p className="text-2xl font-semibold">8</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                <div className="mt-4 space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          New match found based on your skills
                        </p>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;