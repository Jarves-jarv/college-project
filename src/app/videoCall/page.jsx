"use client";

import React, { useState } from 'react';
import { 
  User, 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  Phone, 
  MessageSquare,
  Calendar,
  Clock
} from 'lucide-react';

const VideoCallsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingCalls = [
    {
      id: 1,
      name: "Sarah Wilson",
      time: "2:00 PM Today",
      duration: "45 min",
      topic: "Code Review - Dashboard Implementation"
    },
    {
      id: 2,
      name: "Michael Chen",
      time: "10:30 AM Tomorrow",
      duration: "30 min",
      topic: "Project Discussion"
    }
  ];

  const recentCalls = [
    {
      id: 3,
      name: "Emma Rodriguez",
      date: "Yesterday",
      duration: "38 min",
      status: "completed"
    },
    {
      id: 4,
      name: "James Smith",
      date: "2 days ago",
      duration: "45 min",
      status: "missed"
    }
  ];

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Video Calls</h1>
        <p className="text-gray-500">Schedule and manage your video calls</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <button className="flex items-center justify-center p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Video className="w-5 h-5 mr-2" />
          Start New Call
        </button>
        <button className="flex items-center justify-center p-4 bg-green-50 text-green-600 rounded-lg hover:bg-green-100">
          <Calendar className="w-5 h-5 mr-2" />
          Schedule Call
        </button>
        <button className="flex items-center justify-center p-4 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100">
          <Clock className="w-5 h-5 mr-2" />
          Join Meeting
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-8">
          {['upcoming', 'recent'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 text-sm font-medium capitalize ${
                activeTab === tab
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab} Calls
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {activeTab === 'upcoming' ? (
          // Upcoming Calls
          upcomingCalls.map((call) => (
            <div key={call.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{call.name}</h3>
                    <p className="text-sm text-gray-500">{call.topic}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{call.time}</p>
                  <p className="text-sm text-gray-500">{call.duration}</p>
                </div>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Video className="w-4 h-4 mr-2" />
                  Join Call
                </button>
                <button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-50">
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          // Recent Calls
          recentCalls.map((call) => (
            <div key={call.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{call.name}</h3>
                    <p className="text-sm text-gray-500">{call.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{call.duration}</p>
                  <p className={`text-sm ${
                    call.status === 'completed' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {call.status.charAt(0).toUpperCase() + call.status.slice(1)}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                  <Video className="w-4 h-4 mr-2" />
                  Call Again
                </button>
                <button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-50">
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VideoCallsPage;