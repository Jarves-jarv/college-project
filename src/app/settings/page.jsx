"use client";

import React, { useState } from 'react';
import {
  Bell,
  Shield,
  Monitor,
  Globe
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
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
      <button
        type="button"
        onClick={() => setting.onChange(!setting.value)}
        className={`relative inline-flex items-center h-6 w-11 rounded-full focus:outline-none border transition-colors ease-in-out duration-200 cursor-pointer ${
          setting.value ? 'bg-blue-600' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out ${
            setting.value ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Settings</h1>
        <p className="text-sm text-gray-600">Customize your preferences and manage your account</p>
      </header>

      {/* Settings Sections */}
      <div className="space-y-8">
        {settingsSections.map((section) => (
          <div key={section.title} className="bg-white shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <section.icon className="w-5 h-5 text-gray-500 mr-2" />
                <h2 className="text-lg font-medium text-gray-800">{section.title}</h2>
              </div>
              <div className="space-y-6">
                {section.settings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between">
                    <div>
                      <label
                        htmlFor={setting.id}
                        className="block text-sm font-medium text-gray-800"
                      >
                        {setting.label}
                      </label>
                      <p className="text-sm text-gray-600">{setting.description}</p>
                    </div>
                    <div className="ml-4">{renderSettingInput(setting)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <button
          className="px-6 py-3 bg-blue-600 text-white font-medium text-sm rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
