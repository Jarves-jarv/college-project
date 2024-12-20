"use client";

import React, { useState } from 'react';
import { User, Code, Stars, MessageCircle, Video } from 'lucide-react';

const MatchesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const matches = [
    {
      id: 1,
      name: "Sarah Wilson",
      role: "Frontend Developer",
      skills: ["React", "TypeScript", "Tailwind"],
      matchPercentage: 95,
      status: "active",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Backend Developer",
      skills: ["Node.js", "Python", "MongoDB"],
      matchPercentage: 88,
      status: "active",
      lastActive: "1 day ago"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "PostgreSQL"],
      matchPercentage: 85,
      status: "pending",
      lastActive: "3 hours ago"
    }
  ];

  const filterMatches = (matches) => {
    if (activeFilter === 'all') return matches;
    return matches.filter(match => match.status === activeFilter);
  };

  const renderFilterTabs = () => (
    <div className="flex space-x-6">
      {['all', 'active', 'pending'].map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`pb-4 px-2 text-sm font-medium capitalize transition border-b-2 ${{
            all: 'border-transparent',
            active: 'border-blue-600',
            pending: 'border-yellow-600',
          }[filter]} ${
            activeFilter === filter
              ? 'text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          aria-label={`Filter matches by ${filter}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Your Matches</h1>
        <p className="text-gray-500">Connect with developers who share your interests</p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6 border-b border-gray-200">
        {renderFilterTabs()}
      </div>

      {/* Matches Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterMatches(matches).map((match) => (
          <div
            key={match.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{match.name}</h3>
                  <p className="text-sm text-gray-500">{match.role}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Stars className="w-4 h-4 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">{match.matchPercentage}%</span>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {match.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button
                className="flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
                aria-label={`Message ${match.name}`}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
              </button>
              <button
                className="flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-lg hover:bg-green-100"
                aria-label={`Call ${match.name}`}
              >
                <Video className="w-4 h-4 mr-2" />
                Call
              </button>
            </div>

            <div className="mt-4 text-xs text-gray-500 text-right">
              Last active: {match.lastActive}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchesPage;
