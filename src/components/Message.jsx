import React from 'react';

const Message = ({ message }) => {
  const getMessageStyle = () => {
    if (message.sender === 'user') {
      return 'bg-blue-600 text-white';
    }
    
    switch (message.type) {
      case 'escalation':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      case 'support':
        return 'bg-green-100 text-green-800';
      case 'clarification':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div
      className={`flex ${
        message.sender === 'user' ? 'justify-end' : 'justify-start'
      }`}
    >
      <div
        className={`max-w-xs md:max-w-md p-3 rounded-lg ${getMessageStyle()}`}
      >
        {message.sender === 'bot' && (
          <div className="text-xs font-semibold mb-1">
            {message.type === 'support' ? 'Customer Support' : 'Assistant'}
          </div>
        )}
        <p className="whitespace-pre-wrap">{message.text}</p>
        <span className="text-xs opacity-75 block mt-1">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
};

export default Message;