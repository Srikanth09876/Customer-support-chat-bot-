import React, { useState } from 'react';
import Message from './components/Message';
import ChatInput from './components/ChatInput';
import { generateResponse } from './services/chatService';

const App = () => {
  const [messages, setMessages] = useState([{
    id: 1,
    text: "Hello! I'm your customer support assistant. How can I help you today?\n\nI can assist you with:\n• Product information and pricing\n• Technical support\n• Account and billing questions",
    sender: 'bot',
    type: 'support',
    timestamp: new Date().toLocaleTimeString()
  }]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    const response = generateResponse(inputMessage);
    const botResponse = {
      id: Date.now() + 1,
      ...response,
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    };

    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Customer Support Chat</h1>
        <p className="text-sm opacity-90">24/7 Intelligent Support Assistant</p>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <ChatInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default App;