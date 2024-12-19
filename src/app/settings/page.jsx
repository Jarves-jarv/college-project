"use client";

import React, { useState } from 'react';
import { 
  Bell, 
  Lock, 
  Globe, 
  Monitor, 
  Moon,
  Volume2,
  Eye,
  Shield
} from 'lucide-react';

const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [visibility, setVisibility] = useState('public');

  const settingsSections = [
    {
      title: "Notifications",
      icon: Bell,
      settings: [
        {
          id: "push-notifications",
          label: "Push Notifications",
          description: "Receive notifications for messages and calls",
          value: notificationsEnabled,
          onChange: setNotificationsEnabled
        },
        {
          id: "sound-notifications",
          label: "Sound Notifications",
          description: "Play sound for new messages and calls",
          value: soundEnabled,
          onChange: setSoundEnabled
        }
      ]
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      settings: [
        {
          id: "profile-visibility",
          label: "Profile Visibility",
          description: "Control who can see your profile",
          type: "select",
          value: visibility,
          onChange: setVisibility,
          options: [
            { value: 'public', label: 'Public' },
            { value: 'connections', label: 'Connections Only' },
            { value: 'private', label: 'Private' }
          ]
        }
      ]
    },
    {
      title: "Appearance",
      icon: Monitor,
      settings: [
        {
          id: "dark-mode",
          label: "Dark Mode",
          description: "Toggle dark mode theme",
          value: darkMode,
          onChange: setDarkMode
        }
      ]
    },
    {
      title: "Language & Region",
      icon: Globe,
      settings: [
        {
          id: "language",
          label: "Language",
          description: "Choose your preferred language",
          type: "select",
          value: language,
          onChange: setLanguage,
          options: [
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Español' },
            { value: 'fr', label: 'Français' }
          ]
        }
      ]
    }
  ];

  const renderSettingInput = (setting) => {
    if (setting.type === 'select') {
      return (
        <select
          id={setting.id}
          value={setting.value}
          onChange={(e) => setting.onChange(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          {setting.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => setting.onChange(!setting.value)}
          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
            setting.value ? 'bg-blue-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
              setting.value ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    );
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="text-gray-500">Manage your account preferences and settings</p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingsSections.map((section) => (
          <div key={section.title} className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <section.icon className="w-5 h-5 text-gray-400 mr-2" />
                <h2 className="text-lg font-medium text-gray-900">{section.title}</h2>
              </div>
              <div className="space-y-6">
                {section.settings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <label htmlFor={setting.id} className="text-sm font-medium text-gray-900">
                        {setting.label}
                      </label>
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    </div>
                    <div className="ml-4">
                      {renderSettingInput(setting)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="mt-6">
        <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;