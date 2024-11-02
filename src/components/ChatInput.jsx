import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const ChatInput = ({ inputMessage, setInputMessage, handleSendMessage }) => {
  return (
    <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
      <div className="flex space-x-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <PaperAirplaneIcon className="h-6 w-6" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;