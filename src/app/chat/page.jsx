"use client";

import React, { useState, useEffect, useRef } from 'react';
import { User, Search, Send, Phone, Video as VideoIcon, Image, Smile, Paperclip, MoreVertical } from 'lucide-react';
import useDebounce from './hooks/useDebounce';

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageInput, setMessageInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const debouncedMessageInput = useDebounce(messageInput, 500);

  // Sample data - you can replace this with your actual data fetching logic
  const chats = [
    {
      id: 1,
      name: "Sarah Wilson",
      lastMessage: "That sounds great! When should we...",
      time: "2m ago",
      unread: 2,
      status: "online"
    },
    {
      id: 2,
      name: "Michael Chen",
      lastMessage: "I'll check the code and get back to...",
      time: "1h ago",
      unread: 0,
      status: "offline"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      lastMessage: "Thanks for the help!",
      time: "2h ago",
      unread: 0,
      status: "online"
    }
  ];

  const [messages, setMessages] = useState([
    {
      id: 1,
      senderId: 1,
      text: "Hi! I saw you're also working on Next.js projects",
      time: "10:30 AM",
      status: 'read'
    },
    {
      id: 2,
      senderId: "me",
      text: "Yes! I'm currently building a dashboard application",
      time: "10:32 AM",
      status: 'read'
    },
    {
      id: 3,
      senderId: 1,
      text: "That sounds interesting! Would you like to collaborate?",
      time: "10:33 AM",
      status: 'delivered'
    }
  ]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    // Add new message to the messages array
    const newMessage = {
      id: messages.length + 1,
      senderId: "me",
      text: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages([...messages, newMessage]);
    setMessageInput('');
    // Simulate received message
    setTimeout(() => {
      const receivedMessage = {
        id: messages.length + 2,
        senderId: 1,
        text: "Thanks for your message! I'll get back to you soon.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'delivered'
      };
      setMessages(prev => [...prev, receivedMessage]);
    }, 1000);
  };

  const MessageStatus = ({ status }) => {
    switch (status) {
      case 'sent':
        return <span className="text-blue-100">✓</span>;
      case 'delivered':
        return <span className="text-blue-100">✓✓</span>;
      case 'read':
        return <span className="text-blue-100">✓✓</span>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-100">
      {/* Chat List */}
      <div className="w-96 bg-white rounded-l-xl shadow-sm">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-gray-800">Messages</h1>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search conversations"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-12rem)]">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`p-4 cursor-pointer transition-colors duration-150 hover:bg-gray-50 ${
                selectedChat === chat.id ? 'bg-blue-50 hover:bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  {chat.status === 'online' && (
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">
                      {chat.name}
                    </h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate mt-1">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-white">{chat.unread}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white rounded-r-xl shadow-sm ml-1">
        {/* Chat Header */}
        <div className="p-4 border-b bg-white rounded-tr-xl flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Sarah Wilson</h2>
              <p className="text-sm text-green-500 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Online
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-150">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-150">
              <VideoIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-150">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              {message.senderId !== 'me' && (
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-2 mt-2">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
              <div
                className={`max-w-[70%] px-4 py-3 rounded-2xl shadow-sm ${
                  message.senderId === 'me'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-white text-gray-900 rounded-bl-none'
                }`}
              >
                <p className="text-[15px] leading-relaxed">{message.text}</p>
                <div className="flex justify-between items-center mt-1">
                  <p className={`text-xs ${
                    message.senderId === 'me' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.time}
                  </p>
                  {message.senderId === 'me' && (
                    <div className="ml-2">
                      <MessageStatus status={message.status} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center space-x-2 ml-12">
              <div className="bg-white px-4 py-2 rounded-2xl shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-4">
            <button
              type="button"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-150"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type a message..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-20"
              />
              <button
                type="button"
                className="absolute right-12 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-gray-900"
              >
                <Smile className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-gray-900"
              >
                <Image className="w-5 h-5" />
              </button>
            </div>
            <button
              type="submit"
              disabled={!messageInput.trim()}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;