// in src/app/layouts.js
"use client";
import React from 'react';
import { Users, MessageSquare, Video, Settings, User, BarChart, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const DashboardLayout = ({ children }) => {  // Add children prop here
  // ... keep all the existing code same until you reach the main content area ...

  {/* Main Content */}
  <div className="flex-1 overflow-x-hidden overflow-y-auto">
    {/* Top Navigation Bar stays the same */}
    <header>...</header>

    {/* Replace the existing main content with children */}
    <main className="p-6">
      {children}  {/* This is where page-specific content will render */}
    </main>
  </div>
}

const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart, path: '/dashboard' },
    { id: 'matches', label: 'Matches', icon: Users, path: '/Matches' },
    { id: 'chat', label: 'Messages', icon: MessageSquare, path: '/chat' },
    { id: 'video', label: 'Video Calls', icon: Video, path: '/VideoCall' },
    { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' }
  ];